import { Footer, Header } from "@/components/shared";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;
