import KunalImage from '@/images/avatars/kunal.png'
import OllieImage from '@/images/avatars/ollie.jpg'
import JessImage from '@/images/avatars/jess.jpg'
import BeckyImage from '@/images/avatars/becky.jpeg'
import PiperImage from '@/images/avatars/piper.jpg'
import CarlyImage from '@/images/avatars/carly.jpeg'
import MaxImage from '@/images/avatars/max.jpg'
import RebekahImage from '@/images/avatars/bek.jpeg'
import JenImage from '@/images/avatars/jen.jpg'
import BenImage from '@/images/avatars/ben.jpeg'
import NicImage from '@/images/avatars/nic.jpeg'

const speakers = [
  {
    name: 'Rebekah Kulidzan',
    jobTitle: 'Solutions Architect at AWS',
    bio: (
      <>
        <p>
          Rebekah is a Solutions Architect in the UK&I Public Sector team at
          Amazon Web Services (AWS), Public Speaker, and Mental Health Advocate.
          Rebekah is a member of AWS’ Serverless Community and has a strong
          interest in microservices architectures and event-driven design.
        </p>

        <p>
          Alongside her career, Rebekah created a Twitter Spaces series called
          #TechTable where she interviewed some of her favourite people in tech
          on topics from cloud computing to open source and learning to
          developer relations. In 2020, Rebekah switched careers and writes
          about her career journey and interests on{' '}
          <a href="https://rkulidzan.com" target="_blank" rel="noopener">
            rkulidzan.com
          </a>
          .
        </p>
      </>
    ),
    talkTitle:
      'Thinking Asynchronously: application integration patterns for microservices',
    description: (
      <>
        <p>
          When applying a microservices architecture a lot of communication is
          done over the network. For better resilience and flexibility, this
          communication should happen asynchronously and in a loosely coupled
          manner.
        </p>
        <p>In this session, you will:</p>{' '}
        <ul>
          <li>
            Explore some fundamental integration- and conversation-patterns
          </li>
          <li>
            Connect them to real-world use cases (which aren’t only to
            microservices)
          </li>
          <li>
            Learn how end-user clients can communicate using synchronous APIs
            whilst still taking advantage of asynchronous communication for the
            processing under the hood.
          </li>
        </ul>
      </>
    ),
    image: RebekahImage,
    linkedin: 'rebekahkulidzan',
    twitter: 'rkulidzan',
    website: 'https://rkulidzan.com',
    fullSession: true,
  },
  {
    name: 'Carly Richmond',
    jobTitle: 'Developer Advocate at Elastic',
    bio: (
      <>
        <p>
          Carly is a Developer Advocate at Elastic, based in London, UK. Before
          joining Elastic in 2022, she spent over 10 years working as a
          technologist at a large investment bank, specialising in Frontend Web
          development and agility. Outside of work, she is an agile evangelist,
          UI enthusiast, and regular blogger on her personal site and Medium.
        </p>

        <p>
          In her spare time, she enjoys cooking, photography, drinking tea and
          chasing after her toddler son.
        </p>
      </>
    ),
    talkTitle:
      'Are They Really Using It? Monitoring Digital Experience to Determine Feature Effectiveness',
    description: (
      <>
        <p>
          Building beloved user applications is a challenging yet rewarding
          pursuit for us working in technology today. While real user
          monitoring, or RUM, metrics are added early for external-facing
          applications, it is often added as an afterthought in the building of
          applications when building applications for users within
          organisations. Instead, we rely on anecdotal discussions and review
          feedback that, for many reasons, can leave us with an incomplete or
          accurate picture of the adoption of the software we build.
        </p>

        <p>
          In this talk, I will use my experience in building applications in
          investment banking to discuss the reasons why obtaining long-term
          feedback on feature adoption can be difficult to validate. We will
          also outline how real user monitoring and performance capabilities in
          tools such as Elastic User Experience or other RUM collectors can help
          you quantify user experience satisfaction and adoption to ensure we
          are providing effective experiences for users.
        </p>
      </>
    ),
    image: CarlyImage,
    twitter: 'CarlyLRichmond',
    website: 'https://carlyrichmond.com/',
    linkedin: 'carly-richmond-b4b03563/',
    GitHub: 'https://github.com/carlyrichmond',
    fullSession: true,
  },
  {
    name: 'Max Woolf',
    jobTitle: 'Senior Backend Engineer at GitLab',
    bio: (
      <>
        <p>
          A lapsed musician, enthusiastic dog owner, community lover and
          supposedly a senior software engineer, I've been building iOS
          applications and web applications, mainly in Ruby, since 2009.
          Currently I work at GitLab in a global team that spans the globe from
          the US West Coast to New Zealand, via Birmingham of course.
        </p>
      </>
    ),
    talkTitle: 'Stop "Working from Home" and Start Working Asynchronously',
    description: (
      <>
        <p>
          Asynchronous work is the future for software engineering teams. We'll
          talk about how we got here and give you some practical ideas to stop
          your teams relying on the idea that everyone has to be awake at the
          same time to do your best work.
        </p>
      </>
    ),
    image: MaxImage,
    website: 'https://gitlab.com/mwoolf',
    linkedin: 'max-woolf-488bb534/',
    fullSession: true,
  },
  {
    name: 'Jen Lambourne',
    jobTitle: 'Knowledge Management Lead at Monzo',
    bio: (
      <>
        <p>
          Jen is a technical writer who loves a gnarly content problem.
          Previously Head of Technical Writing for the Government Digital
          Service, she now leads the technical writing and knowledge management
          discipline at Monzo.
        </p>
        <p>
          Having moved from government to banking, she recognises she&apos;s
          drawn to creating inclusive and user-centred content in traditionally
          unfriendly industries.
        </p>
        <p>
          She likes using developer tools to manage docs, demystifying the
          writing process, and presenting her adventures in documentation at
          conferences. She is the co-author of{' '}
          <em>
            Docs for Developers: An Engineer’s Field Guide to Technical Writing
          </em>
          .{' '}
        </p>
      </>
    ),
    talkTitle: 'How to avoid writing terrible instructions: Step 1',
    description: (
      <>
        <p>
          We’ve all been there. Got stuck, searched the depths of the
          documentation, and found something that looks helpful. Huzzah!
        </p>{' '}
        <p>But three lines in you realise these docs are no good at all.</p>
        Instructions, step-by-steps, how-tos, whatever name you give them, are
        one of the most common types of documentation, and one of the easiest to
        get wrong.{' '}
        <p>
          In this session, we’ll deconstruct some bad instructions so you know
          how to write great ones.
        </p>
      </>
    ),
    image: JenImage,
    twitter: 'Jenny__Anne',
    website: 'https://docsfordevelopers.com/',
    linkedin: 'jenniferlambourne',
    fullSession: true,
  },
  {
    name: 'Nic Jackson',
    jobTitle: 'Principal Developer Advocate at HashiCorp',
    bio: (
      <>
        <p>
          Nic Jackson is a developer advocate at HashiCorp and the author of
          “Building Microservices in Go” a book which examines the best patterns
          and practices for building microservices with the Go programming
          language.
        </p>
        <p>
          Additionally, Nic is the author of Service Mesh Patterns, a book that
          looks at patterns and operational best practices to help you deploy
          and use service meshes in a way that meets your company's goals and
          needs.
        </p>
      </>
    ),
    talkTitle: 'A Developers Guide to Managing Infrastructure',
    description: (
      <>
        <p>
          Year on year, developers are taking more responsibility for managing
          their applications infrastructure. Thankfully advances in cloud
          products have dramatically simplified this task by providing
          preconfigured managed resources that we can leverage. However, even
          with managed resources, you must take a measured and sustainable
          approach to your infrastructure to ensure consistency and
          reproducibility.
        </p>
        <p>
          In this talk, you will learn how managing infrastructure is very
          similar to your workflow for writing code. Using the popular
          open-source tool Terraform, you will discover two different
          approaches: a configuration-based approach using Terraform's
          domain-specific language and a code-based approach using the Terraform
          CDK and your programming language of choice, such as Python,
          Typescript, Go, or C#. We will look at the pros and cons of each
          approach and a continuous integration workflow for applying GitOps
          principles to infrastructure code.
        </p>
      </>
    ),
    image: NicImage,
    twitter: 'sheriffjackson',
    youtube: 'nicjackson',
    fullSession: true,
  },
  {
    name: 'Ben Foxall',
    jobTitle: 'Full-Stack Engineer at Wayve',
    bio: (
      <>
        <p>
          Ben Foxall is a full-stack engineer at Wayve, where he helps build
          web-based tooling for the next generation of self-driving cars.
        </p>
        <p>
          He loves the web, data visualisation, and exploring human-technology
          interactions.
        </p>
        <p>
          He spends his time hacking on projects or out biking into the
          wilderness.
        </p>
      </>
    ),
    talkTitle: 'Connecting a web browser to a motorbike',
    description: (
      <>
        <p>
          I'll give an introduction to how data flows around a vehicle and is
          shared between components, we’ll draw parallels with how we architect
          more traditional data services or networks.
        </p>
        <p>
          We'll then look at browser capabilities and platform APIs that allow
          us to connect to data sources and how we can architect frontend
          solutions that are robust to handle various data formats and rates.
        </p>
        <p>No prior knowledge (or interest) in motorbikes is required!</p>
      </>
    ),
    image: BenImage,
    twitter: 'benjaminbenben',
    website: 'https://benjaminbenben.com/',
    fullSession: true,
  },
  {
    name: 'Becky Pauley',
    jobTitle: 'Cloud Engineer at Jetstack',
    bio: (
      <>
        <p>
          {' '}
          Working as a primary school teacher, I started learning Python in my
          spare time - and got hooked on the feeling of solving problems.A year
          and a half ago, I finally made the leap from teaching into tech!I’ ve
          since worked as a Platform Engineer and joined Jetstack at the start
          of this year to focus on Kubernetes and Cloud Native technologies.As
          well as all things infrastructure, I’ m passionate about ways of
          working, learning and culture.{' '}
        </p>
      </>
    ),
    talkTitle: 'Lost in the clouds: shifting to DevOps',
    description: (
      <>
        <p>
          {' '}
          The best ideas come from conversations: How do I get better at‘
          DevOps’ in my engineering team ? How do I move from software
          engineering to Cloud and Platform roles ?{' '}
        </p>
        <p>
          {' '}
          This is a talk about those conversations - from my own experiences
          jumping from teaching to tech, and those of experienced engineers who’
          ve made a move into Platform roles.{' '}
        </p>
        <p> Things we’ ll talk about : </p>
        <li>Where we’re going and why. </li>
        <li>What’s the cheat sheet? </li>
        <li>Technical knowledge and skills.</li>
        <li>Advice from the future- what we wish we’d known before.</li>
      </>
    ),
    image: BeckyImage,
    twitter: 'beckypauley',
    linkedin: 'beckypauley',
    fullSession: true,
  },
  {
    name: 'Kunal Kushwaha',
    jobTitle: 'Developer Advocate at Civo',
    bio: 'Kunal is working towards empowering communities via open-source and education. He finds passion in teaching and has taught thousands of folks online and in person. He is currently a Developer Advocate at Civo, CNCF Ambassador, track chair of the KubeCon + CloudNativeCon student track, Major League Hacking Coach. He is the founder of Kubeworld, Community Classroom, and also started the official Cloud Native Student Community group joined by thousands of students, focussed on getting more young people involved in the ecosystem.',
    talkTitle: 'Scaling Communities to be more Inclusive',
    description: (
      <>
        <p>
          {' '}
          Being an open - source enthusiast, Kunal believes that diversity in
          the workplace and participation from people hailing from different
          cultures is necessary as well as instrumental for the growth of the IT
          sector.It exposes one to the multitude of values and principles that
          people from varying ethnicities hold.Meeting people from around the
          world teaches people to respect opposing perspectives and opinions,
          and ingrains in them respect for their peers.{' '}
        </p>
        <p>
          {' '}
          The talk is going to be focussed around what defines a community, and
          figuring out what are the community 's shared struggles. It’s also
          important to know what is the mission of your community and what
          members look to get out of it. Communication is key and we’ll also
          talk about how to future proof your community. \n\nRegarding diversity
          and inclusion, it’s important to know who might be excluded from
          accessing your community activities in their current form. We’ll also
          discuss about what are some of the negative scenarios which might
          happen while running activities for your community which will make
          them less inclusive to marginalised groups. Following up with
          designing for your community's needs, and last but not least, having a
          Code of Conduct.{' '}
        </p>
        <p> Attendees will learn about: </p>
        <li>
          How to start a new community and make it inclusive from the beginning.
        </li>
        <li>
          How to scale communities to under - representative groups How to deal
          with conflicts and take care of your audience’ s needs.
        </li>
      </>
    ),
    image: KunalImage,
    twitter: 'kunalstwt',
    linkedin: 'kunal-kushwaha',
    website: 'https://www.kunalkushwaha.com/',
    fullSession: true,
  },
  {
    name: 'Ollie Stevenson',
    jobTitle: 'Lead Frontend Engineer at Huel',
    bio: "I'm Ollie, Lead Frontend Engineer at Huel. I've done my fair share of agency work around the Midlands over the past few years and then decided to go in-house at Huel to really get deeper into things and build a stable career for myself. Outside of work I'm building an app for podcast management and creation, and have recently released music on a local drum n bass label - I like clean code and filthy beats!",
    talkTitle: 'Developing design systems: Mamma Mia! Here we go again...',
    description: (
      <>
        <p>
          {' '}
          An overview of how we(Huel) have utilised Stencil.js;a tool for
          developing framework - agnostic components / design systems and the
          pros / cons we have found.We currently have pages on our storefront
          that are React, and some that are Vue, they are both using the sameset
          of components, so no - matter the library / framework we 're using we
          are able to just write one set of code for our core UI Kit. This keeps
          us fully flexible as tech changes and frameworks come and go. If the
          movement of the frontend world shifts from React to Svelte, we will
          not have re-build any of our core components.
        </p>
      </>
    ),
    image: OllieImage,
    twitter: 'digital_ollie',
    fullSession: false,
  },
  {
    name: 'Jessica Rose',
    jobTitle: 'Developer Outreach',
    bio: (
      <>
        <p>
          {' '}
          Jessica Rose is a technology professional and keynote speaker
          specializing in community building, outreach and developing better
          processes for talent in technology.{' '}
        </p>
        <p>
          She is passionate about fostering more equal access to technical
          education and digital spaces.Host of the{' '}
          <a
            className="underline"
            href="https://open.spotify.com/show/3eVlgrnLC9fDRyTZMtTg88?si=7XCKEGPDQR-5IQDoDaKbeQ"
          >
            {' '}
            Pursuit Podcast{' '}
          </a>
          , she's founded the{' '}
          <a className="underline" href="http:/ / opencode.club / ">
            Open Code meetup
          </a>{' '}
          series and co-founded{' '}
          <a
            className="
        underline "
            href="
        https: //www.trans.tech/"
          >
            Trans*Code
          </a>
          . She's also rubbish at writing about herself in the third person.
        </p>
      </>
    ),
    talkTitle: 'Scaling Beyond Code',
    description: (
      <>
        <p>
          {' '}
          Sometimes in building software, we need to scale up our delivery,
          development or support of our products.And this need to expand our
          reach happens in tech in non - code contexts.In the same way that
          throwing more developers at a technical challenge won’ t fix it
          faster, just throwing more time and energy at non - code challenges
          won’ t hurry them along.Together we’ ll explore a specific problem in
          scaling non - code delivery, how a need to better serve technical
          learners stretched a small meetup into a project serving over 30, 000
          learners globally.Through exploring this together we’ ll also learn
          about how and where to look for opportunities to scale your own
          projects, companies and communities.{' '}
        </p>
      </>
    ),
    image: JessImage,
    twitter: 'jesslynnrose',
    website: 'http://jessica.tech',
    fullSession: true,
  },
  {
    name: 'Piper Bates',
    jobTitle: 'Front End Engineer at SteelBuy',
    bio: (
      <>
        <p>
          Previously a retail monkey turned illustrator, who took a leap of
          faith during the pandemic to change careers via School of Code. Now I
          work for Bamboo Auctions as a junior software engineer.
        </p>
      </>
    ),
    talkTitle:
      'Diversity in Tech - Why We Need More Bootcampers, and how to support them',
    description: (
      <>
        <p>
          I came into the industry as a bootcamper, and am now a year into the
          industry. I'll talk a little about my journey into tech, why we need
          more bootcampers in the industry, and how we can better support junior
          developers{' '}
        </p>
      </>
    ),
    image: PiperImage,
    linkedin: 'https://www.linkedin.com/in/piperbates/',
    fullSession: false,
  },
]

export default speakers
