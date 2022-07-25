
import Image from 'next/image'
import {Container} from "@/components/Container";
import {ButtonCTA} from "@/components/ButtonCTA";

export function Speaker(props) {
    const{speaker : {name, jobTitle, talkTitle, bio, description, image, twitter, linkedin, website} } = props
    const twitterURL = `https://twitter.com/${twitter}`
    const linkedinURL = `https://www.linkedin.com/in/${linkedin}`
    return (
        <div className="bg-white pt-16 lg:py-24">
            <div className="pb-16 bg-yellow-300 lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                <Image
                                    className="object-cover lg:h-full lg:w-full"
                                    src={image}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                            <blockquote>
                                <div>
                                    <h1 className="space- font-display text-5xl font-bold tracking-tighter text-black sm:text-7xl">
                                        <br /> {name}
                                    </h1>
                                </div>
                                <div>
                                    <h2 className="space- font-display text-3xl font-bold tracking-tighter text-black sm:text-4xl">
                                        <br /> {bio}
                                    </h2>
                                </div>
                                <div>
                                    <h2 className="space- font-display text-xl font-bold tracking-tighter text-black sm:text-2xl">
                                        <br /> {jobTitle}
                                    </h2>
                                </div>
                                <ul role="list" className="flex space-x-5 py-6">
                                    {(twitter && twitter !== "")?<li>
                                        <a href={twitterURL} className="text-black" rel="noreferrer noopener" target="_blank">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </li>: null}
                                    {(linkedin && linkedin !== "")?
                                    <li>
                                        <a href={linkedinURL} className="text-black" rel="noreferrer noopener" target="_blank">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>: null }
                                    {(website && website !== "")?
                                        <li>
                                            <a href={website} className="text-black" rel="noreferrer noopener" target="_blank">
                                                <span className="sr-only">Website</span>
                                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>: null }
                                </ul>

                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                    <h1 className="space-y-12 font-display text-5xl font-bold tracking-tighter text-yellow-600 sm:text-7xl">
                        <br /> {talkTitle}
                    </h1>
                    <div className="mt-6 space-y-6 font-display text-md tracking-tight text-black sm:text-lg">
                        {description}
                    </div>
                    <ButtonCTA/>

                </div>
            </Container>
        </div>
    )
}