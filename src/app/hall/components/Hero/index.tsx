import { Container } from '@/app/components/Container'
import { MarcadosBrand } from '@/app/components/icons/MarcadosBrand'
import { FeatureCards } from '@/app/components/views/View/components/FeatureCards'
import { Video } from '@/app/components/views/View/components/Video'

export function Hero() {
    return (
        <section className="bg-brand__blue-700_base py-16 md:py-20">
            <Container>
                <div className="flex flex-col gap-[3rem]">
                    <div className="flex flex-col gap-10">
                        <MarcadosBrand />
                        <div className="flex flex-col gap-3 max-w-[64rem]">
                            <h1 className="text-4xl uppercase md:text-7xl text-brand__gray-1000">
                                Bem-vindo ao Hall de Entrada do Marcados©
                            </h1>
                            <p className="max-w-[41.5rem] text-brand__blue-100 text-[1.0625rem] md:text-[1.125rem]">
                                O Grupo Marcados abre suas portas apenas quatro
                                vezes por ano, e a próxima chance será em junho.
                                Mas enquanto junho não chega, temos um presente
                                especial para você. Assista ao vídeo abaixo e
                                veja como funciona o Hall de Entrada do
                                Marcados©.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Video
                            controls
                            url={
                                'https://player.vimeo.com/video/938169757?h=65f4c50d70'
                            }
                        />

                        <FeatureCards />
                    </div>
                </div>
            </Container>
        </section>
    )
}
