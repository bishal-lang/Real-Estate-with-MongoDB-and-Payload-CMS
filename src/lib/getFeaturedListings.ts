export async function getFeaturedListings() {
  const res = await fetch(
    'http://localhost:3000/api/listings?where[featured][equals]=true&depth=2',
    {
      cache: 'no-store',
    },
  )

  if (!res.ok) {
    const text = await res.text()
    console.error(' Featured listings fetch failed:', res.status, text)
    throw new Error('Failed to fetch featured listings')
  }

  return res.json()
}
