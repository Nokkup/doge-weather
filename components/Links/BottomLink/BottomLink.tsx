import React from "react";
import Link, { LinkProps } from "next/link";
import styles from "./BottomLink.module.scss";

interface BottomLinkProps extends LinkProps {
    children?: React.ReactNode;
}

const BottomLink = (props: BottomLinkProps) => {
    return (
        <div className={styles.BottomLink}>
            <Link {...props} />
        </div>
    );
};

export default BottomLink;
