import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
import useToggle from "../../hooks/useToggle";

export default function Navbar() {
    const [toggle, handleToggle] = useToggle(false);

    return (
        <div>
            <Topnav toggleMenu={handleToggle} />
            {toggle && <Sidenav toggleMenu={handleToggle} />}
        </div>
    )
}