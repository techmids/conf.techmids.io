import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import {Sessions} from "../../../speakers";
import { useRouter } from 'next/router'


export default function SpeakerPage({speaker}) {
    const router = useRouter()

    const speakerProfile = Sessions[speaker]

    if (!speakerProfile) {
        router.replace(`/speakers`)
        return <div></div>
    }

    const speakerCard = speakerProfile.speakerCard? `https://conf.techmids.io/speakers/card/${speakerProfile.speakerCard}` : 'https://conf.techmids.io/launch.png'

    return (
        <>
            <Head>
                <title>TechMids Conf Speaker - {speakerProfile.name}</title>
                <meta content={speakerProfile.name} property="og:title" name="title" />
                <meta content={speakerProfile.talkTitle} property="og:description" name="description" />
                <meta content={speakerCard} property="og:image" name="image"/>
            </Head>
            <Header/>
            <main>
                <Speaker speaker={speakerProfile}/>
                <Sponsors/>
            </main>
            <Footer/>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Object.keys(Sessions).map((speaker) => ({
        params: { speaker },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const speaker = params.speaker
    return {
        props: {
            speaker,
        },
    }
}
