import { ButtonLink } from '@/components/Button'

export function ButtonCTA() {
  return (
    <>
      <div className="my-10 grid grid-cols-1 gap-10">
        <ButtonLink
          href="https://www.youtube.com/watch?v=LUKr9GQphOY"
          rel="noopener"
          target="_blank"
          className="w-full"
        >
          Join the stream from 9am
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
