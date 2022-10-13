import KunalImage from '@/images/avatars/kunal.png'
import OllieImage from '@/images/avatars/ollie.jpg'
import JessImage from '@/images/avatars/jess.jpg'
import BeckyImage from '@/images/avatars/becky.jpeg'
import JamesImage from '@/images/avatars/james.jpg'
import MaxImage from '@/images/avatars/max.jpg'
import RebekahImage from '@/images/avatars/bek.jpeg'
import JenImage from '@/images/avatars/jen.jpg'
import BenImage from '@/images/avatars/ben.jpeg'
import NicImage from '@/images/avatars/nic.jpeg'
import stuartImage from '@/images/avatars/stuart.jpg'
import steveImage from '@/images/avatars/steve.png'
import TomMImage from '@/images/avatars/tom-morrissey.jpg'
import MarkImage from '@/images/avatars/mark-perkin.jpg'
import ekipImage from '@/images/avatars/ekip.jpg'

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
    talkTitle: 'Developer empathy is your superpower',
    description: (
      <>
        <p>
          {' '}
          In this session, you’ll learn how to use empathy driven development as
          your superpower to become a better engineer. The talk would start by
          demystifying the myths, followed by how to embed empathy in your
          engineering practices.{' '}
        </p>
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
    name: 'James Seconde',
    jobTitle: 'Senior Developer Advocate at Vonage',
    bio: (
      <>
        <p>
          A trained actor with a curious background: from Theatre Studies, to
          Q/A, to Business Intelligence development, to full stack web
          development, I am the resident specialist PHP Developer Advocate at
          Global Cloud Communications giant Vonage. I founded Birmingham, UK's
          current PHP usergroup BrumPHP, as well as being on the Fusion Meetup
          team. I mentor, write and speak on PHP, Javascript, DevOps, DevRel and
          tech culture. I pretended to be a DJ on the way.
        </p>
      </>
    ),
    talkTitle: 'Speed Run! A 5 minute OpenAPI Migration',
    description: (
      <>
        <p>
          Got an existing REST API doing CRUD stuff? Cool. Ever harnessed the
          power of OpenAPI to port it to enable cloud tooling? Sounds complex,
          right? Well, I've got 5 mins to show you how to port it to Tyk Cloud
          as simply as possible. Let's go.
        </p>
      </>
    ),
    image: JamesImage,
    twitter: 'secondej',
    linkedin: 'secondej',
    fullSession: false,
  },
  {
    name: 'Stuart Langridge',
    jobTitle: 'Kryogenix Consulting',
    bio: (
      <>
        <p>
          Stuart is a consultant CTO, software architect, and developer to
          startups and small firms on strategy, custom development, and how to
          best work with the dev team. Code and writings are to be found at
          <a href="https://kryogenix.org" className="underline">
            {' '}
            kryogenix.org
          </a>{' '}
          and @sil on Twitter; Stuart himself is mostly to be found playing D&D
          or looking for the best vodka Collins in town.
        </p>
      </>
    ),
    talkTitle: "You really don't need all that JavaScript, I promise",
    description: (
      <>
        <p>
          JavaScript is your behaviour layer; the way to add interactivity to
          your sites, to provide a slick and delightful user experience, to make
          everything fast and easy and clean. But at some point everything
          changed: the tail started to wag the dog instead and development
          became Javascript-first.
        </p>
        <p>
          We'll talk about how you maybe shouldn't rely on JS as much as you're
          told to, and some practical strategies for how to build sites without
          reaching for a JavaScript framework as first, last, and only tool for
          making the web happen.
        </p>
      </>
    ),
    image: stuartImage,
    fullSession: true,
    twitter: 'sil',
    website: 'https://kryogenix.org',
  },
  {
    name: 'Steve Heyes',
    image: steveImage,
    bio: (
      <>
        <p>
          Steve is a Technical Leader based in Birmingham, UK. He shapes teams
          that use tech to build awesome things that makes peoples lives better.
          Currently Steve works at Birdie as a Senior Software Engineer with an
          Engineering Management slant. He is also one of the co-founders of
          ManageOps - a monthly meet-up for engineer managers and technical
          leaders in the Midlands. Outside of work you can find him drinking
          delicious coffee and playing Pokemon with his kids.
        </p>
      </>
    ),
    talkTitle:
      'Should I Even Be Here? - A short story about imposter syndrome, what I wished I knew and how we all have it',
    description: (
      <>
        <p>
          9 out of 10 people have or currently deal with Imposter Syndrome,
          including this speaker. 1 out of 10 people also lie. If we all have
          it, why doesn’t anyone want to talk about it? This short talk will
          break down Imposter Syndrome, what to do about it and give language on
          how to speak about it.
        </p>
      </>
    ),
    jobTitle: 'Senior Full Stack Software Engineer at Birdie',
    fullSession: false,
    twitter: 'mrsteveheyes',
    website: 'https://steveheyes.co.uk',
  },
  {
    name: 'Thomas Morrissey',
    jobTitle: 'Managing Director in Engineering at Goldman Sachs',
    bio: (
      <>
        <p>
          Thomas Morrissey is a Managing Director in Engineering at Goldman
          Sachs, leading teams of full-stack software engineers who develop
          financial risk management platforms for capital and liquidity. Thomas
          graduated with an MEng in Computer Science from Bristol University in
          2001 and has spent 21 years at Goldman Sachs, serving in a number of
          engineering roles the firm’s offices internationally across London,
          Tokyo and Birmingham.
        </p>
      </>
    ),
    talkTitle: 'Adoption of cloud technology in finance',
    description: (
      <>
        <p>
          In their joint session Thomas and Mark will talk from their
          perspective as developers and architects on the experience of adopting
          cloud technologies to accelerate innovation in financial and risk
          platforms.
        </p>
      </>
    ),
    image: TomMImage,
    fullSession: true,
  },
  {
    name: 'Mark Perkin',
    jobTitle:
      'Executive Director, Goldman Sachs Accelerate Business Entrepreneur',
    bio: (
      <>
        <p>
          Executive Director, Goldman Sachs Accelerate Business Entrepreneur.
          Engineering leader and cloud architect with over 25 years’ experience.
        </p>
      </>
    ),
    talkTitle: 'Adoption of cloud technology in finance',
    description: (
      <>
        <p>
          In their joint session Thomas and Mark will talk from their
          perspective as developers and architects on the experience of adopting
          cloud technologies to accelerate innovation in financial and risk
          platforms.
        </p>
      </>
    ),
    image: MarkImage,
    fullSession: true,
  },
  {
    name: 'Ekip Kalir',
    jobTitle: 'Full Stack Engineer/Consultant at InfinityWorks',
    bio: (
      <>
        <p>
          I am a Full Stack Engineer/Consultant and joined
          InfinityWorks/Accenture in March 2022. In the past few years, I have
          been involved in many aspects of modern software development from
          mobile app development, through microservices running in the cloud, to
          front-end design and implementation. I have a strong background and
          skills in programming, project management, business analysis, team
          building and team management. I have skills and experience in
          React/React Native, Swift/SwiftUI with frontend and backend
          capabilities and Scala/Scala Play framework.
        </p>
      </>
    ),
    talkTitle: 'GraphQL versus Rest API Models',
    description: (
      <>
        <p>
          Over the past decade, REST has become the standard (yet a fuzzy one)
          for designing web APIs. It offers some great ideas, such as stateless
          servers and structured access to resources. However, REST APIs have
          shown to be too inflexible to keep up with the rapidly changing
          requirements of the clients that access them.
        </p>
        <p>
          GraphQL was developed by Meta (Facebook) to cope with the need for
          more flexibility and efficiency! It solves many of the shortcomings
          and inefficiencies that developers experience when interacting with
          REST APIs. GraphQL API design is getting more granularity and many
          companies explore the usability instead of the Rest API.
        </p>
        <p>
          This talk will cover a bit of history of API in general and then Rest
          and GraphQL API designs.
        </p>
      </>
    ),
    image: ekipImage,
    twitter: 'ekipkalir',
    linkedin: 'ekip-kalir-428b02177',
    fullSession: false,
  },
]

export default speakers

//{
// name: '',
//     jobTitle: '',
//     bio: (
//     <>
//       <p>
//       </p>
//     </>
// ),
//     talkTitle: '',
//     description: (
//     <>
//       <p>
//       </p>
//     </>
// ),
//     image: '',
//     twitter: '',
//     website: '',
//     fullSession: true,
// },
