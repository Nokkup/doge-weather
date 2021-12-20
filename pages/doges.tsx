import React from "react";
import Layout from "../components/Layout/Layout";
import DogesList from "../components/DogesList/DogesList";
import BottomLink from "../components/Links/BottomLink/BottomLink";

export default function Doges() {
    return (
        <Layout title="Doges">
            <DogesList />
            <BottomLink href="/">back</BottomLink>
        </Layout>
    );
}
