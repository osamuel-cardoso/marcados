import { GetPostsData } from '@/@types/blog'
import { Container } from '@/app/components/Container'
import { apolloClient } from '@/services/apollo'
import { GET_POSTS } from '@/services/queries'
import { BlogPost } from '../components/BlogPost'

async function getPosts() {
    const { data, loading, error } = await apolloClient.query({
        query: GET_POSTS,
    })

    return { data, loading, error }
}

export default async function Page() {
    const { data, loading, error } = await getPosts()
    const { blogPosts }: GetPostsData = data

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
                                        {String(blogPosts.length).padStart(
                                            2,
                                            '0'
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10">
                                {blogPosts.map(
                                    (
                                        {
                                            slug,
                                            subtitle,
                                            title,
                                            thumbnail_post,
                                            createdAt,
                                        },
                                        index
                                    ) => (
                                        <BlogPost
                                            key={index}
                                            title={title}
                                            content={subtitle}
                                            src={thumbnail_post.url}
                                            date={createdAt}
                                            slug={slug}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}
