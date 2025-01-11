'use client'

import { FieldError } from 'react-hook-form'

import { ReactElement, cloneElement, useEffect, useState } from 'react'

interface FormGroupProps {
    label?: string
    error?: FieldError
    children: ReactElement<{ id: string; className: string }>
}

export default function FormGroup({
    label = '',
    error,
    children,
}: FormGroupProps) {
    const [isHydrated, setIsHydrated] = useState(false)

    const id = crypto.randomUUID()

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    if (!isHydrated) return null

    return (
        <div className="mb-4">
            {label && <label htmlFor={id}>test</label>}
            {cloneElement(children, { id })}
            {error && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
        </div>
    )
}
