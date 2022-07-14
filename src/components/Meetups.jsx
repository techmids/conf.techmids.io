export function Meetups() {
  return (
    <div className="mt-10 bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h2 className="mb-16 text-center font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">
            Backed by your favourite meetups
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-7">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-20"
              src="/fusion-events.png"
              alt="Fusion Events"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-16" src="/brum-php.png" alt="BrumPHP" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-16" src="/brum-js.png" alt="Brum.js" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-16" src="/golang.png" alt="Golang Birmingham" />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-16"
              src="/you-equal-tech.png"
              alt="#YouEqualTech Midlands"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-16" src="/devops.png" alt="DevOps Birmingham" />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <p>...and more</p>
          </div>
        </div>
      </div>
    </div>
  )
}
