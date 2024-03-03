'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { SourceProps } from 'react-player/base'

export function Video({
    url,
    controls,
}: {
    url: string | string[] | SourceProps[] | MediaStream | undefined
    controls?: boolean
}) {
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        typeof window !== 'undefined' && setHasWindow(true)
    }, [])

    return (
        <>
            {hasWindow && (
                <div className="relative h-[14rem] sm:h-[24rem] md:h-[32rem] lg:h-[48em]">
                    <ReactPlayer
                        className="rounded-lg w-full h-full overflow-hidden absolute top-0 left-0 bottom-0 right-0"
                        width={'100%'}
                        height={'100%'}
                        volume={0.5}
                        controls={controls}
                        url={url}
                        light
                    />
                </div>
            )}
        </>
    )
}
