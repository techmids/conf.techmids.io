import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {Sessions} from "../../speakers";

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
      <section id="speakers" aria-labelledby="speakers-title" className="py-10">
        <svg aria-hidden="true" width={0} height={0}>
          <defs>
            <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
              <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
            </clipPath>
            <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
              <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
            </clipPath>
            <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
              <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
            </clipPath>
          </defs>
        </svg>
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
                id="speakers-title"
                className="font-display text-4xl font-medium tracking-tighter text-yellow-600 sm:text-5xl"
            >
              Speakers
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-yellow-900">
              Come away inspired from a day of talks from experts, ranging from
              front end engineering, to cloud platforms and operations, with
              everything in between.
            </p>
          </div>
            <div className="mt-16 grid grid-cols-4 space-x-8 space-y-8">
          {Object.keys(Sessions).map((speaker, speakerIndex) => (
                  <a
                      href={
                          '/speakers/' + speaker
                      }
                      key={speakerIndex}
                  >
                    <div>
                      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <div
                            className={clsx(
                                'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                                [
                                  'border-yellow-300',
                                  'border-yellow-300',
                                  'border-yellow-300',
                                ][speakerIndex % 3]
                            )}
                        />
                        <div
                            className="absolute inset-0 bg-yellow-50"
                            style={{
                              clipPath: `url(#${id}-${speakerIndex % 3})`,
                            }}
                        >
                          <Image
                              className="transition duration-300 group-hover:scale-110"
                              src={Sessions[speaker].image}
                              alt=""
                              priority
                              sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                        {Sessions[speaker].name}
                      </h3>
                      <p>{Sessions[speaker].jobTitle}</p>
                      <p className="mt-1 text-base tracking-tight text-slate-500">
                        {Sessions[speaker].sessionType === 'session'
                            ? '30 Minute Session'
                            : '5 Minute Ignite'}
                      </p>
                    </div>
                  </a>
              ))}
            </div>
        </Container>
      </section>
  )
}
