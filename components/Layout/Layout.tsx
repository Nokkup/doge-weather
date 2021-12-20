import React from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
    title?: string;
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <title>{props.title}</title>
            <div className={styles.Layout}>{props.children}</div>
        </>
    );
};

export default Layout;
