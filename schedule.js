const openingWelcomeStart = '09:15AM'
const openingWelcomeEnd = '09:35AM'

const session1Start = '09:40AM'
const session1End = '10:00AM'

const session2Start = '10:05AM'
const session2End = '10:25AM'

const morningBreakStart = '10:25AM'
const morningBreakEnd = '10:55AM'

const session3Start = '11:00AM'
const session3End = '11:20AM'

const session4Start = '11:25AM'
const session4End = '11:45AM'

const lunchStart = '11:50AM'
const lunchEnd = '12:50PM'

const session5Start = '12:55PM'
const session5End = '13:15PM'

const session6Start = '13:20PM'
const session6End = '13:40PM'

const session7Start = '13:45PM'
const session7End = '14:05PM'

const afternoonBreakStart = '14:05PM'
const afternoonBreakEnd = '14:35PM'

const session8Start = '14:40PM'
const session8End = '15:00PM'

const session9Start = '15:05PM'
const session9End = '15:25PM'

const closingRemarksStart = '15:30PM'
const closingRemarksEnd = '15:50PM'







const conferenceSchedule = {
    room: "The ICC",
    timeOfDay: 'Overall Schedule',
    date: '2024-10-25',
    summary: '09:00 - 16:00 BST',
    dayName: "Day 1",
    timeSlots: [
        {
            name: 'Registration',
            description: 'Registration',
            start: '08:00AM',
            end: '09:10AM',
        },
        {
            name: 'Event organisers',
            description: 'Opening Welcome',
            start: openingWelcomeStart,
            end: openingWelcomeEnd,
        },
        {
            name: 'Morning Sessions',
            description: 'Morning Sessions',
            start: session1Start,
            end: lunchStart,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: session5Start,
        },
        {
            name: 'Afternoon Sessions',
            description: 'Afternoon Sessions',
            start: session5Start,
            end: closingRemarksStart,
        },
        {
            name: 'Event organisers',
            description: 'Closing Remarks',
            start: closingRemarksStart,
            end: closingRemarksEnd,
        }
    ]
}


const mainHall = {
    room: "Main Stage",
    timeOfDay: 'Main Stage',
    date: '2024-10-25',
    summary: '09:00 - 16:00 BST',
    dayName: "Day 1",
    timeSlots: [
        {
            name: 'Event organisers',
            description: 'Opening Welcome',
            start: openingWelcomeStart,
            end: openingWelcomeEnd,
        },
        {
            session: ['CarlyRichmond'],
            start: session1Start,
            end: session1End,
        },
        {
            session: ['MaxWoolf'],
            start: session2Start,
            end: session2End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Morning Break',
            start: morningBreakStart,
            end: morningBreakEnd,
        },
        {
            session: ['RyanHardwick'],
            start: session3Start,
            end: session3End,
        },
        {
            session: ['LeonardoGiordani'],
            start: session4Start,
            end: session4End,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: lunchEnd,
        },
        {
            session: ['AndrewFitzpatrick'],
            start: session5Start,
            end: session5End,
        },
        {
            session: ['AmeenAlade'],
            start: session6Start,
            end: session6End,
        },
        {
            session: ['DanielTallentire'],
            start: session7Start,
            end: session7End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Afternoon Break',
            start: afternoonBreakStart,
            end: afternoonBreakEnd,
        },
        {
            session: ['AndyBell'],
            start: session8Start,
            end: session8End,
        },
        {
            name: 'To be announced',
            description: 'To be announced',
            start: session9Start,
            end: session9End,
        },
        {
            name: 'Event organisers',
            description: 'Closing Remarks',
            start: closingRemarksStart,
            end: closingRemarksEnd,
        }
    ]
}

const stageA = {
    room: "Stage A",
    timeOfDay: 'Stage A',
    date: '2024-10-25',
    summary: '09:00 - 16:00 BST',
    dayName: "Day 1",
    timeSlots: [
        {
            session: ['SteveWade'],
            start: session1Start,
            end: session1End,
        },
        {
            session: ['AbbyBangser'],
            start: session2Start,
            end: session2End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Morning Break',
            start: morningBreakStart,
            end: morningBreakEnd,
        },
        {
            session: ['PaulDragoonis'],
            start: session3Start,
            end: session3End,
        },
        {
            name: 'To be announced',
            description: 'To be announced',
            start: session4Start,
            end: session4End,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: lunchEnd,
        },
        {
            session: ['JoshuaMo'],
            start: session5Start,
            end: session5End,
        },
        {
            session: ['KathrynLupin'],
            start: session6Start,
            end: session6End,
        },
        {
            session: ['StuartHarrison'],
            start: session7Start,
            end: session7End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Afternoon Break',
            start: afternoonBreakStart,
            end: afternoonBreakEnd,
        },
        {
            session: ['SimonGurney'],
            start: session8Start,
            end: session8End,
        },
        {
            session: ['JamesPrince'],
            start: session9Start,
            end: session9End,
        },
    ]
}

