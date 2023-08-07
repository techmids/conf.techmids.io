const featuredTestimonial = {
    body: 'The TechMids October 2022 event was an absolute delight! The organisers\' dedication was evident in every aspect. The talks were highly engaging, the level of attendance was great, and the overall atmosphere was fantastic. I took away so many great lessons that I\'ve factored into my own working practices, but the main thing I loved was seeing such a large swathe of the midlands tech community (and beyond) show up. 10 out of 10.',
    author: {
        name: 'Andy Macdonald, Software Engineer',
        imageUrl:
            '/avatars/andy-macdonald.png',
        logoUrl: '/sponsors/stackwizards.png',
    },
}
const testimonials = [
    [
        [
            {
                body: 'Another fantastic event, thank you so much to the organisers, it’s wonderful to have such an inclusive conference in Birmingham. Atmosphere was great and I really enjoyed both days',
                author: {
                    name: 'TechMids July 2023 Attendee',
                },
            },
            {
                body: 'I really enjoyed all of presentations by on day one especially by David Flanagan and Leon Adato. It was also great to network with fellow coders. There were a lot of interesting products advertised by sponsors. Obviously food and beverages were delicious.',
                author: {
                    name: 'TechMids October 2022 attendee'
                    // imageUrl:
                },
            },
            // More testimonials...
        ],
        [
            {
                body: 'I enjoyed it overall, a lot of good talks and interesting attendees. Thanks for all the hard work!',
                author: {
                    name: 'TechMids July 2023 Attendee',
                },
            },
            // More testimonials...
        ],
    ],
    [
        [
            {
                body: 'Overall for me it was a 10 out of 10 both days.',
                author: {
                    name: 'TechMids July 2023 Attendee',
                },
            },
        ],
        [
            {
                body: 'Great to have such variety in sessions, socials and lunch was very good. The stickers to encourage communication were fab too! Very pronoun and gender inclusive, which is great to see.',
                author: {
                    name: 'TechMids July 2023 Attendee',
                },
            },
            {
                body: 'A really great conference! All of the speakers were really engaging and interesting and there was plenty of time allocated to networking in what was a very friendly and inclusive atmosphere. Loved the dynamic session highlighting on the website too, it helped me keep track of the schedule throughout the day.',
                author: {
                    name: 'Mike Rushton, Software Engineer',
                    imageUrl: '/avatars/mike.png',
                }
            }
        ],
    ],
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Testimonials = () => {
    return (
        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
            <div
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                aria-hidden="true"
            >
                <div
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-brand-900">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Hear from some of our past attendees, sponsors, and speakers
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                            <p>{`“${featuredTestimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                            {featuredTestimonial.author.imageUrl &&
                                <img
                                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                                    src={featuredTestimonial.author.imageUrl}
                                    alt=""
                                />
                            }
                            <div className="flex-auto">
                                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                            </div>
                            {featuredTestimonial.author.logoUrl && <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />}
                        </figcaption>
                    </figure>
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((column, columnIdx) => (
                                <div
                                    key={columnIdx}
                                    className={classNames(
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'space-y-8'
                                    )}
                                >
                                    {column.map((testimonial) => (
                                        <figure
                                            key={testimonial.author.handle}
                                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                        >
                                            <blockquote className="text-gray-900">
                                                <p>{`“${testimonial.body}”`}</p>
                                            </blockquote>
                                            <figcaption className="mt-6 flex items-center gap-x-4">
                                                {testimonial.author.imageUrl &&
                                                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                                                }
                                                <div>
                                                    <div className="font-semibold">{testimonial.author.name}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
