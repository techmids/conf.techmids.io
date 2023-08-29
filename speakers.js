import jamieTannaImg from "./public/speakers/jamie-tanna.png"
import estherAgbajeImg from "./public/speakers/esther-agbaje.png"
import steveMcDougallImg from "./public/speakers/steve-mcdougall.jpg"
import mollyWattImg from "./public/speakers/molly-watt.png"

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
    //     },
}
