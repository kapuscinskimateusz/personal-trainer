import Link from 'next/link'

interface DesktopMenuProps {
    items: Option<string>[]
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
    return (
        <ul className="flex items-center gap-5">
            {items.map((item) => (
                <li key={item.text}>
                    <Link href={item.value}>{item.text}</Link>
                </li>
            ))}
        </ul>
    )
}
