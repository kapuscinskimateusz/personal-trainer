import Image, { StaticImageData } from 'next/image'

import Rating, { RatingValue } from '@/components/ui/Rating'

interface ReviewProps {
    imageSrc: StaticImageData
    name: string
    text: string
    rating: RatingValue
}

export default function Review({ imageSrc, name, text, rating }: ReviewProps) {
    return (
        <div className="flex h-full flex-col gap-2.5 border-2 border-zinc-700 bg-zinc-800 p-5">
            <div className="flex items-center gap-2.5">
                <div className="relative aspect-square w-10 overflow-hidden rounded-full">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>{name}</div>
            </div>

            <p className="flex-grow">{`"${text}"`}</p>

            <Rating value={rating} />
        </div>
    )
}
