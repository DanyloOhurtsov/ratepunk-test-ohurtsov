import { Footer, Header } from "@/components/shared";
import { PropsWithChildren } from "react";
import styles from "./homePage.module.scss";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.rootContainer}>
            <Header />
            <main className={styles.mainContainer}>{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;
