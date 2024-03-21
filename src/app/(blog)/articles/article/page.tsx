export default function page() {
    return (
        <div className="py-28">
            <div className="w-full max-w-[41.5rem] m-auto px-4">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[1.3125rem] lg:text-[1.8125rem] uppercase">
                            Mostra pra eles.
                        </h1>
                        <p className="text-[1.0625rem] text-brand__gray-500">
                            Em 1993, Michael Jordan liderava o Chicago Bulls em
                            uma de suas melhores temporadas. Em uma série de
                            jogos contra o Washington Wizards, o Bulls recebeu o
                            adversário em casa e venceu, mas o melhor em quadra
                            foi Labradford Smith, estrela do Wizards, que anotou
                            37 pontos na partida — melhor marca na carreira.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="uppercase text-[.8125rem] flex flex-col">
                            <span className=" text-brand__gray-100 font-bold">
                                Andre Lona
                            </span>
                            <span className="text-brand__gray-600 font-medium">
                                18 DE DEZ. DE 2023
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
