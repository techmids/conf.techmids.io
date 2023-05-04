import { CheckIcon } from '@heroicons/react/solid'
import Head from "next/head";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Images} from "@/components/Images";
import SponsorUsCTA from "@/components/SponsorUsCTA";
import {EVENT} from "../../event";
import {Sponsors} from "@/components/Sponsors";

const tiers = [
    {
        name: 'Lanyard',
        id: 'tier-lanyard',
        quantity: 1,
        quantitySold: 1,
        price: "SOLD OUT",
        features: [
            'Ability to leave your stickers/swag at our swag drop table',
            'Your logo on our lanyards',
        ],
        featured: false,
    },
    {
        name: ' Talent Solutions',
        id: 'tier-talent',
        quantity: 1,
        quantitySold: 1,
        price: "SOLD OUT",
        features: [
            'Ability to leave your stickers/swag at our swag drop table',
            'A table at the conference to provide talent solutions to attendees',
        ],
        featured: false,
    },
    {
        name: 'Badge',
        id: 'tier-badge',
        quantity: 1,
        quantitySold: 0,
        price: "£2500 + VAT",
        features: [
            'Ability to leave your stickers/swag at our swag drop table',
            'Your logo on our Conference Badges',
            'Two free tickets',
        ],
        featured: false,
    },
    {
        name: 'Bronze',
        id: 'tier-bronze',
        quantity: 10,
        quantitySold: 7,
        price: "£1250 + VAT",
        features: [
            'Small logos on our website',
            'An announcement on Twitter and LinkedIn',
            'Small logo on our slide deck',
            'Ability to leave your stickers/swag at our swag drop table',
            // 'Two free tickets'
        ],
        featured: false,
    },
    {
        name: 'Silver',
        id: 'tier-silver',
        price: "£3000 + VAT",
        quantity: 6,
        quantitySold: 3,
        features: [
            'Medium logos on our website',
            'A dedicated tweet and LinkedIn post',
            'Medium logo on our slide deck',
            'A table at the conference to talk to attendees',
            // '42" TV screen at your table',
            // 'Four free tickets'
        ],
        featured: false,
    },
    {
        name: 'Gold',
        id: 'tier-gold',
        price: "£6000 + VAT",
        quantity: 5,
        quantitySold: 3,
        features: [
            'Everything in Silver',
            'Large logos on our website',
            'A dedicated tweet and LinkedIn post',
            'Large logo on our slide deck',
            'A table at the conference to talk to attendees',
            // '50" TV screen at your table',
            // 'Six free tickets',
        ],
        featured: false,
    },
    {
        name: 'Live-Stream',
        id: 'tier-live',
        quantity: 1,
        quantitySold: 0,
        price: "£6000 + VAT",
        features: [
            'Ability to leave your stickers/swag at our swag drop table',
            'Exclusive branding on the main-track live-stream and recordings',
        ],
        featured: false,
    },
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
    "TechMids is the only developer conference in the West Midlands",
    "We have a diverse audience of developers, designers, testers, managers and more",
    "This is the 'Must Attend' event of the year",
    "We are the best way to get in front of the West Midlands developer community",
    "We sell out of tickets every year, filling the 350+ seater venue",
    "We have a great reputation in the community",
    "Run by a team of volunteers, we are a not-for-profit event",
    "Associate yourself with a great event and a great community",
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
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
                <div className="bg-white py-12 sm:py-24">
                    <div className="mx-auto px-6 lg:px-8 lg:max-w-[75%]">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Why Sponsor Us?
                            </p>

                        </div>
                        <p className="mx-auto mt-6 mb-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                            {EVENT.date}
                        </p>
                        {reasons.map((reason) => (
                            <li className="mx-auto max-w-4xl text-left text-lg leading-8 text-gray-600">{reason}</li>
                        ))}

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
                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
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
                                            `${tier.quantity - tier.quantitySold} of ${tier.quantity} available`:
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
                                            'bg-yellow-300 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline-yellow-400',
                                            'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                        )}
                                    >
                                        {tier.quantitySold !== tier.quantity? `Contact Us`: `Sold Out`}
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
                                                    className={classNames(tier.featured ? 'text-white' : 'text-yellow-300', 'h-6 w-5 flex-none')}
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
