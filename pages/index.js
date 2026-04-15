import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout/Default'
import AnimateIn from '../components/AnimateIn'
import Quotes from '../components/Quotes'
import Concerts from '../components/Concerts'
import Player from '../components/Player'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const splashOpacity = Math.max(0, 1 - scrollY / (typeof window !== 'undefined' ? window.innerHeight * 0.85 : 800))

  return (
    <Layout pageTitle="Home" pageUrl="/">
      {/* Hero / Splash Image */}
      <div
        className="fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat scale-105 -z-10"
        style={{
          backgroundImage: `url(${isMobile ? '/P1110768-sized.webp' : '/P1110881-sized.webp'})`,
          opacity: splashOpacity,
          top: `${Math.min(scrollY * 0.15, 80)}px`,
        }}
      />

      {/* Spacer for splash */}
      <div className="h-screen" />

      {/* Album Section */}
      <section className="relative bg-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-10">
        <div className="container py-16 md:py-24">
          {/* Album Title */}
          <AnimateIn className="text-center mb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-[5px]">NINE WORLDS</h2>
          </AnimateIn>

          {/* Album Description */}
          <AnimateIn className="flex justify-center mb-12">
            <blockquote className="body-text text-center max-w-3xl">
              ALDA&rsquo;s contemporary instrumental music is full of energetic grooves, majestic harmonies,
              improvisation and satisfying melodies. Based on traditional Nordic types of tunes such as polskas,
              schottisches and waltzes, they have created a mind-blowing piece of art for five-string violin,
              soprano saxophone and piano that transcends borders and genres. Hearing them perform will make you
              smile and dance, bring tears to your eyes and might even make you go a bit crazy. Immerse yourself
              in the furiously groovy world of ALDA!
            </blockquote>
          </AnimateIn>

          {/* Album Images */}
          <AnimateIn className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div className="relative aspect-square rounded shadow-lg overflow-hidden">
              <Image
                src="/albumfront-sized.webp"
                alt="Nine Worlds - Front Cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative aspect-square rounded shadow-lg overflow-hidden">
              <Image
                src="/albumback-sized.webp"
                alt="Nine Worlds - Back Cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          {/* Quotes */}
          <Quotes />
        </div>
      </section>

      {/* Parallax Image Divider */}
      <div
        className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/P1110937-sized.webp')" }}
      />

      {/* Concerts Section */}
      <section className="relative bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-10 py-16 md:py-24">
        <Concerts onlyUpcoming limit={5} />
      </section>

      {/* Player */}
      <div className="pb-[70px]">
        <Player />
      </div>
    </Layout>
  )
}
