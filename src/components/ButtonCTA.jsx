import { ButtonLink } from '@/components/Button'
import {EVENT} from "../../event";
import Head from "next/head";

export function ButtonCTA() {
    return (
        <>
            <Head>
                <script src="https://js.tito.io/v2/with/inline" async></script>
            </Head>
            <div className="px-4 my-10 grid gap-10">
                <div className="my-10 grid grid-cols-1 gap-10">
                    {EVENT.onSale &&
                    <tito-widget
                        event={EVENT.titoId}
                    ></tito-widget>
                    }
                    <ButtonLink
                        href={EVENT.ticketLink}
                        rel="noopener"
                        target="_blank"
                        className="w-full"
                    >
                        Get your ticket now
                    </ButtonLink>
                </div>
                {EVENT.CFPOpen &&
                    <div className="my-10 grid grid-cols-1 gap-10">
                        <ButtonLink
                            href={EVENT.CFPLink}
                            rel="noopener"
                            target="_blank"
                            className="w-full"
                        >
                            Submit to our CFP
                        </ButtonLink>
                    </div>}
                <dl className="grid grid-cols-2 gap-y-6 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                    {[
                        ['Spaces', `Limited to ${EVENT.capacity} seats`],
                        ['Venue', EVENT.venue],
                        ['Location', EVENT.address],
                    ].map(([name, value]) => (
                        <div key={name}>
                            <dt className="font-mono text-sm text-brand-500">{name}</dt>
                            <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-brand-700">
                                {value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    )
}
