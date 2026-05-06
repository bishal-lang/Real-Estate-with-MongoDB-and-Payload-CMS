type Media = {
  id: string
  url: string
  alt?: string
}

type PropertyImage = {
  image: Media
  isPrimary?: boolean
}

type Location = {
  id: string
  province?: string
  district?: string
  municipality?: string
}

type Property = {
  id: string
  title?: string
  description?: string
  images?: PropertyImage[]
  location?: Location
}

type PropertiesResponse = {
  docs: Property[]
  totalDocs: number
  page: number
  totalPages: number
}

export async function getProperties(): Promise<PropertiesResponse> {
  const res = await fetch('/api/properties?depth=2', {
    cache: 'no-store', // always fresh (good for dashboards / dynamic data)
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch properties: ${res.status}`)
  }

  const data = await res.json()

  return data
}
