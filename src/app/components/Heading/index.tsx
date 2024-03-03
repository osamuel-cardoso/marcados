export function Heading({ heading, cap }: { heading: string; cap?: string }) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <h2 className="text-[1.4375rem] md:text-[2rem] max-w-[40rem] font-bold text-brand__gray-1000 uppercase">
                {heading}
            </h2>

            {cap && (
                <span className="text-[.9375rem] text-brand__gray-600 md:text-brand__gray-1000 md:text-right max-w-[22rem] md:uppercase font-text md:font-bold">
                    {cap}
                </span>
            )}
        </div>
    )
}
