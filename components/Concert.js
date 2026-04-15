import moment from 'moment'
import AnimateIn from './AnimateIn'

export default function Concert({ date, location, country, link, description, cancelled, divider }) {
  const day = moment(date).format('DD')
  const month = moment(date).format('MMM')
  const year = moment(date).format('YYYY')

  const handleClick = () => {
    if (link && !cancelled) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <AnimateIn animation="slide-left" className="w-full">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-4 md:py-3">
        {/* Cancelled strike-through */}
        {cancelled && (
          <div className="hidden md:block absolute left-[120px] right-[170px] h-[2px] bg-gradient-to-r from-transparent via-black/50 to-transparent" />
        )}

        {/* Date */}
        <div className={`flex flex-col items-center w-[100px] shrink-0 ${cancelled ? 'opacity-40' : ''}`}>
          <span className="text-4xl md:text-5xl font-bold leading-none">{day}</span>
          <span className="text-lg md:text-xl leading-tight uppercase">{month}</span>
          <span className="text-sm leading-tight">{year}</span>
        </div>

        {/* Location - hidden on mobile, shown in description area */}
        <div className={`hidden md:block w-[200px] text-center ${cancelled ? 'opacity-40' : ''}`}>
          <p className="font-cursive text-lg tracking-wider">
            {location}, {country.toUpperCase()}
          </p>
        </div>

        {/* Description */}
        <div className={`text-center md:w-[250px] ${cancelled ? 'opacity-40' : ''}`}>
          <p className="font-cursive text-lg tracking-wider md:hidden mb-1">
            {location}, {country.toUpperCase()}
          </p>
          <p className="text-sm md:text-base tracking-wide">{description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2 md:mt-0">
          {cancelled ? (
            <span className="text-lg text-gray-400 tracking-wide">CANCELLED</span>
          ) : link ? (
            <button onClick={handleClick} className="action-btn bg-accent hover:bg-primary">
              Go to Event
            </button>
          ) : (
            <button className="action-btn opacity-30 cursor-default" disabled>
              Go to Event
            </button>
          )}
        </div>
      </div>

      {divider && <hr className="border-black/10" />}
    </AnimateIn>
  )
}
