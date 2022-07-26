import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Meetups } from '@/components/Meetups'
import { ButtonLink } from '@/components/Button'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>TechMids Conf - A community-driven tech conference</title>
        <meta
          name="description"
          content="TechMids Conf is an all day, full stack conference on Fri Oct 14th 2022! Come along for a day of inspiring talks, social chatter and fun."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Meetups />
        <Speakers />
        <Schedule />
        <Sponsors />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
