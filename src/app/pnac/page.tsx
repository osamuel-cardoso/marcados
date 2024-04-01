import Questions from '@/View/pnacView/components/Faq/Index.component'
import Hero from '@/View/pnacView/components/Hero/Hero.component'
import Modules from '@/View/pnacView/components/Modules/Modules.component'
import Pricing from '@/View/pnacView/components/Pricing.component'
import Testimonial from '@/View/pnacView/components/Testimonial/Testimonial.component'

export default async function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <>
            <Hero />
            <Modules />
            <Pricing />
            <Testimonial />
            <Questions />
        </>
    )
}
