import DanielTallentireImg from "./public/speakers/DanielTallentire.jpeg"
import JamesPrinceImg from "./public/speakers/JamesPrince.jpeg"
import KathrynLupinImg from "./public/speakers/KathrynLupin.jpeg"
import JoshMoImg from "./public/speakers/JoshuaMo.png"
import AbbyBangserImg from "./public/speakers/AbbyBangser.jpeg"
import AndrewFitzpatrickImg from "./public/speakers/AndrewFitzpatrick.jpeg"
import BeckiFloydImg from "./public/speakers/BeckiFloyd.jpeg"
import BeckettLeclairImg from "./public/speakers/BeckettLeclaire.jpeg"
import LauraHyattImg from "./public/speakers/LauraHyatt.png"
import MarkSimpsonImg from "./public/speakers/MarkSimpson.jpeg"
import PaulDragoonisImg from "./public/speakers/PaulDragoonis.png"
import RyanHardwickImg from "./public/speakers/RyanHardwick.jpeg"
import SimonEmmsImg from "./public/speakers/SimonEmms.jpeg"
import SimonGurneyImg from "./public/speakers/SimonGurney.jpeg"
import StuartHarrisonImg from "./public/speakers/StuartHarrison.jpg"
import SteveWadeImg from "./public/speakers/SteveWade.jpeg"
import CallumWhyteImg from "./public/speakers/CallumWhyte.jpeg"
import AmeenAladeImg from "./public/speakers/AmeenAlade.jpeg"
import CarlyRichmondImg from "./public/speakers/CarlyRichmond.jpeg"
import MaxWoolfImg from "./public/speakers/MaxWoolf.jpeg"
import PhillipMarksImg from "./public/speakers/PhillipMarks.jpeg"
import jacobBlackburnImg from "./public/speakers/jacobBlackburn.png"
import PlaceholderImg from "./public/speakers/Person_Image_Placeholder.png"
import AbdiTimerImg from "./public/speakers/AbdiTimer.jpg"
import ChrisMillerImg from "./public/speakers/ChrisMiller.png"
import KevinMaingiImg from "./public/speakers/KevinMaingi.png"
import MatthiasPatzoldImg from "./public/speakers/MatthiasPatzold.png"
import MikolajMaciejakImg from "./public/speakers/MikolajMaciejak.png"
import DominicImg from "./public/speakers/Dominic.jpg"

