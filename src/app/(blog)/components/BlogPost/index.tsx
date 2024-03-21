export function BlogPost() {
    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden">
                <img
                    className="h-full w-full"
                    src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9f9cdae9-ee79-47ca-b041-902eb3843376_1802x988.png"
                    alt="Imagem"
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[1.0625rem] uppercase">Antes/depois</h3>
                    <div>
                        <p className="text-brand__gray-500">
                            Semana passada participei do 3o campeonato de
                            fisiculturismo neste ano. Um dos motivos por esse
                            esporte me fascinar é o fato de ser uma constante
                            luta contra si mesmo....
                        </p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className="uppercase text-[.9375rem] font-bold">
                        Andre Lona
                    </span>
                    <span className="uppercase text-[.8125rem] font-bold text-brand__gray-600">
                        18 DE DEZ. DE 2023
                    </span>
                </div>
            </div>
        </div>
    )
}
