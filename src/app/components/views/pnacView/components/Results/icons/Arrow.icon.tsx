import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const arrow = tv({})
interface ArrowProps
    extends ComponentProps<'svg'>,
        VariantProps<typeof arrow> {}

export function Arrow({ className }: ArrowProps) {
    return (
        <svg
            className={arrow({ className })}
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="19"
            fill="none"
            viewBox="0 0 62 19"
        >
            <path
                stroke="currentColor"
                strokeWidth="3"
                d="M0 9.298h60m0 0L53.592 1M60 9.298l-6.408 8.298"
            ></path>
        </svg>
    )
}
