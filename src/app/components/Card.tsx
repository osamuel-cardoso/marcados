'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useState } from 'react'
import { CreateModalPortal } from './CreateModal'
import { Modal } from './View/components/Feedbacks/Popup'

export function Card({
    profile,
    username,
    name,
    resume,
    content,
}: {
    profile: string | StaticImport
    name?: string
    username: string
    resume?: string
    content?: string
}) {
    const [mount, setMount] = useState(false)

    function handleMountModal() {
        setMount((prev) => !prev)
    }

    return (
        <>
            <div className="rounded-lg p-3 w-full max-w-[26.625rem] bg-brand__gray-200">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full overflow-hidden h-[3rem] w-[3rem]">
                            <Image
                                className="w-full h-full"
                                src={profile}
                                alt="Foto do aluno"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="uppercase">{name}</h4>
                            <p className="text-brand__gray-600 text-[.8125rem]">
                                {username}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 w-full">
                        <p className="leading-[150%] text-[.9375rem]  md:text-[1.0625rem] text-brand__gray-600">
                            {resume}
                        </p>
                        {content && (
                            <button
                                onClick={handleMountModal}
                                className="px-7 py-4 w-full bg-brand__gray-100 font-bold uppercase text-[.9375rem] rounded-md transition hover:bg-brand__gray-300"
                            >
                                Ver depoimento
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {mount && (
                <CreateModalPortal portalId="portal">
                    <Modal
                        name={name}
                        profile={profile}
                        username={username}
                        onDismount={handleMountModal}
                        content={content}
                    />
                </CreateModalPortal>
            )}
        </>
    )
}
