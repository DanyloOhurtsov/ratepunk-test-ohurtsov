import { Noto_Sans, Caveat_Brush } from "next/font/google";

const NOTO_SANS = Noto_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    preload: true,
});
const CAVEAT_BRUSH = Caveat_Brush({ weight: "400", subsets: ["latin"] });

export { NOTO_SANS, CAVEAT_BRUSH };
