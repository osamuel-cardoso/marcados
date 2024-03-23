import { GetPostData } from '@/@types/blog'
import andreLona from '@/app/images/andre__lona.png'
import { apolloClient } from '@/services/apollo'
import { gql } from '@apollo/client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'

async function getPost(slug: string) {
    const { data, loading, error } = await apolloClient.query({
        query: gql`
            query getPost($slug: String!) {
                blogPost(where: { slug: $slug }) {
                    slug
                    subtitle
                    title
                    createdAt
                    content {
                        json
                    }
                }
            }
        `,
        variables: {
            slug,
        },
    })

    return { data, loading, error }
}

export default async function Page({
    params,
}: {
    params: {
        article: string
    }
}) {
    const { data, error, loading } = await getPost(params.article)
    const { blogPost }: GetPostData = data

    return (
        <div className="py-28">
            <div className="w-full max-w-[41.5rem] m-auto px-4">
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-10 pb-6 border-b border-brand__gray-900">
                        <div className="uppercase font-bold text-[.9375rem] flex gap-2 leading-none">
                            <Link href={'/articles'}>
                                <span className="text-brand__gray-600">
                                    Artigos
                                </span>
                            </Link>
                            <span className="align-middle">→</span>
                            <span className="text-brand__gray-100">
                                {blogPost.title}
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[1.3125rem] lg:text-[1.8125rem] uppercase">
                                {blogPost.title}
                            </h1>
                            <p className="text-[1.0625rem] text-brand__gray-500">
                                {blogPost.subtitle}
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <Image
                                    className="rounded-full w-14 h-14 object-cover"
                                    src={andreLona}
                                    alt="Andre Lona"
                                />

                                <div className="uppercase text-[.8125rem] flex flex-col">
                                    <span className=" text-brand__gray-100 font-bold">
                                        Andre Lona
                                    </span>
                                    <span className="text-brand__gray-600 font-medium">
                                        {String(
                                            Intl.DateTimeFormat('pt-br').format(
                                                new Date(blogPost.createdAt)
                                            )
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href={'https://www.youtube.com/@AndreLona'}
                                    target="_blank"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM25.5006 11.8114C26.3268 12.0381 26.9774 12.7061 27.1982 13.5543C27.5994 15.0917 27.5994 18.2994 27.5994 18.2994C27.5994 18.2994 27.5994 21.507 27.1982 23.0445C26.9774 23.8928 26.3268 24.5607 25.5006 24.7875C24.0035 25.1994 17.9994 25.1994 17.9994 25.1994C17.9994 25.1994 11.9954 25.1994 10.4981 24.7875C9.67196 24.5607 9.02134 23.8928 8.80054 23.0445C8.39941 21.507 8.39941 18.2994 8.39941 18.2994C8.39941 18.2994 8.39941 15.0917 8.80054 13.5543C9.02134 12.7061 9.67196 12.0381 10.4981 11.8114C11.9954 11.3994 17.9994 11.3994 17.9994 11.3994C17.9994 11.3994 24.0035 11.3994 25.5006 11.8114Z"
                                            fill="#242424"
                                        />
                                        <path
                                            d="M16.1997 21.6006V15.6006L20.9997 18.6007L16.1997 21.6006Z"
                                            fill="#242424"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    href={
                                        'https://www.instagram.com/oandrelona/'
                                    }
                                    target="_blank"
                                >
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM14.0419 8.45741C15.0659 8.41081 15.3931 8.39941 18.0003 8.39941H17.9973C20.6053 8.39941 20.9313 8.41081 21.9554 8.45741C22.9774 8.50422 23.6754 8.66602 24.2874 8.90342C24.9194 9.14842 25.4534 9.47643 25.9874 10.0104C26.5214 10.544 26.8494 11.0796 27.0954 11.711C27.3314 12.3215 27.4934 13.0191 27.5414 14.0411C27.5874 15.0651 27.5994 15.3923 27.5994 17.9995C27.5994 20.6067 27.5874 20.9331 27.5414 21.9572C27.4934 22.9788 27.3314 23.6766 27.0954 24.2872C26.8494 24.9184 26.5214 25.454 25.9874 25.9876C25.454 26.5216 24.9192 26.8504 24.288 27.0956C23.6772 27.333 22.9788 27.4948 21.9568 27.5416C20.9327 27.5882 20.6065 27.5996 17.9991 27.5996C15.3921 27.5996 15.0651 27.5882 14.0411 27.5416C13.0193 27.4948 12.3215 27.333 11.7106 27.0956C11.0796 26.8504 10.544 26.5216 10.0106 25.9876C9.47683 25.454 9.14882 24.9184 8.90342 24.287C8.66622 23.6766 8.50442 22.979 8.45741 21.957C8.41101 20.9329 8.39941 20.6067 8.39941 17.9995C8.39941 15.3923 8.41141 15.0649 8.45721 14.0409C8.50322 13.0193 8.66522 12.3215 8.90322 11.7108C9.14922 11.0796 9.47723 10.544 10.0112 10.0104C10.5448 9.47663 11.0804 9.14862 11.7118 8.90342C12.3223 8.66602 13.0199 8.50422 14.0419 8.45741Z"
                                            fill="#242424"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.139 10.1311C17.3062 10.1308 17.4861 10.1309 17.6802 10.131L18.0002 10.1311C20.5634 10.1311 20.8672 10.1403 21.8795 10.1863C22.8155 10.2291 23.3235 10.3855 23.6619 10.5169C24.1099 10.6909 24.4293 10.8989 24.7651 11.2349C25.1011 11.5709 25.3091 11.8909 25.4835 12.3389C25.6149 12.6769 25.7715 13.1849 25.8141 14.1209C25.8601 15.1329 25.8701 15.4369 25.8701 17.9989C25.8701 20.561 25.8601 20.865 25.8141 21.877C25.7713 22.813 25.6149 23.321 25.4835 23.659C25.3095 24.107 25.1011 24.426 24.7651 24.7618C24.4291 25.0978 24.1101 25.3058 23.6619 25.4798C23.3239 25.6118 22.8155 25.7678 21.8795 25.8106C20.8674 25.8566 20.5634 25.8666 18.0002 25.8666C15.4368 25.8666 15.133 25.8566 14.121 25.8106C13.185 25.7674 12.677 25.611 12.3384 25.4796C11.8903 25.3056 11.5703 25.0976 11.2343 24.7616C10.8983 24.4256 10.6903 24.1064 10.5159 23.6582C10.3845 23.3202 10.2279 22.8122 10.1853 21.8762C10.1393 20.8642 10.1301 20.5602 10.1301 17.9965C10.1301 15.4329 10.1393 15.1305 10.1853 14.1185C10.2281 13.1825 10.3845 12.6745 10.5159 12.3361C10.6899 11.8881 10.8983 11.5681 11.2343 11.2321C11.5703 10.8961 11.8903 10.6881 12.3384 10.5137C12.6768 10.3817 13.185 10.2257 14.121 10.1827C15.0066 10.1427 15.3498 10.1307 17.139 10.1287V10.1311ZM23.1239 11.7257C22.4879 11.7257 21.9719 12.2411 21.9719 12.8774C21.9719 13.5134 22.4879 14.0294 23.1239 14.0294C23.7599 14.0294 24.276 13.5134 24.276 12.8774C24.276 12.2413 23.7599 11.7257 23.1239 11.7257ZM13.0701 18.0016C13.0701 15.279 15.2774 13.0716 17.9999 13.0715C20.7225 13.0715 22.9294 15.279 22.9294 18.0016C22.9294 20.7242 20.7228 22.9306 18.0001 22.9306C15.2775 22.9306 13.0701 20.7242 13.0701 18.0016Z"
                                            fill="#242424"
                                        />
                                        <path
                                            d="M18.0008 14.8008C19.768 14.8008 21.2008 16.2334 21.2008 18.0008C21.2008 19.768 19.768 21.2008 18.0008 21.2008C16.2334 21.2008 14.8008 19.768 14.8008 18.0008C14.8008 16.2334 16.2334 14.8008 18.0008 14.8008Z"
                                            fill="#242424"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-6 text-brand__gray-300">
                        <RichText
                            content={blogPost.content.json}
                            renderers={{
                                h3: ({ children }) => {
                                    return (
                                        <h3 className="text-[1.3125rem]">
                                            {children}
                                        </h3>
                                    )
                                },
                                h4: ({ children }) => {
                                    return (
                                        <h4 className="text-[1.3125rem]">
                                            {children}
                                        </h4>
                                    )
                                },
                                code_block: ({ children }) => {
                                    return (
                                        <code className="p-5 my-5 bg-brand__gray-950 rounded-xl text-[1.0625rem]">
                                            {children}
                                        </code>
                                    )
                                },
                                blockquote: ({ children }) => {
                                    return (
                                        <blockquote className="p-3 border-brand__gray-900 border-l-[.125rem] flex flex-col gap-3">
                                            {children}
                                        </blockquote>
                                    )
                                },
                                p: ({ children }) => {
                                    return (
                                        <p className="text-[1.0625rem]">
                                            {children}
                                        </p>
                                    )
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
