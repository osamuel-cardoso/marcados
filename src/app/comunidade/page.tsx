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
    return (
        <>
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
