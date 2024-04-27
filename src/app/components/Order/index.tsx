import Link from 'next/link'

export function Order() {
    return (
        <div className="w-full  bg-brand__gray-1000 rounded-xl p-4 flex flex-col justify-between gap-12 lg:min-h-52">
            <h3 className="text-brand__gray-100 leading-tight uppercase text-[.9375rem] md:text-[1.0625rem]">
                Inscreva-se agora e tenha um gostinho exclusivo da nossa
                comunidade.
            </h3>
            <div className="flex flex-col gap-[1.125rem]">
                <Link
                    className="flex justify-center bg-brand__blue-700_base uppercase font-bold text-brand__gray-1000 rounded-[.25rem] text-[.8125rem] w-full px-4 py-[.875rem] transition hover:bg-brand__gray-100 hover:text-brand__gray-1000"
                    href={'/sub-waitlist'}
                >
                    Entre para a lista de esperaⓂ️
                </Link>
            </div>
        </div>
    )
}
