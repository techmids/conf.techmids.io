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
            <span className="sr-only">TechMids Conf - </span>
            <span className="text-yellow-700">Fri 14th Oct</span>
            <br /> All of Birmingham&apos;s tech, all at once
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-yellow-900">
            <p>
              Join us for the launch of TechMids, Birmingham's tech meetups
              coming together for the first time.
            </p>
            <p>
              <b>
                TechMids Conf is an all day full stack conference, on Friday
                October 14th
              </b>{' '}
              with world class speakers delivering inspiring talks, social
              chatter, and a chance to get involved with the community.
            </p>
            <p>
              A new, more connected Birmingham is emerging at the grassroots.
              TechMids is made up of all your favourite meetups from{' '}
              <b>Brum.js</b> to <b>Fusion</b>, to <b>Golang</b>, to{' '}
              <b>DevOps</b> and everything in-between.
            </p>
            <p>TechMids Conf is a community run, not for profit conference.</p>
          </div>
          <ButtonLink
            href="https://ti.to/tech-events-birmingham/tech-mids-conference-2022"
            rel="noopener"
            target="_blank"
            className="mt-10 w-full"
          >
            Get your free tickets
          </ButtonLink>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Spaces', 'Limited to 350 seats'],
              ['Venue', 'Millennium Point'],
              ['Location', 'Birmingham, UK'],
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
