import styles from "./Button.module.css";

export default function Btn({ children, type = "button", onClick }) {
    return <button className={styles.btn} type={type} onClick={onClick}>
        {children}
    </button>
}