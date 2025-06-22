import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Schedule } from '@/components/Schedule';
import {EVENT, AVAILABLE_INFORMATION} from "../../event";
import { Sponsors } from '@/components/Sponsors';

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
        {AVAILABLE_INFORMATION.scheduleAvailable ? (
          <main>
            <h1 className="text-4xl font-bold text-center my-8">Schedule</h1>
            <Schedule/>
            <Sponsors/>
          </main>
        ) : (
          <h1 className="text-4xl font-bold text-center my-8">Schedule Coming Soon</h1>
        )}
        
        
      </main>
      <Footer />
    </>
  )
}
