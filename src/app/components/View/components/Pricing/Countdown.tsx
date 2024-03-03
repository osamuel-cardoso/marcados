'use client'

import { useEffect, useState } from 'react'

interface TimeTypes {
    days: number
    hour: number
    minutes: number
    seconds: number
}

export function Countdown() {
    const [time, setTime] = useState({} as TimeTypes)

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(getDifferenceBetweenDate('2024/03/08 19:30'))
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    }, [])

    function getDifferenceBetweenDate(date: string) {
        const parsedDate = (date: string) => {
            return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '))
        }
        const differenceInSeconds =
            parsedDate(date) - Date.parse(String(new Date()))

        const days = Math.floor(differenceInSeconds / (1000 * 60 * 60 * 24))
        const hour = Math.floor((differenceInSeconds / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((differenceInSeconds / 1000 / 60) % 60)
        const seconds = Math.floor((differenceInSeconds / 1000) % 60)

        const time = {
            days,
            hour,
            minutes,
            seconds,
        }

        return time
    }

    const { days, hour, minutes, seconds } = time

    return (
        <div className="flex h-[100%] bg-brand__blue-700_base px-[.6875rem] py-[.4375rem] rounded-md">
            <span className="uppercase font-bold text-[.8125rem] md:text-[.9375rem]">{`${String(days).padStart(2, '0')}D ${String(hour).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}Min ${String(seconds).padStart(2, '0')}S`}</span>
        </div>
    )
}
