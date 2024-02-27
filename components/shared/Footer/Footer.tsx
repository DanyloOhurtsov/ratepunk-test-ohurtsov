// a
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/public";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <Link href={"/"}>
                    <Image src={Logo} alt="logo footer" />
                </Link>
                
            </div>
        </footer>
    );
};

export default Footer;
