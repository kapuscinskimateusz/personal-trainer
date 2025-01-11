import { reviews } from '@/data/Reviews'

import Carousel from '@/components/ui/Carousel'
import Review from '@/components/Review'

export default function Reviews() {
    return (
        <section id="opinie">
            <div className="container">
                <h2>Opinie klientów</h2>

                <Carousel
                    slides={reviews.map((review, index) => (
                        <Review key={index} {...review} />
                    ))}
                />
            </div>
        </section>
    )
}
