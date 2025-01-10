import Image from 'next/image'
import PersonalTrainerImage from '../../../public/personal-trainer.jpg'

export default function AboutMe() {
    return (
        <section id="o-mnie" className="bg-zinc-950 py-6">
            <div className="container flex flex-col gap-4 lg:flex-row lg:items-center">
                <div>
                    <div>
                        <h2>O mnie</h2>
                        <p>
                            Nazywam się Jan Kowalski i jako trener personalny
                            pomagam ludziom osiągać ich cele zdrowotne i
                            sportowe. Wierzę, że każdy zasługuje na indywidualne
                            podejście, dlatego tworzę spersonalizowane plany
                            treningowe i żywieniowe, które są zarówno skuteczne,
                            jak i realne do wykonania.
                        </p>
                    </div>

                    <div>
                        <h3>Jak pracuję?</h3>
                        <p>
                            Każdą współpracę rozpoczynam od dokładnego wywiadu i
                            analizy Twoich potrzeb. Wspólnie ustalamy cele i
                            tworzymy plan działania. Zapewniam stałe wsparcie i
                            regularne pomiary postępów, dzięki czemu na bieżąco
                            możemy dostosowywać program do Twoich osiągnięć.
                        </p>
                    </div>

                    <div>
                        <h3>Kwalifikacje</h3>
                        <ul>
                            <li>Dyplom Akademii Wychowania Fizycznego</li>
                            <li>Certyfikowany Trener Personalny</li>
                            <li>Specjalista ds. Dietetyki Sportowej</li>
                        </ul>
                    </div>
                </div>

                <div className="relative mx-auto max-w-sm">
                    <Image src={PersonalTrainerImage} alt="Personal trainer" />
                </div>
            </div>
        </section>
    )
}
