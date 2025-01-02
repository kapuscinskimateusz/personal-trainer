import Link from 'next/link'

import MobileMenu from '@/components/ui/MobileMenu'
import DesktopMenu from '@/components/ui/DesktopMenu'

interface NavigationProps {
    className?: string
}

const menuItems: Option<string>[] = [
    { text: 'O mnie', value: '#o-mnie' },
    { text: 'Oferta', value: '#oferta' },
    { text: 'Kontakt', value: '#kontakt' },
]

export default function Navigation({ className = '' }: NavigationProps) {
    const navClasses = `h-16 text-white ${className}`

    return (
        <nav className={navClasses}>
            <div className="container mx-auto flex h-full items-center justify-between px-5">
                <Link
                    href="/"
                    className="text-center text-xs font-semibold uppercase"
                >
                    <div>JK</div>
                    <div>Jan Kowalski</div>
                </Link>

                <div className="flex md:hidden">
                    <MobileMenu items={menuItems} />
                </div>
                <div className="hidden md:flex">
                    <DesktopMenu items={menuItems} />
                </div>
            </div>
        </nav>
    )
}
