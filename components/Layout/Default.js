import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({
  children,
  pageTitle = '',
  pageDescription = "ALDA combines furious Nordic groove, divine harmonies, and top-notch melodies.",
  imageUrl = 'https://aldasounds.com/P1110881-sized.webp',
  pageUrl = '/',
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  const title = `${pageTitle} | ALDA`
  const baseUrl = 'https://aldasounds.com'

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={baseUrl + pageUrl} />
        <meta name="description" content={pageDescription} />
        <meta name="author" content="Elias Frigård" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta itemProp="image" content={imageUrl} />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={baseUrl + pageUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main
        style={{ transition: 'opacity 250ms ease-out' }}
        className={`pt-[70px] lg:pt-[70px] min-h-screen ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
