import Navigation from '@/components/ui/Navigation'
import Header from '@/components/ui/Header'
import Offer from '@/components/sections/Offer'
import AboutMe from '@/components/sections/AboutMe'

export default function Home() {
    return (
        <div>
            <Navigation className="absolute inset-x-0 top-0 z-10" />
            <Header />
            <main>
                <Offer />
                <AboutMe />
            </main>
        </div>
    )
}
