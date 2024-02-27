"use client";

//
import { useState } from "react";
import Image from "next/image";

// @/
import { Hero_Roadway } from "@/constants/text";

// ./
import styles from "./styles.module.scss";
import { FormCopy, FormInput } from "..";

// ! Component
const Hero = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const onSubmitForm = () => {
        setIsSubmit(true);
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <div className={styles.leftSide}>
                    <div className={styles.leftTop}>
                        <h2 className={styles.leftTitle}>
                            Refer friends and get rewards
                        </h2>
                        <p className={styles.leftDescription}>
                            Refer your friends to us and earn hotel booking
                            vouchers. We'll give you 1 coin for each friend that
                            installs our extension. Miuttom cash-out at 20
                            coins.
                        </p>
                        {isSubmit ? (
                            <FormCopy />
                        ) : (
                            <FormInput onSubmit={onSubmitForm} />
                        )}
                    </div>
                    <p className={styles.leftLimit}>
                        Limits on max rewards apply.
                    </p>
                </div>
                <div className={styles.rightSide}>
                    {Hero_Roadway.map((item) => (
                        <div
                            key={item.id}
                            className={`${
                                item.id === 2
                                    ? styles.roadwayItemReferse
                                    : styles.roadwayItem
                            }`}
                        >
                            <div className={styles.leftRoad}>
                                <Image
                                    src={item.image}
                                    alt={item.step}
                                    width={144}
                                    height={144}
                                />
                            </div>
                            <div className={styles.rightRoad}>
                                <p className={styles.roadStep}>{item.step}</p>
                                <h4 className={styles.roadTitle}>
                                    {item.label}
                                </h4>
                                <p className={styles.roadDescription}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
