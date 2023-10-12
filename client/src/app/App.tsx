import styles from "./App.module.css";
import io from "socket.io-client";

function App() {
    const socket = io("http://localhost:80");
    socket.on("connect", () => {
        console.log(socket.id);
    });

    const click = (event: React.MouseEventHandler<HTMLInputElement>) => {
        socket.send("hello");
    };

    const send = () => {};

    return (
        <div className={styles.App}>
            <div className={styles.chat}>
                <div className={styles.messages}>
                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_user}`}>
                        <p className={styles.message}>{"Message with length of ecuator"}</p>
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_friend}`}>
                        <p className={styles.message}>{"Answer for Message with length of ecuator long text btw"}</p>{" "}
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>
                </div>
                <form onSubmit={send} className={styles.chatForm}>
                    <input type="text" placeholder={"Enter your message here..."} className={styles.chatInput} />
                    <input type="submit" onClick={click} value="Send" className={styles.chatSubmit} />
                </form>
            </div>
        </div>
    );
}

export default App;
