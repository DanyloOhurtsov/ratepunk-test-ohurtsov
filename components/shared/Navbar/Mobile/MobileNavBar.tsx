import Image from "next/image";

// @/ impors
import { NavItems } from "@/components/shared";
import { Favicon, Menu } from "@/public";

// ./ imports
import { Sheet, SheetContent, SheetTrigger } from "../../../ui/sheet";
import { Separator } from "../../../ui/separator";
import styles from './styles.module.scss'


const MobileNavBar = () => {
    return (
        <div className={styles.mobileContainer}>
            <Sheet>
                <SheetTrigger>
                    <Image src={Menu} alt="open" />
                </SheetTrigger>
                <SheetContent
                    className={styles.sheetContent}
                    side={"top"}
                >
                    <Image src={Favicon} alt="logo" width={24} />
                    <Separator className={styles.separator} />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavBar;
