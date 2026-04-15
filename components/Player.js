import { useState, useRef, useEffect } from 'react'
import { BsPlayFill, BsPauseFill, BsSkipStartFill, BsSkipEndFill, BsVolumeUpFill, BsVolumeMuteFill, BsChevronUp, BsChevronDown, BsX } from 'react-icons/bs'

const songList = [
  { title: 'Fen-Fire Polska', link: '/music/Fen-Fire Polska.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Elias Frigård', length: '5:25' },
  { title: '848', link: '/music/848.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '3:50' },
  { title: 'Ajastaika', link: '/music/Ajastaika.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '5:20' },
  { title: 'Bee Reel', link: '/music/Bee Reel.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '2:21' },
  { title: 'Nine Worlds', link: '/music/Nine Worlds.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Elias Frigård', length: '3:35' },
  { title: 'Polska In Between', link: '/music/Polska In Between.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '5:21' },
  { title: 'Moment Before', link: '/music/Moment Before.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '4:54' },
  { title: 'Joulukoti', link: '/music/Joulukoti.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '4:37' },
  { title: 'Jonk Jonas', link: '/music/Jonk Jonas.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Trad.', length: '3:35' },
  { title: 'Our Side of the Mountain', link: '/music/Our Side of the Mountain.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Jeremy Kittel', length: '3:45' },
  { title: 'Clarity', link: '/music/Clarity.mp3', artist: 'ALDA', album: 'Nine Worlds', composer: 'Veera Kuisma', length: '4:30' },
]

export default function Player() {
  const [visible, setVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const [listOpen, setListOpen] = useState(false)
  const audioRef = useRef(null)

  const currentSong = songList[currentIndex]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const play = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }

  const pause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  const next = () => {
    const nextIndex = (currentIndex + 1) % songList.length
    setCurrentIndex(nextIndex)
    setIsPlaying(true)
  }

  const prev = () => {
    const prevIndex = (currentIndex - 1 + songList.length) % songList.length
    setCurrentIndex(prevIndex)
    setIsPlaying(true)
  }

  const changeTrack = (index) => {
    setCurrentIndex(index)
    setIsPlaying(true)
  }

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.load()
      audioRef.current.play()
    }
  }, [currentIndex])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current
      setProgress(duration ? (currentTime / duration) * 100 : 0)
    }
  }

  const setAudioProgress = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    if (audioRef.current) {
      audioRef.current.currentTime = (clickX / width) * audioRef.current.duration
    }
  }

  if (!visible) return null

  return (
    <>
      {/* Playlist Panel */}
      {listOpen && (
        <div className="fixed bottom-[70px] left-0 w-full bg-primary text-light z-50 p-6 md:px-12 shadow-2xl max-h-[60vh] overflow-y-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="font-cursive text-lg tracking-wider py-3 px-2">#</th>
                <th className="font-cursive text-lg tracking-wider py-3 px-2">Title</th>
                <th className="font-cursive text-lg tracking-wider py-3 px-2 hidden md:table-cell">Album</th>
                <th className="font-cursive text-lg tracking-wider py-3 px-2 hidden md:table-cell">Composer</th>
                <th className="font-cursive text-lg tracking-wider py-3 px-2 hidden sm:table-cell">Length</th>
              </tr>
            </thead>
            <tbody>
              {songList.map((song, index) => (
                <tr
                  key={index}
                  onClick={() => changeTrack(index)}
                  className={`cursor-pointer hover:bg-primary-700 transition-colors border-b border-white/5 ${
                    index === currentIndex ? 'bg-primary-700' : ''
                  }`}
                >
                  <td className="py-3 px-2">{index + 1}</td>
                  <td className="py-3 px-2 tracking-wide">{song.title}</td>
                  <td className="py-3 px-2 hidden md:table-cell">{song.album}</td>
                  <td className="py-3 px-2 hidden md:table-cell">{song.composer}</td>
                  <td className="py-3 px-2 hidden sm:table-cell">{song.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Player Bar */}
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-primary z-50 flex items-center px-4 md:px-12 shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        {/* Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={prev} className="text-light text-xl p-2 hover:text-accent transition-colors" aria-label="Previous">
            <BsSkipStartFill />
          </button>
          {isPlaying ? (
            <button onClick={pause} className="text-light text-3xl p-2 hover:text-accent transition-colors" aria-label="Pause">
              <BsPauseFill />
            </button>
          ) : (
            <button onClick={play} className="text-light text-3xl p-2 hover:text-accent transition-colors" aria-label="Play">
              <BsPlayFill />
            </button>
          )}
          <button onClick={next} className="text-light text-xl p-2 hover:text-accent transition-colors" aria-label="Next">
            <BsSkipEndFill />
          </button>
        </div>

        {/* Song Info & Progress */}
        <div className="flex-1 mx-4 md:mx-8 hidden sm:block">
          <p className="text-light text-sm text-center tracking-wide mb-1 truncate">{currentSong.title}</p>
          <div className="bg-light/30 rounded-full h-1.5 cursor-pointer" onClick={setAudioProgress}>
            <div
              className="bg-accent rounded-full h-full transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Volume + Window Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-2 group">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-20 accent-accent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <button
              onClick={() => setVolume(volume > 0 ? 0 : 80)}
              className="text-light text-xl hover:text-accent transition-colors"
              aria-label="Toggle mute"
            >
              {volume > 0 ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
            </button>
          </div>

          <button
            onClick={() => setListOpen(!listOpen)}
            className="text-light text-xl p-2 hover:text-accent transition-colors"
            aria-label="Toggle playlist"
          >
            {listOpen ? <BsChevronDown /> : <BsChevronUp />}
          </button>
          <button
            onClick={() => { pause(); setVisible(false) }}
            className="text-light text-xl p-2 hover:text-accent transition-colors"
            aria-label="Close player"
          >
            <BsX />
          </button>
        </div>

        <audio
          ref={audioRef}
          src={currentSong.link}
          onTimeUpdate={handleTimeUpdate}
          onEnded={next}
        />
      </div>
    </>
  )
}
