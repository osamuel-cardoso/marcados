import Questions from '@/pages/pnac/components/Faq/Index.component'
import Hero from '@/pages/pnac/components/Hero/Hero.component'
import Modules from '@/pages/pnac/components/Modules/Modules.component'
import Pricing from '@/pages/pnac/components/Pricing.component'
import Testimonial from '@/pages/pnac/components/Testimonial/Testimonial.component'

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
