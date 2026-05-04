import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/Listing/HeroSection'
import ListingsGrid from '@/components/Listing/ListingGrid'
import PaginationBar from '@/components/Listing/PaginationBar'
import { Container } from '@mantine/core'

export default function HomePage() {
  return (
    <Container size="xl">
      <Header />
      <HeroSection />
      <ListingsGrid />
      <PaginationBar />
      <Footer />
    </Container>
  )
}
