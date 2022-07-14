import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CovidPolicy } from '@/components/CovidPolicy'

export default function Covid() {
  return (
    <>
      <Head>
        <title>TechMids Conf - A community-driven tech conference</title>
        <meta
          name="description"
          content="TechMids is running a conference! Come join your community. Get tickets, become a sponsor and get involved!"
        />
      </Head>
      <Header />
      <main>
        <CovidPolicy />
      </main>
      <Footer />
    </>
  )
}
