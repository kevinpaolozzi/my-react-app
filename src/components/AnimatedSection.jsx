import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '' }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ease-in ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-25 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
