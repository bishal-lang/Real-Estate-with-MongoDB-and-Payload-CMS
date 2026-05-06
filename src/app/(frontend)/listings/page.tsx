import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/Listing/HeroSection'
import ListingsGrid from '@/components/Listing/ListingGrid'
import PaginationBar from '@/components/Listing/PaginationBar'
import { Box, Stack } from '@mantine/core'
import { getListings } from '@/lib/getListings'

export default async function HomePage() {
  const data = await getListings()
  console.log(JSON.stringify(data.docs[0], null, 2))

  return (
    <Box px={{ base: 'md', sm: 'lg', xl: 'xl' }}>
      <Header />

      <Stack ml={60} mr={60}>
        <HeroSection />

        <ListingsGrid listings={data.docs} />

        {/* <PaginationBar
          totalPages={data.totalPages}
          page={page}
        /> */}
      </Stack>
      <br></br>
      <Footer />
    </Box>
  )
}
