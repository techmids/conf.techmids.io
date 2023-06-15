import AntonioImage from '@/images/avatars/antonio-cobo.jpg'
import EstherImage from '@/images/avatars/esther-barthel.jpg'
import HillaImage from '@/images/avatars/hila-fish.png'
import FawazImage from '@/images/avatars/fawaz-ghali.jpg'
import LeonImage from '@/images/avatars/leon-adato.png'
import LinImage from '@/images/avatars/lin-sun.jpg'
import KrisImage from '@/images/avatars/kris-buytaert.jpg'
import KatSImage from '@/images/avatars/kat-samperi.png'
import MarkusImage from '@/images/avatars/marcus-noble.jpeg'
import BeckyImage from '@/images/avatars/becky-pauley.jpeg'
import ViktorImage from '@/images/avatars/viktor-farcic.jpg'
import DaveImage from '@/images/avatars/dave-shepherd.jpg'
import KrisztianImage from '@/images/avatars/krisztian-fekete.jpg'
import AnaisImage from '@/images/avatars/anais-urlichs.png'
import BaruchImage from '@/images/avatars/baruch-sadogursky.jpg'
import SimonImage from '@/images/avatars/simon-gurney.jpg'
import BenImage from '@/images/avatars/ben-madley.png'
import CarlyImage from '@/images/avatars/carly-richmond.jpeg'
import AndyImage from '@/images/avatars/andy-burgin.png'
import HannahMImage from '@/images/avatars/hannah-mitchell.jpeg'
import StuartLImage from '@/images/avatars/stuart-langridge.jpeg'
import MaxWImage from '@/images/avatars/max-woolf.jpg'
import SalmaANImage from '@/images/avatars/salma-alam-naylor.png'
import EliHImage from '@/images/avatars/eli-holderness.jpeg'
import SteveHImage from '@/images/avatars/steve-heyes.png'
import JoannaSImage from '@/images/avatars/joanna-suau.jpg'
import ZakariyaMImage from '@/images/avatars/zakariya-mohummed.jpeg'
import OmarQImage from '@/images/avatars/omar-qureshi.png'
import ElizbathLImage from '@/images/avatars/elizabeth-lawal.jpg'
import ZarrahBImage from '@/images/avatars/zarrah-belgian.png'
import CraigImage from '@/images/avatars/craig-box.jpg'
import KatCosgroveImage from '@/images/avatars/kat-cosgrove.jpg'
import AmandaBImage from '@/images/avatars/amanda-brock.jpg'
import LouiseImg from '@images/avatars/louise.jpg'


