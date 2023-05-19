import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
const scheduleTrack1 = [
  {
    room: "Main Auditorium",
    timeOfDay: 'Auditorium Morning Day 1',
    date: '2023-06-15',
    summary: '08:30 - 13:15 BST',
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
        start: '09:20AM',
        end: '09:50AM',
      },
      {
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
        start: '10:50AM',
        end: '11:20AM',
      },
      {
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
    ],
  },
  {
    timeOfDay: 'Auditorium Afternoon Day 1',
    date: '2023-06-15',
    summary: '13:50 - 17:00 BST',
    dayName: "Day 1",
    timeSlots: [
      {
        name: 'Afternoon Intro',
        description: 'Event organisers',
        start: '13:50PM',
        end: '14:05PM',
      },
      {
        start: '14:10PM',
        end: '14:40PM',
      },
      {
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
        start: '15:30PM',
        end: '16:00PM',
      },
      {
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
  },
  {
    timeOfDay: 'Auditorium Morning Day 2',
    date: '2023-06-16',
    summary: '08:30 - 13:15 BST',
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
        start: '09:20AM',
        end: '09:50AM',
      },
      {
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
        start: '10:50AM',
        end: '11:20AM',
      },
      {
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
    ],
  },
  {
    timeOfDay: 'Auditorium Afternoon Day 2',
    date: '2023-06-16',
    summary: '13:15 - 17:00 BST',
    dayName: "Day 2",
    timeSlots: [
      {
        name: 'Afternoon Intro',
        description: 'Event organisers',
        start: '13:50PM',
        end: '14:05PM',
      },
      {
        start: '14:10PM',
        end: '14:40PM',
      },
      {
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
        start: '15:30PM',
        end: '16:00PM',
      },
      {
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
  },
]

const scheduleTrack2 = [
  {
    timeOfDay: 'ThinkTank Morning Day 1',
    date: '2023-06-15',
    summary: '08:30 - 13:15 BST',
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
        start: '09:20AM',
        end: '09:50AM',
      },
      {
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
        start: '10:50AM',
        end: '11:20AM',
      },
      {
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
    ],
  },
  {
    timeOfDay: 'ThinkTank Afternoon Day 1',
    date: '2023-06-15',
    summary: '13:50 - 17:00 BST',
    dayName: "Day 1",
    timeSlots: [
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
  },
  {
    timeOfDay: 'ThinkTank Morning Day 2',
    date: '2023-06-16',
    summary: '08:30 - 13:15 BST',
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
        start: '09:20AM',
        end: '09:50AM',
      },
      {
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
        start: '10:50AM',
        end: '11:20AM',
      },
      {
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
    ],
  },
  {
    timeOfDay: 'ThinkTank Afternoon Day 2',
    date: '2023-06-16',
    summary: '13:15 - 17:00 BST',
    dayName: "Day 2",
    timeSlots: [
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
  },
]

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
                  <div className="bg--500/10 mx-auto mb-8 h-px w-48" />
              )}
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

function ScheduleStatic() {
  return (
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
        {scheduleTrack1.map((day) => (
            <section key={day.date}>
              <DaySummary day={day} />
              <TimeSlots day={day} className="mt-10" />
            </section>
        ))}
      </div>
  )
}

export function Schedule() {
  return (
      <section id="schedule" aria-labelledby="schedule-title" className="py-20">
        <h2 id="schedule-title" className="sr-only">
          Schedule
        </h2>
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <p className="font-display text-4xl font-medium tracking-tighter text-yellow-600 sm:text-5xl">
              Schedule
            </p>
            <p className="mt-4 font-display text-2xl tracking-tight text-yellow-900">
              Your day will be composed of 30 minute sessions as well as 5 minute
              ignite talks, including plenty of time to chat.
            </p>
          </div>
        </Container>
        <div className="relative mt-14 sm:mt-24">
          <div className="absolute -inset-x-0 -top-40 -bottom-32 overflow-hidden bg-yellow-50">
            <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[27%]"></div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
          </div>
          <Container className="relative">
            <ScheduleTabbed track={scheduleTrack1}/>
            <div className="divide-y py-10">
            </div>
            <ScheduleTabbed track={scheduleTrack2}/>
            {/*<ScheduleStatic />*/}
          </Container>
        </div>
      </section>
  )
}
