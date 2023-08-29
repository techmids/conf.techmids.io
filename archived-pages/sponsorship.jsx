import {CheckIcon, HeartIcon, MicrophoneIcon, QuestionMarkCircleIcon, UsersIcon} from '@heroicons/react/solid'
import Head from "next/head";
import {Header} from "@/components/Header";
import {Images} from "@/components/Images";
import {EVENT} from "../event";
import {Sponsors} from "@/components/Sponsors";
import {TicketIcon, CalendarIcon, GlobeIcon} from "@heroicons/react/outline";

const tiers = [
    // {
    //     name: 'Lanyard',
    //     id: 'tier-lanyard',
    //     quantity: 1,
    //     quantitySold: 0,
    //     price: "£3000 + VAT",
    //     features: [
    //         'Your logo on our lanyards',
    //         'Ability to leave your stickers/swag at our swag drop table',
    //         'Small logos on our website',
    //         'An announcement on Twitter and LinkedIn',
    //         'Small logo on our slide deck',
    //     ],
    //     featured: false,
    // },
    {
        name: 'Badge',
        id: 'tier-badge',
        quantity: 1,
        quantitySold: 0,
        price: "£3000 + VAT",
        features: [
            'Your logo on our Conference Badges',
            'Ability to leave your stickers/swag at our swag drop table',
            'Small logos on our website',
            'An announcement on Twitter and LinkedIn',
            'Small logo on our slide deck',
        ],
        featured: false,
    },
    {
        name: 'Bronze',
        id: 'tier-bronze',
        quantity: 10,
        quantitySold: 0,
        price: "£1750 + VAT",
        features: [
            'Small logos on our website',
            'An announcement on Twitter and LinkedIn',
            'Small logo on our slide deck',
            'Ability to leave your stickers/swag at our swag drop table',
        ],
        featured: false,
    },
    {
        name: 'Silver',
        id: 'tier-silver',
        price: "£3000 + VAT",
        quantity: 10,
        quantitySold: 0,
        features: [
            'Medium logos on our website',
            'A dedicated tweet and LinkedIn post',
            'Medium logo on our slide deck',
            'A table at the conference to talk to attendees',
        ],
        featured: false,
    },
    {
        name: 'Gold',
        id: 'tier-gold',
        price: "£6000 + VAT",
        quantity: 5,
        quantitySold: 0,
        features: [
            'Everything in Silver',
            'Large logos on our website',
            'Large logo on our slide deck',
            'A table at the conference to talk to attendees',
        ],
        featured: false,
    },
    {
        name: 'Platinum',
        id: 'tier-platinum',
        price: "£15000 + VAT",
        quantity: 2,
        quantitySold: 1,
        features: [
            'Everything in Gold',
            'Dedicated sponsorship and branding (e.g. rollup banners) at the conference',
            'Be 1 of 2 main sponsors of the conference',
        ],
        featured: false,
    },
    {
        name: 'Evening Event',
        id: 'tier-evening',
        price: "£9000 + VAT",
        quantity: 1,
        quantitySold: 0,
        features: [
            'Exclusive sponsorship of the evening event',
            'Dedicated sponsorship and branding (e.g. rollup banners) at the evening event',
            'Large logos on our website',
            'A dedicated tweet and LinkedIn post',
            'Large logo on our slide deck',
        ],
        featured: false,
    },
    // {
    //     name: 'Live-Stream',
    //     id: 'tier-live',
    //     quantity: 1,
    //     quantitySold: 0,
    //     price: "£6000 + VAT",
    //     features: [
    //         'Ability to leave your stickers/swag at our swag drop table',
    //         'Exclusive branding on the main-track live-stream and recordings',
    //     ],
    //     featured: false,
    // },
    {
        name: 'Custom',
        id: 'tier-custom',
        price: 'Custom',
        quantity: 1,
        quantitySold: 0,
        features: [
            'Custom Benefits',
            'Packages tailored to your needs'
        ],
        featured: true,
    },
]

const reasons = [
    { description: "TechMids is the only developer conference in the West Midlands", icon: QuestionMarkCircleIcon},
    { description: "We have a diverse audience of developers, designers, testers, managers and more", icon: UsersIcon},
    { description: "This is the 'Must Attend' event of the year", icon: CalendarIcon},
    { description: "We are the best way to get in front of the West Midlands developer community", icon: MicrophoneIcon},
    { description: "We sell out of tickets every year", icon: TicketIcon},
    { description: "We have a great reputation in the community", icon: HeartIcon},
    { description: "Run by a team of volunteers, we are a not-for-profit event", icon: GlobeIcon},
    { description: "Associate yourself with a great event and a great community", icon: CheckIcon},

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CredentialsSection = () => {
    const stats = [
        { id: 1, name: 'Combined Event Attendees', value: '1,000+' },
        { id: 2, name: 'Previous Sponsors', value: '35+' },
        { id: 3, name: 'Total Speakers', value: '60+' },
    ]

return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div
                className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h2 className="text-base font-semibold leading-8 text-brand-500">Our track record</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    4 Amazing conferences over 3 years
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    The team behind TechMids have run 4 non-profit conferences over the last 3 years. We have a great reputation
                    in the community and are the 'Must Attend' event of the year.
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                        <dt className="text-sm leading-6">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </div>
)
}

