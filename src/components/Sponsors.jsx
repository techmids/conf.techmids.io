import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { MailIcon } from '@heroicons/react/solid'

export function Sponsors() {
  return (
    <section id="sponsor" aria-labelledby="sponsor-title">
      <h2 id="sponsor-title" className="sr-only">
        Sponsor
      </h2>
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
                Please email us if you're interested in supporting <span aria-hidden="true">↓</span>
              </h3>
              <ButtonLink
                href="https://ti.to/tech-events-birmingham/tech-mids-conference-2022"
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
