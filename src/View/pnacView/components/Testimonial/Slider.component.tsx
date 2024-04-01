'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { Card } from '@/app/components/Card'
import { KeenSliderPlugin } from 'keen-slider'
import { feedbacks } from '@/utils/feedbacks'

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
    function updateHeight() {
        slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight + 'px'
    }
    slider.on('created', updateHeight)
    slider.on('slideChanged', updateHeight)
}

export default function Slider() {
    const [sliderRef] = useKeenSlider(
        {
            slides: {
                perView: 'auto',
                spacing: 16,
            },
            renderMode: 'performance',
            breakpoints: {
                '(max-width: 480px)': {
                    slides: {
                        perView: 'auto',
                        spacing: 16,
                        origin: 'center',
                    },
                },
            },
        },
        [AdaptiveHeight]
    )

    return (
        <div
            ref={sliderRef}
            className="keen-slider overflow-visible cursor-grab"
            style={{ overflow: 'visible' }}
        >
            {feedbacks.map((feedback, index) => (
                <div
                    key={index}
                    className="keen-slider__slide w-full"
                    style={{ flexShrink: 0, maxWidth: '26.625rem' }}
                >
                    <Card
                        profile={feedback.profile}
                        name={feedback.name}
                        username={feedback.username}
                        resume={feedback.resume}
                        content={feedback?.content}
                    />
                </div>
            ))}
        </div>
    )
}
