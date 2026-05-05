import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/Listing/HeroSection'
import ListingsGrid from '@/components/Listing/ListingGrid'
import PaginationBar from '@/components/Listing/PaginationBar'
import { Box, Container } from '@mantine/core'

export default function HomePage() {
  return (
    <Box px={{ base: 'md', sm: 'lg', xl: 'xl' }}>
      <Header />
      <HeroSection />
      <ListingsGrid />
      <PaginationBar />
      <Footer />
    </Box>
  )
}
