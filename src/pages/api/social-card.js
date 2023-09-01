import {ImageResponse} from "next/server";
import SharingCard from "@/components/SharingCard";

export const config = {
    runtime: 'edge',
};


export default function handler(req) {
    try {
        const { searchParams } = new URL(req.url);

        return new ImageResponse(
            <SharingCard/>,
            {
                // width: 1200,
                // height: 630,
            }
        )


    } catch (e) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
