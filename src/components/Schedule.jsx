import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import speakers from 'speakers'

const Becky = speakers.filter(
  (speaker) => speaker['name'] === 'Becky Pauley'
)[0]
const Rebekah = speakers.filter(
  (speaker) => speaker['name'] === 'Rebekah Kulidzan'
)[0]
const Carly = speakers.filter(
  (speaker) => speaker['name'] === 'Carly Richmond'
)[0]
const Max = speakers.filter((speaker) => speaker['name'] === 'Max Woolf')[0]
const Jen = speakers.filter((speaker) => speaker['name'] === 'Jen Lambourne')[0]
const Nic = speakers.filter((speaker) => speaker['name'] === 'Nic Jackson')[0]
const Ben = speakers.filter((speaker) => speaker['name'] === 'Ben Foxall')[0]
const Kunal = speakers.filter(
  (speaker) => speaker['name'] === 'Kunal Kushwaha'
)[0]
const Jessica = speakers.filter(
  (speaker) => speaker['name'] === 'Jessica Rose'
)[0]

const Goldman = {
  name: 'Mark Perkin and Thomas Morrissey',
  talkTitle: 'Adoption of cloud technology in finance',
}

// Order the talks here
const talks = [
  Goldman,
  Ben,
  Jessica,
  Nic,
  Jen,
  Kunal,
  Carly,
  Max,
  Becky,
  Rebekah,
]

const schedule = [
  {
    timeOfDay: 'Morning Session',
    date: '2022-10-14',
    summary: '08:30 - 13:15 BST',
    timeSlots: [
      {
        name: 'Registration',
        description: '',
        start: '08:30AM',
        end: '08:50AM',
      },
      {
        name: 'Opening Welcome',
        description: 'Event organisers',
        start: '09:00AM',
        end: '09:15AM',
      },
      {
        name: talks[0].name,
        description: talks[0].talkTitle,
        start: '09:15AM',
        end: '09:45AM',
      },
      {
        name: talks[1].name,
        description: talks[1].talkTitle,
        start: '09:45AM',
        end: '10:15AM',
      },
      {
        name: 'Morning Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
        start: '10:15AM',
        end: '10:45AM',
      },
      {
        name: talks[2].name,
        description: talks[2].talkTitle,
        start: '10:45AM',
        end: '11:15AM',
      },
      {
        name: talks[3].name,
        description: talks[3].talkTitle,
        start: '11:15AM',
        end: '11:45AM',
      },
      {
        name: 'Ignite talks',
        description: '(6 x 5 minute sessions)',
        start: '11:45PM',
        end: '12:15PM',
      },
      {
        name: 'Lunch',
        description: 'Food, Coffee, Sponsors, Chat!',
        start: '12:15PM',
        end: '13:15PM',
      },
    ],
  },
  {
    timeOfDay: 'Afternoon Session',
    date: '2022-10-14',
    summary: '13:15 - 17:00 BST',
    timeSlots: [
      {
        name: talks[4].name,
        description: talks[4].talkTitle,
        start: '13:15PM',
        end: '13:45PM',
      },
      {
        name: talks[5].name,
        description: talks[5].talkTitle,
        start: '13:45PM',
        end: '14:15PM',
      },
      {
        name: talks[6].name,
        description: talks[6].talkTitle,
        start: '14:15PM',
        end: '14:45PM',
      },
      {
        name: 'Afternoon Break',
        description: 'Coffee, Snacks, Sponsors, Chat!',
        start: '14:45PM',
        end: '15:15PM',
      },
      {
        name: talks[7].name,
        description: talks[7].talkTitle,
        start: '15:15PM',
        end: '15:45PM',
      },
      {
        name: talks[8].name,
        description: talks[8].talkTitle,
        start: '15:45PM',
        end: '16:15PM',
      },
      {
        name: talks[9].name,
        description: talks[9].talkTitle,
        start: '16:15PM',
        end: '16:45PM',
      },
      {
        name: 'Closing remarks',
        description: 'Event organisers',
        start: '16:45PM',
        end: '17:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
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
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-3 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex space-x-4 overflow-x-auto pl-4 pb-4 sm:col-span-1 sm:mx-0 sm:block sm:space-y-10 sm:space-x-0 sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
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
        {schedule.map((day) => (
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
      {schedule.map((day) => (
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
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
