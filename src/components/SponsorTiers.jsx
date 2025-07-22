import Image from "next/image";
import {sponsorTiers} from "../../event";
const imageDimensions = {
    width: 200,
    height: 200
}

export function SponsorTiers() {
    function printSponsors(tier, sponsors, imageFactor =1) {
        if (sponsors?.length === 0) {
            return null
        }
        return (
            <div className="py-8">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
                    {tier} Sponsor{sponsors.length > 1 ? "s": null}
                </p>
                <div className="mx-auto max-w-[70%] mt-6 flex flex-wrap justify-evenly grid-cols-3 gap-0.5 lg:mt-8" >
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="flex justify-center items-center p-10">
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    width={imageDimensions.width * imageFactor}
                                    height={imageDimensions.height * imageFactor}
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="mt-12 mb-8 bg-white">
            {printSponsors("Headline", sponsorTiers.headline.sponsors, 2)}
            {printSponsors("Bronze", sponsorTiers.bronze.sponsors)}

        </div>
    )
}
