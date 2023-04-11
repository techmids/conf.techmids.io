import { ButtonLink } from '@/components/Button'

export function ButtonCTA() {
  return (
    <>
      <div className="my-10 grid grid-cols-1 gap-10">
        <ButtonLink
          href="https://ti.to/tech-events-birmingham/devopsdays-birmingham-uk-2023"
          rel="noopener"
          target="_blank"
          className="w-full"
        >
          Get your ticket now
        </ButtonLink>
      </div>
        <div className="my-10 grid grid-cols-1 gap-10">
            <ButtonLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9p8Ce2eU3LWdvjdoNL5wSo6hIClivw7b-o4EzMkUSUSQmOA/viewform?usp=pp_url"
                rel="noopener"
                target="_blank"
                className="w-full"
            >
                Submit to our CFP
            </ButtonLink>
        </div>
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
    </>
  )
}
