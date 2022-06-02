import styles from './FlexItem.module.css';

export default function FlexItem(props) {
    const classes = Object.keys(props).map(item => styles[item]).toString().replace(/,/g, " ");
    return (
        <div className={`${styles.item} ${classes}`}>
            {props.children}
        </div>
    )
}