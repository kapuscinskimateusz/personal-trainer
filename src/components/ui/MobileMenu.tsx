'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface MobileMenuProps {
    items: Option<string>[]
}

export default function MobileMenu({ items }: MobileMenuProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const handleShowMenu = () => setIsMenuVisible(true)

    const handleHideMenu = () => setIsMenuVisible(false)

    return (
        <>
            <button onClick={handleShowMenu}>
                <Menu />
            </button>

            {isMenuVisible && (
                <div className="fixed inset-0 bg-black/90">
                    <div className="container absolute inset-x-0 top-0 flex h-16 items-center justify-end">
                        <button onClick={handleHideMenu}>
                            <X />
                        </button>
                    </div>

                    <div className="container flex h-full items-center">
                        <ul className="mb-0 w-full list-none">
                            {items.map((item) => (
                                <li key={item.text} onClick={handleHideMenu}>
                                    <Link
                                        href={item.value}
                                        className="block py-2.5 text-center text-lg font-semibold uppercase"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}
