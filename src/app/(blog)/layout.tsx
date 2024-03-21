import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/View/components/Header'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <html className="bg-brand__gray-base text-brand__gray-1000">
            <body className="text-brand__gray-100">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
