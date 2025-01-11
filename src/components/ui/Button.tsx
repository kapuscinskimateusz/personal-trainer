import { ReactNode } from 'react'

interface ButtonProps {
    variant?: 'primary' | 'outline'
    square?: boolean
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
    children,
    onClick,
}: ButtonProps) {
    const classes = [
        'inline-flex h-10 items-center justify-center border-2 text-xs font-semibold uppercase transition-colors',
        variants[variant],
        square ? 'aspect-square' : 'px-5',
    ].join(' ')

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}
