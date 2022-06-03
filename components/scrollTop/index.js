import Button from "../shared/button";
import useEvent from "../../hooks/useEvent";
import styles from "./ScrollTop.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollTop() {
    const [showBtn, setShowBtn] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 400) setShowBtn(true)
        else setShowBtn(false)
    };
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    useEvent("scroll", handleScroll);

    return <div className={styles.scrollTop}>
        {showBtn && <Button onClick={goToTop}>
            <FontAwesomeIcon icon={faAnglesUp} />
        </Button>}
    </div>
}