import { Stack } from '@mantine/core'
import InquiryCard from './InquiryCard'
import { getInquiries } from '@/lib/getInquiries'

type InquiryStatus = 'responded' | 'scheduled' | 'pending'

type Inquiry = {
  title: string
  location: string
  status: InquiryStatus
  date: string
  image: string
}

export default async function InquiriesList() {
  const data = await getInquiries()

  const inquiries: Inquiry[] = data.docs.map((item: any) => {
    const listing = item.listing

    return {
      title: listing?.title || 'Untitled',
      location: listing?.location || 'Unknown',
      status: item.status,
      date: new Date(item.createdAt).toLocaleDateString(),
      image: listing?.image?.url || '/fallback.jpg',
    }
  })

  return (
    <Stack>
      {inquiries.map((item, i) => (
        <InquiryCard key={i} {...item} />
      ))}
    </Stack>
  )
}
