import SharingCard from "@/components/SharingCard";

import { useRouter } from 'next/router';
import { Sessions } from "../../../speakers";

const Sharing = ({ speaker }) => {

    const speakerProfile = Sessions[speaker]

    const router = useRouter()

    if (!speakerProfile) {
        router.replace(`/speakers`)
        return <div></div>
    }


    return (
        <SharingCard talkTitle={speakerProfile.talkTitle} speaker={speakerProfile} />
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

export default Sharing