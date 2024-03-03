'use client'
import 'keen-slider/keen-slider.min.css'
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import { Card } from './Card'

import douglas from '@/app/images/douglas.png'
import gabriel from '@/app/images/gabriel.png'
import kaliton from '@/app/images/kaliton.png'
import louise from '@/app/images/louise-e-pedro.png'
import paula from '@/app/images/paula.png'
import paulo from '@/app/images/paulo.png'
import rocio from '@/app/images/rocio-e-wagner.png'
import vic from '@/app/images/vic.png'

const feedbacks = [
    {
        name: 'PAULO NOGAROL',
        username: '@PAULONOGAROL',
        profile: paulo,
        resume: 'Fechei meu primeiro grande projeto de estratégia. Um contrato de R$18K. Somente de estratégia, sem nenhuma peça gráfica. Só estratégia. Ah, e sem proposta. Fechado na reunião de diagnóstico, aula 18 rs.',
        content: `Marcados, queria compartilhar aqui uma experiência que me marcou. Segura que vem textão, pega seu café. Na verdade, acredito que a @alennattavares já deve estar na terceira dose 😄
        Um dos piores momentos que um empresário pode passar é a escassez financeira em seu negócio. E vivi estes momentos por vários meses desde 2022.
        Pensei em desistir. Pensei em ir pro mercado.
        Essa escassez pode deixar a gente cego, tomar as decisões erradas, e mexe muito com nosso emocional.
        Cheguei a pensar em largar esse lance de estratégia de lado. Cheguei a pensar em fazer design por design, visual por visual, que "é o que o cliente quer e que me ajuda a dar vazão no escritório".
        Mas, como nosso amado Lona compartilhou uma vez: algumas coisas a gente escolhe, outras somos escolhidos.
        E a estratégia me escolheu. Eu simplesmente não acredito que uma marca sem estratégia funcione. E eu tenho muita dificuldade em vender algo que não acredito.
        (Acho que me enrolei no enredo do texto, mas se você leu até aqui, talvez continue rs)
        Ao olhar para os meus 25 anos de trabalho, sendo 5 deles como designer, em todo este tempo eu fui estrategista. Sempre olhei o todo e como as peças se aglutinam para gerar resultados.
        E hoje trago isso para o design.
        Ao buscar e entender os motivos de escassez financeira do meu estúdio eu vi com clareza que cometi dois erros cruciais:
        Deixei de vender. Agora eu percebo que a gente tem vender todo dia! Eu cometi o erro de deixar de vender quando estava com a conta cheia. Mas, percebo que precisamos vender justamente também enquanto temos clientes pra atender.
        Fiquei pensando demais. Tentei reestruturar o que já estava funcionando. O estúdio estava indo bem com a nossa abordagem estratégica que tínhamos desde o início. Mas inventei de "simplificar". E me perdi. Me desloquei de minha essência. E isso me deixou frágil.
        E tomei as seguintes atitudes, no fim de 2022:
        Passei a vender todo dia. Estou com anúncios pagos. Estou esquentando minha base de clientes constantemente. Participo de grupos de empresários. Converso sobre negócios com outros amigos designers. E tenho outras ações.
        Bati no peito sem medo e assumi que a Itiá é um estúdio de branding e design. E fazemos tudo com estratégia.
        Consegui separar o workshop de estratégia como um entregável muito mais caro que um projeto de identidade visual.
        E então, desde o início do ano, as coisas voltaram a acontecer, voltamos a fechar projetos relevantes.
        E compartilho, no sentido principal de servir como incentivo para os que talvez estejam em momentos frágeis como os que eu me encontrava, o seguinte:
        a. Trabalhei muito, e ainda trabalho, vivo com olheiras e cansado rs, mas percebo que o trabalho devolve!
        b. Fechei meu primeiro grande projeto de estratégia. Um contrato de R$18K. Somente de estratégia, sem nenhuma peça gráfica. Só estratégia. Ah, e sem proposta. Fechado na reunião de diagnóstico, vide aula 18 rs.
        Desculpem o textão. Mas, estive mais ausente que o comum da comunidade. E gostaria de devolver um pouquinho do que aconteceu aqui nos últimos meses.
        Agradeço primeiramente a Deus pelos bons ventos que têm soprado por aqui. E agradeço a cada um que divide um pouco de sua vivência na comunidade. Obrigado ao @AndreLona por nutri-la de forma tão poderosa.
        `,
    },
    {
        name: 'DOUGLAS ANTÔNIO',
        username: '@DOUGLASANTONIO.S',
        profile: douglas,
        resume: 'A cliente ficou absurdamente surpresa, pois fui além da proposta, que era só entregar um logo. Não foi um projeto de mais de 10k, mas sei que ele puxara muitos outros.',
        content: `Estou passando aqui para te agradecer. Acabei de sair de uma apresentação de um projeto de marca e a cliente amou. Muito, se não tudo, do que apliquei nesse projeto foi aprendido no Marcados.
        Ontem, à noite, assisti a aula 2 do curso Branding 101. E posso dizer que essa aula foi perfeita para me ajudar na defesa do projeto, do quanto o design serve a marca, e não o contrário, algo que foi dito na primeira aula.
        Tudo o que usei hoje, desde o storytelling até a linguagem visual foi fruto do que tenho visto na comunidade. Me dediquei ao máximo a não apresentar só um logo, mas um sistema de crenças, que fosse a raiz de todo esse universo.
        Teve de tudo na apresentação, choro, riso, arrepio. A cliente ficou absurdamente surpresa, pois fui além da proposta, que era só entregar um logo. Não foi um projeto de mais de 10k, mas sei que ele puxara muitos outros.
        Mais uma vez, obrigado. Hoje vi o valor do quanto a comunidade, os cursos e seus ensinamentos valem.Você me fez um designer muito... melhor.
        Foi mal pelo textão. Mas, assim que foi finalizada a reunião, eu só pensava em te mandar uma mensagem para agradecer.`,
    },
    {
        name: 'GABRIEL GONÇALVES',
        username: '@GABRIELVAGON',
        profile: gabriel,
        resume: 'Meu primeiro cliente após entrar no mercado já me permitiu sair de projetos de 2k para um projeto de 8k',
        content: `Lona, cara tu não tem noção do que aconteceu, sabe a reunião que eu tinha para hoje, a reunião durou 2 horas e ao final da reunião o cliente me disse que durante a nossa conversa ele mudou completamente a percepção que ele tinha sobre o trabalho de um designer e como eu poderia ajudar ele e o negócio dele, na reunião mesmo eu já passei o valor e ele aceitou na hora, mais apertadas e pix na conta, cara sem mentira, meu primeiro cliente após entrar no marcados já me permitiu sair de projetos de 2k para um projeto de 8k, tu tem noção disso? Eu só tenho a agradecer por tudo, sério, obrigado!
        Eu ainda não tô acreditando no que aconteceu, e a melhor parte é que eu não tive que colocar um milhão de coisas a mais para cobrar o valor que cobrei, vai ser a mesma entrega, o mesmo escopo que eu estava acostumado, só que por um valor 4x maior
        O marcados já se pagou no primeiro cliente após entrar na comunidade.`,
    },
    {
        name: 'LOUISE E PEDRO',
        username: '@DESIGNSTUDIO.BOLD',
        profile: louise,
        resume: 'Saímos de projetos rasos de identidade visual de R$ 2.500 para projetos mais profundos e significativos, cobrando até R$ 10.500 oito meses após a decisão de nos especializarmos. Isso é quatro vezes mais do que cobrávamos antes. No ano passado, faturávamos uma média de R$ 6.000 por mês; hoje, ultrapassamos os R$ 20.000.',
        content: `Meu marido e eu trabalhamos juntos há pouco mais de cinco anos. Por exatos quatro anos e sete meses, fomos generalistas; pegávamos o que aparecesse: identidade visual, posts para Instagram, papelaria, flyers, outdoors — qualquer coisa para qualquer um. O resultado disso, como vocês podem imaginar, era catastrófico. Vivíamos sob estresse constante e lidávamos todos os dias com clientes ruins e mal-educados.
        Já sabíamos que existia a possibilidade de nos especializarmos em um nicho, mas ainda não estávamos convencidos. Foi quando eu entrei para a comunidade Marcados, em dezembro de 2022, após acompanhar o Lona por três meses, que nossa mentalidade começou a mudar.
        Em janeiro, conversei com o Pedro, meu marido, e propus que tentássemos focar no perfil de público que mais gostávamos de atender na época: profissionais da Harmonização Facial que estavam abrindo suas próprias clínicas. Já tínhamos atendido pelo menos oito clientes dessa área, e todas as experiências foram maravilhosas; eles eram respeitosos, valorizavam nosso trabalho e se orgulhavam dos resultados.
        Decidimos tentar e focamos 100%. Consumimos muito conteúdo dentro da comunidade e procurávamos aplicar sempre mais em cada novo projeto.
        Saímos de projetos rasos de identidade visual de R$ 2.500 para projetos mais profundos e significativos, cobrando até R$ 10.500 oito meses após a decisão de nos especializarmos. Isso é quatro vezes mais do que cobrávamos antes. No ano passado, faturávamos uma média de R$ 6.000 por mês; hoje, ultrapassamos os R$ 20.000.
        Precisamos sair do MEI, e agora estamos abrindo uma empresa de pequeno porte para atender nossa realidade atual.
        Só temos a agradecer ao André e à comunidade Marcados. Sem eles, nada disso estaria acontecendo; ainda estaríamos estagnados no generalismo do design.
        Me emociono muito quando penso no quanto ganhei com o Marcados. E não digo isso apenas financeiramente. Fiz amigos incríveis que levarei para toda a vida.
        André, é com lágrimas caindo e um sentimento enorme de gratidão que te digo: obrigada.`,
    },
    {
        name: 'VIC COSTA',
        username: '@AVICCOSTA',
        profile: vic,
        resume: 'Depois disso a procura por projeto se tornou constante, sempre que produzo conteúdo ganho seguidores do nicho de forma orgânica e rolam pedidos de orçamento',
        content: `Ano passado nesse mesmo período eu passava por um pós-burnout porque pegava todo tipo de trabalho gráfico pra fechar as contas. Depois de meses de recuperação eu lembro de estar estudando lettering pra subir meu preço (não riam) e o anúncio do Lona aparecer pra mim.
        Ele falou diretamente comigo, fui uma das primeiras a entrar naquela turma do marcados. E não vou mentir não, aquele papo dele de nichar parecia uma maluquice, ficava tipo “como assim diminuir pra aumentar?” Pois é. Era bem contra intuitivo pra mim também.
        Com 3 meses de comunidade fechei meu primeiro projeto de estratégia pra uma produtora e percebi que gostava de atender essa comunidade.Arrisquei nichar pra filmmakers pq era uma galera que se parece muito comigo. Deu mais que certo, com o tempo fui aperfeiçoando o posicionamento e hoje não só estou no nicho audiovisual como foco somente em filmmakers que querem se tornar produtoras.
        Depois disso a procura por projeto se tornou constante, sempre que produzo conteúdo ganho seguidores do nicho de forma orgânica e rolam pedidos de orçamento… os caras batem no meu perfil e se conectam profundamente com a minha proposta de valor.`,
    },
    {
        name: 'KALITON LEVI',
        username: '@KALITONLEVI',
        profile: kaliton,
        resume: 'Hoje me chamaram novamente para uma reunião, apenas para dizer: PROPOSTA ACEITA. Iniciamos em setembro com as entrevistas e workshops. ✨F*CKING R$ 28.000,00.✨ (o mais alto que eu já fechei em um único projeto de design foi 2.500,00.)',
        content: `Aguardei com expectativa as as lives do lançamento, pois já vinha há alguns dias consumindo o conteúdo do André no youtube e instagram. Assisti todos os dias, e na quarta-feira (05/07) (após a segunda live) aproveitei para assistir a aula 18 e o primeiro episódio do Branding 101. A minha cabeça explodiu às 1h35 da madrugada. Depois desse "coice de cavalo no cérebro" chamado aula 18, eu simplesmente não conseguia dormir. Deitei e fiquei mirabolando.
        No dia seguinte, quinta-feira (06/07), eu tinha uma reunião às 10h30. Aproveitei pra ver a aula 18 mais uma vez e copiei o roteiro de perguntas para o notepad. Cheguei na reunião, e mandei o roteiro... pipipi popopo... finalizamos a reunião com a cabeça fritando (eu e a diretora do projeto), mas sem nenhuma proposta ainda (eu decidi marcar uma nova reunião para apresentar a proposta.)
        No mesmo dia, à noite; “abriram as portas do céu” e entrei para a comunidade. Já fui consumindo tudo que podia. Naquela semana busquei focar no que pudesse contribuir para esse projeto em questão, que fiquei de apresentar a proposta. (Assisti alguma coisa do Branding101, algumas aulas introdutórias, aula 18 de novo e o método NAVE.)
        Eis que a bendita reunião de apresentação da proposta chegou, uma semana depois (13/07). Fui pra ela com alguns slides contendo o passo-a-passo do metodo NAVE  eu alguns outros detalhes de entrega e produção. Cheguei lá, apresentei, me posicionei como estrategista; disse que meu telefone estaria à disposição e que eu seria o estrategista da marca de hoje em diante. "Vocês não terão que se preocupar com mais nada, o especialista sou eu." Ela se surpreendeu. Tanto com o que foi apresentado, quanto com os valores. Disse que iria levar pro financeiro e para a diretoria analisarem.
        Hoje me chamaram novamente para uma reunião, apenas para dizer: PROPOSTA ACEITA. Iniciamos em setembro com as entrevistas e workshops.
        ✨F*CKING R$ 28.000,00.✨
        (o mais alto que eu já fechei em um único projeto de design foi 2.500,00.)
        Obviamente uma proposta nesse nível precisava passar pela aprovação de outros membros da diretoria e financeiro, eu não tinha certeza da aprovação. Mas só o fato de ter conseguido falar VINTE OITO MIL REAIS sem gaguejar (e não desmerecer meu trabalho achando que estava cobrando demais), já valeu a pena.
        Obrigado! 🥲`,
    },
    {
        name: 'ROCÍO & WAGNER',
        username: '@GREENTEA.THINKING',
        profile: rocio,
        resume: 'Fechamos 3 projetos de Estratégia de Marca para infocreators nômades. O posicionamento tá funcionando, o mercado tá respondendo, parcerias estão sendo firmadas com outros colegas. A coisa tá acontecendo! Temos um trabalho sendo construído com intencionalidade e direcionamento.',

        content: `Temos recebido algumas mensagens de colegas da comunidade em relação à decisão dificil de negócio - nichar. E acredito que uma das razões foi a menção que o Lona fez durante as aulas do PNAC, sobre o posicionamento do nosso estúdio.
        Pois bem! Achei pertinente trocar uma ideia com vos sobre isso.
        Até Maio deste ano, estávamos super imersos no nicho canábico.Fizemos projetos nacionais e internacionais. Foi super importante toda a experiência e aprendizados que tivemos durantes os quase 2 anos colaborando com esse mercado.
        Por algumas razões (pessoais e estratégicas de negócio), desde Junho estávamos trabalhando no reposicionamento do studio.
        Passamos por um processo profundo de autoanálise. Foi um período importantíssimo para pensar e refletir sobre o que queríamos de fato fazer a longo prazo.
        Qual era o nicho que tínhamos mais afinidade e interesse? O que era mais saudável para o negócio? Como as nossas melhores habilidades poderiam de fato ajudar um grupo de pessoas específicas? Como poderíamos aproveitar melhor o nosso monopólio pessoal? Como gostaríamos de ser reconhecidos? Etc...
        Diagnóstico e Estratégia de marca já era uma obsessão. Dormíamos e acordávamos falando sobre, estudando o Marcados de ponta a ponta, conhecendo autores, bebendo de outras fontes, construindo relacionamento com outros estrategistas e designers de marca.
        Corta para Agosto
        O nicho estava na nossa cara! Nós já vivíamos nele (as Talvez nem todos saibam, mas nós vivemos como nômades digitais, desde 2019. Já moramos e trabalhamos em mais de 23 países. E muito antes de entramos no mercado canábico, já ajudávamos na comunicação de marca de infoprodutores nômades. Já éramos vistos como a opção óbvia. A gente só precisava lembrar disso.
        Em Setembro mudamos a nossa comunicação, reativamos contatos, nos expomos 1009 - e todavia estamos em processo de lapidar a nossa comunicação e posicionamento.
        Fechamos 3 projetos de Estratégia de Marca para infocreators nômades. O posicionamento tá funcionando, o mercado tá respondendo, parcerias estão sendo firmadas com outros colegas. A coisa tá acontecendo! Temos um trabalho sendo construído com intencionalidade e direcionamento.
        Sobre o mercado canábico? Continuamos atendendo. O nosso nome já é conhecido nessa bolha. Mas agora é um posicionamento interno.
        O que que gostaria de ressaltar com esse papo: não há certezas!Nichar exige prática, paciência e resiliência.
        Não tem sorte envolvida. Tem muita reflexão envolvida, tem teste, tem erros, acertos!
        Posso te dar um conselho? Tome a decisão difícil do seu negócio. Vai valer a pena! Ufa! Sorry pelo textão!`,
    },
    {
        name: 'Paula Araújo',
        username: '@PAULAARAUJO.KW',
        profile: paula,
        resume: 'Atingi pela primeira vez 3x o meu faturamento médio em um mês...',
        content: `Na reunião onde me apresentei você disse que eu parecia o tipo de pessoa que poderia dobrar meu preço e isso me deu coragem.
        Ainda não nichei como havíamos conversado mas estudei aula 8 e 51 apliquei como pude. Atingi pela primeira vez 3x o meu faturamento médio em um mês... ainda não consegui bater os 30k que conversamos aquele dia mas o ticket médio mais que dobrou e acredito que em breve chego lá.
        Obrigada pelas palavras aquele dia e pelas aulas. Ⓜ️`,
    },
]

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
    function updateHeight() {
        slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight + 'px'
    }
    slider.on('created', updateHeight)
    slider.on('slideChanged', updateHeight)
}

export function Slider() {
    const [sliderRef] = useKeenSlider(
        {
            slides: {
                perView: 'auto',
                spacing: 16,
            },
            renderMode: 'performance',
            breakpoints: {
                '(max-width: 480px)': {
                    slides: {
                        perView: 'auto',
                        spacing: 16,
                        origin: 'center',
                    },
                },
            },
        },
        [AdaptiveHeight]
    )

    return (
        <div
            ref={sliderRef}
            className="keen-slider overflow-visible cursor-grab"
            style={{ overflow: 'visible' }}
        >
            {feedbacks.map((feedback, index) => (
                <div
                    key={index}
                    className="keen-slider__slide w-full"
                    style={{ flexShrink: 0, maxWidth: '26.625rem' }}
                >
                    <Card
                        profile={feedback.profile}
                        name={feedback.name}
                        username={feedback.username}
                        resume={feedback.resume}
                        content={feedback.content}
                    />
                </div>
            ))}
        </div>
    )
}
