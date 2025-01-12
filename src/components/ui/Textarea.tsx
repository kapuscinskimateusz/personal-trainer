import { HTMLProps } from 'react'

export default function Textarea({ ...props }: HTMLProps<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className="w-full border-2 border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm outline-none transition-colors placeholder:text-zinc-500 hover:border-lime-500 focus:border-lime-500"
        />
    )
}