const stageOne = {
    room: "Stage One",
    timeOfDay: 'Stage One',
    date: '2024-10-25',
    summary: '09:00 - 16:00 BST',
    dayName: "Day 1",
    timeSlots: [
        {
            name: 'To be announced',
            description: 'To be announced',
            start: session1Start,
            end: session1End,
        },
        {
            session: ['CallumWhyte'],
            start: session2Start,
            end: session2End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Morning Break',
            start: morningBreakStart,
            end: morningBreakEnd,
        },
        {
            session: ['SimonEmms'],
            start: session3Start,
            end: session3End,
        },
        {
            session: ['MaceijSzmulka'],
            start: session4Start,
            end: session4End,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: lunchEnd,
        },
        {
            session: ['BeckettLeclaire'],
            start: session5Start,
            end: session5End,
        },
        {
            name: 'To be announced',
            description: 'To be announced',
            start: session6Start,
            end: session6End,
        },
        {
            session: ['MarkSimpson'],
            start: session7Start,
            end: session7End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Afternoon Break',
            start: afternoonBreakStart,
            end: afternoonBreakEnd,
        },
        {
            session: ['BeckiFloyd'],

            start: session8Start,
            end: session8End,
        },
        {
            session: ['LauraHyatt'],
            start: session9Start,
            end: session9End,
        },
    ]
}

//         // {
//         //     name: 'Conference',
//         //     description: 'Conference',
//         //     start: '08:00AM',
//         //     end: '17:15PM',
//         // }
//         {
//             name: 'Registration',
//             description: 'Registration',
//             start: '08:00AM',
//             end: '08:50AM',
//         },
//         {
//             name: 'Event organisers',
//             description: 'Opening Welcome',
//             start: '09:00AM',
//             end: '09:15AM',
//         },
//         {
//             session: ['molly-watt'],
//             start: '09:15AM',
//             end: '09:45AM',
//
//         },
//         {
//             session: ["jamie-tanna"],
//             start: '09:45AM',
//             end: '10:15AM',
//         },
//         {
//             session: ["kirsty-thomas-brown"],
//             start: '10:15AM',
//             end: '10:25AM',
//         },
//         {
//             name: 'Coffee, Snacks, Sponsors, Chat!',
//             description: 'Morning Break',
//             start: '10:25AM',
//             end: '10:55PM',
//         },
//         {
//             session: ["esther-agbaje"],
//             start: '11:00AM',
//             end: '11:30AM',
//         },
//         {
//             session: ["steve-mcdougall"],
//             start: '11:30AM',
//             end: '12:00PM',
//         },
//         {
//             session: ['pooja-mistry'],
//             start: '12:00PM',
//             end: '12:30PM',
//         },
//         {
//             session: ['jake-clarkson'],
//             start: '12:30PM',
//             end: '12:40PM',
//         },
//         {
//             name: 'Lunch',
//             description: 'Lunch',
//             start: '12:40PM',
//             end: '13:40PM',
//         },
//         {
//             session: ["christopher-phillips", "dalwinder-bagdi"],
//             start: '13:45PM',
//             end: '14:15PM',
//         },
//         {
//             session: ["david-simmons"],
//             start: '14:15PM',
//             end: '14:45PM',
//         },
//         {
//             session: ['lorna-mitchell'],
//             start: '14:45PM',
//             end: '15:15PM',
//         },
//         {
//             name: 'Coffee, Snacks, Sponsors, Chat!',
//             description: 'Afternoon Break',
//             start: '15:15AM',
//             end: '15:45PM',
//         },
//         {
//             session: ["matheus-guimaraes"],
//             start: '15:50PM',
//             end: '16:20PM',
//         },
//         {
//             session: ["james-seconde"],
//             start: '16:20PM',
//             end: '16:50PM',
//         },
//         {
//             session: ["mark-perkin", "caroline-brown"],
//             start: '16:50AM',
//             end: '17:10PM',
//         },
//         {
//             name: 'Event organisers',
//             description: 'Closing Remarks',
//             start: '17:10PM',
//             end: '17:15PM',
//         }
//         // {
//         //     session: "max-woolf",
//         //     start: '16:00PM',
//         //     end: '16:30PM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Closing Remarks',
//         //     start: '16:30PM',
//         //     end: '16:40PM',
//         // },
//     ]

