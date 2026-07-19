import type { RevealProps } from '../lib/types';
import { useInView } from '../hooks/useInView';

// Fades and slides its content up once it scrolls into the viewport
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div ref={ref} style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`transition-[opacity,translate] duration-1200 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
}