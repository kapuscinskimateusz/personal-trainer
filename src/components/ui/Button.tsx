import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="inline-block rounded-sm bg-lime-500 px-5 py-2.5 text-xs font-semibold uppercase text-black transition-colors hover:bg-lime-600">
            {children}
        </button>
    )
}
