import Image from 'next/image'
import {Sessions} from "../../speakers";
import Link from "next/link";

const auditoriumDay1 = 
  {
    room: "Main Auditorium",
    timeOfDay: 'Auditorium Day 1',
    date: '2023-06-15',
    summary: '08:30 - 17:00 BST',
    dayName: "Day 1",
    timeSlots: [
      {
        name: 'Registration',
        description: 'Registration',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Event organisers',
        description: 'Opening Welcome',
        start: '09:00AM',
        end: '09:15AM',
      },
      {
        session: 'leon-adato',
        start: '09:20AM',
        end: '09:50AM',

      },
      {
        session: "salma-alam-naylor",
        start: '09:55AM',
        end: '10:25AM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Morning Break',
        start: '10:25AM',
        end: '10:45AM',
      },
      {
        session: "viktor-farcic",
        start: '10:50AM',
        end: '11:20AM',
      },
      {
        session: "kat-samperi",
        start: '11:25AM',
        end: '11:55AM',
      },
      {
        name: 'Ignite talks',
        description: '(6 x 5 minute sessions)',
        start: '12:00PM',
        end: '12:30PM',
      },
      {
        name: 'Open Space Introduction',
        description: 'Learn how open spaces work',
        start: '12:30PM',
        end: '12:45PM',
      },
      {
        name: 'Lunch',
        description: 'Lunch',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Event organisers',
        description: 'Afternoon Intro',
        start: '13:50PM',
        end: '14:05PM',
      },
      {
        session: "craig-box",
        start: '14:10PM',
        end: '14:40PM',
      },
      {
        session: "eli-holderness",
        start: '14:40PM',
        end: '15:10PM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Afternoon Break',
        start: '15:10PM',
        end: '15:30PM',
      },
      {
        session: "kris-buytaert",
        start: '15:30PM',
        end: '16:00PM',
      },
      {
        session: "max-woolf",
        start: '16:00PM',
        end: '16:30PM',
      },
      {
        name: 'Event organisers',
        description: 'Closing Remarks',
        start: '16:30PM',
        end: '16:40PM',
      },
    
    ]
  }

  const auditoriumDay2 = {
    timeOfDay: 'Auditorium Day 2',
    date: '2023-06-16',
    summary: '08:30 - 17:00 BST',
    dayName: "Day 2",
    timeSlots: [
      {
        name: 'Registration',
        description: 'Registration',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Event organisers',
        description: 'Opening Welcome',
        start: '09:00AM',
        end: '09:15AM',
      },
      {
        session: "kat-cosgrove",
        start: '09:20AM',
        end: '09:50AM',
      },
      {
        session: "stuart-langridge",
        start: '09:55AM',
        end: '10:25AM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Morning Break',
        start: '10:25AM',
        end: '10:45AM',
      },
      {
        session: "zakariya-mohummed",
        start: '10:50AM',
        end: '11:20AM',
      },
      {
        session:"baruch-sadogursky",
        start: '11:25AM',
        end: '11:55AM',
      },
      {
        name: 'Ignite talks',
        description: '(6 x 5 minute sessions)',
        start: '12:00PM',
        end: '12:30PM',
      },
      {
        name: 'Open Space Introduction',
        description: 'Learn how open spaces work',
        start: '12:30PM',
        end: '12:45PM',
      },
      {
        name: 'Lunch',
        description: 'Lunch',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Event organisers',
        description: 'Afternoon Intro',
        start: '13:50PM',
        end: '14:05PM',
      },
      {
        session: "hila-fish",
        start: '14:10PM',
        end: '14:40PM',
      },
      {
        session: "amanda-brock",
        start: '14:40PM',
        end: '15:10PM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Afternoon Break',
        start: '15:10PM',
        end: '15:30PM',
      },
      {
        session: "krisztian-fekete",
        start: '15:30PM',
        end: '16:00PM',
      },
      {
        session: "joanna-suau",
        start: '16:00PM',
        end: '16:30PM',
      },
      {
        name: 'Event organisers',
        description: 'Closing Remarks',
        start: '16:30PM',
        end: '16:40PM',
      },
    ],
  }


