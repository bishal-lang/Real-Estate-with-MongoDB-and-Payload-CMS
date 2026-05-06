export async function getAgentById(id: string) {
  const res = await fetch(`/api/agents/${id}?depth=2`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch agent')

  return res.json()
}
