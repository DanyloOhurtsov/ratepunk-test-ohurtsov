import { NavBar_Links } from "@/constants/text";
import Link from "next/link";
import styles from './styles.module.scss'

const NavItems = () => {
    return (
        <ul className={styles.itemsList}>
            {NavBar_Links.map((link) => (
                <li key={link.id}>
                    <Link href={link.url}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
