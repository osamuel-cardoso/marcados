import Link from 'next/link'

export function Order() {
    return (
        <div className="w-full  bg-brand__gray-1000 rounded-xl p-4 flex flex-col gap-12">
            <h3 className="text-brand__gray-100 leading-tight uppercase text-[.9375rem] md:text-[1.1875rem]">
                Clique no botão abaixo e faça sua inscrição para entrar no Grupo
                Marcados.
            </h3>
            <div className="flex flex-col gap-[1.125rem]">
                <div className="flex flex-col">
                    <span className="uppercase text-[.9375rem] line-through font-bold text-brand__gray-600">
                        De R$2.100,90
                    </span>
                    <span className="uppercase text-[1.5625rem] leading-none font-bold text-brand__gray-100">
                        12x R$588,78
                    </span>
                    <span className="uppercase text-[.9375rem] font-bold text-brand__gray-600">
                        ou R$1800,90 à vista
                    </span>
                </div>

                <Link
                    className="flex justify-center bg-brand__blue-700_base uppercase font-bold text-brand__gray/1000 rounded-[.25rem] text-[.8125rem] w-full px-4 py-[.875rem] transition hover:bg-brand__gray-100"
                    href={'/'}
                >
                    entre para o marcados
                </Link>
            </div>
        </div>
    )
}
