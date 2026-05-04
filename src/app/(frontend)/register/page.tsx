'use client'

import { Grid, GridCol, Container } from '@mantine/core'
import RegisterHero from '@/components/Auth/RegisterHero'
import RegisterForm from '@/components/Auth/RegisterForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  return (
    <>
      <Header />
      <Grid gap={0} mih="100vh">
        {/* Left Hero */}
        <GridCol span={{ base: 0, lg: 6 }}>
          <RegisterHero />
        </GridCol>

        {/* Right Form */}
        <GridCol span={{ base: 12, lg: 6 }}>
          <Container size="sm" py="xl" h="100%">
            <RegisterForm />
          </Container>
        </GridCol>
      </Grid>
      <Footer />
    </>
  )
}
