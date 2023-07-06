import { Container } from '@/components/Container'
import { ButtonCTA } from '@/components/ButtonCTA'
import {EVENT, event} from "../../event";

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-yellow-50">
        <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-yellow-600 sm:text-7xl">
            <span className="sr-only">TechMids Conf - </span>
            <span className="text-yellow-700">{EVENT.date}</span>
            <br /> All day, full stack conference
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-yellow-900">
            <p>
              <b>TechMids Conf is a full stack conference</b>, on{' '}
              {EVENT.date}, part of Birmingham Tech Week 2023.{' '}
              {/*{EVENT.date}, <b><a href="https://devopsdaysbirmingham.co.uk/" className="underline">part of Birmingham Tech Week 2023.</a></b>{' '}*/}
            </p>
            <p>
              Hear from world class speakers, engage in social chatter, and find
              out how to get involved with the community.
            </p>
            <p>
              TechMids is made up of all your favourite meetups from{' '}
              <b>Brum.js</b> to <b>Fusion</b>, to <b>Golang</b>, to{' '}
              <b>DevOps</b> and everything in-between.
            </p>
            <p>TechMids Conf is a community run, not for profit conference.</p>
          </div>
          <ButtonCTA />
        </div>
      </Container>
    </div>
  )
}
