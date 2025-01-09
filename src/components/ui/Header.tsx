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
                    className="-z-10 object-cover"
                    priority
                />

                <div className="container flex h-full flex-col items-center justify-center gap-2.5 text-center">
                    <h1 className="text-xs font-semibold uppercase text-lime-500">
                        Trener personalny Jan Kowalski
                    </h1>
                    <h2 className="text-3xl font-bold uppercase text-zinc-50">
                        Wymarzona forma na wyciągnięcie ręki!
                    </h2>
                    <p className="text-zinc-200">
                        Odkryj potencjał swojego ciała pod okiem
                        profesjonalisty.
                    </p>
                    <Button>Umów się na konsultację</Button>
                </div>
            </div>
        </header>
    )
}
