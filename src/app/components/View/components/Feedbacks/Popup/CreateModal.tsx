import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export function CreateModalPortal({
    children,
    portalId,
}: {
    children?: ReactNode
    portalId: string
}) {
    const portal = document.body
    return createPortal(children, portal)
}
