import Image from "next/image";

const sponsorTiers = {
    platinum: {
        name: "Platinum Sponsors",
        sponsors: []
    },
    gold: {
        name: "Gold Sponsors",
        sponsors: []
    },
    silver: {

        name: "Silver Sponsors",
        sponsors: [
            {
                name: "Open UK",
                image: "/sponsors/openuk.png",
                url: "https://www.openuk.uk/"
            }
        ]
    },
    bronze: {

        name: "Bronze Sponsors",
        sponsors: []
    },
}

export function SponsorTiers() {
    return (
        <div className="mt-12 mb-8 bg-white">
            <div className="py-8">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    Platinum Sponsors
                </p>
                <div className="mt-6 grid grid-cols-3 gap-0.5 lg:mt-8">
                    <div className="col-span-1"/>
                    {sponsorTiers.platinum.sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className="max-h-20"
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-8 lg:py-12">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    Gold Sponsors
                </p>
                <div className="mt-6 grid grid-cols-3 gap-0.5 lg:mt-8">
                    <div className="col-span-1"/>
                    {sponsorTiers.gold.sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className="max-h-20"
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-8">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    Silver Sponsors
                </p>
                <div className="mt-6 grid grid-cols-4 gap-0.5 lg:mt-8">
                    <div className="col-span-1"/>
                    {sponsorTiers.silver.sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className="max-h-20"
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-8">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    Bronze Sponsors
                </p>
                <div className="mt-6 grid grid-cols-4 gap-0.5 lg:mt-8">
                    <div className="col-span-1"/>
                    {sponsorTiers.bronze.sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className="max-h-20"
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
