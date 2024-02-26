import { NOTO_SANS } from "@/constants/fonts";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Ratepunk - We search for the best hotel rates!",
    description: "SAVE UP TO 85% ON HOTELS & AIRBNB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={NOTO_SANS.className}>{children}</body>
        </html>
    );
}
