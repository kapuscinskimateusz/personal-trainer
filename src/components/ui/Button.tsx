import Link from 'next/link'

import { ReactNode } from 'react'

interface ButtonProps {
    variant?: 'primary' | 'outline'
    square?: boolean
    href?: string
    children: ReactNode
    onClick?: () => void
}

const variants = {
    primary:
        'border-lime-500 bg-lime-500 text-black hover:border-lime-600 hover:bg-lime-600',
    outline: 'border-lime-500 hover:border-lime-600',
}

export default function Button({
    variant = 'primary',
    square,
    href = '',
    children,
    onClick,
}: ButtonProps) {
    const classes = [
        'inline-flex h-10 items-center justify-center border-2 text-xs font-semibold uppercase transition-colors',
        variants[variant],
        square ? 'aspect-square' : 'px-5',
    ].join(' ')

    return href ? (
        <Link href={href} className={classes}>
            {children}
        </Link>
    ) : (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}
