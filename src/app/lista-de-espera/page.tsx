import { Footer } from '../components/Footer'
import { Marquee } from '../components/Marquee'
import { Feedbacks } from '../components/views/View/components/Feedbacks'
import { Header } from '../components/views/View/components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing.component'

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
            <Header />
            <Marquee />
            <Hero />
            <Pricing />
            <Feedbacks />
            <Footer />
        </>
    )
}
