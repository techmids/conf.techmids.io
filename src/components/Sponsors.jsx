import { SponsorTiers } from './SponsorTiers'
import SponsorUsCTA from "@/components/SponsorUsCTA";

export function Sponsors() {
  return (
    <section className="pt-16">
      <div
          className="relative overflow-hidden pt-64 pb-10 md:max-w-6xl lg:mx-10 lg:rounded-2xl lg:shadow-xl xl:mx-auto">
        <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/birmingham-library.jpg"
            alt="Birmingham Library"
        />
        <div className="absolute inset-0 bg-btw-dark mix-blend-multiply"/>
        <div className="absolute inset-0 bg-gradient-to-t from-btw-dark via-btw-dark opacity-60"/>
        <div className="relative px-8">
          <div>
            <img
                className="h-12"
                src="/birmingham-tech-week.png"
                alt="big tech week logo"
            />
          </div>
          <blockquote className="mt-8">
            <div className="relative max-w-3xl text-xl font-medium text-white md:flex-grow">
              <p className="relative">
                TechMids Conf October 2023 is proud to be a part of Birmingham Tech Week
              </p>
            </div>

            <footer className="mt-4">
              <a
                  className="text-base font-semibold text-brand-500 underline"
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
      <SponsorTiers/>
      <SponsorUsCTA/>
    </section>
  )
}
