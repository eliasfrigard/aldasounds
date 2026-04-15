import Layout from '../components/Layout/Default'
import Concerts from '../components/Concerts'
import Player from '../components/Player'

export default function Live() {
  return (
    <Layout pageTitle="Live" pageUrl="/live">
      <section className="py-16 md:py-24">
        <Concerts />
      </section>

      {/* Decorative image */}
      <div
        className="w-full h-[50vh] md:h-[70vh] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: "url('/P1110954-2-sized.webp')" }}
      />

      <div className="pb-[70px]">
        <Player />
      </div>
    </Layout>
  )
}
