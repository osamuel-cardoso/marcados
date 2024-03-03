import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { UrlObject } from 'url'
import cn from 'clsx'

interface ButtonTypes extends VariantProps<typeof buttonVariants> {
    children: string
    className?: string
    href: string | UrlObject
}

const buttonVariants = cva(
    'px-4 py-5 md:px-7 md:py-6 rounded font-bold text-center uppercase transition border border-solid border-transparent hover:bg-brand__gray-100 hover:text-brand__gray-1000',
    {
        variants: {
            variant: {
                default:
                    'bg-brand__gray-1000 text-brand__gray-100 hover:border-brand__gray-300',
                yellow: '',
                blue: 'bg-brand__blue-700_base text-brand__gray-1000 border-brand__blue-700_base hover:border-brand__gray-300',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export function Button({ href, className, children, variant }: ButtonTypes) {
    return (
        <Link
            className={cn(buttonVariants({ variant, className }))}
            href={href}
        >
            {children}
        </Link>
    )
}
