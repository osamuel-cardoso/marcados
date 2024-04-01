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
        <div className="flex flex-col gap-3 pb-4 border-b border-brand__gray-300 ">
            <div className="flex justify-between items-center">
                <div className="text-[.8125rem] font-bold text-brand__gray-600">
                    ({String(Number(index + 1)).padStart(2, '0')})
                </div>
                {label && (
                    <span className="text-[.6875rem] md:text-[.8125rem] text-brand__gray-100 px-[.4375rem] py-[.3125rem] font-medium leading-none bg-brand__system-yellow rounded-lg">
                        {label}
                    </span>
                )}
            </div>

            <h4 className="uppercase text-[.9375rem] leading-snug">
                {heading}
            </h4>
        </div>
    )
}
