import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import speakers from "speakers";

const speaker = speakers.filter(speaker => speaker["name"] === 'Kirsty Thomas-Brown')[0]


export default function KirstyThomasBrown() {
    return (
        <>
            <Head>
                <title>TechMids Conf - A community-driven tech conference</title>
                <meta
                    name="description"
                    content={speaker.description}
                />
            </Head>
            <Header />
            <main>
                <Speaker speaker={speaker}/>
                <Sponsors />
            </main>
            <Footer />
        </>
    )
}