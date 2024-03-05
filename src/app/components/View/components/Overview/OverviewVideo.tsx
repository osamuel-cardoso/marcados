'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export function OverviewVideo() {
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        typeof window !== 'undefined' && setHasWindow(true)
    }, [])
    return (
        hasWindow && (
            <div className="h-[19rem] sm:h-[24rem] md:h-[32rem] lg:h-[48em]">
                <ReactPlayer
                    className="rounded-lg w-full h-full overflow-hidden"
                    width={'100%'}
                    controls={false}
                    style={{
                        borderRadius: '1rem',
                    }}
                    playsinline
                    height={'100%'}
                    url={'https://youtu.be/lB5nJjLugzE'}
                />
            </div>
        )
    )
}
