'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import { useCallback } from 'react'

const slides = [
    {
        name: 'Maria Nowak',
        text: 'Trener Jan to prawdziwy profesjonalista! Dzięki jego wsparciu i odpowiednio dobranym ćwiczeniom schudłam 8 kg w trzy miesiące i poprawiłam swoją kondycję. Zawsze motywuje, dba o technikę i dostosowuje treningi do moich potrzeb. Polecam każdemu, kto szuka skutecznego wsparcia!',
        rating: 5,
    },
    {
        name: 'Tomasz Kowalski',
        text: 'Z Janem trenuję od ponad roku i muszę przyznać, że to najlepsza decyzja, jaką podjąłem. Dzięki jego wiedzy i zaangażowaniu poprawiłem siłę, zbudowałem mięśnie i odzyskałem zdrowie. Każda sesja to solidna praca, ale i świetna atmosfera!',
        rating: 5,
    },
    {
        name: 'Karolina Wiśniewska',
        text: 'Praca z Janem to czysta przyjemność! Jest nie tylko świetnym trenerem, ale i motywatorem. Jego indywidualne podejście sprawiło, że treningi są efektywne i dostosowane do moich możliwości. Dzięki niemu w końcu polubiłam aktywność fizyczną!',
        rating: 5,
    },
    {
        name: 'Andrzej Zieliński',
        text: 'Jan to trener z ogromną wiedzą i pasją! Pomógł mi wrócić do formy po kontuzji kolana, a jego wskazówki dotyczące diety i regeneracji są nieocenione. Czuć, że zależy mu na każdym podopiecznym. Serdecznie polecam!',
        rating: 5,
    },
    {
        name: 'Monika Jabłońska',
        text: 'Nie sądziłam, że mogę osiągnąć takie efekty w tak krótkim czasie! Dzięki współpracy z Piotrem nie tylko schudłam, ale też poprawiłam swoje samopoczucie. Jego motywacja, cierpliwość i profesjonalizm są na najwyższym poziomie!',
        rating: 5,
    },
]

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const handlePrevClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const handleNextClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div>
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex min-w-0 shrink-0 basis-full flex-col gap-2.5 border-2 border-zinc-700 bg-zinc-800 p-5"
                        >
                            <div className="flex items-center justify-between">
                                <div>Photo</div>
                                <div>{slide.name}</div>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(slide.rating)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className="h-5 w-5 fill-lime-500 stroke-lime-500"
                                    />
                                ))}
                            </div>
                            <p>{`"${slide.text}"`}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handlePrevClick}>
                <ChevronLeft />
            </button>
            <button onClick={handleNextClick}>
                <ChevronRight />
            </button>
        </div>
    )
}
