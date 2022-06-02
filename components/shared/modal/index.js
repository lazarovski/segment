import styles from "./Modal.module.css";

export default function Modal({ children }) {
    return <div className={styles.modal}>
        <div className={styles.modal__content}>
            {children}
        </div>
    </div>
}