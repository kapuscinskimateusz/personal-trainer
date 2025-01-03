import Image from 'next/image'
import BodybuilderImage from '../../../public/bodybuilder.jpg'

import Button from '@/components/ui/Button'

export default function Header() {
    return (
        <header className="relative h-screen">
            <div className="absolute inset-0 bg-black/50">
                <Image
                    src={BodybuilderImage}
                    alt="Bodybuilder"
                    fill
                    objectFit="cover"
                    className="-z-10"
                />

                <div className="container mx-auto flex h-full flex-col items-center justify-center gap-2.5 px-5 text-center text-white">
                    <h1 className="text-xs font-semibold uppercase">
                        Trener personalny Jan Kowalski
                    </h1>
                    <h2 className="text-3xl font-bold uppercase">
                        Wymarzona forma na wyciągnięcie ręki!
                    </h2>
                    <p>
                        Odkryj potencjał swojego ciała pod okiem
                        profesjonalisty.
                    </p>
                    <Button>Umów się na konsultację</Button>
                </div>
            </div>
        </header>
    )
}
