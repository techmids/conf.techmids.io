import jamieTannaImg from "./public/speakers/jamie-tanna.png"
import estherAgbajeImg from "./public/speakers/esther-agbaje.png"
import steveMcDougallImg from "./public/speakers/steve-mcdougall.jpg"
import mollyWattImg from "./public/speakers/molly-watt.png"
import poojaMistryImg from "./public/speakers/pooja.png"
import daliImg from "./public/speakers/dali-h.png"
import chrisPImg from "./public/speakers/chris-p.jpeg"
import jamesSecondeImg from "./public/speakers/james-seconde.jpg"

export const Sessions= {
    "jamie-tanna": {
        name: "Jamie Tanna",
        jobTitle: "Senior Software Engineer, Elastic",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Quantifying your reliance on Open Source software",
        description: (
            <>
                <p>
                    I've always been interested in the composition of Open Source and internal dependencies that my projects use, and after years of wanting some way to query the data, I went ahead and built it!
                </p>
                <p>

                    Having access to this data has allowed me and my team to get a view of what our most popular languages or frameworks are, which packages we didn't realise we so heavily rely on, determine how many dependencies are using end-of-life software, or just understand the way that internally-built libraries are used across the organisation.
                </p>
                <p>
                    This data has given my company's developers, leadership and the security team a better view of the landscape of our ever growing dependencies on Open Source, so we can appropriately upgrade, migrate, and support projects.
                </p>
                <p>
                    In this talk, you'll learn that it's straightforward to do this yourself with Free and Open Source Software, as well as looking at some examples of the data that you can get out of this tooling for your own purposes.
                </p>
                <p>
                    https://talks.jvt.me/dmd/
                </p>
            </>
        ),
        image: jamieTannaImg,
        linkedin: "",
        twitter: "",
        website: "https://www.jvt.me/",
        sessionType: "session",
        speakerCard: 'Jamie Tanna.png',
    },
    "esther-agbaje": {
        name: "Esther Agbaje",
        jobTitle: "Developer Advocate, Directus",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Rethinking Content Modelling for Unforgettable User Experiences",
        description: (
            <>
                <p>
                    Effective content modeling is essential for creating a flawless user experience that drives product success. However, as content complexity and volume increase in a company, managing it all can seem overwhelming.
                </p>
                <p>
                    In this talk, developers will walk away with practical strategies for rethinking their content model to improve maintainability, developer experience and scalability - ultimately reducing technical debt and delivering a seamless user experience.
                </p>
            </>
        ),
        image: estherAgbajeImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: 'Esther Agbaje.png',
    },
    "steve-mcdougall": {
        name: "Steve McDougall",
        jobTitle: "Developer Advocate, Treblle",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle: "Fantastic SDKs, and how to build them",
        description: (
            <>
                <p>
                    In today's era of digital ecosystems, the role of SDKs has become pivotal in ensuring that APIs are accessible, usable, and provide value to their intended audience: developers. While auto-generation of SDKs may seem a time-efficient approach, it often falls short in terms of usability and developer experience. In this talk, we delve deep into the craft of building SDKs that are not just functional, but truly fantastic.
                </p>
                <p>
                    We'll commence by dissecting the limitations of auto-generated SDKs, underscoring how they might inadvertently hamper developer adoption and experience. By examining real-world case studies, attendees will gain insights into the successes and pitfalls experienced by others in the SDK development realm.
                </p>
            </>
        ),
        image: steveMcDougallImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: 'Steve McDougall.png',
    },
    "molly-watt": {
        name: "Molly Watt",
        jobTitle: "Accessibility specialist, Nexer Digital",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle: "",
        description: (
            <>
                <p>
                </p>
            </>
        ),
        image: mollyWattImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: 'Molly Watt.png',
    },
    "poonja-mistry": {
        name: "Pooja Mistry",
        jobTitle: "Developer Advocate, Postman",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Essential Insights into API-first Tooling",
        description: (
            <>
                <p>
                    API-first tooling plays a crucial role in the realm of API testing. Nevertheless, users frequently find themselves amazed as they discover the extensive range and diverse set of functionalities that the platform for API tooling encompasses, stretching far beyond the confines of testing alone. During this session, I am here to impart valuable insights and techniques I've acquired throughout my API-first tooling journey that have made me say, "Whoa, that's awesome!"
                </p>
            </>
        ),
        image: poojaMistryImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: undefined,
    },
    "christopher-phillips": {
        name: "Christopher Phillips",
        jobTitle: "IBM STSM and Integration Architect",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "If an API is published and no one is told, does it have value?",
        description: (
            <>
                <p>
                    API Consumers are what dictate the value to an API Estate. This session will go through the key values of an API and how focusing on the consumer allows an API to be successful.
                </p>
                <p>
                    In this talk, we'll go through the changing way that API value is being determined by business. The questions being asked is no longer "how many APIs are we exposing?", but "How many of our APIs are being used?" or even "what value are we gaining from our APIs?".
                </p>
            </>
        ),
        image: chrisPImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: undefined,
    },
    "dalwinder-bagdi": {
        name: "Dalwinder Bagdi",
        jobTitle: "Client Success Manager, IBM",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "If an API is published and no one is told, does it have value?",
        description: (
            <>
                <p>
                    API Consumers are what dictate the value to an API Estate. This session will go through the key values of an API and how focusing on the consumer allows an API to be successful.
                </p>
                <p>
                    In this talk, we'll go through the changing way that API value is being determined by business. The questions being asked is no longer "how many APIs are we exposing?", but "How many of our APIs are being used?" or even "what value are we gaining from our APIs?".
                </p>
            </>
        ),
        image: daliImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: undefined,
    },
    "james-seconde": {
            name: "James Seconde",
            jobTitle: "Senior Developer Advocate, Vonage",
            bio: (
                <>
                    <p>
                    </p>
                </>
            ),
            talkTitle:
                "Awful APIs: A History Lesson in Painful Industry Mistakes",
            description: (
                <>
                    <p>
                        In 1905, the Spanish philosopher George Santayana famously wrote the line "Those who cannot remember the past are condemned to repeat it." Nothing can escape this inevitability: like death and taxes, we have all looked at our screens in bewilderment at an HTTP 200 OK response that contains text in the body reading "er, actually this is an error", or marvelled at pagination design that creates an infinite loop for you to consume.
                    </p>
                    <p>
                        How did we get here? In this session I will be meandering through history, real examples and anecdotes. The internet is littered with a graveyard of poorly designed APIs. Instead of launching yourself head-first into this murky world of quirks, maybe take a moment to learn the history of APIs and their mistakes so you don't repeat them.
                    </p>
                </>
            ),
            image: jamesSecondeImg,
            linkedin: "secondej",
            twitter: "secondej",
            website: "",
            sessionType: "session",
            speakerCard: undefined,
        },
    //"": {
    //         name: "",
    //         jobTitle: "",
    //         bio: (
    //             <>
    //                 <p>
    //                 </p>
    //             </>
    //         ),
    //         talkTitle:
    //             "",
    //         description: (
    //             <>
    //                 <p>
    //                 </p>
    //             </>
    //         ),
    //         image: "",
    //         linkedin: "",
    //         twitter: "",
    //         website: "",
    //         sessionType: "",
    //         speakerCard: undefined,
    //     },
}
