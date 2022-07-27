const images = [
  {
    name: 'DevOpsDays Audience',
    source: '/audience-devopsdays.jpg',
    class: '',
  },
  {
    name: 'DevOpsDays',
    source: '/katie.jpg',
    class: 'hidden lg:flex',
  },
  {
    name: 'DevOpsDays small group at social',
    source: '/purecraft-small-group-devopsdays.jpg',
    class: '',
  },
  {
    name: 'Millenium Point',
    source: '/millenium-point.jpg',
    class: 'hidden sm:flex',
  },
  {
    name: 'Millenium Point',
    source: '/mp-leon-adato.jpg',
    class: 'hidden lg:flex',
  },
  {
    name: 'DevOpsDays attendee',
    source: '/dave.jpg',
    class: 'hidden sm:flex',
  },
]

export function Images() {
  return (
    <div className="mt-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-12 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 xl:gap-x-8"
        >
          {images.map((image, index) => (
            <li
              className="relative col-span-1 justify-center backdrop-opacity-10"
              className={image.class}
              id={image.name}
              key={index}
            >
              <img
                className="h-100 overflow-hidden rounded-2xl"
                src={image.source}
                alt={image.name}
                title={image.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}