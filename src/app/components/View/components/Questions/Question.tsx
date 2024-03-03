'use client'

export function Question({
    index,
    heading,
    content,
    isCurrent,
    handleChangeIndex,
}: {
    index: number
    isCurrent: boolean
    heading?: string
    content?: string
    handleChangeIndex(index: number): void
}) {
    return (
        <div className="flex flex-col gap-5 md:flex-row md:justify-between pt-8 border-t border-brand__gray-300">
            <span
                className="text-[.9375rem] md:text-[1.0625rem] text-brand__gray-600 font-bold uppercase cursor-pointer transition hover:text-brand__gray-1000"
                onClick={() => handleChangeIndex(index)}
            >
                ({String(Number(index + 1)).padStart(2, '0')})
            </span>
            <div
                className="flex flex-col gap-3 w-full md:w-[58.33%] cursor-pointer transition ease-in duration-100 hover:translate-x-1"
                onClick={() => handleChangeIndex(index)}
            >
                <h4 className="text-[1.0625rem] md:text-[1.1875rem] uppercase">
                    {heading}
                </h4>

                {isCurrent && (
                    <p className="text-[.9375rem] md:text-[1.0625rem] w-full md:max-w-[75%] text-brand__gray-600">
                        {content}
                    </p>
                )}
            </div>
        </div>
    )
}
