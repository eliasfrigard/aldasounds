import AnimateIn from './AnimateIn'

export default function Title({ title, subtitle, className = '' }) {
  return (
    <AnimateIn className={`flex flex-col items-center text-center gap-2 ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </AnimateIn>
  )
}
