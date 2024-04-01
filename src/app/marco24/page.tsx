import { redirect } from 'next/navigation'
import { Footer } from '../components/Footer'
import { Marquee } from '../components/Marquee'
import { Carousel } from '../components/views/View/components/Carousel'
import { Classes } from '../components/views/View/components/Classes'
import { Delivery } from '../components/views/View/components/Delivery'
import { Feedbacks } from '../components/views/View/components/Feedbacks'
import { Header } from '../components/views/View/components/Header'
import { Hero } from '../components/views/View/components/Hero'
import { Inside } from '../components/views/View/components/Inside'
import { Overview } from '../components/views/View/components/Overview'
import { Pricing } from '../components/views/View/components/Pricing'
import { Questions } from '../components/views/View/components/Questions'

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
