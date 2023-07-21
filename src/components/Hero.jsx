import { Container } from '@/components/Container'
import { ButtonCTA } from '@/components/ButtonCTA'
import {EVENT} from "../../event";
import {ChevronRightIcon} from "@heroicons/react/solid";
import {Logo} from "@/components/Logo";

export function Hero() {
  return (
      <div className="relative isolate overflow-hidden bg-gray-900">
        <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
          <defs>
            <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
        <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
        >
          <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-7xl">
              <span className="sr-only">TechMids Conf - </span>
              <span className="text-brand-500">{EVENT.date}</span>
              <br /> All day, full stack conference
            </h1>
            <div className="mt-6 space-y-6 font-display text-lg text-gray-300">
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
            <div className="mt-10 flex items-center gap-x-6">
              <ButtonCTA />
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                  src="/mp-leon-adato.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
  )
  // return (
  //   <div className="relative pt-10 pb-20 sm:py-24 bg-btw-blue">
  //     <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-btw-blue">
  //       <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]"></div>
  //       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
  //       <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
  //     </div>
  //     <Container className="relative">
  //       <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">

  //         <ButtonCTA />
  //       </div>
  //     </Container>
  //   </div>
  // )
}
