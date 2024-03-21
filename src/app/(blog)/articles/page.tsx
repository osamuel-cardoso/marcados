import { Container } from '@/app/components/Container'
import { BlogPost } from '../components/BlogPost'

export default function Page() {
    return (
        <>
            <main>
                <section className="py-28">
                    <Container>
                        <div className="flex flex-col gap-16">
                            <div className="pb-4 border-b border-solid border-brand__gray-900">
                                <div className="flex gap-1">
                                    <h1 className="uppercase text-[1.3125rem] ">
                                        Artigos
                                    </h1>
                                    <span className="align-top text-[.9375rem]">
                                        08
                                    </span>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10">
                                <BlogPost />
                                <BlogPost />
                                <BlogPost />
                                <BlogPost />
                                <BlogPost />
                                <BlogPost />
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}
