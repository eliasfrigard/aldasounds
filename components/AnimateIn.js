import { useInView } from 'react-intersection-observer'

export default function AnimateIn({
  children,
  className = '',
  threshold = 0.15,
  triggerOnce = true,
  animation = 'fade',
  delay = 0,
}) {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  const baseClasses = 'transition-all duration-700 ease-out'

  const animationClasses = () => {
    switch (animation) {
      case 'slide-up':
        return inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      case 'slide-left':
        return inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      default:
        return inView ? 'opacity-100' : 'opacity-0'
    }
  }

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${animationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
