import Image from "next/image";

// @/ impors
import { NavItems } from "@/components/shared";
import { Favicon, Menu } from "@/public";

// ./ imports
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";

// Interface
interface MobileNavbarProps {
    isOpen: boolean;
}

const MobileNavBar = () => {
    return (
        <div className="sm:hidden flex">
            <Sheet>
                <SheetTrigger>
                    <Image src={Menu} alt="open" />
                </SheetTrigger>
                <SheetContent
                    className="flex flex-col gap-6 bg-white sm:hidden border border-dark-color"
                    side={"top"}
                >
                    <Image src={Favicon} alt="logo" width={24} />
                    <Separator className="border border-dark-color" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavBar;
