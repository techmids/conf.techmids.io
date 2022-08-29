export function SponsorTiers() {
  return (
    <div className="mt-16 mb-8 bg-white lg:mt-0">
      <div className="py-8 lg:py-12">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
          Gold Sponsors
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
