import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import {SpeakersDay1} from "../../../speakers";

const speaker = SpeakersDay1.filter(speaker => speaker["name"] === 'Becky Pauley')[0]


export default function BeckyPauley() {
    return (
        <>
            {/*<Head>*/}
            {/*    <title>TechMids Conf - A community-driven tech conference</title>*/}
            {/*    <meta*/}
            {/*        name="description"*/}
            {/*        content={speaker.description}*/}
            {/*    />*/}
            {/*</Head>*/}
            {/*<Header />*/}
            {/*<main>*/}
            {/*    <Speaker speaker={speaker}/>*/}
            {/*    <Sponsors />*/}
            {/*</main>*/}
            {/*<Footer />*/}
        </>
    )
}