const thinkTankDay1 = {
    timeOfDay: 'ThinkTank Day 1',
    date: '2023-06-15',
    summary: '08:30 - 17:00 BST',
    dayName: "Day 1",
    timeSlots: [
      {
        name: 'Registration',
        description: 'Registration',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Event organisers',
        description: 'Opening Welcome',
        start: '09:00AM',
        end: '09:15AM',
      },
      {
        session: "hannah-mitchell",
        start: '09:20AM',
        end: '09:50AM',
      },
      {
        session: "fawaz-ghali",
        start: '09:55AM',
        end: '10:25AM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Morning Break',
        start: '10:25AM',
        end: '10:45AM',
      },
      {
        session: "omar-qureshi",
        start: '10:50AM',
        end: '11:20AM',
      },
      {
        session: "elizabeth-lawel",
        start: '11:25AM',
        end: '11:55AM',
      },
      {
        session: "carly-richmond",
        start: '12:00PM',
        end: '12:30PM',
      },
      {
        name: 'Open Space Introduction',
        description: 'Learn how open spaces work',
        start: '12:30PM',
        end: '12:45PM',
      },
      {
        name: 'Lunch',
        description: 'Lunch',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Event organisers',
        description: 'Open Space Planning',
        start: '13:50PM',
        end: '14:05PM',
      },
      {
        name: "Open Space Session 1",
        description: "Open Space Session 1",
        start: '14:10PM',
        end: '14:40PM',
      },
      {
        name: "Open Space Session 2",
        description: "Open Space Session 2",
        start: '14:40PM',
        end: '15:10PM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Afternoon Break',
        start: '15:10PM',
        end: '15:30PM',
      },
      {
        name: "Open Space Session 3",
        description: "Open Space Session 3",
        start: '15:30PM',
        end: '16:00PM',
      },
      {
        name: "Open Space Session 4",
        description: "Open Space Session 4",
        start: '16:00PM',
        end: '16:30PM',
      },
      {
        name: 'Event organisers',
        description: 'Closing Remarks',
        start: '16:30PM',
        end: '16:40PM',
      },
    ],
  }


  const thinkTankDay2 = {
    timeOfDay: 'ThinkTank Day 2',
    date: '2023-06-16',
    summary: '08:30 - 17:00 BST',
    dayName: "Day 2",
    timeSlots: [
      {
        name: 'Registration',
        description: 'Registration',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Event organisers',
        description: 'Opening Welcome',
        start: '09:00AM',
        end: '09:15AM',
      },
      {
        session: "lin-sun",
        start: '09:20AM',
        end: '09:50AM',
      },
      {
        session: "simon-gurney",
        start: '09:55AM',
        end: '10:25AM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Morning Break',
        start: '10:25AM',
        end: '10:45AM',
      },
      {
        session: "esther-barthel",
        start: '10:50AM',
        end: '11:20AM',
      },
      {
        session: "steve-heyes",
        start: '11:25AM',
        end: '11:55AM',
      },
      {
        session: "andy-burgin",
        start: '12:00PM',
        end: '12:30PM',
      },
      {
        name: 'Open Space Introduction',
        description: 'Learn how open spaces work',
        start: '12:30PM',
        end: '12:45PM',
      },
      {
        name: 'Lunch',
        description: 'Lunch',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Event organisers',
        description: 'Open Space Planning',
        start: '13:50PM',
        end: '14:05PM',
      },
      {
        name: "Open Space Session 1",
        description: "Open Space Session 1",
        start: '14:10PM',
        end: '14:40PM',
      },
      {
        name: "Open Space Session 2",
        description: "Open Space Session 2",
        start: '14:40PM',
        end: '15:10PM',
      },
      {
        name: 'Coffee, Snacks, Sponsors, Chat!',
        description: 'Afternoon Break',
        start: '15:10PM',
        end: '15:30PM',
      },
      {
        name: "Open Space Session 3",
        description: "Open Space Session 3",
        start: '15:30PM',
        end: '16:00PM',
      },
      {
        name: "Open Space Session 4",
        description: "Open Space Session 4",
        start: '16:00PM',
        end: '16:30PM',
      },
      {
        name: 'Event organisers',
        description: 'Closing Remarks',
        start: '16:30PM',
        end: '16:40PM',
      },
    ],
  }

