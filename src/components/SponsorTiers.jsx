export function SponsorTiers() {
  return (
    <div className="mt-16 mb-8 bg-white lg:mt-0">
      <h3 className="mb-6 text-center font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">
        Our sponsors have made this event possible
      </h3>
      <div className="mx-auto max-w-6xl py-8 px-4 sm:px-4 lg:py-12 lg:px-4">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Collaborators
        </p>
        <div className="mt-6 grid w-full grid-cols-1 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a
              href="https://birminghamtechweek.com/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="max-h-12"
                src="/birmingham-tech-week-black.png"
                alt="Birmingham Tech Week"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl py-8 px-4 sm:px-4 lg:py-12 lg:px-4">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Silver Sponsors
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0.5 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://jump24.co.uk/" target="_blank" rel="noopener">
              <img className="max-h-12" src="/jump24.png" alt="Jump24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
