import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.chat}>
                <div className={styles.messages}></div>
                <form className={styles.chatForm}>
                    <input type="text" className={styles.chatInput} />
                    <input type="submit" value="Send" className={styles.chatSubmit} />
                </form>
            </div>
        </div>
    );
}

export default App;
