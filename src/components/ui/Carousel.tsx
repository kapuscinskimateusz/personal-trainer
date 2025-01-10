'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { ReactElement, useCallback } from 'react'

interface CarouselProps {
    slides: ReactElement[]
}

export default function Carousel({ slides }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay() as any,
    ])

    const handlePrevClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const handleNextClick = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div>
            {/* <div className="mb-2.5 flex justify-end">
                <button onClick={handlePrevClick}>
                    <ChevronLeft />
                </button>
                <button onClick={handleNextClick}>
                    <ChevronRight />
                </button>
            </div> */}

            <div ref={emblaRef} className="overflow-hidden">
                <div className="-ml-4 flex">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-0 max-w-md shrink-0 basis-full pl-4"
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
