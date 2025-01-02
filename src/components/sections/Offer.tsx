import { Apple, Dumbbell, NotebookPen } from 'lucide-react'

const services = [
    {
        icon: <Dumbbell className="h-7 w-7 text-lime-500" />,
        title: 'Treningi indywidualne',
        description:
            'Spersonalizowane sesje treningowe dopasowane do Twoich celów i możliwości. Pod moim okiem zbudujesz formę bezpiecznie i efektywnie, korzystając z profesjonalnych wskazówek i ciągłej motywacji.',
    },
    {
        icon: <NotebookPen className="h-7 w-7 text-lime-500" />,
        title: 'Plany treningowe',
        description:
            'Szczegółowo rozpisany program ćwiczeń, który możesz realizować we własnym tempie. Otrzymasz dokładne instrukcje, progresję obciążeń i wskazówki techniczne - wszystko dostosowane do Twojego poziomu zaawansowania i dostępnego sprzętu.',
    },
    {
        icon: <Apple className="h-7 w-7 text-lime-500" />,
        title: 'Plany dietetyczne',
        description:
            'Zbilansowana dieta to podstawa sukcesu. Przygotuję dla Ciebie spersonalizowany jadłospis uwzględniający Twoje preferencje żywieniowe i cele treningowe. Proste przepisy i praktyczne wskazówki ułatwią wprowadzenie zdrowych nawyków.',
    },
]

export default function Offer() {
    return (
        <section
            id="oferta"
            className="min-h-screen bg-zinc-950 py-5 text-zinc-50"
        >
            <div className="max-auto container flex flex-col gap-2.5 px-5">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="flex flex-col gap-2.5 rounded-sm border-2 border-zinc-900 p-5 text-center"
                    >
                        <div className="flex justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold uppercase">
                            {service.title}
                        </h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
