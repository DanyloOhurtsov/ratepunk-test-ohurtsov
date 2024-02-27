"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Email } from "@/public";

import styles from "./styles.module.scss";

interface FormInputProps {
    onSubmit: () => void;
}

const FormInput = ({ onSubmit }: FormInputProps) => {
    const [emailValue, setEmailValue] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const onInputEmail = (value: string) => {
        setEmailValue(value);
    };

    const validateEmailAndSubmit = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = regex.test(emailValue);
        setIsEmailValid(isValid);
        setIsSubmitClicked(true);

        if (isValid) {
            onSubmit();
        }
    };

    return (
        <form className={styles.form}>
            {isSubmitClicked && !isEmailValid && (
                <Label className={styles.labelError}>Email is not valid</Label>
            )}
            <div className={styles.inputSection}>
                <Image src={Email} alt="email" className={styles.emailIcon} />
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={emailValue}
                    onChange={(e) => onInputEmail(e.target.value)}
                    className={styles.emailInput}
                />
            </div>
            <Button
                variant={'bluebutton'}
                onClick={validateEmailAndSubmit}
                className={styles.submitButton}
            >
                Get Referral Link
            </Button>
        </form>
    );
};

export default FormInput;
