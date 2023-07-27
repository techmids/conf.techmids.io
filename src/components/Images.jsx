const images = [
  {
    name: 'DevOpsDays Audience',
    source: '/gallery/audience-devopsdays.jpg',
  },
  {
    name: 'DevOpsDays',
    source: '/gallery/katie.jpg',
  },
  {
    name: 'DevOpsDays small group at social',
    source: '/gallery/purecraft-small-group-devopsdays.jpg',
  },
  {
    name: 'Millenium Point',
    source: '/gallery/millenium-point.jpg',
  },
  {
    name: 'Millenium Point Leon Adato',
    source: '/gallery/mp-leon-adato.jpg',
  },
  {
    name: 'DevOpsDays attendee',
    source: '/gallery/becky.jpg',
  },
  {
    name: 'Anais',
    source: '/gallery/anais.jpg',
  },
  {
    name: 'audience',
    source: '/gallery/audience.jpg',
  },
  {
    name: 'chairs',
    source: '/gallery/chairs.jpg',
  },
    {
    name: 'crowd',
    source: '/gallery/crowd.jpg',
    },
  {
    name: 'open-spaces',
    source: '/gallery/open-spaces.jpg',
  },
    {
    name: 'screen',
    source: '/gallery/screen.jpg',
    },
  {
    name: 'SoC',
    source: '/gallery/soc.jpg',
  },
  {
    name: 'tech-mids-tee',
    source: '/gallery/tech-mids-tee.jpg',
  },
  {
    name: 'sponsor',
    source: '/gallery/sponsor.jpg',
  }
]

export function Images() {
  return (
      <div key="This-Image" className="grid pt-4 px-4 grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
            <div key={image.alt}>
              <img className="h-auto max-w-full rounded-lg"
                   src={image.source} alt={image.alt} />
            </div>
        ))}
      </div>
  )
}
