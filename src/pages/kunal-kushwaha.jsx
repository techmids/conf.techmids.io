import Head from "next/head";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import kunalImg from '@/images/avatars/kunal.png'

const speaker = {
    name: "Kunal Kushwaha",
    jobTitle: "Developer Advocate at Civo",
    bio: "",
    talkTitle: "Check back later to see",
    description: "This talk is not yet ready to be published",
    speakerImg: kunalImg,
    twitter: "kunalstwt",
    linkedin: "",
    website: "https://www.kunalkushwaha.com/"
}


export default function KunalKushwaha() {
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