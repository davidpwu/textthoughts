import styles from "./message.module.scss";

const Message = ({text, sentDate}) => (
  <>
    <p className={styles.message}>{text} - Sent {sentDate.toString()}</p>
  </>
)

export default Message;