export const Sessions= {
    "antonio-cobo": {
        name: 'Antonio Cobo',
        jobTitle: 'Principal Consultant at Contino',
        bio: (
            <>
                <p>
                    Antonio is an Agile enthusiast with more than 20 years experience in the IT industry and specialises
                    in Agile methodologies. He comes from a technical background, starting his career as a Java
                    Developer in Spain in 2000, moving to different roles within IT in three different countries.
                    Antonio is passionate about creating and implementing the best solution while continually seeking to
                    improve work methodologies. He is convinced that most of the problems in IT are due to lack of
                    communication! Antonio usually speaks about Agile, DevOps, Project Management and Team management at
                    conferences across Europe and US, such as DevOps Days, Agile Tour and Voxxed Days.
                </p>
            </>
        ),
        talkTitle:
            'Karaoke Ignite talk',
        description: (
            <>
                <p>
                    20 slides, every 15 seconds the slide will change and I won’t know the content of the slides before
                    any of you! Let’s see how I can share with you my experiences in IT in that short space of time!
                </p>
            </>
        ),
        image: AntonioImage,
        linkedin: 'https://linkedin.com/in/antoniocobocuenca/',
        twitter: 'Mind_of_AC',
        website: '',
        sessionType: 'ignite',
    },
    "esther-barthel": {
        name: 'Esther Barthel',
        jobTitle: 'Solutions Architect at cognition IT',
        bio: (
            <>
                <p>
                    Esther Barthel has worked in different roles and functions as an IT consultant after she finished
                    her Master’s degree in Computer Science in 1997. She soon discovered that End User Computing
                    combined servers, desktops, and user experience technologies into one and specialized in
                    virtualization solutions, like Microsoft Remote Desktop Services, Citrix Virtual Apps & Desktops and
                    Azure Virtual Desktops
                </p>
                <p>
                    Esther works as a Solutions Architect at cognition IT, where she combines her passion for designing
                    and implementing Citrix solutions with her newfound love for DevOps automation, using PowerShell,
                    REST APIs and JSON payloads to automate both on-premises and Cloud Infrastructure as Code solutions.
                </p>
                <p>
                    Ever since she hosted introduction days for technical female student candidates Esther has shared
                    her passion and knowledge for IT. She also is a strong advocate of diversity and inclusion as one of
                    the founders of the CUGC Women in Tech mentorship program.
                </p>
                <p>
                    In addition to her Microsoft Most Valuable Professional (MVP) award, Esther is also awarded as a
                    Citrix Technology Professional (CTP) VMware vExpert EUC, and Parallels VIPP.
                </p>
            </>
        ),
        talkTitle:
            'Branching strategies speeddating',
        description: (
            <>
                <p>
                    A five minute speed date to explain the concept of branching strategies
                </p>
            </>
        ),
        image: EstherImage,
        linkedin: '',
        twitter: '',
        website: '',
        sessionType: 'ignite',
    },
    "hila-fish": {
        name: 'Hila Fish',
        jobTitle: 'Senior DevOps Engineer @ Wix.com',
        bio: (
            <>
                <p>
                    Hila Fish is a Senior DevOps Engineer at Wix, with 15 years of experience in the tech industry.
                    AWS Community Builder, and a public speaker who believes the DevOps culture is what drives a company
                    to perform at its best and talks about that and other DevOps/Infrastructure topics at conferences.
                    She carries the vision to enhance and drive business success by taking care of its infrastructure.
                </p>
                <p>
                    In her spare time, Hila is a lead singer of a cover band, giving back to the community by
                    co-organizing DevOps-related conferences (Inc. "DevOpsDays TLV" & "StatsCraft" monitoring-focused
                    event), providing mentorship and managing programs in “Baot” (The largest technical women’s
                    community in Israel), and enjoys sharing her passion and knowledge wherever she can, including
                    across diverse technology communities, initiatives and social media.
                </p>
            </>
        ),
        talkTitle:
            'Terraform Practices to Enable Infrastructure Scaling',
        description: (
            <>
                <p>
                    Terraform is a GREAT tool, but like a lot of other things in life, it has its pitfalls and bad
                    practices.
                </p>
                <p>
                    Since you are working with Terraform, you probably went through its documentation, which can tell
                    you what resources can be used - BUT do you always have a clear path towards using these resources?
                    How should you structure your Terraform code in general?
                </p>
                <p>

                    And what about scaling? How do you make the most of Terraform when scaling your infrastructure as
                    your organization grows?
                </p>
                <p>
                    In this talk, I’ll cover useful best practices, pitfalls to avoid and major obstacles to anticipate
                    so that you can scale across many teams, avoid refactoring, and get a flying start now -- AND
                    optimize for the future.
                </p>
                <p>
                    You’ll also gain a go-to approach and a paved way for working with Terraform, whether it’s an
                    existing codebase or a new functionality altogether, and also hopefully make you think about the big
                    picture and utilize Terraform in a broader context rather than just an “infrastructure as code"
                    tool.
                </p>
            </>
        ),
        image: HillaImage,
        linkedin: 'https://linkedin.com/in/hila-fish',
        twitter: 'hilafish1',
        website: '',
        sessionType: 'session',
    },
    "fawaz-ghali": {
        name: 'Fawaz Ghali',
        jobTitle: 'Hazelcast, Principal Developer Advocate ',
        bio: (
            <>
                <p>
                    Fawaz Ghali is a Principal Developer Advocate at Hazelcast with 20+ years’ experience in software
                    developments, machine learning and real-time intelligent applications. He holds a PhD in Computer
                    Science and has worked in the private sector as well as Academia as a Researcher and Senior
                    Lecturer. He has published over 46 scientific papers in the fields of machine learning and data
                    science. His strengths and skills lie within the fields of low latency applications, IoT & Edge,
                    distributed systems and cloud technologies.
                </p>
            </>
        ),
        talkTitle:
            'Five Challenges in Real-time Stream Processing and Five Solutions',
        description: (
            <>
                <p>
                    Real-time stream processing is growing exponentially in recent years, businesses need to gather
                    insights from real-time data as soon as it’s generated. To do this, developers and software
                    architects use various pipelines and tools to capture and process data in motion. Real-time stream
                    processing has its own challenges such as testing and life-cycle management, scaling and
                    performance, event time and late events, streaming fault tolerance, and processing guarantees.
                </p>
                <p>
                    In this talk, I will address those challenges and demonstrate the best practices for real-time
                    stream processing, from data ingestion to data processing with ultra-low latency at scale and at
                    speed, using the Hazelcast platform. I will discuss how you can optimize your real-time streaming
                    projects in the following areas: scalability, performance, failover, reliability, and data recovery.
                </p>
            </>
        ),
        image: FawazImage,
        linkedin: 'https://linkedin.com/in/fawazghali/',
        twitter: 'FawazGhali',
        website: '',
        sessionType: 'session',
    },
    "leon-adato": {
        name: 'Leon Adato',
        jobTitle: 'Principal DevRel Advocate for New Relic',
        bio: (
            <>
                <p>
                    Leon Adato is a Developer Relations Advocate at New Relic, and has held multiple industry
                    certifications over his 33 years in IT including Cisco, Microsoft, A+, and more. His experience
                    spans financial, healthcare, food and beverage, and other industries.
                </p>
                <p>
                    Before coming to New Relic, he was a speaker and blogger in the monitoring and observability space
                    for almost a decade. His expertise in IT began in 1989 and has led him through roles in classroom
                    training, desktop support, server support, and software distribution.
                </p>
            </>
        ),
        talkTitle:
            'Looking back at a lifetime of poor tech choices',
        description: (
            <>
                <p>
                    Working in tech is a never-ending stream of choices: from the language, platform, and framework we
                    use to the vendors we put our trust (and money) in. Many of us live in fear that our next choice
                    will turn sour, and will end up being a resume-generating event for us.
                </p>
                <p>
                    In reality, there is often a lot more good than you'd expect from those seemingly bad tech choices.
                    In this session, I'll look back on several failed implementations, poor calls, and wasted weekends
                    to see, with the benefit of hindsight, how they turned out to be decent decisions after all.
                </p>
            </>
        ),
        image: LeonImage,
        linkedin: '',
        twitter: 'leonadato',
        website: 'adatosystems.com',
        sessionType: 'session',
    },
    "lin-sun": {
        name: 'Lin Sun',
        jobTitle: 'Director of Open-Source, Solo.io',
        bio: (
            <>
                <p>
                    Lin is the Director of Open Source at Solo.io and a CNCF ambassador. She has worked on Istio service
                    mesh since 2017 and serves on the Istio Technical Oversight Committee. Previously, she was a Senior
                    Technical Staff Member and Master Inventor at IBM for 15+ years. She is the author of the book
                    "Istio Ambient Explained" and has more than 200 patents to her name.
                </p>
            </>
        ),
        talkTitle:
            'Operate Multi-Tenancy Service Mesh with ArgoCD in Production',
        description: (
            <>
                <p>
                    Service meshes offer a breadth of benefits from securing to adding reliability to gaining visibility
                    into your applications. However, as you start to scale your environment and start onboarding
                    different teams or applications into the mesh you run into challenges of tenant isolation in terms
                    of configuration management, resource consumption and security. What is the difference between soft
                    multi-tenancy and hard multi-tenancy? Which one fits best for you? In this session, Lin who is a
                    founding member of Istio will present how to achieve soft multi-tenancy and hard multi-tenancy with
                    Istio service mesh and roll it out to your teams or applications with ArgoCD in production along
                    with live demos.
                </p>
            </>
        ),
        image: LinImage,
        linkedin: '',
        twitter: 'linsun_unc',
        website: '',
        sessionType: 'session',
    },
    "kris-buytaert": {
        name: 'Kris Buytaert',
        jobTitle: 'CTO Inuits.eu / Principal Yak Shaver o11y.eu',
        bio: (
            <>
                <p>
                    Kris Buytaert is a long time Linux and Open Source Consultant. He's one of instigators of the devops
                    movement, currently working for Inuits
                </p>
                He is frequently speaking at, or organizing different international conferences and has written about
                the same subjects in different Books, Papers and Articles
                <p>
                    He spends most of his time working on bridging the gap between developers and operations with a
                    strong focus on High Availability, Scalability , Virtualisation and Large Infrastructure Management
                    projects hence trying to build infrastructures that can survive the 10th floor test, better known
                    today as the cloud while actively promoting the devops idea !
                </p>
            </>
        ),
        talkTitle:
            '10+ years of #devops , but what did we really learn ?',
        description: (
            <>
                <p>
                    14 years ago we had the idea to organise a conference in Gent to bridge the gap between developers
                    and the people runing their code. It was the start of a new global movement. We never predicted that
                    #devops would be where #devops is today. The word devops has evolved, the community has evolved.
                </p>
                <p>
                    Docker has solved all of our problems, the ones left behind were solved by Kubernetes. Everybody and
                    their neighbour is Scrum certified now and we are all happily sipping cocktails on the beach. Or
                    not? Why after almost 10 years of pushing culture change, teaching about Infrastructure as Code,
                    teaching about Monitoring and Metrics … and help people to share both their pain and their learnings
                    are most organisations still struggling with software delivery.
                </p>
                <p>
                    Over the years the word devops lost it’s meaning at least it’s original meaning. The real challenge
                    for the next decade will be to see how we can revive those original values and ideas, if at all… Can
                    we fix Devoops ? This talk will give you some Ideas about that.
                </p>
            </>
        ),
        image: KrisImage,
        linkedin: '',
        twitter: 'krisbuytaert',
        website: 'https://krisbuytaert.be/blog/',
        sessionType: 'session'
    },
    "kat-samperi": {
        name: 'Kat Samperi',
        jobTitle: 'Tech Lead - Developer Experience @ Kaluza',
        bio: (
            <>
                <p>
                    Kat has been coding since she was 8 years old, and hated repeatedly typing the same thing, over and
                    over - so that she could play specific levels of Doom. Since then, Kat has achieved a PhD in AI and
                    Robotics, followed by a drop into the world of DevSecOps and Automation. Working across various
                    consultancies, government, energy and journalism, Kat has developed solid Build and Deployment
                    pipelines over the years, with a keen focus on ensuring safety, security and reliability when
                    releasing to production. Her favourite dinosaur is the Triceratops.
                </p>
            </>
        ),
        talkTitle:
            'How to unf*ck the monolith',
        description: (
            <>
                <p>
                    There’s always one project where it's just too big - too interconnected - to handle. It was a labour
                    of love, growing from its innocent ‘microservices architecture, honest’ origins. Over time more and
                    more stuff was needed. It was easier just to bung it all in the same place. We’re good developers
                    right? We must be doing this right!? After all google does it!
                </p>
                <p>
                    This talk is about monoliths: how they happen; the reasons people like them (that often turn out to
                    be pitfalls); and most importantly, how do we stop them from taking three years to build when you
                    have an urgent change you need to deploy right now. It will go through examples and common themes
                    that I’ve seen while breaking apart monoliths and fixing both build and deploy pipelines to make the
                    development process a nicer place to be again.
                </p>
            </>
        ),
        image: KatSImage,
        linkedin: '',
        twitter: '',
        website: '',
        sessionType: 'session'
    },
    "marcus-noble": {
        name: 'Marcus Noble',
        jobTitle: 'Platform Engineer @ Giant Swarm',
        bio: (
            <>
                <p>
                    Marcus is a platform engineer at Giant Swarm, a company dedicated to offering managed Kubernetes
                    solutions. His main area of focus in recent years has been around Go, Kubernetes, containers and
                    DevOps but originally started out as a web developer and JavaScript enthusiast. A self-described
                    “tinkerer”, when not building Kubernetes solutions, Marcus likes to dabble with 3D printing and
                    experimenting with smart home tech.
                </p>
            </>
        ),
        talkTitle:
            'What Pokémon can teach us about being engineers',
        description: (
            <>
                <p>
                    The world of Pokémon has many teachings that we can apply to our life as developers, SREs and DevOps
                    engineers. Join me while we find out what Ash, Pikachu and all their friends can teach us about
                    being better engineers and community members. Together, we really can be the very best, like no one
                    ever was.
                </p>
            </>
        ),
        image: MarkusImage,
        linkedin: 'https://linkedin.com/in/marcusnoble/',
        twitter: 'Marcus_Noble_',
        website: 'https://marcusnoble.co.uk',
        sessionType: 'ignite'
    },
    "becky-pauley": {
        name: 'Becky Pauley',
        jobTitle: 'Solutions Engineer at Jetstack',
        bio: (
            <>
                <p>
                    Working as a primary school teacher, I started learning Python in my spare time- and got hooked on
                    the feeling of solving problems. A few years ago I finally made the leap from teaching into tech!
                    Since then, I've worked in Platform and Cloud Engineering roles- most recently at Jetstack with a
                    focus on Kubernetes and Cloud Native technologies. As well as all things infrastructure, I’m
                    passionate about ways of working, learning and culture.
                </p>
            </>
        ),
        talkTitle:
            'Inclusion: a positive experience.',
        description: (
            <>
                <p>
                    This is my experience of inclusion done right. A whirlwind tour of practical things that made me
                    feel welcome, included and part of the team since I joined Jetstack just over a year ago. We'll
                    cover ways of working, decision-making- and come away with ideas and resources we can bring into our
                    own workplaces.
                </p>
            </>
        ),
        image: BeckyImage,
        linkedin: '',
        twitter: 'beckypauley',
        website: '',
        sessionType: 'ignite'
    },
    "viktor-farcic": {
        name: 'Viktor Farcic',
        jobTitle: 'Developer Advocate',
        bio: (
            <>
                <p>
                    Viktor Farcic is a Developer Advocate at Upbound, a member of the Google Developer Experts and
                    Docker Captains groups, and a published author.
                </p>
                <p>
                    His big passions are DevOps, Containers, Kubernetes, Microservices, Continuous Integration, Delivery
                    and Deployment (CI/CD) and Test-Driven Development (TDD).
                </p>
                <p>
                    He often speaks at community gatherings and conferences.
                </p>
                <p>
                    He published The DevOps Toolkit Series (<a className="underline"
                                                               href="https://www.devopstoolkitseries.com/">https://www.devopstoolkitseries.com/</a>),
                    DevOps Paradox (<a className="underline" href="https://amzn.to/2myrYYA">https://amzn.to/2myrYYA</a>)
                    and Test-Driven Java Development (<a className="underline"
                                                         href="https://www.amazon.com/Test-Driven-Java-Development-Viktor-Farcic-ebook/dp/B00YSIM3SC">https://www.amazon.com/Test-Driven-Java-Development-Viktor-Farcic-ebook</a>),
                    as well as courses in Udemy (<a className="underline"
                                                    href="https://www.udemy.com/user/viktor-farcic/">https://www.udemy.com/user/viktor-farcic/</a>).
                </p>
                <p>
                    His random thoughts and tutorials can be found in his blog TechnologyConversations.com.
                </p>
                <p>
                    He is the host of the DevOps Toolkit (<a className="underline"
                                                             href="https://youtube.com/c/devopstoolkit">https://youtube.com/c/devopstoolkit</a>)
                    YouTube channel and a co-host of DevOps Paradox (<a className="underline"
                                                                        href="https://www.devopsparadox.com/">https://www.devopsparadox.com/</a>)
                    podcast.
                </p>
            </>
        ),
        talkTitle:
            'DevOps Is Dead! Long Live Platform Engineering! Did We Get Confused?',
        description: (
            <>
                <p>
                    "DevOps is dead!" That's a commonly repeated sentence these days. Some might say that Platform
                    Engineering is replacing DevOps. But is DevOps really dead? Is it being replaced by Platform
                    Engineering? Or maybe, we are just confused.
                </p>
                <p>
                    Let's explore what DevOps is in theory, how it was implemented in practice, whether it failed,
                    whether platform engineering is the replacement, and what we can learn from the past.
                </p>
            </>
        ),
        image: ViktorImage,
        linkedin: 'https://linkedin.com/in/viktorfarcic/',
        twitter: 'vfarcic',
        website: '',
        youtube: 'https://youtube.com/@DevOpsToolkit',
        sessionType: 'session'
    },
    "dave-shepherd": {
        name: 'Dave Shepherd',
        jobTitle: 'Principal Platform Engineer, Wealth Wizards',
        bio: (
            <>
                <p>
                    Dave started his career as a software engineer and acquired an interest in DevOps practices. He
                    moved into a more operational role and is keen to leverage the power of the cloud. He is constantly
                    trying to automate himself out of a job.
                </p>
            </>
        ),
        talkTitle:
            'There are 2 types of people; those who can keep a secret and I can’t tell you about the other',
        description: (
            <>
                <p>
                    This is a short talk about the importance of good secrets, specifically things that are used to
                    secure you systems. There are broadly two types of secrets; static and dynamic.
                </p>
                <p>
                    Static secrets are things like that shared database password that is now known by everyone because
                    it was a little hard to sort out individual access for people/services when it was first set up and
                    now it’s too late because changing it might break stuff. Or that API key that relies on someone
                    manually changing it when necessary so it rarely gets done.
                </p>
                <p>
                    I discuss why static secrets are not really a great idea and that having the ability to use short
                    lived credentials for authentication is crucial to keeping your stuff secure. These dynamic secrets
                    should be generated when needed, auditable back to the individual/system that requested them and
                    revoked when finished with. Dynamic secrets reduces the impact if credentials get leaked as they can
                    only be used for a short amount of time.
                </p>
                <p>
                    <li>1. Try and avoid secrets that are not easily changed, for example; those have to be changed
                        manually
                    </li>
                    <li>2. Use built in mechanisms to request/generate secrets in a trusted way when required</li>
                    <li>3. Secrets should not live longer than they need to - revoke them when they’ve been finished
                        with
                    </li>
                </p>
            </>
        ),
        image: DaveImage,
        linkedin: '',
        twitter: '',
        website: '',
        sessionType: 'ignite'
    },
    "krisztian-fekete": {
        name: 'Krisztian Fekete',
        jobTitle: 'engineer @ solo.io',
        bio: (
            <>
                <p>
                    Krisztian is enthusiastic about observability and cloud infrastructures. He's now working at Solo.io
                    as an engineer. Previously, he was working at LastPass as senior DevOps/SRE engineer. Krisztian is
                    building a self hosted blog on top of Istio in his spare time. The main topics of the blog are
                    aligned with his interests while he is also using the platform to share operational anecdotes on
                    running one of the most "over-engineered" blog out there.
                </p>
            </>
        ),
        talkTitle:
            'BumbleBee: Or How I Learned To Stop Worrying And Love eBPF',
        description: (
            <>
                <p>
                    eBPF is hard. There are more and more docs and blogs, but the learning curve seems to be really
                    steep. Where could you possibly start to play around with this new technology?
                </p>
                <p>
                    In this talk, I will briefly introduce the (e)BPF landscape, then show you one of the easiest way to
                    get started with eBPF. We will explore existing tools, and see what it takes to drop them into a
                    Kubernetes cluster, and learn how can you expose their output as Prometheus metrics with only a few
                    keystrokes.
                </p>
            </>
        ),
        image: KrisztianImage,
        linkedin: '',
        twitter: 'kfekete',
        website: 'https://krisztianfekete.org',
        sessionType: 'session'
    },
    "anais-urlichs": {
        name: 'Anais Urlichs',
        jobTitle: 'Open Source Developer Advocate at Aqua Security',
        bio: (
            <>
                <p>
                    Anaïs is a Developer Advocate at Aqua Security, where she contributes to Aqua’s cloud native open
                    source projects. When she is not advocating DevOps best practices, she runs her own YouTube Channel
                    centered around cloud native technologies. Before joining Aqua, Anais worked as SRE at Civo, a cloud
                    native service provider, where she worked on infrastructure for hundreds of tenant clusters. Her
                    passion lies in making tools and platforms more accessible to developers and community members.
                </p>
            </>
        ),
        talkTitle:
            'What Twitter taught me about DevSecOops',
        description: (
            <>
                <p>
                    This ignite talk will be solely based on tweets by other people in the DevSecOps space. I will
                    attempt to explain the principles of DevSecOps, core tools and practices in 5 minutes.
                </p>
            </>
        ),
        image: AnaisImage,
        linkedin: "https://www.linkedin.com/in/urlichsanais/",
        twitter: "urlichsanais",
        website: "https://anaisurl.com/",
        sessionType: 'ignite'
    },
    "baruch-sadogursky": {
        name: 'Baruch Sadogursky',
        jobTitle: 'Principal Developer Productivity Engineering Advocate, Gradle',
        bio: (
            <>
                <p>
                    Baruch Sadogursky (@jbaruch) did Java before it had generics, DevOps before there was Docker, and
                    DevRel before it had a name. He started DevRel at JFrog when it was ten people and took it all the
                    way to a successful $6B IPO by helping engineers solve problems. Now Baruch keeps helping engineers
                    solve problems but also helps companies help engineers solve problems. He is a co-author of the
                    "Liquid Software" and "DevOps Tools for Java Developers" books, serves on multiple conference
                    program committees, and regularly speaks at numerous most prestigious industry conferences,
                    including Kubecon, JavaOne (RIP), Devoxx, QCon, DevRelCon, DevOpsDays (all over), DevOops (not a
                    typo) and others. After a tenure of eleven years in JFrog DevRel, Baruch is the Principal Developer
                    Productivity Engineering Advocate at Gradle
                </p>
            </>
        ),
        talkTitle:
            'DevOps for developers (or maybe against them?!)',
        description: (
            <>
                <p>
                    "DevOps" is the operations people’s crafty plan to make developers do other people's work, but we
                    are smart enough to see right through this naive rebranding trick!
                </p>
                <p>
                    Baruch suggests you think about it: we, the developers, have written all the code. It passes all the
                    tests; it obviously works, and works well (Are we a little proud? We are!); so we are DONE.
                </p>
                <p>
                    Now, out of the blue, a bunch of "thought leaders" (all with an operations background, mind you!)
                    are trying to tell us that we have to learn YAML, Docker, Kubernetes and Terraform to deploy our
                    software because suddenly it is our concern?!
                </p>
                <p>
                    In this talk, we'll discuss why developers do or don’t need DevOps. We'll consider arguments made by
                    DevOps visionaries and see whether they hold water. Hopefully, by the end of the talk, we'll
                    understand whether DevOps really helps developers to deploy better code to production more often, or
                    if it is just another scam made up by marketing and evangelists.
                </p>
            </>
        ),
        image: BaruchImage,
        linkedin: '',
        twitter: '',
        website: '',
        sessionType: 'session'
    },
    "simon-gurney": {
        name: 'Simon Gurney',
        jobTitle: 'Co-Founder, Punk Security ',
        bio: (
            <>
                <p>
                    Simon is one of the Punk Security Co-Founders and a DevSecOps consultant, helping clients integrate
                    security into their application and infrastructure automation. He has over 15 years experience
                    working within IT, primarily focused on automation and InfoSec.
                </p>
                <p>
                    Simon is a vocal advocate for DevOps and is also a keen Python and .NET CORE developer. He has
                    authored four opensource tools: dnsReaper, SMBeagle, secret magpie and pwnSpoof.
                </p>
            </>
        ),
        talkTitle:
            'Git those passwords out your repos! - detecting leaked secrets at scale',
        description: (
            <>
                <p>
                    * Why having secrets, passwords and certificates in your codebase is a bad idea (even if they're
                    private!)
                </p>
                <p>
                    * How can we detect these secrets and how should we handle the secrets we find?
                </p>
                <p>
                    * Our lessons learnt managing detection at scale and how to implement automatic checks
                </p>
            </>
        ),
        image: SimonImage,
        linkedin: 'https://www.linkedin.com/in/simon-gurney-2396375b',
        twitter: '',
        website: 'https://punksecurity.co.uk',
        sessionType: 'session'
    },
    "ben-madley": {
        name: 'Ben Madley',
        jobTitle: 'Senior Software Engineer at Made Tech',
        bio: (
            <>
                <p>
                    Ben is a Senior Software Engineer at Made Tech where he helps public sector organisations deliver
                    technology projects. With experience improving and introducing processes in major government
                    organisations and small companies with millions of users, Ben is passionate about delivering
                    software in a people-oriented way that makes sense.
                </p>
            </>
        ),
        talkTitle:
            'How to Get Nothing Done',
        description: (
            <>
                <p>
                    Plenty of people will give you advice about getting things done, but precious few help you do the
                    opposite: minimise your added value and spend the most time doing it possible. By following this
                    simple advice, you can make sure that tasks take far longer to get done than they need to and, when
                    you do finish, the impact is much smaller than it should be.
                </p>
            </>
        ),
        image: BenImage,
        linkedin: '',
        twitter: 'BenMad29',
        website: '',
        sessionType: 'ignite'
    },
    "craig-box": {
        name: "Craig Box",
        jobTitle: "VP Engineering & Co-Founder, ARMO",
        bio: (
            <>
                <p>
                    VP of Open Source and Community at ARMO
                    Craig Box is VP of Open Source and Community at ARMO, the enterprise company that created the CNCF Kubernetes security platform Kubescape.
                    Prior to this role, Craig had a number of roles at Google, including as a lead for the Istio open source project, and the Cloud Native developer relations team, responsible for Kubernetes, GKE and Anthos. He was the founder and co-host of the Kubernetes Podcast from Google, producing the top 20 show for over four years.
                    Craig has worked with Cloud Native customers and communities since the launch of Kubernetes in 2014, and has delivered talks on 6 continents, including a KubeCon keynote. He started his career when DevOps was called "systems administration", and has 20 years of experience in development, deployment, DevOps, consulting, advisory and management roles around the world.
                </p>
            </>
        ),
        talkTitle:
            "Unpacking Open Source Security in Public Repos & Registries",
        description: (
            <>
                <p>
                    The container ecosystem has exploded in the decade since it's been introduced, with containers becoming the backbone for the way we package, deploy, orchestrate, schedule & operate our production applications. It's no surprise then, that so many public facing resources have popped up over the years, both complementary open source projects & public registries that aggregate commonly used container images.
                </p>
                <p>
                    In this talk we will unveil data from first of its kind research conducted by scanning the most popular and widely adopted open source projects––from Grafana to Prometheus, Lens, Helm, ArgoCD to public registries from which we pull our base images–DockerHub, Quay, to GCR, & ECR. We will share how these public-facing resources leveraged by practically all developers stack up security-wise.
                </p>
            </>
        ),
        image: CraigImage,
        linkedin: "https://www.linkedin.com/in/benyamin-ben-hirschberg-66141890/",
        twitter: "slashben81",
        website: "https://armosec.io/blog",
        sessionType: "session",
    },
    "carly-richmond": {
        name: "Carly Richmond",
        jobTitle: "Developer Advocate @ Elastic",
        bio: (
            <>
                <p>
                    Carly is a Developer Advocate at Elastic, based in London, UK. Before joining Elastic in 2022, she spent over 10 years working as a technologist at a large investment bank, specialising in Frontend Web development and agility. Outside of work, she is an agile evangelist, UI enthusiast, and regular blogger on her personal site and Medium.
                </p>
                <p>
                    In her spare time, she enjoys cooking, photography, drinking tea and chasing after her toddler son.
                </p>
            </>
        ),
        talkTitle:
            "Are They Really Using It? Monitoring Digital Experience to Determine Feature Effectiveness",
        description: (
            <>
                <p>
                    Building beloved user applications is a challenging yet rewarding pursuit for us working in technology today. While real user monitoring, or RUM, metrics are added early for external-facing applications, it is often added as an afterthought in the building of applications when building applications for users within organisations. Instead, we rely on anecdotal discussions and review feedback that, for many reasons, can leave us with an incomplete or accurate picture of the adoption of the software we build.
                </p>
                <p>
                    In this talk, I will use my experience in building applications in investment banking to discuss the reasons why obtaining long-term feedback on feature adoption can be difficult to validate. We will also outline how real user monitoring and performance capabilities in tools such as Elastic User Experience or other RUM collectors can help you quantify user experience satisfaction and adoption to ensure we are providing effective experiences for users.
                </p>
            </>
        ),
        image: CarlyImage,
        linkedin: "https://www.linkedin.com/in/carly-richmond-b4b03563/",
        twitter: "CarlyLRichmond",
        website: "",
        sessionType: "session",
    },
    "andy-burgin": {
        name: "Andy Burgin",
        jobTitle: "All-round DevOps nuisance",
        bio: (
            <>
                <p>
                    Andy is Principal Platform Engineer at Flutter UK and Ireland. He considers himself a Kubernetes and DevRel fettler, spending a far too much of his spare time making Raspberry Pis do things they shouldn't. He is a small part of the organising team for DevOpsDays London and has been running the DevOps meetup in Leeds for 8 years hosting over 40 events. He's attended and spoke at a bunch of DevOps conferences and in his own words is 'an all-round DevOps nuisance'
                </p>
            </>
        ),
        talkTitle:
            "Curating a Platform Experience",
        description: (
            <>
                <p>
                    In the DevOps and SRE community, there’s a buzz about product-focused platform teams. Teams not only managing their platforms, pipelines and tooling as a product. But, helping development teams go fast by reducing time to market and operational complexity. There are lots of talks/articles on why and how to build a platform, but they miss the details of one of the most important components – your users.
                </p>
                <p>
                    One of the key principles of a platform team is curating a user experience – but what does that even mean? and more importantly, when you’ve worked that out, how do you do it? how do you know if it’s a success?
                </p>
                <p>
                    Andy is part of the Kubernetes platform squad at Flutter UK and Ireland, since its inception in 2016 the platform has been widely adopted across the business. In 2019 Andy was asked to head up a newly formed Platform Customer Experience team to help with some of the growing pains of a successful product and help increase its adoption. This talk explains what the customer experience team did, starting from scratch they how have attained glowing feedback and recommendations from across the business. Andy will explain the practical things that were done, what worked (and what didn’t) and how the focus of the team has evolved over the past three years and what’s next.
                </p>
            </>
        ),
        image: AndyImage,
        linkedin: "ihttps://www.linkedin.com/in/andyburgin/",
        twitter: "andyburgin",
        website: "https://data.andyburgin.co.uk/",
        sessionType: "session",
    },
    "hannah-mitchell": {
        name: "Hannah Mitchell",
        jobTitle: "Director at The Fusion Group",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Creating 'happy' at work",
        description: (
            <>
                <p>
                    With the competition for hiring being at an all time high, it;s imperative that you're creating a happy and rewarding environment for your employees. Through Hannah's extensive experience of hiring within the software sector & building tech communities, she’ll provide you with a handy guide to retaining and nurturing your team.
                    
                    Happiness is not something that is often associated with work life, but Hannah's hear to tell you it can be! With the pressures of day to day tasks we forget that there is more to running and growing a team. Happiness is something that we need to make a priority, and when we do it has amazing results!
                    
                    We'll be looking at ways you can start the path to happiness at work with practical tips that will have immediate impact, and support with retaining happy, productive teams.
                </p>
            </>
        ),
        image: HannahMImage,
        linkedin: "https://www.linkedin.com/in/hannahmitchell-fusiongroup/",
        twitter: "https://twitter.com/hannah_fusion",
        website: "https://thefusionhub.co.uk/",
        sessionType: "session",
    },
    "stuart-langridge": {
        name: "Stuart Langridge",
        jobTitle: "Director at Kryogenix",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Privacy Could Be The Next Big Thing",
        description: (
            <>
                <p>
                    About privacy, and how people are scared and uneasy about what's being done with their data. And how we need to stop building new technology and start working out how to explain to everyone that it is possible to build a world where you don't have to feel exploited and frightened and you still have all the same internet superpowers that you have today.
                    
                    We'll help developers understand how to build web apps that preserve privacy without giving up their technology, help managers to learn how to help users feel in control while still meeting their business goals, and help founders understand that privacy is an advantage that their rivals won't, or can't, compete with. Stuart Langridge, the author of http://web.dev's Learn Privacy course and contributor to Smashing Magazine's Ethics and Privacy, shows how for users, developers, managers, and founders, privacy could be the next big thing
                </p>
            </>
        ),
        image: StuartLImage,
        linkedin: "https://www.linkedin.com/in/stuartlangridge/",
        twitter: "https://twitter.com/sil",
        website: "https://www.kryogenix.org/",
        sessionType: "session",
    },
    "max-woolf": {
        name: "Max Woolf",
        jobTitle: "Staff Engineer at Gitlab",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "How to code review, effectively",
        description: (
            <>
                <p>
                    Being told that something you worked hard on isn't perfect is uncomfortable. Telling others something that they worked hard on isn't perfect is even harder.
                    
                    Code review is a critical part of being a software engineer and doing it well can be a huge factor when looking to progress your career to a senior level and beyond. In this 30 minute talk, I'll give a history of how I learned to be a code reviewer, how *you* can be a better reviewer and, most importantly, how not to want to cry and throw in the towel when someone tells you your code isn't perfect.
                    
                    **We are not our code**, and the quicker we become comfortable with it, the quicker we can reach code review nirvana.
                </p>
            </>
        ),
        image: MaxWImage,
        linkedin: "https://www.linkedin.com/in/maxcodes/",
        sessionType: "session",
    },
    "salma-alam-naylor": {
        name: "Salma Alam-Naylor",
        jobTitle: "Senior Staff Developer Experience Engineer at Netlify",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Fake it, don't make it. How serverless can level up your front end game and unlock your full stack potential",
        description: (
            <>
                <p>
                    As a front end developer you're juggling countless skills. Responsive design, building for accessibility, browser support, page performance — it's a lot. And if you want to go Full Stack™️, it can be a challenge to find the time and brain space to learn how to scale and secure a back end on top of building the app itself. So how can you unlock your full stack potential without the pain? You fake it, don't make it! (The back end, that is.)
                    
                    In this talk, you'll learn how serverless and edge runtimes are empowering front end developers to be more productive than ever, and how we as front end devs, can leverage this modern tooling to do things we only ever dreamed of.
                </p>
            </>
        ),
        image: SalmaANImage,
        linkedin: "https://www.linkedin.com/in/whitep4nth3r/",
        twitter: "https://twitter.com/whitep4nth3r",
        website: "https://whitep4nth3r.com/",
        sessionType: "session",
    },
    "eli-holderness": {
        name: "Eli Holderness",
        jobTitle: "Developer Advocate at Scaleway",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "A Brief History Of Data Storage",
        description: (
            <>
                <p>
                    For millennia, humans have known things. Pretty quickly, we started writing them down; our brains aren't particularly good at storing all the things we know reliably, and we needed something more durable.
                    
                    A long time ago, 'writing things down' looked like clay tablets with cuneiform on them, and affairs have only got more complicated from there. Nowadays, we try and write things down so that computers can understand them too, and that's given us a bewildering array of options - HDDs, SSDs, magnetic tape storage and so much more.
                    
                    In this talk, we're going to take a look at the history of writing things down, and discuss why some methods have worked better than others. We're going to talk about why writing things down for humans is different than doing it for a computer, and why that makes it difficult to try and do both at the same time (this is what code is). Finally, we'll take a look at what the state-of-the-art is today for keeping data safe, and what the future might hold.
                    
                    This talk has no prerequisites, although a fondness for weird facts will certainly enhance the experience.
                </p>
            </>
        ),
        image: EliHImage,
        linkedin: "https://www.linkedin.com/in/eli-holderness-4890b886/",
        twitter: "https://twitter.com/EliHolderness",
        sessionType: "session",
    },
    "steve-heyes": {
        name: "Steve Heyes",
        jobTitle: "Engineering Manager at Birdie",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Debunking The Myths Of Leadership",
        description: (
            <>
                <p>
                    There are a lot of books and talk about being a good leader, and yet a good leader seems to be rare to find. In this talk Steve will be looking at the myths surrounding leadership and how you don't need to be in the C-Suite or a manager to be one. He'll then get into what a leader actually is and how to grow at being one. 
                </p>
            </>
        ),
        image: SteveHImage,
        linkedin: "https://www.linkedin.com/in/steveheyes/",
        twitter: "https://twitter.com/mrsteveheyes",
        sessionType: "session",
    },
    "joanna-suau": {
        name: "Joanna Suau",
        jobTitle: "Developer Educator at Infobip",
        bio: (
            <>
                <p>
                </p>
            </>
        ),
        talkTitle:
            "Why docs-as-code peer review should be part of your dev cycle",
        description: (
            <>
                <p>
                    Docs-as-code is a method of writing documentation in which the documentation is treated like source code and follows a similar workflow.

                    In this talk, Joanna will explore in more detail why the docs-as-code approach is important to both content creators and developers, what's the difference between a normal review cycle and a docs-as-code one, and how exactly such approach benefits the development cycle."
                </p>
            </>
        ),
        image: JoannaSImage,
        linkedin: "https://www.linkedin.com/in/joannasuau/",
        twitter: "https://twitter.com/JoannaSuau",
        sessionType: "session",
    },
    "omar-qureshi": {
        name: "Omar Qureshi",
        jobTitle: "Senior Devops Engineer at SEGA HARDlight",
        bio: (
            <>
                <p>
                
                </p>
            </>
        ),
        talkTitle:
            "Breaking Out of Silos",
        description: (
            <>
                <p>
                    Understanding and embracing the SRE/DevOps mindset goes beyond filling roles—it's a transformative strategy to drive innovation and resilience. In this talk, we'll demystify these philosophies, highlight the hurdles to their adoption in corporate environments, and provide practical guidance on instigating this cultural shift. Join us to explore the potential of SRE/DevOps principles in fostering productivity, innovation, and competitive advantage in your organization.   
                </p>
            </>
        ),
        image: OmarQImage,
        linkedin: "https://www.linkedin.com/in/omar-qureshi-24805913/",
        sessionType: "session",
    },
    "zakariya-mohummed": {
        name: "Zakariya Mohummed",
        jobTitle: "Software Engineer",
        bio: (
            <>
                <p>
                
                </p>
            </>
        ),
        talkTitle:
            "The Unconventional Engineer",
        description: (
            <>
                <p>
                    In this talk, I'll walk through my experience as a self-taught developer working towards success in the tech industry, while highlighting the value of continuous learning and adaptability.    
                </p>
            </>
        ),
        image: ZakariyaMImage,
        linkedin: "https://www.linkedin.com/in/zakariya-mohummed-b97269155/",
        twitter: "https://twitter.com/ZakMohummed",
        sessionType: "session",
    },
    "elizabeth-lawel": {
        name: "Elizabeth Lawel",
        jobTitle: "Co-Founder, MTAM Group",
        bio: (
            <>
                <p>
                
                </p>
            </>
        ),
        talkTitle:
            "Diversity in Tech: Igniting Creative Innovation and Building a Better Future",
        description: (
            <>
                <p>
                    In a world grappling with intersecting global challenges, it's time to go beyond the status quo of talent acquisition in diversity and inclusion (D&I) initiatives. What if we could dismantle inequality and drive transformation in the 21st century? 

                    In this era of rapid technological advancement, valuing diversity in tech goes beyond just achieving fairness and representation; it becomes a strategic imperative. By harnessing the collective strength of diverse perspectives, experiences, and skills, we can unlock unparalleled problem-solving abilities, unleash creativity, and deliver groundbreaking solutions and products. 

                    But how do we get there? It starts by re-imagining the talent pipeline.
                </p>
            </>
        ),
        image: ElizbathLImage,
        linkedin: "https://www.linkedin.com/in/elizabeth-zeddie-lawal-184264a1/",
        sessionType: "session",
    },
    "zarrah-belgian": {
        name: "Zarrah Belgian",
        jobTitle: "Co-Founder, MTAM Group",
        bio: (
            <>
                <p>
                
                </p>
            </>
        ),
        talkTitle:
            "Diversity in Tech: Igniting Creative Innovation and Building a Better Future",
        description: (
            <>
                <p>
                    In a world grappling with intersecting global challenges, it's time to go beyond the status quo of talent acquisition in diversity and inclusion (D&I) initiatives. What if we could dismantle inequality and drive transformation in the 21st century? 

                    In this era of rapid technological advancement, valuing diversity in tech goes beyond just achieving fairness and representation; it becomes a strategic imperative. By harnessing the collective strength of diverse perspectives, experiences, and skills, we can unlock unparalleled problem-solving abilities, unleash creativity, and deliver groundbreaking solutions and products. 

                    But how do we get there? It starts by re-imagining the talent pipeline.
                </p>
            </>
        ),
        image: ZarrahBImage,
        sessionType: "session",
    },
    "kat-cosgrove": {
        name: "Kat Cosgrove",
        jobTitle: "Lead Developer Advocate at Dell",
        bio: (
            <>
                <p>
                    Kat Cosgrove is a Developer Advocate and an actual cyborg. Her professional background has run the gamut from bartender, to video store clerk, to teacher, to software developer. Her specialty is approachable 101-level content for junior developers or anyone else who considers themselves a newbie, with a particular focus on DevOps. She has served on the Kubernetes release team since v1.22.
                </p>
                <p>
                    When she's not building demos or at a conference, she spends her time playing video games, watching horror movies, and reading science fiction. She lives in Scotland with her cat, Espresso, who is the real brains behind the operation and actually ghostwriting all of her tweets.
                </p>
            </>
        ),
        talkTitle:
            "Historical Context: Infrastructure as Code",
        description: (
            <>
                <p>
                    We rely on context a lot as software engineers, passing state around so one function knows what the last did, and how it was impacted by the one before that, and on and on. Without passing around context, a lot of things would be much more difficult to build, or at least much more wordy. People need context too. Sure, we’re smarter than a function that only knows how to do one thing, and we can figure it out eventually, but it’s easier to learn a new tool or concept if someone gives us the historical context.
                </p>
                <p>
                    This is especially true as the cloud native space grows further into the mainstream. Abstractions are great, but they can create a hostile learning environment for anyone touching these tools for the first time, new and experienced engineers alike. You need to be given the historical context for these tools, to understand the technical hurdles and pain points that led to doing things the way we do now. In this talk, I’ll give you the historical context of infrastructure as code – what that means, how we got from Makefiles to here, and why we need it.
                </p>
            </>
        ),
        image: KatCosgroveImage,
        linkedin: "https://www.linkedin.com/in/katcosgrove",
        twitter: "dixie3flatline",
        website: "",
        sessionType: "session",
    },
    "amanda-brock": {
        name: "Amanda Brock",
        jobTitle: "CEO of OpenUK",
        bio: (
            <>
                <p>
                    Amanda Brock is CEO of OpenUK the UK organisation for the business of Open Technology –
                    open source software, open hardware and open data - with a purpose of UK Leadership and
                    International Collaboration in Open Technology and she is the Executive Producer of State
                    of Open Con https://stateofopencon.com/
                    </p>
                <p>
                    She is a Board Member of the Open Source Initiative; appointed member of the Cabinet
                    Office's Open Standards Board; Member of the British Computer Society Inaugural Influence
                    Board; Advisory Board Member, Sustainable Digital Infrastructure Alliance and Mimoto; and
                    European Representative of the Open Invention Network.
                    </p>
                <p>
                    A lawyer of 25 years’ experience, she previously chaired the Open Source and IP Advisory
                    Group of the United Nations Technology Innovation Labs, sat on the OASIS Open Projects
                    and UK Government Energy Sector Digitalisation Task Force Advisory Boards. She was
                    General Counsel of Canonical for 5 years from 2008 and set up their legal function.
                    Amanda is a judge in the IDG Foundry CIO 100 2023 having been a Judge in the We are Tech
                    Women Rising Star Awards 2020-22. She was awarded the Lifetime Achievement Award in
                    the Women, Influence & Power in Law Awards UK 2022, and included in Computer Weekly’s
                    Most Influential Women in Tech Long list in 2021 and 2022 and in their UK Tech50
                    Influencers longlist for 2022 and 2023.
                    </p>
                <p>
                    She was included in the 2022 https://heroes.involverolemodels.org/ Involve HERoes list of
                    100 global women executives driving change by example.
                    She is the editor of Open Source Law, Policy and Practice (2nd edition) published by Oxford
                    University Press in October 2022, with open access thanks to the Vietsch Foundation
                    https://amandabrock.com/books/.

                </p>
            </>
        ),
        talkTitle:
            "Will Open Source Fail?",
        description: (
            <>
                <p>
                    Will Open Source Fail?
                    In this talk Amanda will look at the position of open source software in the global marketplace and the UK today, the challenges it faces and and what the future of open source software is.
                </p>
                <p>
                    The audience will take away a better understanding of what open source software is, how it’s utilisation has grown to be the majority of software today, specific challenges it faces today and where it’s future could lie
                </p>
            </>
        ),
        image: AmandaBImage,
        linkedin: "linkedin.com/in/amandabrocktech/",
        twitter: "@amandabrockUK",
        website: "https://amandabrock.com/books",
        sessionType: "session",
    },
    "louise-paling": {
        name: "Louise Paling",
        jobTitle: "",
        bio: <></>,
        talkTitle: "Lean Startup",
        description: "",
        image: LouiseImg,
        linkedin: "",
        twitter: "short_louise",
        website: "",
        sessionType: "session",
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
    //     image: "",
    //     linkedin: "",
    //     twitter: "",
    //     website: "",
    //     sessionType: "",
    // },
}
