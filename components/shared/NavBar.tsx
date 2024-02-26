import { NavBar_Links } from "@/constants/text";
import Link from "next/link";

const NavBar = () => {
    return (
        <ul className="hidden items-center gap-x-12 sm:flex">
            {NavBar_Links.map((link) => (
                <li
                    key={link.id}
                    className="hover:text-blue-color transition-all text-xl"
                >
                    <Link href={`/${link.url}`}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBar;
