import styles from "./Heading.module.css";

export default function Heading({ Tag, color = "primary", align = "left", children }) {
    const className = `${styles[color]} ${styles[align]}`;
    return <Tag className={className}>{children}</Tag>
}