import Link from 'next/link'

interface DesktopMenuProps {
    items: Option<string>[]
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
    return (
        <ul className="mb-0 flex list-none items-center gap-4">
            {items.map((item) => (
                <li key={item.text} className="text-sm uppercase">
                    <Link href={item.value}>{item.text}</Link>
                </li>
            ))}
        </ul>
    )
}
