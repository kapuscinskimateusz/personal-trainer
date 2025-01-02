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
                <Menu className="h-5 w-5" />
            </button>

            {isMenuVisible && (
                <div className="fixed inset-0 flex items-center bg-black/90 text-white">
                    <div className="absolute inset-x-0 top-0 flex h-16 items-center justify-end px-5">
                        <button onClick={handleHideMenu}>
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <ul className="w-full px-5">
                        {items.map((item) => (
                            <li key={item.text} onClick={handleHideMenu}>
                                <Link
                                    href={item.value}
                                    className="block py-2.5 text-center uppercase"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
