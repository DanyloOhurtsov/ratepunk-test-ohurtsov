//
import Image from "next/image";
import Link from "next/link";

// @/.
import { Logo, EmailFooter } from "@/public";
import { Footer_QuickLinks, Footer_SocialLinks } from "@/constants/text";

// ./
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.leftSide}>
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo footer" />
                    </Link>
                    <p>
                        Ratepunk compares hotel room prices across the major
                        online travel agencies. When you search for a room,
                        Ratepunk extension scans the top booking sites and runs
                        a price comparison, so you can be confident in knowing
                        you’re getting the best deal!
                    </p>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.rightSideContainer}>
                        <h4 className={styles.rightSideTitle}>Quick links</h4>
                        <ul className={styles.quickLinksList}>
                            {Footer_QuickLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={styles.quickLinkItem}
                                >
                                    <Link href={link.url}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.rightSideTwoContainers}>
                        <div className={styles.rightSideContainer}>
                            <h4 className={styles.rightSideTitle}>
                                Quick links
                            </h4>
                            <Link
                                href={"mailto:hi@ratepunk,com"}
                                className={styles.linkEmail}
                            >
                                <Image src={EmailFooter} alt="icon" />
                                <p>hi@ratepunk.com</p>
                            </Link>
                        </div>
                        <div className={styles.rightSideContainer}>
                            <h4 className={styles.rightSideTitle}>Social</h4>
                            <div className={styles.socialLinksList}>
                                {Footer_SocialLinks.map((link) => (
                                    <Link
                                        href={link.url}
                                        className={styles.socilaLinkItem}
                                        key={link.id}
                                    >
                                        <Image src={link.image} alt="sl" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>
                    © 2021 Ratepunk. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
