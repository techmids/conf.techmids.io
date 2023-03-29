import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { MailIcon } from '@heroicons/react/solid'
import { SponsorTiers } from './SponsorTiers'

export function Sponsors() {
  return (
    <section className="pt-16">
      <div className="relative overflow-hidden pt-64 pb-10 md:max-w-6xl lg:mx-10 lg:rounded-2xl lg:shadow-xl xl:mx-auto">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/birmingham-library.jpg"
          alt="Birmingham Library"
        />
        <div className="absolute inset-0 bg-btw-dark mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-btw-dark via-btw-dark opacity-60" />
        <div className="relative px-8">
          <div>
            <img
              className="h-12"
              src="/DevOpsDays.png"
              alt="devopsdays"
            />
          </div>
          <blockquote className="mt-8">
            <div className="relative max-w-3xl text-xl font-medium text-white md:flex-grow">
              <p className="relative">
                TechMids Conf 2023 is proud to be a part of DevOpsDays Birmingham 2023
              </p>
            </div>

            <footer className="mt-4">
              <a
                className="text-base font-semibold text-white underline"
                href="https://devopsdaysbirmingham.co.uk/"
                target="_blank"
                rel="noopener"
              >
                Find out more
              </a>
            </footer>
          </blockquote>
        </div>
      </div>
      <SponsorTiers />
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-yellow-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="absolute left-1/2 top-0 -translate-x-[10%] -translate-y-[45%] lg:-translate-x-[32%]"></div>
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">
                We are looking for sponsors!
              </p>
              <p className="mt-4 text-lg tracking-tight text-yellow-900">
                Sponsors make this conference possible, we're actively looking
                for people to support!
              </p>
            </div>
            <div className="place-self-center">
              <h3 className="text-lg font-semibold tracking-tight text-yellow-900">
                Say hi if you're interested in supporting{' '}
                <span aria-hidden="true">↓</span>
              </h3>
              <ButtonLink
                href="mailto:hello@techmids.io"
                rel="noopener"
                target="_blank"
                className="my-4 w-full"
              >
                <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                hello@techmids.io
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
