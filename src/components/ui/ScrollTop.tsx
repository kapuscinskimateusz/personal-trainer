'use client'

import { ChevronUp } from 'lucide-react'

import { useEffect, useState } from 'react'

import Button from '@/components/ui/Button'

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false)

    const checkScrollPosition = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition)

        return () => {
            window.removeEventListener('scroll', checkScrollPosition)
        }
    }, [])

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div
            className={`fixed bottom-6 right-6 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        >
            <Button variant="outline" square onClick={handleScrollTop}>
                <ChevronUp />
            </Button>
        </div>
    )
}
