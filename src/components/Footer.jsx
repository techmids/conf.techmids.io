import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <a href="/">
          <Logo className="h-12 w-auto text-slate-900" />
        </a>
        <div>
          <a href="/code-of-conduct" className="underline">
            Code of Conduct
          </a>
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} Tech Events Birmingham
            Limited. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
