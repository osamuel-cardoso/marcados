import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
    base: 'w-full max-w-[83rem] m-auto px-4',
})

interface ContainerVariants
    extends ComponentProps<'div'>,
        VariantProps<typeof container> {}

export function Container({ children, className }: ContainerVariants) {
    return <div className={container({ className: className })}>{children}</div>
}
