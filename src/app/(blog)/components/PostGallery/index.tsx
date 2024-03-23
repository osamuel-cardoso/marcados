import Link from 'next/link'

export function PostGrid({
    src,
    content,
    date,
    title,
    slug,
}: {
    title?: string
    src?: string
    content: string
    date: Date
    slug: string
}) {
    return (
        <Link href={`/articles/${slug}`}>
            <div className="flex flex-col gap-6">
                <div className="rounded-lg overflow-hidden">
                    <img
                        className="h-full w-full"
                        src={src}
                        alt="Imagem do artigo"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[1.0625rem] uppercase">{title}</h3>
                        <div>
                            <p className="text-brand__gray-600">{content}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="uppercase text-[.9375rem] font-bold">
                            Andre Lona
                        </span>
                        <span className="uppercase text-[.8125rem] font-medium text-brand__gray-600">
                            {String(
                                Intl.DateTimeFormat('pt-br').format(
                                    new Date(date)
                                )
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
