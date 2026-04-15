import Image from 'next/image'
import Layout from '../components/Layout/Default'
import Title from '../components/Title'
import AnimateIn from '../components/AnimateIn'
import Quotes from '../components/Quotes'
import bandText from '../band-text.json'

const musicians = [
  {
    name: 'Elias Frigård',
    instrument: 'Soprano- & Baritone Saxophone',
    description:
      'Elias Frigård is a contemporary saxophone player with roots in traditional and modern folk music as well as jazz and improvisation. He was raised in Gävle, Sweden around the traditional violin music of regions Gästrikland and Hälsingland. In 2017 he moved to Helsinki, Finland and has since then ended up playing music with some of Finland\'s most prominent musicians. Elias studied at the Royal College of Music in Stockholm and Sibelius-Academy in Helsinki for some of the best folk and jazz musicians in the world.',
    phone: '+46(0)70-6691374',
    email: 'elias@aldasounds.com',
    website: 'www.eliasfrigard.com',
    image: '/eliasalt.webp',
  },
  {
    name: 'Veera Kuisma',
    instrument: '5-string Violin',
    description:
      'Veera Kuisma is from the new generation of Finnish folk fiddlers. She is currently a master student at the Sibelius-Academy in Helsinki, Finland and has previously studied at Berklee College of Music in Boston, US with a full scholarship. She enjoys playing groovy Nordic tunes and composes music inspired by Celtic, American, and Nordic folk traditions. Veera identifies herself as a group musician, playing with others is the best thing she knows!',
    phone: '+358(0)45-1107182',
    email: 'veera@aldasounds.com',
    website: '',
    image: '/veera-sized.webp',
  },
  {
    name: 'Timo Alakotila',
    instrument: 'Piano & Harmonium',
    description:
      "Timo Alakotila is one of Finland's busiest, most versatile and most in-demand musicians, as composer, arranger, pianist and harmonium player in folk, classical, jazz and pop fields. His career began in 1982 in Kaustinen, Finland as harmonium player and founding member of the fiddle group JPP, who quickly established themselves as the best and most innovative fiddle music group in Finland.",
    phone: '+358(0)50-5116112',
    email: 'timoalakotila@gmail.com',
    website: 'www.timoalakotila.com',
    image: '/timo-sized.webp',
  },
]

export default function About() {
  const { firstParagraph, secondParagraph, thirdParagraph } = bandText[0]

  return (
    <Layout pageTitle="About" pageUrl="/about">
      {/* Hero Image */}
      <div
        className="fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/P1110768-sized.webp')" }}
      />

      {/* Spacer for parallax hero */}
      <div className="h-screen" />

      {/* Main Content */}
      <div className="relative bg-white z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
        {/* Band Intro */}
        <section className="container py-16 md:py-24">
          <AnimateIn className="text-center mb-4">
            <p className="tracking-widest text-sm uppercase">We are</p>
            <h2 className="text-7xl md:text-9xl font-bold tracking-[5px]">ALDA</h2>
            <p className="section-subtitle mt-2">Welcome to our home!</p>
          </AnimateIn>

          {/* Band Photo */}
          <AnimateIn>
            <div
              className="w-full h-[300px] md:h-[600px] bg-cover bg-center rounded mt-12 shadow-lg"
              style={{ backgroundImage: "url('/P1110933-cropped-sized.webp')" }}
            />
          </AnimateIn>

          {/* Band Slogan & Bio */}
          <AnimateIn className="mt-12 md:mt-16">
            <h3 className="font-cursive text-xl md:text-2xl text-center tracking-[5px] uppercase mb-8 md:mb-12">
              Furious Nordic groove, divine harmonies and top-notch melodies.
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="body-text text-justify md:text-center">{firstParagraph}</p>
              <p className="body-text text-justify md:text-center">{secondParagraph}</p>
              <p className="body-text text-justify md:text-center">{thirdParagraph}</p>
            </div>
          </AnimateIn>
        </section>

        {/* Quotes */}
        <section className="container pb-16">
          <Quotes />
        </section>

        {/* Mythology / Name Origin - Wave top */}
        <svg viewBox="0 0 1440 320" className="w-full -mb-1" preserveAspectRatio="none">
          <path
            fill="#042e42"
            d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,229.3C672,245,768,267,864,256C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        <section className="bg-primary py-16 md:py-24 selection:bg-white selection:text-primary">
          <div className="container text-center">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[5px] text-white/30 mb-8 md:mb-12">
                Where does our name come from?
              </h2>
              <p className="body-text text-white max-w-3xl mx-auto">
                An old Northern story shares a tale of the mermaid Alda. With melancholy in her beautiful voice,
                she sang to the fishermen who one after one lost their minds. All except one, Brandur. Despite his
                daily fishing trips, the young, poor, and hard-working fisherman did not give in to Alda&rsquo;s
                alluring voice. Every morning when the sun was still sleeping, Brandur flew along the gloomy bay
                with fire dancing in his boat. Fire attracted the fish, but also Alda, who day by day came closer
                to his boat. One day the moment came when he saw a glimpse of her green eyes and wild hair, and at
                that very moment he jumped from his boat and vanished into the dark water. On silent nights,
                Alda&rsquo;s singing may still be heard in the Breiðafjörður bay (ref. Norður &amp; Co).
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Wave bottom */}
        <svg viewBox="0 0 1440 320" className="w-full -mt-1 rotate-180" preserveAspectRatio="none">
          <path
            fill="#042e42"
            d="M0,160L60,160C120,160,240,160,360,170.7C480,181,600,203,720,192C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Band Members */}
        <section className="container py-16 md:py-24">
          <AnimateIn>
            <h2 className="section-title text-center mb-16 md:mb-20">BAND MEMBERS</h2>
          </AnimateIn>

          <div className="space-y-16 md:space-y-24">
            {musicians.map((musician, index) => (
              <AnimateIn key={musician.name} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image: alternating sides on desktop */}
                <div
                  className={`w-full md:w-1/2 h-[350px] md:h-[500px] bg-cover bg-center rounded shadow-md ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                  style={{ backgroundImage: `url(${musician.image})` }}
                />

                {/* Info */}
                <div className={`w-full md:w-1/2 text-center md:text-left ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-cursive text-3xl md:text-4xl tracking-[5px]">{musician.name}</h3>
                  <p className="font-cursive text-lg tracking-wider opacity-70 mt-1">{musician.instrument}</p>
                  <p className="body-text mt-6">{musician.description}</p>
                  <div className="mt-6 text-sm tracking-wide space-y-1 opacity-80">
                    <p>{musician.phone}</p>
                    <a href={`mailto:${musician.email}`} className="hover:text-accent transition-colors block">
                      {musician.email}
                    </a>
                    {musician.website && (
                      <a
                        href={`https://${musician.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors block"
                      >
                        {musician.website}
                      </a>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
