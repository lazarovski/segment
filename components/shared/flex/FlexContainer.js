import styles from './FlexContainer.module.css';

export default function FlexContainer(props) {
    const classes = Object.keys(props).map(item => styles[item]).toString().replace(/,/g, " ");
    return (
        <div className={`${styles.container} ${classes}`}>
            {props.children}
        </div>
    )
}