export const Sessions = {
    "CarlyRichmond": {
        name: "Carly Richmond",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Carly is a Principal Developer Advocate and Manager at Elastic, based in London, UK. Before joining
                    Elastic in 2022, she spent over 10 years working as a technologist at a large investment bank,
                    specialising in front-end web development and agility. She is a UI developer, who occasionally
                    dabbles in writing backend services, a speaker and a regular blogger.
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
                    Retention of Software Engineers is a difficult challenge for teams. In 2023, 37.5% of the
                    Infragistics Reveal Survey said they expect to find it difficult to find developers in 2023. To keep
                    Software Engineers happy, we need to know how to make them unhappy.
                </p>
                <p>
                    Join me as I talk about antipatterns in management, development, testing and monitoring patterns
                    that can stop you from retaining awesome Software Engineers. Specifically I'll cover:
                </p>
                <p>
                    1. Alert volume evaluation, and how we alert bombardment leads to burnout and alert fatigue. I'll
                    also cover best practices for on-call rotation and BYOD usage to stop engineer burnout even when
                    they're not on call.
                </p>
                <p>
                    2. SLO and metric comparison across teams, and how comparing team metrics rather than improving
                    metrics such as DORA over time for a single team breeds animosity and demoralises engineers.
                </p>
                <p>
                    3. Code reviews with jerkish or unhelpful comments, and the difference between radical candour
                    through constructive feedback and pulling people down.
                </p>
                <p>
                    4. Tool overload, and how selecting a common toolbox reduces the need for context switching.
                </p>
                <p>
                    5. Flaky or poor testing, and how it builds mistrust and apathy in platform quality.
                </p>
                <p>
                    6. Constant work items and a lack of learning time, and how a lack of training opportunities and
                    space to grow leaves engineers feeling stuck.
                </p>
                <p>
                    7. Lack of support for conference attendance and speaking, and how community connections help
                    engineers grow and learn.
                </p>
            </>
        ),
        image: CarlyRichmondImg,
        linkedin: "https://www.linkedin.com/in/carly-richmond/",
        twitter: "https://twitter.com/CarlyLRichmond",
        website: "https://carlyrichmond.com/",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "CarlyRichmond.jpeg",
    },
    "JoshuaMo": {
        name: "Joshua Mo",
        jobTitle: "",
        bio: (
            <>
                <p>
                    DevRel Engineer at Shuttle.rs. 2 years of programming experience, professionally working for a year
                    and 2 months in the cloud dev/open-source space. Functional programming enjoyer, Doom Emacs user,
                    chief Rust meme engineer.
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
        image: JoshMoImg,
        linkedin: "https://www.linkedin.com/in/joshua-mo-4146aa220/",
        twitter: "https://x.com/joshmo_dev",
        website: " https://github.com/joshua-mo-143/",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "JoshuaMo.png",
    },
    "SteveWade": {
        name: "Steve Wade",
        jobTitle: "Founder of @cloudnativeclub",
        bio: (
            <>
                <p>
                    Steve Wade founded The Cloud Native Club, a global community for cloud-native enthusiasts. He is
                    also a maintainer of the Flux Terraform Provider. As an experienced conference speaker, independent
                    cloud-native consultant, and trainer, Steve shares his expertise worldwide. He has held platform
                    leadership roles across various industries, including real estate, gaming, fintech, and the UK
                    Parliament. With a BSc in Computer Science, Steve is passionate about cloud-native software
                    development and distributed computing.
                </p>
            </>
        ),
        talkTitle:
            "From free-kicks to git commits",
        description: (
            <>
                <p>
                    Join me as I share my unconventional journey from professional footballer to technology,
                    specifically focusing on building self-service platforms for developers on Kubernetes. This talk
                    will chart the course of my career transformation, highlighting the pivotal moments that led me from
                    the sports field to the tech field. Starting with my initial passion for football, I will delve into
                    the lessons of teamwork, discipline, and strategy that I carried into my tech career. The transition
                    could have been more straightforward, but it was filled with challenges, learning curves, and the
                    relentless pursuit of personal and professional growth. As we dive into the tech part of my journey,
                    I'll share how I discovered Kubernetes and why I chose to specialise in building developer
                    self-service platforms. I'll explore the parallels between orchestrating a winning football team and
                    orchestrating containers and services in a cloud-native environment.
                </p>
                <p>
                    Key takeaways from my talk will include:
                </p>
                <p>
                    Adapting Skills from Sports to Tech: How the soft skills honed on the football field can be
                    invaluable in the tech industry.
                </p>
                <p>
                    The Learning Curve: The resources, communities, and strategies that facilitated my transition and
                    how you can leverage these in your career pivot.
                </p>
                <p>
                    Kubernetes and Beyond: An overview of Kubernetes, its significance in the modern cloud
                    infrastructure, and why it's a game-changer for developing self-service platforms.
                </p>
                <p>
                    Building for Developers: Insights into the design and implementation of self-service platforms on
                    Kubernetes, focusing on developer experience, automation, and scalability.
                </p>
                <p>
                    Lessons Learned: Key lessons from my journey include the importance of continuous learning,
                    embracing failure, and the power of community support.
                </p>
            </>
        ),
        image: SteveWadeImg,
        linkedin: "https://www.linkedin.com/in/stevendavidwade",
        twitter: "https://twitter.com/swade1987",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "SteveWade.jpeg",
    },
    "PaulDragoonis": {
        name: "Paul Dragoonis",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Paul, from Scotland, is an open-source contributor, public speaker, trainer, and consultant by
                    trade. He is a member of the CD Foundation, Jenkins, Dagger, PHP, and PHP-FIG.
                </p>
                <p>
                    Throughout his career, he has held positions such as Director of Engineering, CTO, Principal
                    Engineer, and so on. He has spent many years modernizing CI/CD pipelines and embedding continuous
                    delivery processes and solutions into businesses. He enjoys sharing his experience in the space with
                    the wider community by way of private training or conference speaking.
                </p>
            </>
        ),
        talkTitle:
            "Dagger: The Future of CI/CD",
        description: (
            <>
                <p>
                    I truly believe Dagger is the next evolution of CI/CD implementation. Myself, as a subject matter
                    expert in CI/CD, I spent years building the perfect system to mitigate challenges we face at a tech
                    level and business level. Now along comes Dagger, created by Solomon, the founder of Docker, and it
                    makes so many challenges disappear, by design, and opens up so many new possibilties along the way.
                </p>
                <p>

                    In this talk I'll be your guide in into Dagger-land, demonstrating how to strategically start
                    integrating this into your existing projects and start benefiting from the awesomeness, immediately.
                </p>
            </>
        ),
        image: PaulDragoonisImg,
        linkedin: "https://www.linkedin.com/in/pauldragoonis/",
        twitter: "https://twitter.com/dr4goonis",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "PaulDragoonis.png",
    },
    "MaxWoolf": {
        name: "Max Woolf",
        jobTitle: "Staff Backend Engineer at GitLab",
        bio: (
            <>
                <p>
                    Max is an experienced software engineer with over a decade of experience in building web and mobile
                    applications for everyone from 1-person start-ups to multinational charities and corporations. He's
                    currently a Staff Backend Engineer at GitLab.
                </p>
                <p>
                    When not in front of a computer, he's usually walking up a hill somewhere or hanging out with his
                    dogs.
                </p>
            </>
        ),
        talkTitle:
            "Ruby's still cool - Let's build a blog in 20 minutes",
        description: (
            <>
                <p>
                    Ruby has a reputation for being last decade's language and Rails; last decade's framework but I
                    still believe that Rails is unparalleled in its productivity and developer-friendliness when
                    building web applications. I've bet my career on it.
                </p>
                <p>
                    I'm not all talk though. Watch me go from zero, to a working blog _with tests_ in 20 minutes using
                    Ruby on Rails, live.
                </p>
            </>
        ),
        image: MaxWoolfImg,
        linkedin: "",
        twitter: "",
        website: "https://max.woolf.io",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "MaxWoolf.jpeg",
    },
    "BeckettLeclair": {
        name: "Beckett Leclair",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Beckett LeClair (MSc, MBCS) is the Head of Compliance at 5Rights. His main area of work is
                    responsible technology and standards development, with a background in AI R&D.
                </p>
            </>
        ),
        talkTitle:
            "Responsible AI is a Community Effort",
        description: (
            <>
                <p>
                    AI is becoming increasingly available to all, yet even the largest and most expensive models still
                    suffer from bias, discrimination, and other unfairness problems.
                </p>
                <p>
                    The good news is that absolutely anyone can get involved in making AI responsible for all.
                </p>
            </>
        ),
        image: BeckettLeclairImg,
        linkedin: "https://www.linkedin.com/in/beckett-l-687b7713b",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "BeckettLeclaire.jpeg",
    },
    "RyanHardwick": {
        name: "Ryan Hardwick",
        jobTitle: "Solution Architect at AWS",
        bio: (
            <>
                <p>
                    I am a Solution Architect at AWS working in the Financial Services Industry. As part of my role, I
                    help customers achieve their business goals through technological solutions. I work daily across the
                    broad and deep offering of services from AWS, to build systems that are highly available, secure and
                    scalable. Whilst I am a generalist Solution architect with experience across various domains, I have
                    a particular interest in security.
                </p>
                <p>
                    In addition to cloud architectures, for the past few years I have programmed on a large number of
                    projects using a variety of different languages. I have found a lot of enjoyment in building these
                    projects, which have allowed me to develop my full stack skills.
                </p>
            </>
        ),
        talkTitle:
            "Building a full stack application with AWS serverless technology",
        description: (
            <>
                <p>
                    In this talk I will walkthrough how to build a full stack application hosted on AWS using serverless
                    technology. This will include how to host a frontend website on S3 and CloudFront and how to host
                    the backend using API Gateway and Lambda, retrieving information stored in a DynamoDB table. As part
                    of the talk, I will explain the considerations when using the technology as well as the benefits
                    regarding managed infrastructure, costs and scalability. If time allows, I could explain how
                    authentication can be integrated into the architecture.
                </p>
            </>
        ),
        image: RyanHardwickImg,
        linkedin: "https://www.linkedin.com/in/ryan-hardwick-028a281a0/",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "RyanHardwick.jpeg",
    },
    "CallumWhyte": {
        name: "Callum Whyte",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Callum Whyte is a x4 Microsoft MVP and x6 Umbraco MVP specialising in building robust scalable
                    solutions on Azure and the .NET stack, as well as websites with the open-source Umbraco CMS.
                </p>
                <p>
                    Away from his desk you can find him organising community events; from local meetups and hackathons,
                    to global conferences and roadshows. He's an active contributor to open source projects, a regular
                    speaker at events all over the world, as well as co-host of a weekly YouTube series “UmbraCoffee”!
                </p>
            </>
        ),
        talkTitle:
            "Build your own CoPilot",
        description: (
            <>
                <p>
                    AI CoPilots are all the rage - but none quite offer that personalised butler service SciFi told us
                    we might one day have.
                </p>
                <p>
                    To understand what it takes to train a CoPilot, we will see how training a model works
                    under-the-hood; discuss the importance of quality training data to craft a truly powerful and
                    personalised experience, and safety or security concerns to consider when training a model on a
                    public service.
                </p>
                <p>
                    Moving beyond the (chat) box, we will leverage Azure's OpenAI Service and Semantic Kernel in .NET to
                    create a custom AI CoPilot for internal applications or data. We will see how to train our own
                    custom Codex model, for generating code and commands to perform bespoke tasks against a non-public
                    API, plus some innovative ways to glue this together with a nice user experience.
                </p>
                <p>
                    You will leave feeling excited about the power of custom CoPilots, and armed with the knowledge to
                    build your own!
                </p>
            </>
        ),
        image: CallumWhyteImg,
        linkedin: "https://www.linkedin.com/in/callumbwhyte/",
        twitter: "https://twitter.com/callumbwhyte",
        website: "https://github.com/callumbwhyte",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "CallumWhyte.jpeg",
    },
    "SimonEmms": {
        name: "Simon Emms",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Simon has been working as a software engineer since 2006, in which time he's done work for the likes
                    of Gitpod, DPD, Specsavers, British Pathé, the Red Cross and others. Initially specialising in the
                    NodeJS ecosystem, he's used pretty much all of the major languages over the years and since 2017 has
                    been focused on building DevOps solutions and Cloud-native applications that help engineers to work
                    faster and more productively.
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
                    Tech is at a crisis point. Companies are complaining about a lack of skilled engineers, but won't
                    recruit junior engineers to train up. Agile was designed to improve productivity, but ceremonies are
                    followed ritualistically with little consideration of value. Recruitment often focuses on
                    meaningless trivia rather than preparation for the job at hand.
                </p>
                <p>
                    The current trend in industry is to look to AI as a panacea. Unless we solve the underlying issues,
                    AI will compound these and many other problems rather than being the solution.
                </p>
            </>
        ),
        image: SimonEmmsImg,
        linkedin: "",
        twitter: "twitter.com/theshroppiebeek",
        website: "simonemms.com",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "SimonEmms.jpeg",
    },
    "StuartHarrison": {
        name: "Stuart Harrison",
        jobTitle: "",
        bio: (
            <>
                <p>
                    I'm a software developer of almost 15 years standing, progressing from journalism, into we editing
                    and finally into software development. I have worked in the public sector most of my working life,
                    working on projects for the Ministry of Justice, Department for Education as well as countless local
                    authorities and arms length bodies. I am a grade 3 saxophonist, sometime DJ, lapsed homebrewer and
                    tired dad of two (and one dog)
                </p>
            </>
        ),
        talkTitle:
            "Progressing into senior leadership with ADHD",
        description: (
            <>
                <p>
                    My name's Stu and I have ADHD. It's been a blessing and a curse for a good chunk of my life, but I
                    manage it with both coping strategies and medication. However, as I've progressed up the ladder into
                    a tech lead position, I've found I need to adapt how I work to be as effective as possible.
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
                    I'm hoping people will come away from this session, not only with an understanding of ADHD as a
                    condition, but also how they can use the strategies I use to help them in their working life,
                    whether they have ADHD or not.
                </p>
            </>
        ),
        image: StuartHarrisonImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "StuartHarrison.jpg",
    },
    "SimonGurney": {
        name: "Simon Gurney",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Simon is the CTO of Punk Security, an innovative security consultancy championing cloud and
                    application security. With 17 years of IT experience, in a career spanning most technical fields,
                    Simon found his niche with DevSecOps and the value that a broad skill-set can bring to an
                    organisation. When Simon isn't busy with Punk Security he's committed to his young family, and
                    developing the next generation of talent as a frequent speaker and OWASP Chapter lead.
                </p>
            </>
        ),
        talkTitle:
            "DevOps pipeline attacks – how attackers exploit simple oversights to attack supply chains",
        description: (
            <>
                <p>
                    "We've all seen it in the news, CI/CD servers (and the overall software development lifecycle) are
                    becoming prime targets for attacks because hackers recognise that they contain the crown jewels for
                    software companies, but also provide an opportunity to perform supply chain attacks and breach the
                    perimeters of potentially millions of companies.
                </p>
                <p>
                    In this talk, we will explain some of the key security concepts you should be aware of when using
                    and configuring CI/CD pipelines and some of the clever things attackers get up to. After this talk,
                    you’ll be fully prepared to recognise and avoid these vulnerabilities."
                </p>
            </>
        ),
        image: SimonGurneyImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "SimonGurney.jpeg",
    },
    "BeckiFloyd": {
        name: "Becki Floyd",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Becki, an UX Designer and AI Training Consultant, brings a wealth of expertise and a unique
                    perspective to the intersection of user experience and artificial intelligence. With a career that
                    began at Citizens Advice, Becki has an extensive background in training volunteers and providing
                    support to vulnerable community members.
                </p>
                <p>
                    Her transition into the world of UX followed an enlightening experience at the School of Code, where
                    she discovered a natural aptitude for digital problem-solving, kindled by her years of experience in
                    advisory roles.
                </p>
                <p>
                    In her current role, Becki specialises in creating AI-centric courses tailored for diverse
                    professional audiences. Her focus is on enhancing productivity and efficiency through AI while
                    maintaining an ethical and user-focused approach to design. Becki’s work is characterised by a
                    passion for merging the practicalities of AI with the nuances of human-centred design.
                </p>
            </>
        ),
        talkTitle: "Using AI tools for user-centered design",
        description: (
            <>
                <p>
                    Discover how AI can transform your user experience design process and explore how AI tools can
                    automate tasks, analyse data, and personalise user experiences, all while improving efficiency and
                    innovation.
                </p>
                <p>
                    This session will equip you to harness the power of AI to create better products and services for
                    your users.
                </p>
            </>
        ),
        image: BeckiFloydImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "BeckiFloyd.jpeg",
    },
    "AbbyBangser": {
        name: "Abby Bangser",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Abby is a Principal Engineer at Syntasso delivering Kratix, an open-source cloud-native framework
                    for building internal platforms on Kubernetes. Her keen interest in supporting internal development
                    comes from over a decade of experience in consulting and product delivery roles across platform,
                    site reliability, and quality engineering.
                </p>
                <p>
                    Abby is an international keynote speaker, Team Topologies Advocate, CNCF Ambassador, and co-host of
                    the #CoffeeOps London meetup. Outside of work, Abby spoils her pup Zino and enjoys playing team
                    sports.
                </p>
            </>
        ),
        talkTitle:
            "Bringing the engineering to Platform Engineering: A look at how software development patterns apply to platform building",
        description: (
            <>
                <p>
                    At Platform Engineering Day 2024 it was said that “platform engineering is an exercise in software
                    development not operations". This is a simple statement on the surface, but has deep implications.
                </p>
                <p>
                    The gang of four structural designs such as the facade pattern and architectural evolutions from
                    layered to microservice components are examples of a well documented history of software
                    engineering. Over the decades, not only have the patterns and techniques been captured, but so have
                    the tradeoffs and contexts in which to consider them.
                </p>
                <p>
                    Software development has a much longer and better documented history than platform building and if
                    we can tap into those experiences we as platform engineers can accelerate our learning and impact.
                    This talk will focus on the key software engineering patterns that appear to be most useful in this
                    new platform building wave so that you too can build not only useful, but also maintainable and
                    extensible platforms.
                </p>
            </>
        ),
        image: AbbyBangserImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "AbbyBangser.jpeg",
    },
    "LauraHyatt": {
        name: "Laura Hyatt",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Laura Hyatt is a senior cloud architect with over 10 years of experience. She is currently working
                    for Google but has also been an architect at AWS too. Her focus is financial services with many
                    customer projects focusing on anti money laundering and sanctions screening. Outside of the day to
                    day, she is a tenured public speaker, having given technical talks around the world, and also is the
                    technical community lead for Techmakers EMEA, a worldwide program to upskill women into tech.
                </p>
            </>
        ),
        talkTitle:
            "How to catch a criminal: Using AI to build FinCrime applications",
        description: (
            <>
                <p>
                    Financial crime is evolving faster than ever. Join us to uncover how AI, cloud computing, and data
                    reconciliation are revolutionizing the fight against fraud, money laundering, and sanctions evasion.
                </p>
                <p>
                    Discover how advanced machine learning models and data reconciliation can detect subtle patterns of
                    suspicious activity and identify people from 100’s of millions of fuzzy records.
                </p>
            </>
        ),
        image: LauraHyattImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "LauraHyatt.png",
    },
    "AndrewFitzpatrick": {
        name: "Andrew Fitzpatrick",
        jobTitle: "",
        bio: (
            <>
                <p>
                    20+ years experience as a Software Engineer with experiences covering many sectors and scales of
                    project. Currently working as a Staff Engineer for TravelPerk, a tech unicorn with a presence in
                    Birmingham.
                </p>
            </>
        ),
        talkTitle:
            "The importance of contextual consistency",
        description: (
            <>
                <p>
                    The pace of growth in a scale-up can outstrip the ability to “act as one” leading to fragmentation
                    of tooling, infrastructure, architecture etc. In this talk I will introduce the idea of contextual
                    consistency, why it’s important and how it can help in day-to-day work. The talk is likely to be
                    around 30 minutes of content.
                </p>
            </>
        ),
        image: AndrewFitzpatrickImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "AndrewFitzpatrick.jpeg",
    },
    "MarkSimpson": {
        name: "Mark Simpson",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Mark Simpson is Technology & Innovation director at Griffiths Waite (GW), www.griffiths-waite.co.uk.
                    GW is a software consultancy with a pedigree of creating digital products for some of the UK’s
                    largest blue-chip enterprises.
                </p>
                <p>
                    With a thirty-year track record of delivering custom software development GW are now helping clients
                    understand the role of AI & Automation in their organisations and more importantly how they can
                    incorporate a joined-up approach utilising the latest technology to rapidly develop custom digital
                    products.
                </p>
                <p>
                    Mark helps CIOs and business leaders to harness disruptive technologies and apply innovation to
                    achieve tangible business outcomes. He has the rare ability to demystify complex technology concepts
                    and translate them into practical solutions.
                </p>
                <p>
                    Mark is also a driving force behind Birmingham Tech Leaders,
                    https://www.birminghamtechleaders.co.uk/ A dynamic group of IT leaders who collaborate to tackle the
                    most pressing challenges facing large enterprises today.

                </p>
            </>
        ),
        talkTitle:
            "Gaining Strategic Advantage with Generative AI",
        description: (
            <>
                <p>
                    Gen AI has dominated newsfeeds and fuelled boardroom debates over the past year. Waiting for
                    competitors to act first can be a costly mistake. To truly differentiate yourself in an AI-powered
                    future, leveraging your own data is non-negotiable.
                </p>
                <p>
                    This presentation aims to equip conference attendees with the knowledge, insights, and practical
                    strategies necessary to embark on their AI journey, leveraging their data with confidence.

                </p>
            </>
        ),
        image: MarkSimpsonImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "MarkSimpson.jpeg",
    },
    "AmeenAlade": {
        name: "Ameen Alade",
        jobTitle: "",
        bio: (
            <>
                <p>
                    A Frontend Engineer with extensive experience in building and designing intuitive user interfaces.
                    With a keen eye for aesthetics and a strong commitment to accessibility, I am passionate about
                    creating seamless user experiences that combines technical proficiency with innovative design
                    strategies to deliver solutions that meet diverse user needs.
                </p>
            </>
        ),
        talkTitle:
            "Accessibility vs Aesthetics: Finding the Sweetspot",
        description: (
            <>
                <p>
                    This will delve into the intersection of design and user experience, exploring how to create
                    visually appealing interfaces that are also inclusive and accessible to all users.
                </p>
            </>
        ),
        image: AmeenAladeImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "AmeenAlade.jpeg",
    },
    "JamesPrince": {
        name: "James Prince",
        jobTitle: "",
        bio: (
            <>
                <p>
                    I'm James I'm 30 and a Software Engineer based in Warwick, I have 13 years experience in the
                    software industry and I currently work for Celcat who supply timetabling software to Universities
                    and Colleges worldwide. I absolutely love software development and have a constant desire to improve
                    my skills and help my team do the same.
                </p>
                <p>
                    Outside of work I enjoy other non-tech hobbies such as playing in my band and any sport I sport I
                    have an opportunity to play. I also have a YouTube channel "Coffee, Music and Coding" on which I
                    have posted some basic coding tutorials mostly for me to refer back to when I've forgotten silly
                    things.
                </p>
            </>
        ),
        talkTitle:
            "Hackathons: Igniting Innovation, Empowering Teams",
        description: (
            <>
                <p>
                    Explore the power of hackathons, learn how these dynamic events drive rapid innovation, foster
                    collaboration, and empower teams to tackle challenges creatively.
                </p>
            </>
        ),
        image: JamesPrinceImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "JamesPrince.jpeg",
    },
    "DanielTallentire": {
        name: "Daniel Tallentire",
        jobTitle: "Engineering Manager at Citation Group",
        bio: (
            <>
                <p>
                    Daniel is a software engineer and engineering manager with nearly 20 years experience developing
                    SaaS software.
                    He has a passion for learning and development and has mentored and coached multiple engineers and
                    managers throughout his career.
                </p>
                <p>
                    Outside of work, Daniel enjoys good food and a good hike in the Peak District.
                </p>
            </>
        ),
        talkTitle:
            "Jack of all trades - master of learning",
        description: (
            <>
                <p>
                    In software engineering, some people believe that being specialised will give you a more
                    satisfaction in your career.
                    However, I believe that being a generalist can be just as rewarding, and is highly valuable
                    especially inside small businesses.
                    In this talk, I will discuss:
                </p>
                <ul className="list-disc">
                    <li> Generalists vs specialists - what's the difference?</li>
                    <li> Why being a generalist is valuable</li>
                    <li> How to get better at learning quickly - finding how you learn and using that to your
                        advantage
                    </li>
                    <li> T-shaped people (and maybe some other shapes too)</li>
                    <li> How to sell yourself as a generalist to potential employers</li>
                </ul>
            </>
        ),
        image: DanielTallentireImg,
        linkedin: "https://www.linkedin.com/in/danieltallentire/",
        twitter: "",
        website: "https://tallentire.dev",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "DanielTallentire.jpeg",
    },
    "KathrynLupin": {
        name: "Kathryn Lupin",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Kathryn loves post it notes, smooth meetings and sharing ideas, and especially loves that Agile
                    offers her all three in her day to day work. Since falling into Scrum mastery by way of a chance
                    training course, Kathryn has chased an Agile way of working across technical and non technical
                    organisations. She is passionate about helping teams find new and better ways of working, that
                    result in a better work life for her team and high quality deliverables.
                </p>
                <p>
                    Kathryn is a Scrum Alliance certified Scrum Master, and from 2017-2020 ran a meet up for Scrum
                    Masters in Birmingham. She is currently a Delivery Manager within the NHS, specialising in software
                    implementation within non-technical teams.
                </p>
            </>
        ),
        talkTitle:
            "Taking the Jargon Out of Agile - a case study on introducing a new team to Agile",
        description: (
            <>
                <p>
                    This is the story of one scrum master, who, fresh from the tech world, came to work with a
                    non-technical team to get them up to speed in Agile. Join me in this case study, as I cover why
                    Agile struck fear into the hearts of the team I joined, how I fell into the jargon trap before
                    working out how to introduce agile concepts successfully, and what working well for us.
                </p>
            </>
        ),
        image: KathrynLupinImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "KathrynLupin.jpeg",
    },
    "PhillipMarks": {
        name: "Phillip Marks",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Phillip is the co-founder and CTO of Unwritten, a venture-backed climate fintech startup building
                    models for the financial sector to invest in the climate transition, and align capital allocation
                    with climate science. Before Unwritten, he founded the climate data platform at Palantir, building
                    software to enable data-driven decarbonisation. Phillip holds a DPhil in computational physics from
                    Oxford, where he modelled zero-carbon fuels for use in the transport sector.
                </p>
            </>
        ),
        talkTitle:
            "How to build a supercomputer-scale model without a supercomputer: climate modelling in the cloud.",
        description: (
            <>
                <p>
                    This talk will focus on the role of supercomputers and cloud computing in tackling large-scale,
                    real-world data challenges, with climate change as a case study. Key themes include modern data
                    architecture, advancements in data science, the technical challenges in founding a startup from
                    scratch, and engineering solutions for climate change.
                </p>
            </>
        ),
        image: PhillipMarksImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "PhillipMarks.jpeg",
    },
    "JacobBlackburn": {
        name: "Jacob Blackburn",
        jobTitle: "Software Developer at Good Growth",
        bio: (
            <>
                <p>
                    After four years as an NHS Doctor, Jacob Blackburn made a successful transition to software
                    development, driven by his long-standing passion for technology. Since joining Good Growth, he has
                    gained extensive client experience and currently serves as a Tech Lead for the company’s biggest
                    client. Jacob actively promotes a culture of professional growth and adaptability within the team,
                    contributing to innovative projects across a diverse technology stack.
                </p>
            </>
        ),
        talkTitle:
            "Doctor to Developer: Refactoring Career and Code",
        description: (
            <>
                <p>
                    Join Jacob Blackburn as he recounts his transformation from a career in medicine to one in software
                    development. He’ll explore the impact of transferrable skills, career empowerment, and the Good
                    Growth culture that promotes professional growth and adaptability in an ever-evolving industry.
                </p>
            </>
        ),
        image: jacobBlackburnImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "jacobBlackburn.png",
    },
    "ChristopherMiller": {
        name: "Christopher Miller",
        jobTitle: "",
        bio: (
            <>
                <p>
                    "Christopher remembers getting his first introduction to computing in 1985, at around age three. His
                    dad came home from work one day with a box – it contained a soldering iron, a book and some bits.
                    They sat at a table together and built a computer. It was a ZX Spectrum 48k. He vividly remembers
                    the feelings of excitement and joy, as he watched this piece of technology come together, followed
                    by fascination, as it was plugged into the television for the first time and came to life – the
                    sheer ecstasy of watching some blocky graphics move on a screen in eight different colours, the
                    sense of anticipation as the tape loaded a game for him and his dad to play.
                </p>
                <p>
                    That day changed Christopher’s life for good. He started to learn the concept of typing things to
                    make other things happen on screen and found a love for making computers do what he wanted to do. He
                    learned this was called programming and he liked it. He wrote games that were published in Spectrum
                    magazines and knew he was destined to one day work with computers and create software.
                </p>
                <p>
                    Today, Christopher is a Full Stack Developer for MMS Marketing. He is often found preparing his next
                    talk, learning about the next new technology, or mentoring newcomers to the technology scene.
                </p>
                <p>
                    Christopher takes great pride in being able to produce highly efficient code, logical debugging,
                    seeing the bigger picture when looking at a feature request from a client, and suggesting changes
                    that would improve process efficiency for Customers. Customers often comment on Christophers ability
                    to turn tech jargon into easy to understand concepts, helping them to understand the problem, and
                    the solution, often helping them to see the future possibilities of their applications."
                </p>
            </>
        ),
        talkTitle:
            "Fear The Walking Dead: How AI Helped Burnout Recovery",
        description: (
            <>
                <p>
                    Join me for a candid, humorous, yet poignant exploration of my personal journey through developer
                    burnout and the path to recovery. This talk will take you on an emotional rollercoaster, blending
                    laughter with serious introspection, as we dive into the realities of burnout in the tech industry
                    and how AI played an unexpected role in my healing process.
                </p>
            </>
        ),
        image: ChrisMillerImg,
        linkedin: "",
        twitter: "ccmiller2018",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "ChrisMiller.png",
    },
    "AbdiTimer": {
        name: "Abdi Timer",
        jobTitle: "IBM Advisory Data Scientist",
        bio: (
            <>
                <p>
                    Abdi is a data leader at IBM with expertise in financial services, insurance, and technology. As a
                    Data Scientist and Data Engineer, he leverages his skills to sell advanced Data & AI products and
                    solutions to a diverse array of customers. His technical knowledge and strategic approach enable him
                    to solve real-world business problems and create substantial value for his clients. Previously, Abdi
                    served as a Data Scientist at Capco and a Machine Learning Engineer at Legal & General. His
                    experience includes model development, data analysis, visualization, and optimizing data pipelines.
                    Abdi’s academic background in computer science and engineering, coupled with his industry
                    experience, showcases his adaptability and deep understanding of the data landscape. His ability to
                    craft and implement successful data-driven strategies makes him a key player in the field of data
                    science and engineering.
                </p>
            </>
        ),
        talkTitle:
            "A session from our sponsors IBM",
        description: (
            <>
                <p>
                    A session from IBM.
                </p>
            </>
        ),
        image: AbdiTimerImg,
        linkedin: "https://uk.linkedin.com/in/abditimer",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "AbdiTimer.jpg",
    },
    "MatthiasPatzold": {
        name: "Matthias Patzold",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Matthias Patzold is an Executive Director at Goldman Sachs. Matthias is a member of the Loan Agency team in Investment Banking Engineering.
                </p>
                <p>
                    Matthias joined Goldman Sachs in 2007.
                </p>
            </>
        ),
        talkTitle:
            "Payments Processing in Finance",
        description: (
            <>
                <p>
                </p>
            </>
        ),
        image: MatthiasPatzoldImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "10 Minute Session",
        speakerCard: false,
        speakerCardImage: "MatthiasPatzold.png",
    },
    "KevinMaingi": {
        name: "Kevin Maingi",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Kevin Maingi is an Executive Director at Goldman Sachs. Kevin is a member of the Loan Agency team in Investment Banking Engineering.
                </p>
                <p>
                    Kevin joined Goldman Sachs in 2021.
                </p>
            </>
        ),
        talkTitle:
            "Payments Processing in Finance",
        description: (
            <>
                <p>
                </p>
            </>
        ),
        image: KevinMaingiImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "10 Minute Session",
        speakerCard: false,
        speakerCardImage: "KevinMaingi.png",
    },
    "MikolajMaciejak": {
        name: "Mikolaj Maciejak",
        jobTitle: "",
        bio: (
            <>
                <p>
                    Mikolaj Maciejak is an Executive Director at Goldman Sachs. Mikolaj is a member of Asset & Wealth Management Engineering.
                </p>
                <p>
                    Mikolaj joined Goldman Sachs in 2016.
                </p>
            </>
        ),
        talkTitle:
            "Strategy of Enterprise Wide (Security) Transformations",
        description: (
            <>
                <p>
                </p>
            </>
        ),
        image: MikolajMaciejakImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "10 Minute Session",
        speakerCard: false,
        speakerCardImage: "MikolajMaciejak.png",
    },
    "DominicCooperWootton": {
        name: "Dominic Cooper-Wootton",
        jobTitle: "Head of Engineering @ Receiptable",
        bio: (
            <>
                <p>
                    Dominic is the Head of Engineering at Receiptable. He is a software engineer with a passion for tech for good and startups. Having worked in: Fintech, Banking, HR, Sports, Events and Public Health, he has seen a wide array of programming problems in varying different industries.
                </p>
                <p>
                    He enjoys climbing outdoors, local music and likes to understand software's environmental impact.
                </p>
            </>
        ),
        talkTitle:
            "Programming in Public Health",
        description: (
            <>
                <p>
                    What if your coding skills could help shape the future of scientific fields? In this talk, I’ll share my journey from building products and services in the private sector to working with Yale, the CDC, and Gates Foundation to develop cutting-edge tools for academic research. Discover how non-CS scientists struggle with coding challenges, and how engineers can step in to transform their research with optimized tools, scalable scripts, and impactful solutions. If you're passionate about using technology for good this talk will help you to understand the inner workings of academia and where you could make an impact.
                </p>
            </>
        ),
        image: DominicImg,
        linkedin: "",
        twitter: "",
        website: "",
        sessionType: "20 Minute Session",
        speakerCard: false,
        speakerCardImage: "Dominic.jpg",
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
//     sessionType: "20 Minute Session",
//     speakerCard: false,
//     //speakerCardImage: "placeholder.png",
// },