// const auditoriumDay2 = {
//     timeOfDay: 'Auditorium Day 2',
//     date: '2023-06-16',
//     summary: '08:30 - 17:00 BST',
//     dayName: "Day 2",
//     timeSlots: [
//         {
//             name: 'Registration',
//             description: 'Registration',
//             start: '08:00AM',
//             end: '08:50AM',
//         },
//         {
//             name: 'Event organisers',
//             description: 'Opening Welcome',
//             start: '09:00AM',
//             end: '09:15AM',
//         },
//         {
//             session: "kat-cosgrove",
//             start: '09:20AM',
//             end: '09:50AM',
//         },
//         {
//             session: "stuart-langridge",
//             start: '09:55AM',
//             end: '10:25AM',
//         },
//         {
//             name: 'Coffee, Snacks, Sponsors, Chat!',
//             description: 'Morning Break',
//             start: '10:25AM',
//             end: '10:45AM',
//         },
//         {
//             session: "zakariya-mohummed",
//             start: '10:50AM',
//             end: '11:20AM',
//         },
//         {
//             session:"baruch-sadogursky",
//             start: '11:25AM',
//             end: '11:55AM',
//         },
//         {
//             name: 'Ignite talks',
//             description: '(6 x 5 minute sessions)',
//             start: '12:00PM',
//             end: '12:30PM',
//         },
//         {
//             name: 'Open Space Introduction',
//             description: 'Learn how open spaces work',
//             start: '12:30PM',
//             end: '12:45PM',
//         },
//         {
//             name: 'Lunch',
//             description: 'Lunch',
//             start: '12:45PM',
//             end: '13:45PM',
//         },
//         {
//             name: 'Event organisers',
//             description: 'Afternoon Intro',
//             start: '13:50PM',
//             end: '14:05PM',
//         },
//         {
//             session: "hila-fish",
//             start: '14:10PM',
//             end: '14:40PM',
//         },
//         {
//             session: "andy-burgin",
//             start: '14:40PM',
//             end: '15:10PM',
//         },
//         {
//             name: 'Coffee, Snacks, Sponsors, Chat!',
//             description: 'Afternoon Break',
//             start: '15:10PM',
//             end: '15:30PM',
//         },
//         {
//             session: "krisztian-fekete",
//             start: '15:30PM',
//             end: '16:00PM',
//         },
//         {
//             session: "joanna-suau",
//             start: '16:00PM',
//             end: '16:30PM',
//         },
//         {
//             name: 'Event organisers',
//             description: 'Closing Remarks',
//             start: '16:30PM',
//             end: '16:40PM',
//         },
//     ],
// }
//
//
// const thinkTankDay1 = {
//     timeOfDay: 'ThinkTank Day 1',
//     date: '2023-06-15',
//     summary: '08:30 - 17:00 BST',
//     dayName: "Day 1",
//     timeSlots: [
//         // {
//         //     name: 'Registration',
//         //     description: 'Registration',
//         //     start: '08:00AM',
//         //     end: '08:50AM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Opening Welcome',
//         //     start: '09:00AM',
//         //     end: '09:15AM',
//         // },
//         // {
//         //     session: "hannah-mitchell",
//         //     start: '09:20AM',
//         //     end: '09:50AM',
//         // },
//         // {
//         //     session: "fawaz-ghali",
//         //     start: '09:55AM',
//         //     end: '10:25AM',
//         // },
//         // {
//         //     name: 'Coffee, Snacks, Sponsors, Chat!',
//         //     description: 'Morning Break',
//         //     start: '10:25AM',
//         //     end: '10:45AM',
//         // },
//         // {
//         //     session: "omar-qureshi",
//         //     start: '10:50AM',
//         //     end: '11:20AM',
//         // },
//         // {
//         //     session: "elizabeth-lawel",
//         //     start: '11:25AM',
//         //     end: '11:55AM',
//         // },
//         // {
//         //     session: "carly-richmond",
//         //     start: '12:00PM',
//         //     end: '12:30PM',
//         // },
//         // {
//         //     name: 'Open Space Introduction',
//         //     description: 'Learn how open spaces work',
//         //     start: '12:30PM',
//         //     end: '12:45PM',
//         // },
//         // {
//         //     name: 'Lunch',
//         //     description: 'Lunch',
//         //     start: '12:45PM',
//         //     end: '13:45PM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Open Space Planning',
//         //     start: '13:50PM',
//         //     end: '14:05PM',
//         // },
//         // {
//         //     name: "Open Space Session 1",
//         //     description: "Open Space Session 1",
//         //     start: '14:10PM',
//         //     end: '14:40PM',
//         // },
//         // {
//         //     name: "Open Space Session 2",
//         //     description: "Open Space Session 2",
//         //     start: '14:40PM',
//         //     end: '15:10PM',
//         // },
//         // {
//         //     name: 'Coffee, Snacks, Sponsors, Chat!',
//         //     description: 'Afternoon Break',
//         //     start: '15:10PM',
//         //     end: '15:30PM',
//         // },
//         // {
//         //     name: "Open Space Session 3",
//         //     description: "Open Space Session 3",
//         //     start: '15:30PM',
//         //     end: '16:00PM',
//         // },
//         // {
//         //     name: "Open Space Session 4",
//         //     description: "Open Space Session 4",
//         //     start: '16:00PM',
//         //     end: '16:30PM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Closing Remarks',
//         //     start: '16:30PM',
//         //     end: '16:40PM',
//         // },
//     ],
// }
//
//
// const thinkTankDay2 = {
//     timeOfDay: 'ThinkTank Day 2',
//     date: '2023-06-16',
//     summary: '08:30 - 17:00 BST',
//     dayName: "Day 2",
//     timeSlots: [
//         // {
//         //     name: 'Registration',
//         //     description: 'Registration',
//         //     start: '08:00AM',
//         //     end: '08:50AM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Opening Welcome',
//         //     start: '09:00AM',
//         //     end: '09:15AM',
//         // },
//         // {
//         //     session: "lin-sun",
//         //     start: '09:20AM',
//         //     end: '09:50AM',
//         // },
//         // {
//         //     session: "louise-paling",
//         //     start: '09:55AM',
//         //     end: '10:25AM',
//         // },
//         // {
//         //     name: 'Coffee, Snacks, Sponsors, Chat!',
//         //     description: 'Morning Break',
//         //     start: '10:25AM',
//         //     end: '10:45AM',
//         // },
//         // {
//         //     session: "esther-barthel",
//         //     start: '10:50AM',
//         //     end: '11:20AM',
//         // },
//         // {
//         //     session: "steve-heyes",
//         //     start: '11:25AM',
//         //     end: '11:55AM',
//         // },
//         // {
//         //     session: "daniel-oates-lee",
//         //     start: '12:00PM',
//         //     end: '12:30PM',
//         // },
//         // {
//         //     name: 'Open Space Introduction',
//         //     description: 'Learn how open spaces work',
//         //     start: '12:30PM',
//         //     end: '12:45PM',
//         // },
//         // {
//         //     name: 'Lunch',
//         //     description: 'Lunch',
//         //     start: '12:45PM',
//         //     end: '13:45PM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Open Space Planning',
//         //     start: '13:50PM',
//         //     end: '14:05PM',
//         // },
//         // {
//         //     name: "Open Space Session 1",
//         //     description: "Open Space Session 1",
//         //     start: '14:10PM',
//         //     end: '14:40PM',
//         // },
//         // {
//         //     name: "Open Space Session 2",
//         //     description: "Open Space Session 2",
//         //     start: '14:40PM',
//         //     end: '15:10PM',
//         // },
//         // {
//         //     name: 'Coffee, Snacks, Sponsors, Chat!',
//         //     description: 'Afternoon Break',
//         //     start: '15:10PM',
//         //     end: '15:30PM',
//         // },
//         // {
//         //     name: "Open Space Session 3",
//         //     description: "Open Space Session 3",
//         //     start: '15:30PM',
//         //     end: '16:00PM',
//         // },
//         // {
//         //     name: "Open Space Session 4",
//         //     description: "Open Space Session 4",
//         //     start: '16:00PM',
//         //     end: '16:30PM',
//         // },
//         // {
//         //     name: 'Event organisers',
//         //     description: 'Closing Remarks',
//         //     start: '16:30PM',
//         //     end: '16:40PM',
//         // },
//     ],
// }

export const Schedule = {
    conferenceSchedule: {
        day1: conferenceSchedule,
    },
    mainHall: {
        day1: mainHall,
    },
    stageA: {
        day1: stageA,
    },
    stageOne: {
        day1: stageOne,
    },
}
