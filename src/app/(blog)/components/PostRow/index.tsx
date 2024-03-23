import Link from 'next/link'

export function PostRow({
    content,
    date,
    title,
    slug,
}: {
    title?: string
    content: string
    date: Date
    slug: string
}) {
    return (
        <Link href={`/articles/${slug}`}>
            <div className="flex flex-col gap-6 border-b border-brand__gray-900 pb-5">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[1.0625rem] uppercase">
                                {title}
                            </h3>
                            <div>
                                <p className="text-brand__gray-600">
                                    {content}
                                </p>
                            </div>
                        </div>

                        <span className="uppercase text-[.9375rem] font-bold text-brand__gray-100 leading-none">
                            {String(
                                Intl.DateTimeFormat('pt-br').format(
                                    new Date(date)
                                )
                            )}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="uppercase text-[.9375rem] font-bold leading-none">
                            Andre Lona
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
