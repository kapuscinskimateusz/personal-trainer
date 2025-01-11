import { Apple, Dumbbell, NotebookPen } from 'lucide-react'

import FadeIn from '@/components/ui/FadeIn'

const services = [
    {
        icon: <Dumbbell className="stroke-lime-500" />,
        title: 'Treningi indywidualne',
        description:
            'Spersonalizowane sesje treningowe dopasowane do Twoich celów i możliwości. Pod moim okiem zbudujesz formę bezpiecznie i efektywnie, korzystając z profesjonalnych wskazówek i ciągłej motywacji.',
    },
    {
        icon: <NotebookPen className="stroke-lime-500" />,
        title: 'Plany treningowe',
        description:
            'Szczegółowo rozpisany program ćwiczeń, który możesz realizować we własnym tempie. Otrzymasz dokładne instrukcje, progresję obciążeń i wskazówki techniczne - wszystko dostosowane do Twojego poziomu zaawansowania i dostępnego sprzętu.',
    },
    {
        icon: <Apple className="stroke-lime-500" />,
        title: 'Plany dietetyczne',
        description:
            'Zbilansowana dieta to podstawa sukcesu. Przygotuję dla Ciebie spersonalizowany jadłospis uwzględniający Twoje preferencje żywieniowe i cele treningowe. Proste przepisy i praktyczne wskazówki ułatwią wprowadzenie zdrowych nawyków.',
    },
]

export default function Offer() {
    return (
        <section id="oferta">
            <FadeIn>
                <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="card flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    )
}
