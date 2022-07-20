const meetups = [
  {
    name: "Fusion Events",
    image: "/fusion-events.png",
  },
  {
    name: "Brum PHP",
    image: "/brum-php.png",
  },
  {
    name: "BrumJS",
    image: "/brum-js.png",
  },
  {
    name: "Golang Birmingham",
    image: "/golang.png",
  },
  {
    name: "#YouEqualTech Midlands",
    image: "you-equal-tech.png",
  },
  {
    name: "DevOps Birmingham",
    image: "/devops.png",
  },
  {
    name: "DevOpsDays Birmingham",
    image: "/devopsdays.png",
  },
  {
    name: "BrumAI",
    image: "/brumai.png"
  },
]


export function Meetups() {
  return (
    <div className="mt-10 bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h2 className="mb-16 text-center font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">
            Backed by your favourite meetups
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-4">
          {meetups.map(meetup => (
            <div className="py-8 col-span-1 flex justify-center backdrop-opacity-10  md:col-span-2 lg:col-span-1" id={meetup.name}>
              <img
                  className="h-16"
                  src={meetup.image}
                  alt={meetup.name}
                  title={meetup.name}
              />
            </div>
          ))}
          <div className="py-8 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <p>...and more</p>
          </div>
        </div>
      </div>
    </div>
  )
}
