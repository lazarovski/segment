import Topnav from "./Topnav.js";
import Sidenav from "./Sidenav.js";
import useToggle from "../../hooks/useToggle.js";

export default function Navbar() {
    const [toggle, handleToggle] = useToggle(false);

    return (
        <div>
            <Topnav toggleMenu={handleToggle} />
            {toggle && <Sidenav toggleMenu={handleToggle} />}
        </div>
    )
}