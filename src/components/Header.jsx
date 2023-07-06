import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import {EVENT} from "../../event";

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <a href="/">
            <Logo className="h-12 w-auto text-slate-900" />
          </a>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-yellow-600/10 py-4 font-mono text-sm text-yellow-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex flex-col items-center space-x-4 px-4 sm:flex-row">
            <p>
              <time>{EVENT.date}</time>
            </p>
            <svg
              aria-hidden="true"
              className="invisible h-1.5 w-1.5 overflow-visible fill-current stroke-current sm:visible"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
            <p>part of Birmingham Tech Week</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <ButtonLink
            href={EVENT.ticketLink}
            rel="noopener"
            target="_blank"
          >
            Get your tickets now
          </ButtonLink>
        </div>
      </Container>
    </header>
  )
}
