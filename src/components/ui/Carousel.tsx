'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import Image from 'next/image'
import { useCallback } from 'react'

import TomaszKowalskiImage from '../../../public/tomasz-kowalski.jpg'
import MonikaJablonskaImage from '../../../public/monika-jablonska.jpg'
import AndrzejZielinskiImage from '../../../public/andrzej-zielinski.jpg'
import KarolinaWisniewskaImage from '../../../public/karolina-wisniewska.jpg'
import MariaNowakImage from '../../../public/maria-nowak.jpg'

const slides = [
    {
        imageSrc: MariaNowakImage,
        name: 'Maria Nowak',
        text: 'Trener Jan to prawdziwy profesjonalista! Dzięki jego wsparciu i odpowiednio dobranym ćwiczeniom schudłam 8 kg w trzy miesiące i poprawiłam swoją kondycję. Zawsze motywuje, dba o technikę i dostosowuje treningi do moich potrzeb. Polecam każdemu, kto szuka skutecznego wsparcia!',
        rating: 5,
    },
    {
        imageSrc: TomaszKowalskiImage,
        name: 'Tomasz Kowalski',
        text: 'Z Janem trenuję od ponad roku i muszę przyznać, że to najlepsza decyzja, jaką podjąłem. Dzięki jego wiedzy i zaangażowaniu poprawiłem siłę, zbudowałem mięśnie i odzyskałem zdrowie. Każda sesja to solidna praca, ale i świetna atmosfera!',
        rating: 5,
    },
    {
        imageSrc: KarolinaWisniewskaImage,
        name: 'Karolina Wiśniewska',
        text: 'Praca z Janem to czysta przyjemność! Jest nie tylko świetnym trenerem, ale i motywatorem. Jego indywidualne podejście sprawiło, że treningi są efektywne i dostosowane do moich możliwości. Dzięki niemu w końcu polubiłam aktywność fizyczną!',
        rating: 5,
    },
    {
        imageSrc: AndrzejZielinskiImage,
        name: 'Andrzej Zieliński',
        text: 'Jan to trener z ogromną wiedzą i pasją! Pomógł mi wrócić do formy po kontuzji kolana, a jego wskazówki dotyczące diety i regeneracji są nieocenione. Czuć, że zależy mu na każdym podopiecznym. Serdecznie polecam!',
        rating: 5,
    },
    {
        imageSrc: MonikaJablonskaImage,
        name: 'Monika Jabłońska',
        text: 'Treningi z Janem Kowalskim są naprawdę efektywne – profesjonalne podejście, dobrze dopasowane plany treningowe i motywująca atmosfera. Doceniam, że zawsze dba o poprawną technikę ćwiczeń i jest dostępny, gdy mam pytania. Jedyny minus to czasem zbyt szybkie tempo treningu, co sprawia, że trudniej mi nadążyć. Mimo to, polecam każdemu, kto szuka zaangażowanego trenera!',
        rating: 4,
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
            <div className="mb-2.5 flex justify-end gap-2.5">
                <button
                    className="flex aspect-square h-9 items-center justify-center border-2 border-lime-500"
                    onClick={handlePrevClick}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                    className="flex aspect-square h-9 items-center justify-center border-2 border-lime-500"
                    onClick={handleNextClick}
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

            <div ref={emblaRef} className="overflow-hidden">
                <div className="-ml-2.5 flex">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-0 max-w-md shrink-0 basis-full pl-2.5"
                        >
                            <div className="flex flex-col gap-2.5 border-2 border-zinc-700 bg-zinc-800 p-5">
                                <div className="flex items-center justify-between">
                                    <div className="relative aspect-square w-10">
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3.5 before:block before:h-2 before:w-2 before:rounded-full before:bg-lime-500">
                                            {slide.name}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-1.5">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            className={[
                                                'h-5 w-5 stroke-lime-500',
                                                slide.rating >= index + 1
                                                    ? 'fill-lime-500'
                                                    : '',
                                            ].join(' ')}
                                        />
                                    ))}
                                </div>

                                <p>{`"${slide.text}"`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
