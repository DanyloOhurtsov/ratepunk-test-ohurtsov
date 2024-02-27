// main imports
import Link from "next/link";
import Image from "next/image";

// @/ imports
import { Logo } from "@/public";
import { NavBar, MobileNavBar } from "@/components/shared";

// ./ imports
import styles from "./styles.module.scss";

// ! Component
const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={"/"}>
                    <Image src={Logo} alt="Ratepunk logo" />
                </Link>

                <NavBar />
                <MobileNavBar />
            </div>
        </header>
    );
};

export default Header;
