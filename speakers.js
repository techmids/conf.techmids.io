import placeholderImg from "./public/speakers/Person_Image_Placeholder.png"

export const Sessions= {
    "CarlyRichmond": {
        name: "Carly Richmond",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Carly is a Principal Developer Advocate and Manager at Elastic, based in London, UK. Before joining Elastic in 2022, she spent over 10 years working as a technologist at a large investment bank, specialising in front-end web development and agility. She is a UI developer, who occasionally dabbles in writing backend services, a speaker and a regular blogger.
                </p>
                <p>
                    She enjoys cooking, photography, drinking tea, and chasing after her young son in her spare time.
                </p>
            </>
        ),
        talkTitle:
            "How to Destroy a Software Engineer",
        description: (
            <>
                <p>
                    Retention of DevOps engineers is a difficult challenge for teams. In 2023, 37.5% of the Infragistics Reveal Survey said they expect to find it difficult to find developers in 2023.  To keep Software Engineers happy, we need to know how to make them unhappy.
                </p>
                <p>
                    Join me as I talk about antipatterns in management, development, testing and monitoring patterns that can stop you from retaining awesome DevOps engineers. Specifically I'll cover:
                </p>
                <p>
                    1. Alert volume evaluation, and how we alert bombardment leads to burnout and alert fatigue. I’ll also cover best practices for on-call rotation and BYOD usage to stop engineer burnout even when they’re not on call.
                </p>
                <p>
                    2. SLO and metric comparison across teams, and how comparing team metrics rather than improving metrics such as DORA over time for a single team breeds animosity and demoralises engineers.
                </p>
                <p>
                    3. Code reviews with jerkish or unhelpful comments, and the difference between radical candour through constructive feedback and pulling people down.
                </p>
                <p>
                    4. Tool overload, and how selecting a common toolbox reduces the need for context switching.
                </p>
                <p>
                    5. Flaky or poor testing, and how it builds mistrust and apathy in platform quality.
                </p>
                <p>
                    6. Constant work items and a lack of learning time, and how a lack of training opportunities and space to grow leaves engineers feeling stuck.
                </p>
                <p>
                    7. Lack of support for conference attendance and speaking, and how community connections help engineers grow and learn.
                </p>
            </>
        ),
        image: placeholderImg,
        linkedin: "https://www.linkedin.com/in/carly-richmond/",
        twitter: "https://twitter.com/CarlyLRichmond",
        website: "https://carlyrichmond.com/",
        sessionType: "session",
        speakerCard: false,
        // speakerCardImage: "placeholder.png",
    },
    "JoshuaMo": {
        name: "Joshua Mo",
        jobTitle: "",
        bio: (
            <>
                <p>
                    DevRel Engineer at Shuttle.rs. 2 years of programming experience, professionally working for a year and 2 months in the cloud dev/open-source space. Functional programming enjoyer, Doom Emacs user, chief Rust meme engineer.
                </p>
            </>
        ),
        talkTitle:
            "An Intro to Rust and WASM",
        description: (
            <>
                <p>
                    A lightweight introduction to using Rust and WASM for JavaScript, blazing fast included.
                </p>
            </>
        ),
        image: placeholderImg,
        linkedin: "https://www.linkedin.com/in/joshua-mo-4146aa220/",
        twitter: "https://x.com/joshmo_dev",
        website: " https://github.com/joshua-mo-143/",
        sessionType: "session",
        speakerCard: false,
        // speakerCardImage: "placeholder.png",
    },
    "SteveWade": {
        name: "Steve Wade",
        jobTitle: "Founder of @cloudnativeclub",
        bio: (
            <>
                <p>
                    Steve Wade was one of the founding engineers at KSOC, a Kubernetes security startup. Before his current role, Steve held Platform leadership roles at UnderWrite Me and Mettle. During these roles, he leveraged the concept of GitOps to provide self-service platforms to developers. He has also provided Kubernetes consultancy and training worldwide as a Consultant at Apprenda. Steve has served in leadership roles across many verticals, including real estate, gaming, and the UK parliament. Steve has a BSc in Computer Science and is passionate about cloud-native software development and distributed computing. He can be found as @swade1987 on Twitter and GitHub.
                </p>
            </>
        ),
        talkTitle:
            "From free-kicks to git commits",
        description: (
            <>
                <p>
                    Join me as I share my unconventional journey from professional footballer to technology, specifically focusing on building self-service platforms for developers on Kubernetes. This talk will chart the course of my career transformation, highlighting the pivotal moments that led me from the sports field to the tech field. Starting with my initial passion for football, I will delve into the lessons of teamwork, discipline, and strategy that I carried into my tech career. The transition could have been more straightforward, but it was filled with challenges, learning curves, and the relentless pursuit of personal and professional growth. As we dive into the tech part of my journey, I'll share how I discovered Kubernetes and why I chose to specialise in building developer self-service platforms. I'll explore the parallels between orchestrating a winning football team and orchestrating containers and services in a cloud-native environment.
                </p>
                <p>
                    Key takeaways from my talk will include:
                </p>
                <p>
                    Adapting Skills from Sports to Tech: How the soft skills honed on the football field can be invaluable in the tech industry.
                </p>
                <p>
                    The Learning Curve: The resources, communities, and strategies that facilitated my transition and how you can leverage these in your career pivot.
                </p>
                <p>
                    Kubernetes and Beyond: An overview of Kubernetes, its significance in the modern cloud infrastructure, and why it's a game-changer for developing self-service platforms.
                </p>
                <p>
                    Building for Developers: Insights into the design and implementation of self-service platforms on Kubernetes, focusing on developer experience, automation, and scalability.
                </p>
                <p>
                    Lessons Learned: Key lessons from my journey include the importance of continuous learning, embracing failure, and the power of community support.
                </p>
            </>
        ),
        image: placeholderImg,
        linkedin: "https://www.linkedin.com/in/stevendavidwade",
        twitter: "https://twitter.com/swade1987",
        website: "",
        sessionType: "session",
        speakerCard: false,
        // speakerCardImage: "placeholder.png",
    },
    "PaulDragoonis": {
        name: "Paul Dragoonis",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Paul, from Scotland, is an open-source contributor, public speaker, trainer, and consultant by trade. He is a member of the CD Foundation, Jenkins, Dagger, PHP, and PHP-FIG.
                </p>
                <p>
                    Throughout his career, he has held positions such as Director of Engineering, CTO, Principal Engineer, and so on. He has spent many years modernizing CI/CD pipelines and embedding continuous delivery processes and solutions into businesses. He enjoys sharing his experience in the space with the wider community by way of private training or conference speaking.
                </p>
            </>
        ),
        talkTitle:
            "Dagger: The Future of CI/CD",
        description: (
            <>
                <p>
                    I truly believe Dagger is the next evolution of CI/CD implementation. Myself, as a subject matter expert in CI/CD, I spent years building the perfect system to mitigate challenges we face at a tech level and business level. Now along comes Dagger, created by Solomon, the founder of Docker, and it makes so many challenges disappear, by design, and opens up so many new possibilties along the way.
                </p>
                <p>

                    In this talk I'll be your guide in into Dagger-land, demonstrating how to strategically start integrating this into your existing projects and start benefiting from the awesomeness, immediately.
                </p>
            </>
        ),
        image: placeholderImg,
        linkedin: "https://www.linkedin.com/in/pauldragoonis/",
        twitter: "https://twitter.com/dr4goonis",
        website: "",
        sessionType: "session",
        speakerCard: false,
        // speakerCardImage: "placeholder.png",
    },
    "": {
        name: "",
        jobTitle: "",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "",
        description: (
            <>
                <p>
                </p>
            </>
        ),
        image: placeholderImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "session",
        speakerCard: false,
        //speakerCardImage: "placeholder.png",
    },
}


// "": {
//     name: "",
//     jobTitle: "",
//     bio: (
//         <>
//             <p>
//             </p>
//         </>
//     ),
//     talkTitle:
//         "",
//     description: (
//         <>
//             <p>
//             </p>
//         </>
//     ),
//     image: placeholderImg,
//     linkedin: "",
//     twitter: "",
//     website: "",
//     sessionType: "session",
//     speakerCard: false,
//     //speakerCardImage: "placeholder.png",
// },
