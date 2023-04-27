import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import {Sessions} from "../../../speakers";
import { useRouter } from 'next/router'


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
    return (
        <>
            <Head>
                <title>TechMids Conf - A community-driven tech conference</title>
                <meta
                    name="description"
                    content={speakerProfile.description}
                />
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
