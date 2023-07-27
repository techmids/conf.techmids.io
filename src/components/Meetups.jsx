const meetups = [
  {
    name: 'Fusion Events',
    image: '/meetups/fusion-events.png',
  },
  {
    name: 'Brum PHP',
    image: '/meetups/brum-php.png',
  },
  {
    name: 'BrumJS',
    image: '/meetups/brum-js.png',
  },
  {
    name: 'Golang Birmingham',
    image: '/meetups/golang.png',
  },
  {
    name: '#YouEqualTech Midlands',
    image: '/meetups/you-equal-tech.png',
  },
  {
    name: 'BrumAI',
    image: '/meetups/brumai.png',
  },
  {
    name: 'ManageOps',
    image: '/meetups/manageops.png',
  }
]

export function Meetups() {
  return (
    <div className="mt-10 bg-white">
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h2 className="mb-16 text-center font-display text-4xl font-medium tracking-tighter text-brand-900 sm:text-5xl">
            Backed by your favourite meetups
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {meetups.map((meetup, index) => (
            <div
              className="col-span-1 flex justify-center py-8 backdrop-opacity-10"
              id={meetup.name}
              key={index}
            >
              <img
                className="h-16"
                src={meetup.image}
                alt={meetup.name}
                title={meetup.name}
              />
            </div>
          ))}
          <div className="col-span-1 flex justify-center py-8 backdrop-opacity-10">
            <p className="text-center">... and more</p>
          </div>
        </div>
      </div>
    </div>
  )
}
