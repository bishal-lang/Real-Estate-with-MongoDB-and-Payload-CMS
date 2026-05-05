import { Stack } from '@mantine/core'
import InquiryCard from './InquiryCard'

type InquiryStatus = 'responded' | 'scheduled' | 'pending'

type Inquiry = {
  title: string
  location: string
  status: InquiryStatus
  date: string
  image: string
}

const data: Inquiry[] = [
  {
    title: 'The Obsidian Penthouse',
    location: 'Mayfair, London',
    status: 'responded',
    date: 'Oct 12, 2023',
    image: '...',
  },
  {
    title: 'Azure Bay Estate',
    location: 'Antibes, France',
    status: 'scheduled',
    date: 'Oct 08, 2023',
    image: '...',
  },
  {
    title: 'The Ironwork Lofts',
    location: 'Tribeca, New York',
    status: 'pending',
    date: 'Oct 05, 2023',
    image: '...',
  },
]

export default function InquiriesList() {
  return (
    <Stack>
      {data.map((item, i) => (
        <InquiryCard key={i} {...item} />
      ))}
    </Stack>
  )
}
