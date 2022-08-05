import KunalImage from '@/images/avatars/kunal.png'
import OllieImage from '@/images/avatars/ollie.jpg'
import JessImage from '@/images/avatars/jess.jpg'
import BeckyImage from '@/images/avatars/becky.jpeg'

const speakers = [{
        name: "Kunal Kushwaha",
        jobTitle: "Developer Advocate at Civo",
        bio: "Kunal is working towards empowering communities via open-source and education. He finds passion in teaching and has taught thousands of folks online and in person. He is currently a Developer Advocate at Civo, CNCF Ambassador, track chair of the KubeCon + CloudNativeCon student track, Major League Hacking Coach. He is the founder of Kubeworld, Community Classroom, and also started the official Cloud Native Student Community group joined by thousands of students, focussed on getting more young people involved in the ecosystem.",
        talkTitle: "Scaling Communities to be more Inclusive",
        description: <>
            <p> Being an open - source enthusiast,
        Kunal believes that diversity in the workplace and participation from people hailing from different cultures is necessary as well as instrumental
        for the growth of the IT sector.It exposes one to the multitude of values and principles that people from varying ethnicities hold.Meeting people from around the world teaches people to respect opposing perspectives and opinions,
        and ingrains in them respect
        for their peers. </p>
        <p> The talk is going to be focussed around what defines a community,
        and figuring out what are the community 's shared struggles. It’s also important to know what is the mission of your community and what members look to get out of it. Communication is key and we’ll also talk about how to future proof your community.  \n\nRegarding diversity and inclusion, it’s important to know who might be excluded from accessing your community activities in their current form. We’ll also discuss about what are some of the negative scenarios which might happen while running activities for your community which will make them less inclusive to marginalised groups. Following up with designing for your community's needs, and last but not least,
        having a Code of Conduct. </p>
        <p> Attendees will learn about: </p>
            <li>
            How to start a new community and make it inclusive from the beginning.
            </li>
            <li>
            How to scale communities to under - representative groups How to deal with conflicts and take care of your audience’ s needs.
            </li>
            </>,
        image: KunalImage,
        twitter: "kunalstwt",
        linkedin: "kunal-kushwaha",
        website: 'https://www.kunalkushwaha.com/',
        fullSession: true,
    },
    {
        name: "Ollie Stevenson",
        jobTitle: "Lead Frontend Engineer at Huel",
        bio: "I'm Ollie, Lead Frontend Engineer at Huel. I've done my fair share of agency work around the Midlands over the past few years and then decided to go in-house at Huel to really get deeper into things and build a stable career for myself. Outside of work I'm building an app for podcast management and creation, and have recently released music on a local drum n bass label - I like clean code and filthy beats!",
        talkTitle: "Developing design systems: Mamma Mia! Here we go again...",
        description: <>
            <p> An overview of how we(Huel) have utilised Stencil.js;a tool
        for developing framework - agnostic components / design systems and the pros / cons we have found.We currently have pages on our storefront that are React,
        and some that are Vue,
        they are both using the sameset of components,
        so no - matter the library / framework we 're using we are able to just write one set of code for our core UI Kit. This keeps us fully flexible as tech changes and frameworks come and go. If the movement of the frontend world shifts from React to Svelte, we will not have re-build any of our core components.</p>
        </>,
        image: OllieImage,
        twitter: "digital_ollie",
        fullSession: false,
    },
    {
        name: "Jessica Rose",
        jobTitle: "Developer Outreach",
        bio: <>
            <p> Jessica Rose is a technology professional and keynote speaker specializing in community building,
        outreach and developing better processes
        for talent in technology. </p>
        <p>
        She is passionate about fostering more equal access to technical education and digital spaces.Host of the < a className = "underline"
        href = "https://open.spotify.com/show/3eVlgrnLC9fDRyTZMtTg88?si=7XCKEGPDQR-5IQDoDaKbeQ" > Pursuit Podcast < /a>, she's founded the <a className="underline" href="http:/ / opencode.club / ">Open Code meetup</a> series and co-founded <a className="
        underline " href="
        https: //www.trans.tech/">Trans*Code</a>. She's also rubbish at writing about herself in the third person.

            </p>
            </>,
        talkTitle: "Scaling Beyond Code",
        description: <>
            <p> Sometimes in building software,
        we need to scale up our delivery,
        development or support of our products.And this need to expand our reach happens in tech in non - code contexts.In the same way that throwing more developers at a technical challenge won’ t fix it faster,
        just throwing more time and energy at non - code challenges won’ t hurry them along.Together we’ ll explore a specific problem in scaling non - code delivery,
        how a need to better serve technical learners stretched a small meetup into a project serving over 30,
        000 learners globally.Through exploring this together we’ ll also learn about how and where to look
        for opportunities to scale your own projects,
        companies and communities. </p>
        </>,
        image: JessImage,
        twitter: "jesslynnrose",
        website: "http://jessica.tech",
        fullSession: true,
    },
    {
        name: "Becky Pauley",
        jobTitle: "Cloud Engineer at Jetstack",
        bio: <>
            <p> Working as a primary school teacher,
        I started learning Python in my spare time - and got hooked on the feeling of solving problems.A year and a half ago,
        I
        finally made the leap from teaching into tech!I’ ve since worked as a Platform Engineer and joined Jetstack at the start of this year to focus on Kubernetes and Cloud Native technologies.As well as all things infrastructure,
        I’ m passionate about ways of working,
        learning and culture. </p>
        </>,
        talkTitle: "Lost in the clouds: shifting to DevOps",
        description: <>
            <p> The best ideas come from conversations: How do I get better at‘ DevOps’ in my engineering team ? How do I move from software engineering to Cloud and Platform roles ? </p>
            <p> This is a talk about those conversations - from my own experiences jumping from teaching to tech, and those of experienced engineers who’ ve made a move into Platform roles. </p>
            <p> Things we’ ll talk about : </p>
            <li >Where we’re going and why. </li>
            <li >What’s the cheat sheet? </li>
            <li >Technical knowledge and skills.</li>
            <li >Advice from the future- what we wish we’d known before.</li>
            </>,
        image: BeckyImage,
        twitter: "beckypauley",
        linkedin: "https://uk.linkedin.com/in/beckypauley",
        fullSession: true,
    },
]

export default speakers
