import type { RevealProps } from '../lib/types';
import { useInView } from '../hooks/useInView';

// Fades and slides its content in from the right once it scrolls into the viewport
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div ref={ref} data-revealed={inView || undefined} style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`transition-[opacity,translate] duration-1500 ease-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
}