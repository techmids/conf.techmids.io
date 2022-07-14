import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CodeOfConduct } from '@/components/CodeOfConduct'

export default function CoC() {
  return (
    <>
      <Head>
        <title>TechMidsConf - A community-driven tech conference</title>
        <meta
          name="description"
          content="TechMids is running a conference! Come join your community. Get tickets, become a sponsor and get involved!"
        />
      </Head>
      <Header />
      <main>
        <CodeOfConduct />
      </main>
      <Footer />
    </>
  )
}
