export async function getPropertyById(id: string) {
  const res = await fetch(`/api/properties/${id}?depth=2`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch property')

  return res.json()
}
