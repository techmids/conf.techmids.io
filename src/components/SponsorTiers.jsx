export function SponsorTiers() {
  return (
    <div className="mt-12 mb-8 bg-white">
      <div className="py-8">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Platinum Sponsors
        </p>
        <div className="mt-6 grid grid-cols-3 gap-0.5 lg:mt-8">
          <div className="col-span-1"/>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a
              href="https://www.goldmansachs.com/careers/discover/birmingham-office/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="max-h-20"
                src="/goldman-sachs.png"
                alt="Goldman Sachs"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-12">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Gold Sponsors
        </p>
        <div className="mt-6 grid grid-cols-3 gap-0.5 lg:mt-8">
          <div className="col-span-1"/>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://jump24.co.uk/" target="_blank" rel="noopener">
              <img className="max-h-12" src="/jump24.png" alt="Jump24" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-8">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Silver Sponsors
        </p>
        <div className="mt-6 grid grid-cols-4 gap-0.5 lg:mt-8">
          <div className="col-span-1"/>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a
              href="https://www.infinityworks.com/"
              target="_blank"
              rel="noopener"
            >
              <img
                className="max-h-12"
                src="/infinityworks.png"
                alt="Infinity Works"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a
                href="https://www.elastic.co/"
                target="_blank"
                rel="noopener"
            >
              <img
                  className="max-h-12"
                  src="/elastic.png"
                  alt="Elastic"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
