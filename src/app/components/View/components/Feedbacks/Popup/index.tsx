import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useEffect } from 'react'
import { Formatter } from './Formater'

export function Modal({
    name,
    profile,
    username,
    content,
    onDismount,
}: {
    name?: string
    username: string
    profile: string | StaticImport
    content?: string
    onDismount: () => void
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onDismount()
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
            document.body.removeAttribute('style')
        }
    }, [onDismount])

    return (
        <div
            onClick={onDismount}
            className="w-screen h-screen bg-brand__gray-100 fixed left-0 top-0 bottom-0 right-0 bg-opacity-80 backdrop-blur-md"
        >
            <div className="relative flex items-center justify-center h-full w-full p-4">
                <div className="p-8 overflow-y-auto max-h-[64vh] bg-brand__gray-100 max-w-[37.75rem] flex flex-col gap-4 rounded-lg z-10">
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
                    <Formatter content={content} />
                </div>
                <div className="text-brand__gray-600 absolute z-10 right-[2vh] top-[2vh] p-4 transition cursor-pointer hover:text-brand__gray-1000">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
