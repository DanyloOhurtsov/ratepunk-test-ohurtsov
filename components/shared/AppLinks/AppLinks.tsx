import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Apple, Chrome, Star } from "@/public";

const AppLinks = () => {
    return (
        <div className={styles.appLinksContainer}>
            <div className={styles.appLinksContent}>
                <Link
                    target="_blank"
                    href={
                        "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
                    }
                    className={styles.linkItem}
                >
                    <Image src={Chrome} alt="chrome" />
                    <div className={styles.text}>
                        <p>Available in the</p>
                        <p className={styles.bold}>Chrome Web Store</p>
                    </div>
                </Link>
                <Link
                    target="_blank"
                    href={"https://apps.apple.com/app/ratepunk/id1607823726"}
                    className={styles.linkItem}
                >
                    <Image src={Apple} alt="apple" />
                    <div className={styles.text}>
                        <p>Available in the</p>
                        <p className={styles.bold}>Apple App Store</p>
                    </div>
                </Link>
                <div className={styles.rate}>
                    <div className={styles.stars}>
                        {Array(5)
                            .fill(5)
                            .map((_, index) => (
                                <Image
                                    src={Star}
                                    alt="star"
                                    key={index}
                                    width={24}
                                    height={24}
                                />
                            ))}
                    </div>
                    <p>Chrome Store reviews</p>
                </div>
            </div>
        </div>
    );
};

export default AppLinks;
