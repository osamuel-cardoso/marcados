export function Feature({
    title,
    subtitle,
}: {
    title: string
    subtitle?: string
}) {
    return (
        <div className="flex flex-col gap-1 border-b border-solid border-brand__gray-300 pb-4">
            <h4 className="text-[.9375rem] font-medium md:text-[1.1875rem]">
                {title}
            </h4>
            {subtitle && (
                <p className="text-[.875rem] text-brand__gray-600 md:font-medium">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
