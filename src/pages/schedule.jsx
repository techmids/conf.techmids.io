import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Schedule } from '@/components/Schedule';
import {EVENT} from "../../event";

export default function Covid() {
  return (
    <>
      <Head>
        <title>TechMids Conf - A community-driven tech conference</title>
        <meta
          name="description"
          content={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
        />
      </Head>
      <Header />
      <main>
        <Schedule/>
      </main>
      <Footer />
    </>
  )
}
