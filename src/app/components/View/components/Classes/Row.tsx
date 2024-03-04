import playIcon from '@/app/images/▶️.png'
import Image from 'next/image'

export default function Row({
    title,
    playlist,
    step,
    format,
}: {
    title?: string
    playlist?: string
    step?: string
    format?: string
}) {
    return (
        <div className="grid grid-cols-4 gap-x-4 pb-[.875rem] border-b border-solid border-brand__gray-300 w-full">
            <div className="flex gap-1 items-center">
                <Image
                    src={playIcon}
                    alt="Ícone de Play"
                />

                <div className="truncate max-w-[18rem]">{title}</div>
            </div>

            {playlist && (
                <div className="flex gap-1 items-center">
                    <div className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                        {playlist}
                    </div>
                </div>
            )}

            {step && (
                <div className="flex gap-1 items-center">
                    <div className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                        {step}
                    </div>
                </div>
            )}

            {format && (
                <div className="flex gap-1 items-center">
                    <div className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                        {format}
                    </div>
                </div>
            )}
        </div>
    )
}
