import {CheckIcon, HeartIcon, MicrophoneIcon, QuestionMarkCircleIcon, UsersIcon} from '@heroicons/react/solid'
import Head from "next/head";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Images} from "@/components/Images";
import SponsorUsCTA from "@/components/SponsorUsCTA";
import {EVENT} from "../../event";
import {Sponsors} from "@/components/Sponsors";
import {TicketIcon, CalendarIcon, GlobeIcon} from "@heroicons/react/outline";

const tiers = [
    {
        name: 'Lanyard',
        id: 'tier-lanyard',
        quantity: 1,
        quantitySold: 0,
        price: "£3000 + VAT",
        features: [
            'Your logo on our lanyards',
            'Ability to leave your stickers/swag at our swag drop table',
            'Small logos on our website',
            'An announcement on Twitter and LinkedIn',
            'Small logo on our slide deck',
        ],
        featured: false,
    },
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

    // "We are the best way to get in front of the West Midlands developer community",
    // "We sell out of tickets every year",
    // "We have a great reputation in the community",
    // "Run by a team of volunteers, we are a not-for-profit event",
    // "Associate yourself with a great event and a great community",
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CredentialsSection = () => {
    const stats = [
        { id: 1, name: 'Combined (all years) Event Attendees', value: '1,000+' },
        { id: 2, name: 'Previous Sponsors', value: '35+' },
        { id: 3, name: 'Total Speakers', value: '60+' },
    ]

return (
    <div className="mt-5 relative bg-white pt-6">
        <img
            className="rounded-3xl h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
            src="/mp-leon-adato.jpg"
            alt=""
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-8 text-brand-900">Our track record</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        4 Amazing events over 3 years
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        The team behind TechMids have run 4 non-profit conferences over the last 3 years. We have a great reputation
                        in the community and are the 'Must Attend' event of the year.
                    </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Each year we sell out
                    </p>
                    <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                                <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
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

                        <CredentialsSection/>

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
                    <SponsorUsCTA/>
                    <Sponsors/>
                </div>
            </main>
            <Footer />
        </>
    )
}
