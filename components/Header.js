import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from 'react-icons/bs'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/live', label: 'Live' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.facebook.com/aldasounds', icon: BsFacebook, hoverColor: 'hover:text-blue-500' },
  { href: 'https://www.youtube.com/channel/UC1CSzPlVfH7RYlWo-ulYDaw', icon: BsYoutube, hoverColor: 'hover:text-red-500' },
  { href: 'https://www.instagram.com/aldasounds/', icon: BsInstagram, hoverColor: 'hover:text-orange-400' },
  { href: 'https://open.spotify.com/album/6ewLQQEhzrgIvEOXWtlYPV', icon: BsSpotify, hoverColor: 'hover:text-green-500' },
]

export default function Header() {
  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen)

  const closeMobileNav = () => setMobileNavOpen(false)

  const isActive = (path) => router.pathname === path

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
        <div className="hidden lg:grid grid-cols-3 items-center h-[70px] container px-8">
          {/* Logo */}
          <div>
            <Link href="/" className="text-light text-2xl font-bold tracking-[5px]">
              ALDA
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex gap-2 justify-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`desktopNavLink text-light ${
                  isActive(href) ? 'text-accent border-b-2 border-accent' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5 justify-end items-center">
            {socialLinks.map(({ href, icon: Icon, hoverColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-light/60 ${hoverColor} transition-colors`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden justify-between items-center h-[60px] px-6">
          <Link href="/" className="text-light text-xl font-bold tracking-[5px]">
            ALDA
          </Link>
          <button
            className="burger flex flex-col justify-center items-center"
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
          >
            <span
              className={`burgerLine transition-transform ${
                mobileNavOpen ? '-rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span className={`burgerLine ${mobileNavOpen ? 'opacity-0' : ''}`} />
            <span
              className={`burgerLine transition-transform ${
                mobileNavOpen ? 'rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
          mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map(({ href, label }, index) => (
          <Link
            key={href}
            href={href}
            onClick={closeMobileNav}
            className="mobileNavLink"
            style={{
              animation: mobileNavOpen
                ? `fadeSlideIn 0.3s ease forwards ${index * 0.1 + 0.2}s`
                : 'none',
              opacity: mobileNavOpen ? 0 : 1,
            }}
          >
            {label}
          </Link>
        ))}

        <div className="flex gap-6 mt-8">
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

        <style jsx>{`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </>
  )
}
