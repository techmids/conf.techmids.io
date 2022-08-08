import Head from "next/head";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";
import { Speaker } from "@/components/Speaker";
import speakers from "speakers";

const speaker = speakers.filter(speaker => speaker["name"] === 'Piper Bates')[0]


export default function PiperBates() {
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
                <Speaker speaker={speaker} />
                <Sponsors />
            </main>
            <Footer />
        </>
    )
}

