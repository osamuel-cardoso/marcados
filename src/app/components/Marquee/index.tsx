import MarqueeComponent from 'react-fast-marquee'

const lonaPhrases = [
    'Estratégia, branding e o business do design c/ andré lona',
    'Pago para pensar',
    'f*da-se o seu portfólio',
    'Aprenda a diagnosticar antes de prescrever',
    'Seu cliente não se importa com o que você sabe.',
    'Estratégia, branding e o business do design c/ andré lona',
    'Pago para pensar',
    'f*da-se o seu portfólio',
    'Aprenda a diagnosticar antes de prescrever',
    'Seu cliente não se importa com o que você sabe.',
    'Estratégia, branding e o business do design c/ andré lona',
    'Pago para pensar',
    'f*da-se o seu portfólio',
    'Aprenda a diagnosticar antes de prescrever',
    'Seu cliente não se importa com o que você sabe.',
]

const subscribeDate = [
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
    'Próxima abertura em junho',
]

export function Marquee() {
    return (
        <>
            <div className="flex gap-4  py-2 bg-brand__gray-100 text-brand__gray-1000">
                <MarqueeComponent
                    loop={0}
                    speed={12}
                >
                    <div className="flex gap-4 uppercase font-bold text-[.9375rem]">
                        {lonaPhrases.map((phrase, index) => (
                            <span key={index}>{phrase}</span>
                        ))}
                    </div>
                </MarqueeComponent>
            </div>
            <div className="flex gap-4 py-2 bg-brand__gray-1000 text-brand__gray-100">
                <MarqueeComponent
                    loop={0}
                    speed={12}
                    direction="right"
                >
                    <div className="flex gap-4 uppercase font-bold text-[.9375rem]">
                        {subscribeDate.map((phrase, index) => (
                            <span key={index}>{phrase}</span>
                        ))}
                    </div>
                </MarqueeComponent>
            </div>
        </>
    )
}
