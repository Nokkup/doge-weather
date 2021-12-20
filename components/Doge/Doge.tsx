import React, { useState } from "react";
import Image from "next/image";
import styles from "./Doge.module.scss";
import DogeIcons from "../../types/dogeType";

interface DogeProps {
    dogeIcon: DogeIcons;
}

const Doge = ({ dogeIcon }: DogeProps) => {
    return (
        <div className={styles.Doge}>
            <Image
                src={`/images/doges/${dogeIcon}.png`}
                alt="doge"
                width={200}
                height={200}
            />
        </div>
    );
};

export default React.memo(Doge);
