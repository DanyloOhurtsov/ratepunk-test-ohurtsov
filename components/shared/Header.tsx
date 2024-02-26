"use client";

// main imports
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// @/ imports
import { Logo, Close, Menu } from "@/public";
import { NavBar, MobileNavBar } from "@/components/shared";
import { Boolean } from "@/constants/types";

// ../ imports
import { Button } from "../ui/button";

// ! Component
const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleOpenNavbarMobile = (status: Boolean) => {
        setIsNavbarOpen(status);
    };
    return (
        <header className="w-full bg-white px-4 border-dark-color border relative">
            <div className="flex items-center justify-between max-w-6xl py-6 w-full mx-auto">
                <Link href={"/"} className="">
                    <Image src={Logo} alt="Ratepunk logo" />
                </Link>
                
                <NavBar />
                <MobileNavBar />
            </div>
        </header>
    );
};

export default Header;
