import Carousel from '@/components/ui/Carousel'

export default function Opinions() {
    return (
        <section className="bg-zinc-900 py-5 text-zinc-50">
            <div className="container mx-auto px-5">
                <h2 className="mb-2.5 text-2xl font-bold uppercase">
                    Opinie klientów
                </h2>
                <Carousel />
            </div>
        </section>
    )
}