function DailySchedule({day}){
  return(
          <>
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 mx-8 sm:m-24">
      <div className="-mx-4 mt-8 sm:-mx-0">
       <div className="sm:flex sm:items-center mx-auto">
        <div className="sm:flex-auto">
          <h1 className="font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">{day.timeOfDay}</h1>
          <p className="mb-6 mt-2 text-md font-display font-bold sm:text-2xl tracking-tight text-yellow-600">
           {day.summary}
          </p>
        </div>
      </div>
        <table className="min-w-full divide-y divide-gray-300 table-auto w-auto">
          <thead>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {day.timeSlots.map((timeSlot) => (
                <tr key={timeSlot.start} className='flex items-center'>
                  {timeSlot.session && (
                    <>
                    <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-yellow-700  sm:w-[200px]">
                      <Link href={`/speakers/${timeSlot.session}`} key={timeSlot.start}>
                      {timeSlot.start} - {timeSlot.end}
                      </Link> 
                    </td>
                    <td className="speaker hidden whitespace-nowrap px-3 text-sm font-display sm:text-lg tracking-tight text-yellow-900 w-1/2 sm:w-[250px] md:flex gap-4">
                            <Link href={`/speakers/${timeSlot.session}`} key={timeSlot.start}>
                          <div className="flex-shrink-0">
                              <Image
                                className="inline-block h-10 w-10 rounded-full"
                                src={Sessions[timeSlot.session].image}
                                alt={Sessions[timeSlot.session].name}
                              />
                          </div>
                            </Link>
                            <Link href={`/speakers/${timeSlot.session}`} key={timeSlot.start}>
                              {timeSlot.name ? timeSlot.name : Sessions[timeSlot.session].name}
                            </Link>
                    </td>
                    <td className="summary font-semibold text-sm sm:text-md tracking-tight text-yellow-700 w-1/2 sm:w-[400px]">
                      <Link href={`/speakers/${timeSlot.session}`} key={timeSlot.start}>
                      {timeSlot.description ? timeSlot.description : Sessions[timeSlot.session]?.talkTitle}
                      </Link>
                    </td>
              </>
                  )}
                  {!timeSlot.session && (
                      <>
                        <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-yellow-700  sm:w-[200px]">
                          {timeSlot.start} - {timeSlot.end}
                        </td>
                        <td className="speaker hidden whitespace-nowrap px-3 text-sm font-display sm:text-lg tracking-tight text-yellow-900 w-1/2 sm:w-[250px] md:table-cell">
                          {timeSlot.name === 'Coffee, Snacks, Sponsors, Chat!' ? <div className='text-sm'>Coffee, Snacks, Sponsors, Chat!</div> : timeSlot.name ? timeSlot.name : Sessions[timeSlot.session].name}
                        </td>
                        <td className="summary font-semibold text-sm sm:text-md tracking-tight text-yellow-700 w-1/2 sm:w-[400px]">
                          {timeSlot.description ? timeSlot.description : Sessions[timeSlot.session]?.talkTitle}
                        </td>
                      </>
                  )}
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </>
  )
}

export function Schedule() {
  return (

      <div className='wrapper flex flex-col items-center'>
            <div className='flex flex-col w-[90vw]'>
                <div className='flex flex-wrap items-center xl:ml-28'>
                      <p className="w-full font-display text-4xl font-medium tracking-tighter text-yellow-500 sm:text-7xl">
                        Schedule
                      </p>
                      <p className="mt-4 font-display text-2xl tracking-tight text-yellow-900">
                        Your day will be composed of 30 minute sessions as well as 5 minute
                        ignite talks, including plenty of time to chat.
                      </p>
                </div>
                <DailySchedule day={auditoriumDay1} />
                <DailySchedule day={thinkTankDay1} />
                <DailySchedule day={auditoriumDay2} />
                <DailySchedule day={thinkTankDay2} />
            </div>
      </div>

  )
}
