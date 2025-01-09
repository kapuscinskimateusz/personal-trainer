import Image from 'next/image'
import PersonalTrainerImage from '../../../public/personal-trainer.jpg'

export default function AboutMe() {
    return (
        <section
            id="o-mnie"
            className="min-h-screen bg-zinc-950 py-5 text-zinc-50"
        >
            <div className="container flex flex-col gap-5 md:gap-2.5 lg:flex-row-reverse">
                <div className="md:p-2.5">
                    <h2 className="mb-2.5 text-2xl font-bold uppercase">
                        O mnie
                    </h2>
                    <div>
                        <p className="mb-2.5 text-zinc-200">
                            Nazywam się Jan Kowalski i jako trener personalny
                            pomagam ludziom osiągać ich cele zdrowotne i
                            sportowe. Wierzę, że każdy zasługuje na indywidualne
                            podejście, dlatego tworzę spersonalizowane plany
                            treningowe i żywieniowe, które są zarówno skuteczne,
                            jak i realne do wykonania.
                        </p>

                        <div className="mb-2.5">
                            <h3 className="mb-2.5 text-xl font-bold uppercase">
                                Jak pracuję?
                            </h3>
                            <p className="text-zinc-200">
                                Każdą współpracę rozpoczynam od dokładnego
                                wywiadu i analizy Twoich potrzeb. Wspólnie
                                ustalamy cele i tworzymy plan działania.
                                Zapewniam stałe wsparcie i regularne pomiary
                                postępów, dzięki czemu na bieżąco możemy
                                dostosowywać program do Twoich osiągnięć.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2.5 text-xl font-bold uppercase">
                                Kwalifikacje
                            </h3>
                            <ul className="list-inside list-[square] text-zinc-200 marker:text-lime-500">
                                <li>Dyplom Akademii Wychowania Fizycznego</li>
                                <li>Certyfikowany Trener Personalny</li>
                                <li>Specjalista ds. Dietetyki Sportowej</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative ml-auto max-w-xs">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <Image src={PersonalTrainerImage} alt="Personal trainer" />
                </div>
            </div>
        </section>
    )
}
