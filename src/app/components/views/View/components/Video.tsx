'use client'

import { JSXElementConstructor, ReactElement, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { SourceProps } from 'react-player/base'

export function Video({
    url,
    controls,
    light,
}: {
    url: string | string[] | SourceProps[] | MediaStream | undefined
    light?:
        | string
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | undefined
    controls?: boolean
}) {
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        typeof window !== 'undefined' && setHasWindow(true)
    }, [])

    return (
        <>
            {hasWindow && (
                <div className="h-[14rem] sm:h-[24rem] md:h-[32rem] lg:h-[48em]">
                    <ReactPlayer
                        className="rounded-2xl w-full h-full overflow-hidden"
                        width={'100%'}
                        height={'100%'}
                        volume={0.5}
                        controls={controls}
                        url={url}
                        light={light}
                    />
                </div>
            )}
        </>
    )
}
