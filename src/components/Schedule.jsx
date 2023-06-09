import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
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
        description: '',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Opening Welcome',
        description: 'Event organisers',
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
        name: 'Morning Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        description: 'Food, Coffee, Sponsors, Chat!',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Afternoon Intro',
        description: 'Event organisers',
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
        name: 'Afternoon Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        name: 'Closing remarks',
        description: 'Event organisers',
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
        description: '',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Opening Welcome',
        description: 'Event organisers',
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
        name: 'Morning Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        description: 'Food, Coffee, Sponsors, Chat!',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Afternoon Intro',
        description: 'Event organisers',
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
        name: 'Afternoon Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        name: 'Closing remarks',
        description: 'Event organisers',
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
        description: '',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Opening Welcome',
        description: 'Event organisers',
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
        name: 'Morning Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        description: 'Food, Coffee, Sponsors, Chat!',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Open Space Planning',
        description: 'Event organisers',
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
        name: 'Afternoon Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        name: 'Closing remarks',
        description: 'Event organisers',
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
        description: '',
        start: '08:00AM',
        end: '08:50AM',
      },
      {
        name: 'Opening Welcome',
        description: 'Event organisers',
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
        name: 'Morning Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        description: 'Food, Coffee, Sponsors, Chat!',
        start: '12:45PM',
        end: '13:45PM',
      },
      {
        name: 'Open Space Planning',
        description: 'Event organisers',
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
        name: 'Afternoon Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
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
        name: 'Closing remarks',
        description: 'Event organisers',
        start: '16:30PM',
        end: '16:40PM',
      },
    ],
  }

function ScheduleTabbed({track}) {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
      <Tab.Group
          as="div"
          className="mx-auto grid grid-cols-1 gap-y-6 sm:grid-cols-3"
          vertical={tabOrientation === 'vertical'}
      >
        <Tab.List className="-mx-4 flex space-x-4 flex-wrap pl-4 pb-4 sm:col-span-1 sm:mx-0 sm:block sm:space-y-10 sm:space-x-0 sm:pb-0 sm:pl-0 sm:pr-8">
          {({ selectedIndex }) =>
              track.map((day, dayIndex) => (
                  <div
                      key={day.date}
                      className={clsx(
                          'relative w-1/2 flex-none pr-4 sm:w-auto sm:pr-0',
                          {
                            'opacity-70': dayIndex !== selectedIndex,
                          }
                      )}
                  >
                    <DaySummary
                        day={{
                          ...day,
                          timeOfDay: (
                              <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                                <span className="absolute inset-0" />
                                {day.timeOfDay}
                              </Tab>
                          ),
                        }}
                    />
                  </div>
              ))
          }
        </Tab.List>
        <Tab.Panels className="sm:col-span-2">
          {track.map((day) => (
              <Tab.Panel
                  key={day.date}
                  className="[&:not(:focus-visible)]:focus:outline-none"
              >
                <TimeSlots day={day} />
              </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
      <>
        <h3 className="text-2xl font-semibold tracking-tight text-yellow-900">
          <time date={day.date}>{day.timeOfDay}</time>
        </h3>
        <p className="mt-1.5 text-base tracking-tight text-yellow-900">
          {day.summary}
        </p>
      </>
  )
}

function TimeSlots({ day, className }) {
  return (
      <div
          className={clsx(
              className,
              'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-yellow-900/5 backdrop-blur'
          )}
      >
        {day.timeSlots.map((timeSlot, timeSlotIndex) => (
            <div key={timeSlot.start}>
              {timeSlotIndex > 0 && (
                  <div className="bg--500/10 mx-auto w-48" />
              )}
              {timeSlot.session && (
                  <Link href={`/speakers/${timeSlot.session}`}>
                    <h4 className="text-lg font-semibold tracking-tight text-yellow-900">
                      {timeSlot.name}
                      {Sessions[timeSlot.session]?.name}
                    </h4>
                    <p className="sr-only">talking about</p>
                    <p className="mt-1 tracking-tight text-yellow-900">
                      {Sessions[timeSlot.session]?.talkTitle}
                    </p>
                  </Link>
              )}
              {!timeSlot.session && (
                  <>
                    <h4 className="text-lg font-semibold tracking-tight text-yellow-900">
                      {timeSlot.name}
                    </h4>
                    {timeSlot.description && (
                        <>
                          <p className="sr-only">talking about</p>
                          <p className="mt-1 tracking-tight text-yellow-900">
                            {timeSlot.description}
                          </p>
                        </>
                    )}
                  </>
              )}
              <p className="sr-only">at</p>
              <p className="mt-1 font-mono text-sm text-slate-500">
                <time date={`${day.date}T${timeSlot.start}-08:00`}>
                  {timeSlot.start}
                </time>{' '}
                -{' '}
                <time date={`${day.date}T${timeSlot.end}-08:00`}>
                  {timeSlot.end}
                </time>{' '}
                BST
              </p>
            </div>

        ))}
      </div>
  )
}

// function ScheduleStatic() {
//   return (
//       <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8">
//         {scheduleTrack1.map((day) => (
//             <section key={day.date}>
//               <DaySummary day={day} />
//               <TimeSlots day={day} className="mt-10" />
//             </section>
//         ))}
//       </div>
//   )
// }
function DailySchedule({day}){
  return(
          <>
    <div className="flex flex-col items-center lg:items-start px-4 sm:px-6 lg:px-8 mx-24">
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
                <div className="sm:flex sm:items-center mx-auto">
        <div className="sm:flex-auto">
          <h1 className="font-display text-4xl font-medium tracking-tighter text-yellow-600 sm:text-5xl">{day.timeOfDay}</h1>
          <p className="mt-2 text-lg font-display font-bold sm:text-2xl tracking-tight text-yellow-600">
           {day.summary}
          </p>
        </div>
      </div>
          {/* <thead>
            <tr>
              <th scope="col" className="time  py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Time ^
              </th>
              <th
                scope="col"
                className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Speaker ^
              </th>
              <th
                scope="col"
                className="summary hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Summary ^
              </th>
            </tr>
          </thead> */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {day.timeSlots.map((timeSlot) => (
              <tr key={timeSlot.time} className='flex flex-wrap align-middle items-center'>
                <td className="time  whitespace-nowrap py-1 pl-4 pr-3 text-sm font-display font-bold sm:text-lg tracking-tight text-yellow-700 sm:pl-0">
                  {timeSlot.start} - {timeSlot.end}
                </td>
                <td className="speaker whitespace-nowrap px-3 py-4 text-sm font-display sm:text-lg tracking-tight text-yellow-900 sm:table-cell">
                  {timeSlot.name ? timeSlot.name : Sessions[timeSlot.session].name}
                </td>
                <td className="summary hidden whitespace-nowrap px-3 py-4 text-sm sm:text-md tracking-tight text-yellow-900 lg:table-cell">
                  {timeSlot.description ? timeSlot.description : Sessions[timeSlot.session]?.talkTitle}
                </td>
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
    <div className='flex flex-col items-center'>
      <div className='ml-8'>
        <p className="font-display text-4xl font-medium tracking-tighter text-yellow-600 sm:text-5xl">
          Schedule
        </p>
        <p className="mt-4 font-display text-2xl tracking-tight text-yellow-900">
        Your day will be composed of 30 minute sessions as well as 5 minute
        ignite talks, including plenty of time to chat.
        </p>
    </div>
      <DailySchedule day={auditoriumDay1} />
      <DailySchedule day={auditoriumDay2} />
      <DailySchedule day={thinkTankDay1} />
      <DailySchedule day={thinkTankDay2} />
    </div>
  )
}
