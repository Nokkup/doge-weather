import Head from "next/head";
import React from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
    title?: string;
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className={styles.Layout}>{props.children}</div>
        </>
    );
};

export default Layout;
