import { RatingValue } from '@/components/ui/Rating'

import MariaNowakImage from '../../public/maria-nowak.jpg'
import TomaszKowalskiImage from '../../public/tomasz-kowalski.jpg'
import KarolinaWisniewskaImage from '../../public/karolina-wisniewska.jpg'
import AndrzejZielinskiImage from '../../public/andrzej-zielinski.jpg'
import MonikaJablonskaImage from '../../public/monika-jablonska.jpg'

export const reviews = [
    {
        imageSrc: MariaNowakImage,
        name: 'Maria Nowak',
        text: 'Trener Jan to prawdziwy profesjonalista! Dzięki jego wsparciu i odpowiednio dobranym ćwiczeniom schudłam 8 kg w trzy miesiące i poprawiłam swoją kondycję. Zawsze motywuje, dba o technikę i dostosowuje treningi do moich potrzeb. Polecam każdemu, kto szuka skutecznego wsparcia!',
        rating: 5 as RatingValue,
    },
    {
        imageSrc: TomaszKowalskiImage,
        name: 'Tomasz Kowalski',
        text: 'Z Janem trenuję od ponad roku i muszę przyznać, że to najlepsza decyzja, jaką podjąłem. Dzięki jego wiedzy i zaangażowaniu poprawiłem siłę, zbudowałem mięśnie i odzyskałem zdrowie. Każda sesja to solidna praca, ale i świetna atmosfera!',
        rating: 5 as RatingValue,
    },
    {
        imageSrc: KarolinaWisniewskaImage,
        name: 'Karolina Wiśniewska',
        text: 'Praca z Janem to czysta przyjemność! Jest nie tylko świetnym trenerem, ale i motywatorem. Jego indywidualne podejście sprawiło, że treningi są efektywne i dostosowane do moich możliwości. Dzięki niemu w końcu polubiłam aktywność fizyczną!',
        rating: 5 as RatingValue,
    },
    {
        imageSrc: AndrzejZielinskiImage,
        name: 'Andrzej Zieliński',
        text: 'Jan to trener z ogromną wiedzą i pasją! Pomógł mi wrócić do formy po kontuzji kolana, a jego wskazówki dotyczące diety i regeneracji są nieocenione. Czuć, że zależy mu na każdym podopiecznym. Serdecznie polecam!',
        rating: 5 as RatingValue,
    },
    {
        imageSrc: MonikaJablonskaImage,
        name: 'Monika Jabłońska',
        text: 'Treningi z Janem Kowalskim są naprawdę efektywne - profesjonalne podejście, dobrze dopasowane plany treningowe i motywująca atmosfera. Doceniam, że zawsze dba o poprawną technikę ćwiczeń i jest dostępny, gdy mam pytania. Jedyny minus to czasem zbyt szybkie tempo treningu, co sprawia, że trudniej mi nadążyć. Mimo to, polecam każdemu, kto szuka zaangażowanego trenera!',
        rating: 4 as RatingValue,
    },
]
