export function Offer({
    heading,
    index,
    label,
}: {
    heading: string
    label?: string
    index: number
}) {
    return (
        <div className="flex flex-col gap-5 pb-5 border-b border-brand__gray-300 ">
            <div className="flex justify-between items-center">
                <div className="text-[.9375rem] font-bold text-brand__gray-600">
                    ({String(Number(index + 1)).padStart(2, '0')})
                </div>
                {label && (
                    <span className="text-[.6875rem] md:text-[.9375rem] text-brand__gray-100 px-[.5625rem] py-[.375rem] font-medium leading-none bg-brand__system-yellow rounded-lg">
                        {label}
                    </span>
                )}
            </div>

            <h4 className="uppercase text-[.9375rem] md:text-[1.0625rem] leading-snug">
                {heading}
            </h4>
        </div>
    )
}
