import { useState } from 'react'
import Layout from '../components/Layout/Default'
import Title from '../components/Title'
import AnimateIn from '../components/AnimateIn'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Layout pageTitle="Contact" pageUrl="/contact">
      <section className="container py-16 md:py-24">
        <Title title="CONTACT" subtitle="Find contact-, press- and technical information below." className="mb-12" />

        {/* Hero Image */}
        <AnimateIn>
          <div
            className="w-full h-[250px] md:h-[600px] bg-cover bg-center bg-no-repeat rounded shadow-lg mb-16 md:mb-24"
            style={{ backgroundImage: "url('/P1110770-sized-cropped.webp')" }}
          />
        </AnimateIn>

        {/* Contact Info + Form Grid */}
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16">
          {/* Contact Info */}
          <AnimateIn className="w-full md:w-1/2">
            <h2 className="font-cursive text-3xl md:text-4xl tracking-[5px] text-center mb-8">
              Contact Information
            </h2>
            <p className="font-cursive text-lg tracking-wider text-center mb-8 leading-relaxed">
              Feel free to contact us with any questions you may have about our music or regarding booking!
            </p>

            <div className="space-y-8 text-center">
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Band Mail</h3>
                <a href="mailto:info@aldasounds.com" className="tracking-wide hover:text-accent transition-colors">
                  info@aldasounds.com
                </a>
              </div>

              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Elias Frigård</h3>
                <a href="mailto:elias@aldasounds.com" className="tracking-wide hover:text-accent transition-colors block">
                  elias@aldasounds.com
                </a>
                <p className="tracking-wide text-sm mt-1">+46(0)70-6691374</p>
              </div>

              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Veera Kuisma</h3>
                <a href="mailto:veera@aldasounds.com" className="tracking-wide hover:text-accent transition-colors block">
                  veera@aldasounds.com
                </a>
                <p className="tracking-wide text-sm mt-1">+358(0)45-1107182</p>
              </div>

              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-2">Timo Alakotila</h3>
                <a href="mailto:timoalakotila@gmail.com" className="tracking-wide hover:text-accent transition-colors block">
                  timoalakotila@gmail.com
                </a>
                <p className="tracking-wide text-sm mt-1">+358(0)50-5116112</p>
              </div>
            </div>
          </AnimateIn>

          {/* Contact Form */}
          <AnimateIn className="w-full md:w-1/2">
            <h2 className="font-cursive text-3xl md:text-4xl tracking-[5px] text-center mb-8">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 border-b-2 border-primary bg-transparent text-base tracking-wide focus:outline-none focus:border-accent transition-colors px-1"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="h-12 border-b-2 border-primary bg-transparent text-base tracking-wide focus:outline-none focus:border-accent transition-colors px-1"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 border-b-2 border-primary bg-transparent text-base tracking-wide focus:outline-none focus:border-accent transition-colors px-1"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-12 border-b-2 border-primary bg-transparent text-base tracking-wide focus:outline-none focus:border-accent transition-colors px-1"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-2 border-primary rounded p-4 bg-transparent text-base tracking-wide resize-none focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="action-btn text-base tracking-[2px] mt-2">
                SUBMIT
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center font-bold mt-2">
                  Success! Message has been received!
                </p>
              )}
              {status === 'error' && (
                <p className="text-accent text-center font-bold mt-2">
                  Sorry! We could not send your message.
                </p>
              )}
            </form>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
