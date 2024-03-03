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
        title && (
            <tr className="flex flex-col md:flex-row md:items-center w-full gap-4 pb-[.875rem] border-b border-solid border-brand__gray-300">
                <td className="md:w-[33.33%]">
                    <div className="flex flex-col gap-4 md:flex-row md:gap-1 md:items-center">
                        <span>
                            <Image
                                src={playIcon}
                                alt="Ícone de Play"
                            />
                        </span>
                        <span className="truncate max-w-[21.25rem]">
                            {title}
                        </span>
                    </div>
                </td>

                <td className="md:w-[25%]">
                    {playlist && (
                        <div className="flex gap-1 items-center">
                            <span className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem] truncate max-w-[21.25rem]">
                                {playlist}
                            </span>
                        </div>
                    )}
                </td>

                <td className="md:w-[25%]">
                    {step && (
                        <div className="flex gap-1 items-center">
                            <span className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                                {step}
                            </span>
                        </div>
                    )}
                </td>

                <td className="md:w-[16.67%]">
                    {format && (
                        <div className="flex gap-1 items-center">
                            <span className="py-[.3125rem] px-[.6875rem] bg-brand__gray-300 text-brand__gray-800 rounded-full text-[.9375rem]">
                                {format}
                            </span>
                        </div>
                    )}
                </td>
            </tr>
        )
    )
}
