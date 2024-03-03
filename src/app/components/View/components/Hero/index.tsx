import { Container } from '@/app/components/Container'
import { MarcadosBrand } from '@/app/components/icons/MarcadosBrand'
import { FeatureCards } from '../FeatureCards'
import { Video } from '../Video'

export function Hero() {
    return (
        <section className="bg-brand__blue-700_base py-16 md:py-20">
            <Container>
                <div className="flex flex-col gap-[3rem]">
                    <div className="flex flex-col gap-10">
                        <MarcadosBrand />
                        <div className="flex flex-col gap-3 max-w-[64rem]">
                            <h1 className="text-4xl md:text-7xl text-brand__gray-1000">
                                A COMUNIDADE DOS DESIGNERS DE NEGÓCIOS®
                            </h1>
                            <p className="max-w-[41.5rem] text-brand__blue-100 text-[1.0625rem] md:text-[1.125rem]">
                                O Grupo Marcados é uma comunidade que une o
                                business ao design. Aprenda posicionamento,
                                negociação, prospecção, branding e (muito)
                                mais. Vá além do Photoshop, fuja do mercado
                                tóxico e torne-se um designer de negócios.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Video
                            controls
                            url={
                                'https://player.vimeo.com/video/881866338?app_id=122963&referrer=https%3A%2F%2Fwww.marcados.me%2F'
                            }
                        />

                        <FeatureCards />
                    </div>
                </div>
            </Container>
        </section>
    )
}
