import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/views/View/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <hr className="border-brand__gray-900" />
            <main className="text-brand__gray-100 bg-brand__gray-1000">
                {children}
            </main>
            <Footer />
        </>
    )
}
