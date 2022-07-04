import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
// import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-yellow-50">
        <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
          {/*<Image*/}
          {/*  src={""}*/}
          {/*  alt=""*/}
          {/*  layout="fixed"*/}
          {/*  width={918}*/}
          {/*  height={1495}*/}
          {/*  priority*/}
          {/*  unoptimized*/}
          {/*/>*/}
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-yellow-600 sm:text-7xl">
            <span className="sr-only">TechMidsConf - </span>A technical conference
            for us.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-yellow-900">
            <p>
              The next movement in a more connected Birmingham has started. Come
              join the launch of TechMids with an all-day conference from world class
              speakers, networking opportunities and a chance to get involved with the community.
            </p>
            <p>
              TechMidsConf is a community run, not for profit conference which doubles as the launch event
              of the new TechMids community. We are partnered with all your favourite meetups from Brum.js to Fusion and
              everything in-between.
            </p>
          </div>
          <ButtonLink href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </ButtonLink>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', 'To Be Confirmed'],
              ['People Attending', '350'],
              ['Venue', 'Millennium Point'],
              ['Location', 'Birmingham UK'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-yellow-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-yellow-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
