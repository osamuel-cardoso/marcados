import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export function Course({
    title,
    classes,
    description,
    image,
}: {
    title: string
    classes: string
    description: string
    image: string | StaticImport
}) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 pt-5 border-t solid border-brand__gray-300">
                <div className="flex justify-between text-brand__gray-1000">
                    <h3 className="text-[1.0625rem] md:text-[1.4375rem] uppercase">
                        {title}
                    </h3>
                    <span className="text-[.9375rem]">{classes}</span>
                </div>
                <p className="text-[.9375rem] md:text-[.9375rem] leading-normal text-brand__gray-600">
                    {description}
                </p>
            </div>
            <Image
                className="rounded-[.25rem]"
                src={image}
                alt="Imagem do curso fechado"
            />
        </div>
    )
}
