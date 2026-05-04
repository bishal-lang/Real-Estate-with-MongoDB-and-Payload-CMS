import HeroSection from '@/components/Contact/HeroSection'
import ContactSection from '@/components/Contact/ContactSection'
import GlobalPresence from '@/components/Contact/GlobalPresence'
import MapSection from '@/components/Contact/MapSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <ContactSection />
      <GlobalPresence />
      <MapSection />
      <Footer />
    </>
  )
}
