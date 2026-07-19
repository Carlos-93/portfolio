import { useEffect, useRef, useState } from 'react';

// Tracks whether the element has entered the viewport (fires once, then stops observing)
export function useInView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    // Users who prefer reduced motion see the content immediately, without animation
    const [inView, setInView] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);

    useEffect(() => {
        const element = ref.current;
        if (!element || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '0px 0px -10% 0px' });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return { ref, inView };
}
