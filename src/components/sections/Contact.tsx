import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
    return (
        <section id="kontakt" className="bg-zinc-950 py-6">
            <div className="container">
                <div className="grid grid-cols-2 items-center gap-4">
                    <FadeIn direction="right">
                        <h2>Kontakt</h2>
                        <p>
                            To wspaniale, że chcesz zadbać o swoje zdrowie i
                            formę! Skontaktuj się ze mną przez formularz lub
                            wybierz inną dogodną formę kontaktu. Z przyjemnością
                            odpowiem na Twoje pytania i pomogę Ci osiągnąć
                            wymarzone cele.
                        </p>

                        <div className="flex flex-col items-start gap-4">
                            <a
                                href="tel:123-456-789"
                                className="flex items-center gap-4"
                            >
                                <Phone className="stroke-lime-500" />
                                <span>+48 123 456 789</span>
                            </a>

                            <a
                                href="mailto:kontakt@trener.pl"
                                className="flex items-center gap-4"
                            >
                                <Mail className="stroke-lime-500" />
                                <span>kontakt@trener.pl</span>
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="flex items-center gap-4"
                            >
                                <Facebook className="stroke-lime-500" />
                                <span>Facebook</span>
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="flex items-center gap-4"
                            >
                                <Instagram className="stroke-lime-500" />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" className="card">
                        <ContactForm />
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
