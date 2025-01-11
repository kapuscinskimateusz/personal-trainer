import { InputHTMLAttributes } from 'react'

export default function Input({
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="h-10 w-full border-2 border-zinc-700 bg-zinc-800 px-5 text-sm outline-none placeholder:text-zinc-500 hover:border-lime-500"
        />
    )
}
