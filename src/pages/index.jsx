import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Meetups } from '@/components/Meetups'
import { Sponsors } from '@/components/Sponsors'
import { Images } from '@/components/Images'
import {EVENT} from "../../event";
import Testimonials from "@/components/Testimonials";
import Showcase from "@/components/Showcase";
import {Speakers} from "@/components/Speakers";

export default function Home() {
    return (
        <>
            <Head>
                <title>TechMids Conf - A community-driven tech conference</title>
                <meta
                    name="description"
                    content={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
                />
                <meta name="image" property="og:image" content="/launch.png"/>
            </Head>
            <Header />
            <main>
                <Hero />
                <Images />
                {/*<Schedule />*/}
                <Speakers />
                <Testimonials />
                <Showcase />
                <Sponsors />
                <Meetups />
            </main>
            <Footer />
        </>
    )
}
