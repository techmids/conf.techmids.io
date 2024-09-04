import placeholderImg from "./public/speakers/Person_Image_Placeholder.png"

export const Sessions = {
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
          Retention of DevOps engineers is a difficult challenge for teams. In 2023, 37.5% of the Infragistics Reveal Survey said they expect to find it difficult to find developers in 2023.To keep Software Engineers happy, we need to know how to make them unhappy.
        </p>
        <p>
          Join me as I talk about antipatterns in management, development, testing and monitoring patterns that can stop you from retaining awesome DevOps engineers. Specifically I'll cover:
        </p>
        <p>
          1. Alert volume evaluation, and how we alert bombardment leads to burnout and alert fatigue. I'll also cover best practices for on-call rotation and BYOD usage to stop engineer burnout even when they're not on call.
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
  "MaxWoolf": {
    name: "Max Woolf",
    jobTitle: "Staff Backend Engineer at GitLab",
    bio: (
      <>
        <p>
          Max is an experienced software engineer with over a decade of experience in building web and mobile applications for everyone from 1-person start-ups to multinational charities and corporations. He's currently a Staff Backend Engineer at GitLab.
        </p>
        <p>
          When not in front of a computer, he's usually walking up a hill somewhere or hanging out with his dogs.
        </p>
      </>
    ),
    talkTitle:
      "Ruby's still cool - Let's build a blog in 20 minutes",
    description: (
      <>
        <p>
          Ruby has a reputation for being last decade's language and Rails; last decade's framework but I still believe that Rails is unparalleled in its productivity and developer-friendliness when building web applications. I've bet my career on it.
        </p>
        <p>
          I'm not all talk though. Watch me go from zero, to a working blog _with tests_ in 20 minutes using Ruby on Rails, live.
        </p>
      </>
    ),
    image: placeholderImg,
    linkedin: "",
    twitter: "",
    website: "https://max.woolf.io",
    sessionType: "session",
    speakerCard: false,
    //speakerCardImage: "placeholder.png",
  },

  "BeckettLeclaire": {
    name: "Beckett Leclaire",
    jobTitle: "",
    bio: (
      <>
        <p>
          Beckett LeClair (MSc, MBCS, MIScT) is a Senior Engineer with an interest ethical technology and innovation. He is also a passionate advocate for D&I in tech.
        </p>
      </>
    ),
    talkTitle:
      "Responsible AI is a Community Effort",
    description: (
      <>
        <p>
          AI is becoming increasingly available to all, yet even the largest and most expensive models still suffer from bias, discrimination, and other unfairness problems.
        </p>
        <p>
          The good news is that absolutely anyone can get involved in making AI responsible for all.
        </p>
      </>
    ),
    image: placeholderImg,
    linkedin: "https://www.linkedin.com/in/beckett-l-687b7713b",
    twitter: "",
    website: "",
    sessionType: "session",
    speakerCard: false,
    //speakerCardImage: "placeholder.png",
  },
  "RyanHardwick": {
    name: "Ryan Hardwick",
    jobTitle: "Solution Architect at AWS",
    bio: (
      <>
        <p>
          I am a Solution Architect at AWS working in the Financial Services Industry. As part of my role, I help customers achieve their business goals through technological solutions. I work daily across the broad and deep offering of services from AWS, to build systems that are highly available, secure and scalable. Whilst I am a generalist Solution architect with experience across various domains, I have a particular interest in security.
        </p>
        <p>
          In addition to cloud architectures, for the past few years I have programmed on a large number of projects using a variety of different languages. I have found a lot of enjoyment in building these projects, which have allowed me to develop my full stack skills.
        </p>
      </>
    ),
    talkTitle:
      "Building a full stack application with AWS serverless technology",
    description: (
      <>
        <p>
            In this talk I will walkthrough how to build a full stack application hosted on AWS using serverless technology. This will include how to host a frontend website on S3 and CloudFront and how to host the backend using API Gateway and Lambda, retrieving information stored in a DynamoDB table. As part of the talk, I will explain the considerations when using the technology as well as the benefits regarding managed infrastructure, costs and scalability. If time allows, I could explain how authentication can be integrated into the architecture.
        </p>
      </>
    ),
    image: placeholderImg,
    linkedin: "https://www.linkedin.com/in/ryan-hardwick-028a281a0/",
    twitter: "",
    website: "",
    sessionType: "session",
    speakerCard: false,
    //speakerCardImage: "placeholder.png",
  },
  "CallumWhyte": {
    name: "Callum Whyte",
    jobTitle: "",
    bio: (
      <>
        <p>
          Callum Whyte is a x4 Microsoft MVP and x6 Umbraco MVP specialising in building robust scalable solutions on Azure and the .NET stack, as well as websites with the open-source Umbraco CMS.
        </p>
        <p>
          Away from his desk you can find him organising community events; from local meetups and hackathons, to global conferences and roadshows. He's an active contributor to open source projects, a regular speaker at events all over the world, as well as co-host of a weekly YouTube series “UmbraCoffee”!
        </p>
      </>
    ),
    talkTitle:
      "Build your own CoPilot",
    description: (
      <>
        <p>
          AI CoPilots are all the rage - but none quite offer that personalised butler service SciFi told us we might one day have.
        </p>
        <p>
          To understand what it takes to train a CoPilot, we will see how training a model works under-the-hood; discuss the importance of quality training data to craft a truly powerful and personalised experience, and safety or security concerns to consider when training a model on a public service.
        </p>
        <p>
          Moving beyond the (chat) box, we will leverage Azure's OpenAI Service and Semantic Kernel in .NET to create a custom AI CoPilot for internal applications or data. We will see how to train our own custom Codex model, for generating code and commands to perform bespoke tasks against a non-public API, plus some innovative ways to glue this together with a nice user experience.
        </p>
        <p>
          You will leave feeling excited about the power of custom CoPilots, and armed with the knowledge to build your own!
        </p>
      </>
    ),
    image: placeholderImg,
    linkedin: "https://www.linkedin.com/in/callumbwhyte/",
    twitter: "https://twitter.com/callumbwhyte",
    website: "https://github.com/callumbwhyte",
    sessionType: "session",
    speakerCard: false,
    //speakerCardImage: "placeholder.png",
  },
    "SimonEmms": {
    name: "Simon Emms",
    jobTitle: "",
    bio: (
        <>
            <p>
                Simon has been working as a software engineer since 2006, in which time he's done work for the likes of Gitpod, DPD, Specsavers, British Pathé, the Red Cross and others. Initially specialising in the NodeJS ecosystem, he's used pretty much all of the major languages over the years and since 2017 has been focused on building DevOps solutions and Cloud-native applications that help engineers to work faster and more productively.
            </p>
            <p>
                When not behind a computer he's a keen gardener, beekeeper and makes his own sausages.
            </p>
        </>
    ),
        talkTitle:
            "Tech is broken and AI won't fix it",
        description: (
            <>
                <p>
                    Tech is at a crisis point. Companies are complaining about a lack of skilled engineers, but won't recruit junior engineers to train up. Agile was designed to improve productivity, but ceremonies are followed ritualistically with little consideration of value. Recruitment often focuses on meaningless trivia rather than preparation for the job at hand.
                </p>
                <p>
                    The current trend in industry is to look to AI as a panacea. Unless we solve the underlying issues, AI will compound these and many other problems rather than being the solution.
                </p>
            </>
        ),
        image: placeholderImg,
        linkedin: "",
        twitter: "twitter.com/theshroppiebeek",
        website: "simonemms.com",
        sessionType: "session",
        speakerCard: false,
        //speakerCardImage: "placeholder.png",
    },
    "StuartHarrison": {
    name: "Stuart Harrison",
    jobTitle: "",
    bio: (
        <>
            <p>
                I'm a software developer of almost 15 years standing, progressing from journalism, into we editing and finally into software development. I have worked in the public sector most of my working life, working on projects for the Ministry of Justice, Department for Education as well as countless local authorities and arms length bodies. I am a grade 3 saxophonist, sometime DJ, lapsed homebrewer and tired dad of two (and one dog)
            </p>
        </>
    ),
    talkTitle:
        "Progressing into senior leadership with ADHD",
    description: (
        <>
            <p>
                My name's Stu and I have ADHD. It's been a blessing and a curse for a good chunk of my life, but I manage it with both coping strategies and medication. However, as I've progressed up the ladder into a tech lead position, I've found I need to adapt how I work to be as effective as possible.
            </p>
            <p>

                In this talk I'll talk about:

            </p>
            <p>
                - What ADHD is (and isn't)
                - My personal history with my diagnosis
                - How it affects me in my working life
                - What strategies I used to help me be an effective tech lead

            </p>
            <p>
                I'm hoping people will come away from this session, not only with an understanding of ADHD as a condition, but also how they can use the strategies I use to help them in their working life, whether they have ADHD or not.
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
