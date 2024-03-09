import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export function CreateModalPortal({ children }: { children?: ReactNode }) {
    const portal = document.body
    return createPortal(children, portal)
}
