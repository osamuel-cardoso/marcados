import { redirect } from 'next/navigation'
import { Footer } from '../components/Footer'
import { Marquee } from '../components/Marquee'
import { Carousel } from '../components/View/components/Carousel'
import { Classes } from '../components/View/components/Classes'
import { Delivery } from '../components/View/components/Delivery'
import { Feedbacks } from '../components/View/components/Feedbacks'
import { Header } from '../components/View/components/Header'
import { Hero } from '../components/View/components/Hero'
import { Inside } from '../components/View/components/Inside'
import { Overview } from '../components/View/components/Overview'
import { Pricing } from '../components/View/components/Pricing'
import { Questions } from '../components/View/components/Questions'

export default function Page() {
    redirect('/lista-de-espera')

    return (
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-MFXQDVC"
                    height="0"
                    width="0"
                    style={{
                        display: 'none',
                        visibility: 'hidden',
                    }}
                ></iframe>
            </noscript>
            <Header />
            <Marquee />
            <Hero />
            <Inside />
            <Classes />
            <Carousel />
            <Delivery />
            <Overview />
            <Pricing />
            <Feedbacks />
            <Questions />
            <Footer />
        </>
    )
}
