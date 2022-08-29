import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { MailIcon } from '@heroicons/react/solid'
import { SponsorTiers } from './SponsorTiers'

export function Sponsors() {
  return (
    <section>
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
              src="/birmingham-tech-week.png"
              alt="Birmingham Tech Week"
            />
          </div>
          <blockquote className="mt-8">
            <div className="relative max-w-3xl text-xl font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-btw-cyan-dark"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                TechMids Conf is proud to be a part of Birmingham Tech Week
                2022. Birmingham Tech Week is the UK&apos;s largest regional
                tech festival which brings together 5,000 tech professionals for
                a week of collaboration, inspiration and celebration.
              </p>
            </div>

            <footer className="mt-4">
              <a
                className="text-base font-semibold text-btw-cyan underline"
                href="https://birminghamtechweek.com/"
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
