import React from "react";
import Doge from "../Doge/Doge";
import DogeIcons from "../../types/dogeType";
import styles from "./DogesList.module.scss";

const DogesList = () => {
    return (
        <div className={styles.DogesList}>
            {Object.keys(DogeIcons).map((doge: DogeIcons) => (
                <div className={styles.DogesList__card} key={doge}>
                    <Doge dogeIcon={doge} />
                    {doge}
                </div>
            ))}
        </div>
    );
};

export default DogesList;
