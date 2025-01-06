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
        <section id="oferta" className="bg-zinc-900 py-5 text-zinc-50">
            <div className="container mx-auto grid gap-2.5 px-5 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="mx-auto flex max-w-md flex-col items-center gap-2.5 border-2 border-zinc-700 bg-zinc-800 p-5"
                    >
                        {service.icon}
                        <h3 className="text-xl font-bold uppercase">
                            {service.title}
                        </h3>
                        <p className="text-center text-sm text-zinc-200">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
