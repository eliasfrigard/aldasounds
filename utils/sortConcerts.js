import moment from 'moment'

export function sortConcerts(concerts) {
  const now = new Date()

  const upcoming = concerts
    .filter(c => moment(c.date).isAfter(now))
    .sort((a, b) => moment(a.date).diff(moment(b.date)))

  const previous = concerts
    .filter(c => moment(c.date).isBefore(now))
    .sort((a, b) => moment(b.date).diff(moment(a.date)))

  return { upcoming, previous }
}
