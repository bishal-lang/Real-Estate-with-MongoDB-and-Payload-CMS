export async function getAgents() {
  const res = await fetch('/api/agents?depth=2', {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch agents')

  return res.json()
}
