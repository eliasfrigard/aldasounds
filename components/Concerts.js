import { useMemo } from 'react'
import Link from 'next/link'
import Concert from './Concert'
import Title from './Title'
import AnimateIn from './AnimateIn'
import { sortConcerts } from '../utils/sortConcerts'
import concertsData from '../concerts.json'

export default function Concerts({ onlyUpcoming = false, limit }) {
  const { upcoming, previous } = useMemo(() => sortConcerts(concertsData), [])

  const displayedUpcoming = limit ? upcoming.slice(0, limit) : upcoming

  return (
    <div className="container">
      {/* Upcoming Concerts */}
      <div className="flex flex-col items-center">
        <Title title="UPCOMING CONCERTS" className="mb-12 md:mb-16" />

        {upcoming.length === 0 ? (
          <p className="section-subtitle mb-12">No upcoming events at this moment.</p>
        ) : (
          <div className="w-full">
            {displayedUpcoming.map((concert, index) => (
              <Concert
                key={`${concert.id}-${concert.date}`}
                {...concert}
                divider={index < displayedUpcoming.length - 1}
              />
            ))}
          </div>
        )}

        {onlyUpcoming && (
          <AnimateIn className="w-full mt-12">
            <Link
              href="/live"
              className="action-btn block text-center w-full hover:bg-accent"
            >
              See All Concerts
            </Link>
          </AnimateIn>
        )}
      </div>

      {/* Previous Concerts */}
      {!onlyUpcoming && previous.length > 0 && (
        <div className="flex flex-col items-center mt-24">
          <Title title="PREVIOUS SHOWS" className="mb-12 md:mb-16" />
          <div className="w-full">
            {previous.map((concert, index) => (
              <Concert
                key={`${concert.id}-${concert.date}`}
                {...concert}
                divider={index < previous.length - 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
