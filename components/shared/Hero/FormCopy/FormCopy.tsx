"use client";

//
import Image from "next/image";
import { useState } from "react";

// @/
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Success } from "@/public";

// ./
import styles from "./styles.module.scss";

// !
const FormCopy = () => {
    const [copied, setCopied] = useState(false);
    const [urlValue, setUrlValue] = useState("https://ratepunk.com/referral");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(urlValue);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className={styles.formCopy}>
            <Label className={styles.labelForm}>
                <Image src={Success} alt="done" />
                <p>Your email is confirmed!</p>
            </Label>
            <div className={styles.inputSector}>
                <input type="text" value={urlValue} readOnly />
                <Button onClick={copyToClipboard} variant={"bluebutton"}>
                    {copied ? "Copied" : "Copy"}
                </Button>
            </div>
        </div>
    );
};

export default FormCopy;
