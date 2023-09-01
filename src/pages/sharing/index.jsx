import React from "react";
import {Speakers} from "@/components/Speakers";
import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";

export const SpeakersPage = () => {
    return (
        <>
            <Head>
                <title>TechMids Conf - A community-driven tech conference</title>
                <meta
                    name="description"
                    content="Our Speaker lineup"
                />
            </Head>
            <Header/>
            <main>
                <Speakers sharing={true}/>
            </main>
            <Footer/>
        </>
    )
}

export default SpeakersPage;
