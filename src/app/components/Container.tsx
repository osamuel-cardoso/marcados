import { ReactNode } from 'react'

export function Container({
    children,
    className,
}: {
    children?: ReactNode
    className?: string
}) {
    return (
        <div className={`w-full max-w-[83rem] m-auto px-4 ${className}`}>
            {children}
        </div>
    )
}
