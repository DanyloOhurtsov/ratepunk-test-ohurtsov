import { NavBar_Links } from "@/constants/text";
import Link from "next/link";
import styles from "./styles.module.scss";

const NavBar = () => {
    return (
        <ul className={styles.navbarList}>
            {NavBar_Links.map((link) => (
                <li key={link.id} className={styles.listItem}>
                    <Link href={`/${link.url}`}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBar;
