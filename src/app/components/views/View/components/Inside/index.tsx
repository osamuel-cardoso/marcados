import { Container } from '@/app/components/Container'
import { Heading } from '@/app/components/Heading'
import { Card } from './components/Card'

import contentPath from '@/app/images/content__path.png'
import creativeCommunity from '@/app/images/creative__community.png'
import weeklyMeet from '@/app/images/weekly__meet.png'

export function Inside() {
    return (
        <section
            className="py-20 md:py-28 bg-brand__gray-100"
            id="community"
        >
            <Container>
                <div className="flex flex-col gap-8">
                    <Heading heading="o que você vai encontrar dentro do marcados?" />

                    <div className="">
                        <Card
                            src={contentPath}
                            heading="Trilhas de aprendizado"
                            content="Assista as aulas de acordo com seu objetivo. Encontre seu nicho, torne-se um melhor estrategista, aprenda a precificar e negociar projetos, domine seu posicionamento e melhore no design. É só definir o objetivo e começar a estudar."
                            index={`(01)`}
                            resume="Descubra trilhas de aprendizado personalizadas."
                        />
                        <Card
                            src={weeklyMeet}
                            heading="Encontros semanais ao vivo"
                            content="Todas as terças-feiras à noite, você terá um encontro ao vivo no Zoom com o Lona para tirar suas dúvidas, conhecer outros membros e aprender sobre branding, estratégia de marca e business do design. Além disso, receba grandes personalidades criativas e aproveite mentorias em grupo."
                            index={`(02)`}
                            resume="Interaja com que está na mesma etapa que você"
                        />
                        <Card
                            src={creativeCommunity}
                            heading="Comunidade viva de criativos"
                            content="Todos os grandes designers conviviam entre si, num ambiente de troca criativa. O Marcados é uma comunidade que aproxima profissionais de todo Brasil e possibilita que os iniciantes aprendam com os experientes. Tire dúvidas, faça networking, comemore as vitórias e aprenda com os desafios."
                            index={`(03)`}
                            resume="Crie um networking sólido à partir da comunidade"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
