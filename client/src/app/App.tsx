import styles from "./App.module.css";

function App() {
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

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_user}`}>
                        <p className={styles.message}>{"Message with length of ecuator"}</p>
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_friend}`}>
                        <p className={styles.message}>{"Answer for Message with length of ecuator long text btw"}</p>{" "}
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_user}`}>
                        <p className={styles.message}>{"Message with length of ecuator"}</p>
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_friend}`}>
                        <p className={styles.message}>{"Answer for Message with length of ecuator long text btw"}</p>{" "}
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_user}`}>
                        <p className={styles.message}>{"Message with length of ecuator"}</p>
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_friend}`}>
                        <p className={styles.message}>{"Answer for Message with length of ecuator long text btw"}</p>{" "}
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>
                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_user}`}>
                        <p className={styles.message}>{"Message with length of ecuator"}</p>
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_friend}`}>
                        <p className={styles.message}>{"Answer for Message with length of ecuator long text btw"}</p>{" "}
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>
                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_user}`}>
                        <p className={styles.message}>{"Message with length of ecuator"}</p>
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>

                    <div className={`${styles.messageWrapper} ${styles.messageWrapper_friend}`}>
                        <p className={styles.message}>{"Answer for Message with length of ecuator long text btw"}</p>{" "}
                        <p className={styles.messageTime}>{"12:34 05.10.2023"}</p>
                    </div>
                </div>
                <form className={styles.chatForm}>
                    <input type="text" placeholder={"Enter your message here..."} className={styles.chatInput} />
                    <input type="submit" value="Send" className={styles.chatSubmit} />
                </form>
            </div>
        </div>
    );
}

export default App;
