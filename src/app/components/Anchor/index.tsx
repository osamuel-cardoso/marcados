'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { UrlObject } from 'url'

export function Anchor({
    href,
    children,
}: {
    href: string | UrlObject
    children: ReactNode
}) {
    return (
        <Link
            href={href}
            className="px-[.5625rem] py-[.6875rem] text-brand__gray-100 bg-brand__gray-950 font-bold uppercase text-[.875rem] rounded-md transition leading-none hover:bg-brand__blue-700_base hover:text-brand__gray-1000"
        >
            {children}
        </Link>
    )
}
