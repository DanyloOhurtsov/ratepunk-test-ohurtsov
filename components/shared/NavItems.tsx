import { NavBar_Links } from "@/constants/text";
import Link from "next/link";
import React from "react";

const NavItems = () => {
    return (
        <ul className="flex flex-col gap-y-6">
            {NavBar_Links.map((link) => (
                <li key={link.id}>
                    <Link href={link.url}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
