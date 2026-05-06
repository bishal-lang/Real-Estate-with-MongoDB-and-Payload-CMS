'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Conversation = {
  id: string
  name: string
  lastMessage: string
  time: string
  listingTitle?: string
  avatar?: string
  messages: any[]
  listing?: any
  lead?: any
}

type ContextType = {
  conversations: Conversation[]
  selected: Conversation | null
  setSelected: (c: Conversation) => void
}

const ConversationContext = createContext<ContextType | null>(null)

export function useConversations() {
  const ctx = useContext(ConversationContext)
  if (!ctx) throw new Error('ConversationContext missing')
  return ctx
}

export function ConversationProvider({ children }: { children: React.ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selected, setSelected] = useState<Conversation | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agentRes = await fetch('/api/agents/me')
        if (!agentRes.ok) return
        const agent = await agentRes.json()

        const url = new URL('/api/conversations', window.location.origin)
        url.searchParams.set('depth', '2')
        url.searchParams.set('where[agent][equals]', agent.id)

        const res = await fetch(url.toString())
        if (!res.ok) return

        const result = await res.json()

        const mapped = result.docs.map((c: any) => ({
          id: c.id,
          name: c.clientName || 'Unknown',
          lastMessage: c.messages?.[c.messages.length - 1]?.text || '',
          time: c.updatedAt
            ? new Date(c.updatedAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })
            : '',
          listingTitle: c.listing?.property?.title,
          avatar: c.clientAvatar?.url,
          messages: c.messages || [],
          listing: c.listing,
          lead: c.lead,
        }))

        setConversations(mapped)
        setSelected(mapped[0] || null)
      } catch (e) {
        console.error('❌ conversations fetch failed', e)
      }
    }

    fetchData()
  }, [])

  return (
    <ConversationContext.Provider value={{ conversations, selected, setSelected }}>
      {children}
    </ConversationContext.Provider>
  )
}