const Reasons = () => {
    return (
        <div className="bg-btw-blue py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-base font-semibold leading-7 text-white">Why us?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-500 sm:text-4xl">TechMids October 2023</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Find out about us and the collaboration opportunities we have available to promote your brand.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                    {reasons.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-white">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-brand-500" aria-hidden="true" />
                                {/*{feature.name}*/}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

export default function Sponsorship() {
    return (
        <>
            <Head>
                <title>TechMids Conf - A community-driven tech conference</title>
                <meta
                    name="description"
                    content={`TechMids Conf is an all day, full stack conference on ${EVENT.date}. Come along for a day of inspiring talks, social chatter and fun.`}
                />
                <meta name="image" property="og:image" content="/launch.png"/>
            </Head>
            <Header />
            <main>
                {Reasons()}
                <CredentialsSection/>
                <div className="bg-white py-12 sm:py-24">
                    <div className="mx-auto px-6 lg:px-8 lg:max-w-[75%]">
                        {/*<div className="mx-auto max-w-4xl text-center">*/}
                        {/*    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">*/}
                        {/*        Why Sponsor Us?*/}
                        {/*    </p>*/}

                        {/*</div>*/}
                        {/*<p className="mx-auto mt-6 mb-6 max-w-2xl text-center text-lg leading-8 text-gray-600">*/}
                        {/*    {EVENT.date}*/}
                        {/*</p>*/}
                        {/*{reasons.map((reason) => (*/}
                        {/*    <li className="mx-auto max-w-4xl text-left text-lg leading-8 text-gray-600">{reason}</li>*/}
                        {/*))}*/}


                        <div className="mx-auto max-w-4xl pt-6 text-center">
                            <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                We have provided a range of sponsorship tiers to suit all budgets and needs.
                            </p>
                        </div>
                        <p className="mx-auto mt-6 mb-6 max-w-4xl text-left text-lg leading-8 text-gray-600">
                            All packages are indicative and can be tailored to your needs. Please get in touch to discuss.

                            For example, want to sponsor Tote Bags? Great! We can do that. Want to sponsor the after party? Great! We can do that too.
                            We want to work with you to tailor a package that suits your needs.

                        </p>
                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {tiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    className={classNames(
                                        tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200',
                                        'rounded-3xl p-8 ring-1 xl:p-10'
                                    )}
                                >
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.featured ? 'text-white' : 'text-gray-900',
                                            'text-lg font-semibold leading-8'
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm leading-6')}>
                                        {tier.quantitySold < tier.quantity?
                                            `${tier.quantity - tier.quantitySold} available`:
                                            `Sold out`}

                                    </p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                <span
                    className={classNames(
                        tier.featured ? 'text-white' : 'text-gray-900',
                        'text-4xl font-bold tracking-tight'
                    )}
                >
                  {typeof tier.price === 'string' ? tier.price : tier.price}
                </span>
                                        {typeof tier.price !== 'string' ? (
                                            <span
                                                className={classNames(
                                                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                                                    'text-sm font-semibold leading-6'
                                                )}
                                            >
                    {}
                  </span>
                                        ) : null}
                                    </p>
                                    <a
                                        href="mailto:hello@techmids.io"
                                        aria-describedby={tier.id}
                                        className={classNames(
                                            'bg-brand-500 text-black shadow-sm hover:bg-brand-400 focus-visible:outline-brand-400',
                                            'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                        )}
                                    >
                                        {tier.quantitySold < tier.quantity? `Contact Us`: `Sold Out`}
                                    </a>
                                    <ul
                                        role="list"
                                        className={classNames(
                                            tier.featured ? 'text-gray-300' : 'text-gray-600',
                                            'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                                        )}
                                    >
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon
                                                    className={classNames(tier.featured ? 'text-white' : 'text-brand-500', 'h-6 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mx-auto max-w-4xl pt-6 text-center">
                            <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Don't see what you need?
                            </p>
                        </div>
                        <p className="mx-auto mt-6 mb-6 max-w-4xl text-left text-lg leading-8 text-gray-600">
                            Want to provide something truly unique? We can help by tailoring a package to suit your needs. Please get in touch to discuss.
                        </p>
                    </div>
                    <Images/>
                    <Sponsors/>
                </div>
            </main>
        </>
    )
}
