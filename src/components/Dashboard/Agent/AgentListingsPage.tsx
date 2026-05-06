import AgentListings from './AgentListings'
import { getAgentListings } from '@/lib/getAgentListings'

export default async function AgentListingsPage() {
  const data = await getAgentListings()

  const listings = data.docs.map((item: any) => ({
    title: item.title,
    location: item.location,
    price: `$${item.price?.toLocaleString()}`,
    image: item.image?.url || '/fallback.jpg',
    tag: item.isNew ? 'New' : undefined,
  }))

  return <AgentListings data={listings} />
}
