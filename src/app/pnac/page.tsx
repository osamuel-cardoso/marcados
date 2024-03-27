import { Questions } from '@/pages/pnac/components/Faq/Index.component'
import { Find } from '@/pages/pnac/components/Find.component'
import { Hero } from '@/pages/pnac/components/Hero/Hero.component'
import { Pricing } from '@/pages/pnac/components/Pricing.component'
import { Testimonial } from '@/pages/pnac/components/Testimonial/Testimonial.component'

export default function Page() {
    return (
        <>
            <Hero />
            <Find />
            <Pricing />
            <Testimonial />
            <Questions />
        </>
    )
}
