import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Session} from "@/components/Session";
import {Sessions} from "../../../speakers";
import { useRouter } from 'next/router'


export default function SessionPage({session}) {
    const router = useRouter()

    const speakers = []
    Object.keys(Sessions).map((speaker) => (
        Sessions[speaker].talkTitle.split(' ').join('-').toLowerCase() === session? speakers.push(speaker) : null
    ))
    const speakerProfiles = []

    speakers.map((speaker) => (
        speakerProfiles.push(Sessions[speaker])
    ))

    // const speakerCard = speakerProfile.speakerCard? `https://conf.techmids.io/speakers/card/${speakerProfile.name}.png` : 'https://conf.techmids.io/launch.png'

    return (
        <>
            <Head>
                <title>TechMids Conf Session - {speakers[0].talkTitle}</title>
                <meta content={speakers[0].talkTitle} property="og:title" name="title" />
                <meta content={speakers[0].talkTitle} property="og:description" name="description" />
                {/*<meta content={speakerCard} property="og:image" name="image"/>*/}
            </Head>
            <Header/>
            <main>
                <Session speakers={speakerProfiles}/>
                <Sponsors/>
            </main>
            <Footer/>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Object.keys(Sessions).map((session) => ({
        params: { session: Sessions[session].talkTitle.split(' ').join('-').toLowerCase(), speakers: Object.keys(Sessions).filter((speaker) => (
                Sessions[session].talkTitle.split(' ').join('-').toLowerCase() === session
            )) },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const session = params.session
    return {
        props: {
            session,
        },
    }
}
