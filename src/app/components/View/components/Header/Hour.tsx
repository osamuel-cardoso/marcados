'use client'

import { useEffect, useState } from 'react'

interface TimeProps {
    hour: number
    minutes: number
    seconds: number
}

export function Hour() {
    const [time, setTime] = useState({} as TimeProps)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date()

            const hour = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()

            setTime({ hour, minutes, seconds })
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        time.hour !== undefined && (
            <div className="px-[.5625rem] py-[.6875rem] text-brand__gray-100 bg-brand__gray-950 font-bold uppercase text-[.8125rem] md:text-[.875rem] rounded-md leading-none">
                <span className="text-brand__gray-600">Hora Local</span>
                <span>
                    /{String(time.hour).padStart(2, '0')}:
                    {String(time.minutes).padStart(2, '0')}:
                    {String(time.seconds).padStart(2, '0')}
                </span>
            </div>
        )
    )
}
