import { Star } from 'lucide-react'

export type RatingValue = 1 | 2 | 3 | 4 | 5

interface RatingProps {
    value: RatingValue
}

export default function Rating({ value }: RatingProps) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={[
                        'h-4 w-4 stroke-lime-500',
                        value >= index + 1 ? 'fill-lime-500' : '',
                    ].join(' ')}
                />
            ))}
        </div>
    )
}
