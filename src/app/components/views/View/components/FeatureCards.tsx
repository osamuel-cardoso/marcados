import { Order } from '../../../Order'
import { Testimonials } from './Hero/components/Testimonials'

export function FeatureCards() {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="md:max-w-[24.25rem]">
                <Order />
            </div>
            <div className="bg-brand__gray-100 w-full flex flex-col gap-8 md:justify-between rounded-xl p-4">
                <div className="w-full flex flex-col-reverse gap-4 md:flex-row justify-between">
                    <h3 className="text-[.9375rem] md:text-[1.0625rem] max-w-[36.125rem] uppercase leading-[135%]">
                        Como visitante do nosso Hall de Entrada, você terá
                        acesso gratuito a 4 aulas exclusivas. Cada aula é uma
                        amostra do que espera você dentro da comunidade.
                    </h3>
                    <span className="text-brand__gray-600 text-[.8125rem] font-medium">
                        Ⓜ️ @2024
                    </span>
                </div>
                <div className="flex justify-between items-end">
                    <Testimonials />
                    <span className="hidden md:block max-w-[14rem] text-[.875rem] uppercase font-display text-right font-medium text-brand__gray-600">
                        Tenha acesso imediato a 4 aulas exclusivas do Marcados
                    </span>
                </div>
            </div>
        </div>
    )
}
