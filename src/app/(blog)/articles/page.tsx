import { GetPostsData } from '@/@types/blog'
import { Container } from '@/app/components/Container'
import { apolloClient } from '@/services/apollo'
import { GET_POSTS } from '@/services/queries'
import { PostContainer } from './components/PostContainer'

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
                <section className="py-20 lg:py-28">
                    <Container>
                        <div className="flex flex-col gap-16">
                            <PostContainer posts={blogPosts} />
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}
