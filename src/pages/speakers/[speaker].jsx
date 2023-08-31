import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import {Sessions} from "../../../speakers";
import { useRouter } from 'next/router'
import {Meta} from "next/dist/lib/metadata/generate/meta";


export default function SpeakerPage() {
    const router = useRouter()
    const speaker = router.query["speaker"]
    if (!speaker) {
        return <div></div>
    }

    const speakerProfile = Sessions[speaker]

    if (!speakerProfile) {
        router.replace(`/speakers`)
        return <div></div>
    }

    const speakerCard = speakerProfile.speakerCard? `/speakers/card/${speakerProfile.speakerCard}` : '/public/launch.png'

    return (
        <>
            <Head>
                <title>TechMids Conf Speaker - {speakerProfile.name}</title>
                <meta content={speakerProfile.name} property="og:title" name="title" />
                <meta content={speakerProfile.talkTitle} property="og:description" name="description" />
                <meta property="og:image" content={speakerCard} name="image"/>
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
