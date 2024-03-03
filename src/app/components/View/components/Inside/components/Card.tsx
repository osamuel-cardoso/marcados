import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export function Card({
    src,
    heading,
    content,
    index,
    resume,
}: {
    src: string | StaticImport
    heading: string
    content: string
    resume: string
    index?: number | string
}) {
    return (
        <div className="w-full justify-between flex flex-col md:flex-row gap-6 py-8 border-solid border-t border-brand__gray-300">
            <div className="w-full md:max-w-[26.6875rem]">
                <Image
                    src={src}
                    alt="Imagem do módulo"
                />
            </div>
            <div className="flex justify-between items-start w-full md:max-w-[50%]">
                <div className="flex flex-col gap-16 justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase text-[1.1875rem] md:text-[1.5625rem]">
                            {heading}
                        </h3>
                        <p className="text-[.9375rem] md:text-[1.0625rem] leading-[135%] text-brand__gray-600 max-w-[31.75rem]">
                            {content}
                        </p>
                    </div>
                    <span className="uppercase text-[.8125rem] font-medium max-w-[24rem]">
                        {resume}
                    </span>
                </div>
                <span className="text-[.9375rem] md:text-[1.3125rem] font-text font-medium">
                    {index}
                </span>
            </div>
        </div>
    )
}
