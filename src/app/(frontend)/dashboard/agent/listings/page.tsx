import AgentListings from '@/components/Dashboard/Agent/AgentListings'
import Filters from '@/components/Dashboard/Agent/Filters'
import { headers } from 'next/headers'

async function getCurrentUser() {
  const headersList = await headers()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/users/me`, {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}

async function getAgentListings(userId: string) {
  const headersList = await headers()

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const url = new URL(`${baseUrl}/api/listings`)
  url.searchParams.set('depth', '2')

  // ✅ THIS is what makes it “personal listings”
  url.searchParams.set('where[agent][equals]', userId)

  const res = await fetch(url.toString(), {
    headers: {
      cookie: headersList.get('cookie') || '',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('❌ listings fetch failed:', res.status, text)
    throw new Error('Failed to fetch listings')
  }

  return res.json()
}

export default async function ListingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  const data = await getAgentListings(user.id)

  const listings = data.docs.map((item: any) => {
    const property = item.property

    const primaryImage =
      item.images?.find((img: any) => img.isPrimary)?.image?.url ||
      item.images?.[0]?.image?.url ||
      '/fallback.jpg'

    const loc = property?.location

    const location = loc
      ? [
          loc.tole,
          loc.ward ? `Ward ${loc.ward}` : null,
          loc.municipality,
          loc.district,
          loc.province,
        ]
          .filter(Boolean)
          .join(', ')
      : 'Unknown location'

    return {
      title: property?.title || 'Untitled Property',
      location,
      price: item.price ? `$${item.price.toLocaleString()}` : 'Price on request',
      image: primaryImage,
      tag: item.featured ? 'Featured' : undefined,
    }
  })

  return (
    <>
      <Filters />
      <AgentListings data={listings} />
    </>
  )
}
