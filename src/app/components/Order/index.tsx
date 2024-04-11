import Link from 'next/link'

export function Order() {
    return (
        <div className="w-full  bg-brand__gray-1000 rounded-xl p-4 flex flex-col justify-between gap-12 lg:min-h-52">
            <h3 className="text-brand__gray-100 leading-tight uppercase text-[.9375rem] md:text-[1.0625rem]">
                Clique no botão abaixo e entre para lista de espera do Grupo
                Marcados.
            </h3>
            <div className="flex flex-col gap-[1.125rem]">
                <div className="flex items-center gap-2">
                    {/* <Countdown /> */}
                    {/* <div className="bg-brand__gray-100 px-[.6875rem] py-[.4375rem] h-[100%] font-bold text-brand__gray-1000 rounded-md uppercase text-[.8125rem]">
                        R$200 OFF
                    </div> */}
                </div>
                {/* <div className="flex flex-col">
                    <span className="uppercase text-[.9375rem] line-through font-bold text-brand__gray-600">
                        De R$2.100,90
                    </span>
                    <span className="uppercase text-[1.5625rem] leading-none font-bold text-brand__gray-100">
                        12X de R$ 160,64
                    </span>
                    <span className="uppercase text-[.9375rem] font-bold text-brand__gray-600">
                        ou R$1600,00 à vista
                    </span>
                </div> */}

                <Link
                    className="flex justify-center bg-brand__blue-700_base uppercase font-bold text-brand__gray-1000 rounded-[.25rem] text-[.8125rem] w-full px-4 py-[.875rem] transition hover:bg-brand__gray-100 hover:text-brand__gray-1000"
                    href={'/lista-de-espera/subscribe'}
                >
                    Entre para a lista de espera
                </Link>
            </div>
        </div>
    )
}
