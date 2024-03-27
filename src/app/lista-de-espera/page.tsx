import { Footer } from '../components/Footer'
import { Marquee } from '../components/Marquee'
import { Classes } from '../components/View/components/Classes'
import { Feedbacks } from '../components/View/components/Feedbacks'
import { Header } from '../components/View/components/Header'
import { Hero } from '../components/View/components/Hero'
import { Pricing } from '../components/View/components/Pricing'

export default function Waitlist() {
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
            <Header anchors />
            <Marquee />
            <Hero />
            <Classes />
            <Pricing />
            <Feedbacks />
            <Footer />
        </>
    )
}
