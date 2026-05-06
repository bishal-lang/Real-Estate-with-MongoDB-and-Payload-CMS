import { Container, Grid, Stack, Title, Text, GridCol } from '@mantine/core'
import InquiryFilters from '@/components/Dashboard/User/MyInquiries/InquiryFilters'
import InquiriesList from '@/components/Dashboard/User/MyInquiries/InquiriesList'
import RightSidebar from '@/components/Dashboard/User/MyInquiries/RightSidebar'

export default function MyInquiriesPage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <div>
          <Title order={2}>My Inquiries</Title>
          <Text c="dimmed" maw={600}>
            Track and manage your conversations with property advisors.
          </Text>
        </div>

        <Grid>
          <GridCol span={8}>
            <Stack>
              <InquiryFilters />
              <InquiriesList />
            </Stack>
          </GridCol>

          {/* <GridCol span={4}>
            <RightSidebar />
          </GridCol> */}
        </Grid>
      </Stack>
    </Container>
  )
}
