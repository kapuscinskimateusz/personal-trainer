'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface FadeInProps {
    direction?: Direction
    distance?: 'sm' | 'md' | 'lg'
    duration?: 'fast' | 'medium' | 'slow'
    className?: string
    children: ReactNode
}

const translateClasses = {
    up: {
        sm: 'translate-y-4',
        md: 'translate-y-8',
        lg: 'translate-y-16',
    },
    down: {
        sm: '-translate-y-4',
        md: '-translate-y-8',
        lg: '-translate-y-16',
    },
    left: {
        sm: 'translate-x-4',
        md: 'translate-x-8',
        lg: 'translate-x-16',
    },
    right: {
        sm: '-translate-x-4',
        md: '-translate-x-8',
        lg: '-translate-x-16',
    },
}

export default function FadeIn({
    direction = 'up',
    distance = 'lg',
    duration = 'slow',
    className = '',
    children,
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        const currentElement = elementRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])

    const getTransitionDuration = () => {
        switch (duration) {
            case 'fast':
                return 'duration-300'
            case 'medium':
                return 'duration-700'
            case 'slow':
                return 'duration-1000'
        }
    }

    const getDirectionClasses = () => {
        if (isVisible) return 'translate-0'

        return translateClasses[direction][distance]
    }

    return (
        <div
            ref={elementRef}
            className={[
                `transition-all ${className}`,
                getTransitionDuration(),
                isVisible ? 'opacity-100' : 'opacity-0',
                getDirectionClasses(),
            ].join(' ')}
        >
            {children}
        </div>
    )
}
