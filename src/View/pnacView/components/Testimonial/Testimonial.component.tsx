import { Container } from '@/app/components/Container'
import Slider from './Slider.component'

export default function Testimonial() {
    return (
        <section
            className="py-20 md:py-28 bg-brand__gray-100 overflow-hidden"
            id="feedbacks"
        >
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-2 items-center md:text-center">
                        <h2 className="text-[1.4375rem] md:text-[2rem] font-bold text-brand__gray-1000 uppercase">
                            DESTAQUE-SE EM UM MAR DE MESMICE.
                        </h2>
                        <p className="text-brand__gray-600 max-w-[29.5rem] text-[.9375rem] md:text-[1.0625rem]">
                            Este curso te ensina os conceitos de posicionamento
                            necessários para que você alcance a liderança do seu
                            setor.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 md:gap-8">
                        <Slider />
                        <span className="text-[.8125rem] md:text-[.9375rem] rounded-full  border-[.0938rem] border-solid border-brand__gray-200 px-[.8125rem] py-[.4375rem]">
                            Arraste para o lado 👉
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}
