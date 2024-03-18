'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import youtubeThumb from '@/app/images/youtube__thumbnail.png'

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
                    light={
                        <Image
                            src={youtubeThumb}
                            alt="Thumbnail"
                        />
                    }
                    playsinline
                    height={'100%'}
                    url={
                        'https://player.vimeo.com/video/920071765?h=fd38ccaf73'
                    }
                />
            </div>
        )
    )
}
