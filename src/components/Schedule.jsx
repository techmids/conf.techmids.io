import { useEffect, useState } from 'react';
import moment from 'moment';
import Image from 'next/image'
import { Sessions } from "../../speakers";
import Link from "next/link";
import { Schedule as schedule } from "../../schedule";
import {EVENT} from "../../event";


function DailySchedule({ day }) {
    // Day of the month
    const [today, setToday] = useState('20');
    // Timestamp of time in real life
    const [timeIrl, setTimeIrl] = useState(0);

    // Updates current day of month and timestamp every 20 secs
    useEffect(() => {
        const logDate = () => {
            const currentDate = new Date();
            setToday(String(currentDate.getDate()));
            setTimeIrl(Math.floor(currentDate.getTime() / 1000));
            setTimeout(logDate, 20000);
        };
        logDate();
        return () => {
            clearTimeout();
        };
    }, []);

    // Parse the provided date prop into a format we can use for comparison
    const parsedDate = moment(EVENT.date, 'Do MMMM YYYY').format('MM/DD/YYYY');

    return (
        <>
            <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 sm:m-8">
                <div className="w-full mt-8 sm:-mx-8">
                    <div className="sm:flex-auto">
                        <h1 className="font-display text-4xl font-medium tracking-tighter text-brand-800 sm:text-5xl">
                            {day.timeOfDay}
                        </h1>
                        <p className="mb-6 mt-2 text-md font-display font-bold sm:text-2xl tracking-tight text-brand-900">
                            {day.summary}
                        </p>
                    </div>
                    <table className="w-full divide-y divide-brand-700 table-auto">
                        <thead></thead>
                        <tbody className="divide-y divide-brand-700 bg-white">
                        {day.timeSlots.map((timeSlot) => (
                            <tr
                                key={`${timeSlot.start}${timeSlot.name}`}
                                className={
                                    timeIrl >= moment(`${parsedDate} ${timeSlot.start.split('').filter((x) => x.toUpperCase() === x.toLowerCase()).join('')}:00`).unix() &&
                                    timeIrl < moment(`${parsedDate} ${timeSlot.end.split('').filter((x) => x.toUpperCase() === x.toLowerCase()).join('')}:00`).unix() + 5 * 60 &&
                                    moment(parsedDate).date() === parseInt(today)
                                        ? "flex items-center bg-brand-400 justify-between"
                                        : "flex items-center justify-between"
                                }
                            >
                                {timeSlot.session && (
                                    <>
                                        <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-brand-900 sm:w-[200px]">
                                            <Link href={`/speakers/${timeSlot.session}`}>
                                                {timeSlot.start} - {timeSlot.end}
                                            </Link>
                                        </td>
                                        <td className="flex-col speaker hidden px-3 text-sm font-display sm:text-lg tracking-tight text-brand-800 w-1/2 sm:w-[250px] md:flex items-center">
                                            {timeSlot.session.map((speaker) => {
                                                return (
                                                    <div className="w-full flex" key={speaker}>
                                                        <Link href={`/speakers/${timeSlot.session}`}>
                                                            <div className="flex-sh-0 pr-2">
                                                                <Image
                                                                    className="inline-block h-10 w-10 rounded-full"
                                                                    src={Sessions[speaker].image}
                                                                    alt={Sessions[speaker].name}
                                                                    style={{ objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                        </Link>
                                                        <Link href={`/speakers/${speaker}`}>
                                                            {timeSlot.name ? timeSlot.name : Sessions[speaker].name}
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </td>
                                        <td className="summary font-semibold text-sm sm:text-md tracking-tight text-brand-700 w-1/2 sm:w-[400px]">
                                            <Link href={`/speakers/${timeSlot.session[0]}`}>
                                                {timeSlot.description ? timeSlot.description : Sessions[timeSlot.session[0]]?.talkTitle}
                                            </Link>
                                        </td>
                                    </>
                                )}
                                {!timeSlot.session && (
                                    <>
                                        <td className="time w-1/2 whitespace-nowrap py-1 text-sm font-display font-bold sm:text-lg tracking-tight text-brand-900 sm:w-[200px]">
                                            {timeSlot.start} - {timeSlot.end}
                                        </td>
                                        <td className="speaker hidden whitespace-nowrap px-3 text-sm font-display sm:text-lg tracking-tight text-brand-800 w-1/2 sm:w-[250px] md:table-cell">
                                            {timeSlot.name === 'Coffee, Snacks, Sponsors, Chat!' ? (
                                                <div className="text-sm">Coffee, Snacks, Sponsors, Chat!</div>
                                            ) : timeSlot.name ? (
                                                timeSlot.name
                                            ) : (
                                                Sessions[timeSlot.session].name
                                            )}
                                        </td>
                                        <td className="summary font-semibold text-sm sm:text-md tracking-tight text-brand-900 w-1/2 sm:w-[400px]">
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
    );
}

export function Schedule() {
    // Date for the event, this could be passed from some state or external source
    const eventDate = '25th October 2024';

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10">
            <div className="flex flex-col mx-auto">
                <div className="flex flex-wrap items-center ">
                    <p className="font-display text-4xl font-medium text-brand-800 sm:text-7xl">
                        Schedule
                    </p>
                    <p className="w-full mt-4 font-display text-2xl text-brand-900">
                        Your day will be composed of 20 minute sessions including plenty of time to chat and network.
                    </p>
                </div>
                {Object.keys(schedule).map((track) => {
                    return Object.keys(schedule[track]).map((day) => {
                        return <DailySchedule key={`${track}-${day}`} day={schedule[track][day]} date={eventDate} />;
                    });
                })}
            </div>
        </div>
    );
}
