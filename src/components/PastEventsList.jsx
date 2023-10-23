const pastEventMetadata = {
  "2022-10": {
    title: 'The inaugural TechMids Conf',
    imageUrl: '/gallery/audience.jpg',
    niceDate: 'Friday 14th Oct 2022',
    datetime: '2022-10-14'
  },
  "2023-06": {
    title: 'TechMids co-located with DevOpsDays Birmingham',
    imageUrl: '/gallery/millenium-point.jpg',
    niceDate: 'Thursday & Friday 15th & 16th June 2023',
    datetime: '2023-06-15'
  },
  "2023-10": {
    title: 'TechMids Conf October 2023',
    imageUrl: '/gallery/audience-icc.jpg',
    niceDate: 'Friday 20th Oct 2023',
    datetime: '2023-10-20'
  }
  // More past events...
}


export function PastEventsList({past_events}) {

  // The past events list is created by pages/past-events.jsx
  // However, it doesn't have all the neat imagery and metadata
  // The imagery and metadata is in the pastEvent object, above
  // A newly added past event will therefore show up on this page,
  // but won't have all the cool metadata until that is added to
  // the pastEvent object above, which needs to be done manually.
  // So we combine a default object, the object from the past-events
  // page, and any data from the pastEventMetadata to make the final
  // collection of info for each event.

  const combinedPastEvents = past_events.map((pe, idx) => {
    return Object.assign({
      id: idx,
      imageUrl: '/gallery/audience.jpg'
    }, pe, pastEventMetadata[pe.slug] || {})
  });

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">See our past events</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              A snapshot of our website from our previous events
            </p>
          </div>
          <div className="flex place-content-around mx-auto mt-16 max-w-2xl auto-rows-fr gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {combinedPastEvents.map((post) => (
                <article
                    key={post.id}
                    className="w-1/2 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={post.datetime} className="mr-8">
                      {post.niceDate || post.date}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
