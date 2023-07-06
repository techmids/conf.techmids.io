import { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image'
import {Sessions} from "../../speakers";
import Link from "next/link";
import { Schedule as schedule} from "../../schedule";


function DailySchedule({day}){

  // Day of the month
const [today, setToday] = useState('15') 
// Timestamp of time in real life
const [timeIrl, setTimeIrl] = useState(0)

//updates current day of month and timestamp every 20 secs
  useEffect(() => {
    const logDate = () => {
      const currentDate = new Date()
      setToday(String(currentDate.getDate()))
      setTimeIrl( Math.floor(currentDate.getTime()/1000))
      setTimeout(logDate, 20000)
    }
    logDate()
    return () => {
      clearTimeout()
    }
  }, [])
  return(
    <>
        
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 sm:m-8">
      <div className="mt-8 sm:-mx-8">
        <div className="sm:flex-auto">
          <h1 className="font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">{day.timeOfDay}</h1>
          <p className="mb-6 mt-2 text-md font-display font-bold sm:text-2xl tracking-tight text-yellow-600">
           {day.summary}
          </p>
      </div>
        <table className="w-full divide-y divide-gray-300 table-auto">
          <thead>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {day.timeSlots.map((timeSlot) => (
                <tr key={`${timeSlot.start}${timeSlot.name}`} 
                    className={
                    timeIrl >= moment(`10/${today}/2023 ${timeSlot.start.split('').filter((x)=> x.toUpperCase() === x.toLowerCase()).join('')}:00`).unix()
                    && 
                    timeIrl < moment(`10/${today}/2023 ${timeSlot.end.split('').filter((x)=> x.toUpperCase() === x.toLowerCase()).join('')}:00`).unix() + 5 * 60
                    &&
                    day.date.split('').slice(8).join('') === today 
                    ? 
                    "flex items-center bg-amber-200" :
                    "flex items-center"
                }>
                  {timeSlot.session && (
                  <>
                    <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-yellow-700  sm:w-[200px]">
                      <Link href={`/speakers/${timeSlot.session}`} >
                      {timeSlot.start} - {timeSlot.end}
                      </Link> 
                    </td>
                    <td className="speaker hidden whitespace-nowrap px-3 text-sm font-display sm:text-lg tracking-tight text-yellow-900 w-1/2 sm:w-[250px] md:flex items-center gap-4">
                            <Link href={`/speakers/${timeSlot.session}`} >
                          <div className="flex-shrink-0">
                              <Image
                                className="inline-block h-10 w-10 rounded-full"
                                src={Sessions[timeSlot.session].image}
                                alt={Sessions[timeSlot.session].name}
                                style={{objectFit: 'cover'}}
                              />
                          </div>
                            </Link>
                            <Link href={`/speakers/${timeSlot.session}`} >
                              {timeSlot.name ? timeSlot.name : Sessions[timeSlot.session].name}
                            </Link>
                    </td>
                    <td className="summary font-semibold text-sm sm:text-md tracking-tight text-yellow-700 w-1/2 sm:w-[400px]">
                      <Link href={`/speakers/${timeSlot.session}`} >
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
                        {/*Your day will be composed of 30 minute sessions as well as 5 minute*/}
                        {/*ignite talks, including plenty of time to chat.*/}
                      </p>
                </div>
              {Object.keys(schedule).map((track) => {
                    return Object.keys(schedule[track]).map((day) => {
                      return <DailySchedule key={`${track}-${day}`} day={schedule[track][day]}/>
                    })
                  }
              )
              }
            </div>
      </div>

  )
}
