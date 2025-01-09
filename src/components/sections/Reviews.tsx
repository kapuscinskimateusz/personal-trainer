import { reviews } from '@/data/Reviews'

import Carousel from '@/components/ui/Carousel'
import Review from '@/components/Review'

export default function Reviews() {
    return (
        <section className="bg-zinc-900 py-5 text-zinc-50">
            <div className="container">
                <h2 className="mb-2.5 text-2xl font-bold uppercase">
                    Opinie klientów
                </h2>

                <Carousel
                    slides={reviews.map((review, index) => (
                        <Review key={index} {...review} />
                    ))}
                />
            </div>
        </section>
    )
}
