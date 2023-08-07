import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PastEventsList } from '@/components/PastEventsList'
import {EVENT} from "../../event";

export const getStaticProps = async () => {
  const fs = require('fs/promises');
  const path = require('path');
  // read what's in the public/past folder
  // we can't use __dirname for this because of https://stackoverflow.com/a/65861629/1418014
  let past_dir = path.join(process.cwd(), "public", "past");
  let past_contents;
  try {
    past_contents = await fs.readdir(past_dir, {withFileTypes: true});
  } catch(e) {
    if (e.code == "ENOENT") {
      // there is no past dir at all
      // this probably means that we are currently being statically exported!
      // therefore, the past-events page *in this export* can be blank, since
      // it should never get seen anyway
      // so we can happily return an empty list of past events
      return {props: {past_events: []}}
    }
    throw e;
  }
  const past_sites = past_contents.filter(dirent => dirent.isDirectory()).map(dirent => {
    const [year, month] = dirent.name.split("-");
    const monthname = {
      "01": "January", "02": "February", "03": "March", "04": "April", "05": "May",
      "06": "June", "07": "July", "08": "August", "09": "September", "10": "October",
      "11": "November", "12": "December"
    }[month];
    return {
      slug: dirent.name,
      title: `${monthname || month} ${year}`,
      href: `past/${dirent.name}/index.html`
    }
  })
  return {props: {past_events: past_sites}}
}

export default function PastEvents({past_events}) {
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
        <PastEventsList past_events={past_events}/>
      </main>
      <Footer />
    </>
  )
}
