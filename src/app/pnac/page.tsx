import Questions from '@/app/components/views/pnacView/components/Faq/Index.component'
import Hero from '@/app/components/views/pnacView/components/Hero/Hero.component'
import Modules from '@/app/components/views/pnacView/components/Modules/Modules.component'
import Pricing from '@/app/components/views/pnacView/components/Pricing.component'
import Testimonial from '@/app/components/views/pnacView/components/Testimonial/Testimonial.component'

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
