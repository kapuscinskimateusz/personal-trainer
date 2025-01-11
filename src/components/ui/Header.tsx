import Image from 'next/image'

import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import BodybuilderImage from '../../../public/bodybuilder.jpg'

export default function Header() {
    return (
        <header className="relative h-screen">
            <div className="absolute inset-0 bg-black/50">
                <Image
                    src={BodybuilderImage}
                    alt="Bodybuilder"
                    fill
                    className="-z-10 object-cover"
                    priority
                />

                <div className="container flex h-full items-center justify-center md:justify-start">
                    <FadeIn
                        direction="down"
                        className="text-center md:text-left"
                    >
                        <h1>Trener personalny Jan Kowalski</h1>
                        <h2>Wymarzona forma na wyciągnięcie ręki!</h2>
                        <p>
                            Odkryj potencjał swojego ciała pod okiem
                            profesjonalisty.
                        </p>
                        <Button>Umów się na konsultację</Button>
                    </FadeIn>
                </div>
            </div>
        </header>
    )
}
