import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'October 14th',
    dateTime: '2022-10-14',
    summary: '',
    timeSlots: [
      {
        name: 'Registration',
        description: 'Registration',
        start: '08:30AM',
        end: '09:15AM',
      },
      {
        name: 'Opening Welcome',
        description: 'Event organisers',
        start: '9:30AM',
        end: '09:45AM',
      },
      {
        name: 'Main Event',
        description: 'Schedule to be announced',
        start: '9:45AM',
        end: '16:15PM',
      },
      // {
      //   name: 'Slot 1',
      //   description: '',
      //   start: '09:45AM',
      //   end: '10:10AM'
      // },
      // {
      //   name: 'Slot 2',
      //   description: '',
      //   start: '10:10AM',
      //   end: '10:45AM'
      // },
      // {
      //   name: 'Morning Break',
      //   description: 'Coffee, Snacks, Sponsors, Chat!',
      //   start: '10:45AM',
      //   end: '11:15AM'
      // },
      // {
      //   name: 'Slot 3',
      //   description: '',
      //   start: '11:15AM',
      //   end: '11:45AM'
      // },
      // {
      //   name: 'Slot 4',
      //   description: '',
      //   start: '11:45AM',
      //   end: '12:15AM'
      // },
      // {
      //   name: 'Ignites Session 1 (6 talks)',
      //   description: '',
      //   start: '12:15PM',
      //   end: '12:45PM'
      // },
      // {
      //   name: 'Lunch',
      //   description: 'Food, Coffee, Sponsors, Chat!',
      //   start: '12:45PM',
      //   end: '13:45PM'
      // },
      // {
      //   name: 'Slot 5',
      //   description: '',
      //   start: '13:45PM',
      //   end: '14:15PM'
      // },
      // {
      //   name: 'Slot 6',
      //   description: '',
      //   start: '14:15PM',
      //   end: '14:45PM'
      // },
      // {
      //   name: 'Slot 7',
      //   description: '',
      //   start: '14:45PM',
      //   end: '15:15PM'
      // },
      // {
      //   name: 'Afternoon Break',
      //   description: '',
      //   start: '14:15PM',
      //   end: '14:45PM'
      // },
      // {
      //   name: 'Slot 8',
      //   description: '',
      //   start: '14:45PM',
      //   end: '15:15PM'
      // },
      // {
      //   name: 'Slot 9',
      //   description: '',
      //   start: '15:15PM',
      //   end: '15:45PM'
      // },
      // {
      //   name: 'Ignites Session 2 (6 talks)',
      //   description: '',
      //   start: '15:45PM',
      //   end: '16:15PM'
      // },
      {
        name: 'Closing remarks',
        description: 'Event organisers',
        start: '16:15PM',
        end: '16:30PM',
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
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex space-x-4 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:block sm:space-y-10 sm:space-x-0 sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                {
                  'opacity-70': dayIndex !== selectedIndex,
                }
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      Schedule
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
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
        <time dateTime={day.dateTime}>{day.date}</time>
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
            <div className="mx-auto mb-8 h-px w-48 bg-yellow-500/10" />
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
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            GMT
          </p>
        </div>
      ))}
    </div>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="py-20 sm:py-32"
    >
      <h2 id="schedule-title" className="sr-only">
        Schedule
      </h2>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <p className="font-display text-4xl font-medium tracking-tighter text-yellow-600 sm:text-5xl">
            Exciting and inspiring speakers to be announced
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-yellow-900">
            We're bringing some of the best speakers in the world to Birmingham,
            as well as highlighting local talent.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute -inset-x-0 -top-40 -bottom-32 overflow-hidden bg-yellow-50">
          <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[27%]">
            {/*<Image*/}
            {/*  src={""}*/}
            {/*  alt=""*/}
            {/*  layout="fixed"*/}
            {/*  width={918}*/}
            {/*  height={1495}*/}
            {/*  unoptimized*/}
            {/*/>*/}
          </div>
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
