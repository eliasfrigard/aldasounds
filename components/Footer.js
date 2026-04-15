import Link from 'next/link'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from 'react-icons/bs'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/live', label: 'Live' },
  { href: '/contact', label: 'Contact' },
]

const listenLinks = [
  { href: 'https://open.spotify.com/album/6ewLQQEhzrgIvEOXWtlYPV', label: 'Spotify' },
  { href: 'https://aldasounds.bandcamp.com/releases', label: 'Bandcamp' },
  { href: 'https://music.apple.com/fi/album/nine-worlds/1582222096', label: 'Apple Music' },
  { href: 'https://www.amazon.com/Nine-Worlds-Alda/dp/B09D8SXWKT', label: 'Amazon Music' },
]

const socialLinks = [
  { href: 'https://www.facebook.com/aldasounds', icon: BsFacebook, hoverColor: 'hover:text-blue-500' },
  { href: 'https://www.youtube.com/channel/UC1CSzPlVfH7RYlWo-ulYDaw', icon: BsYoutube, hoverColor: 'hover:text-red-500' },
  { href: 'https://www.instagram.com/aldasounds/', icon: BsInstagram, hoverColor: 'hover:text-orange-400' },
  { href: 'https://open.spotify.com/album/6ewLQQEhzrgIvEOXWtlYPV', icon: BsSpotify, hoverColor: 'hover:text-green-500' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-light/80">
      <div className="container px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Site Map */}
          <div>
            <h4 className="text-light font-bold text-lg tracking-wide mb-6">This Site</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="tracking-wide hover:text-light transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Listen */}
          <div>
            <h4 className="text-light font-bold text-lg tracking-wide mb-6">Listen To Our Music</h4>
            <nav className="flex flex-col gap-3">
              {listenLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-wide hover:text-light transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + Copyright */}
          <div>
            <h4 className="text-light font-bold text-lg tracking-wide mb-6 hidden md:block">Social Media</h4>
            <div className="flex gap-5 mb-6">
              {socialLinks.map(({ href, icon: Icon, hoverColor }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-light/60 ${hoverColor} transition-colors`}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
            <p className="text-sm tracking-wide">Made by Elias Frigård</p>
            <p className="text-sm tracking-wide mt-1">Copyright &copy; {new Date().getFullYear()} ALDA Music</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
