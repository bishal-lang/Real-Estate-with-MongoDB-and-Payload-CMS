'use client'

import { Card, Image, Text, Title, SimpleGrid, Box } from '@mantine/core'

const agents = [
  {
    name: 'Julian Sterling',
    role: 'Senior Partner',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtddUNlc8fCm55zvGaPXTpOtMi',
  },
  {
    name: 'Elena Rossi',
    role: 'Head of Residential',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU91hIwdwBXVcSFixUC3z4AUc',
  },
  {
    name: 'Marcus Thorne',
    role: 'Commercial Strategy',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_XGVUYVeklX1zLqt9B5VC',
  },
]

export default function AgencyAgents() {
  return (
    <Box px="xl" py={100} bg="gray.0">
      <Title mb="xl">World-Class Representation</Title>

      <SimpleGrid cols={{ base: 1, md: 3 }}>
        {agents.map((agent) => (
          <Card key={agent.name} shadow="sm">
            <Card.Section>
              <Image src={agent.img} h={300} alt={agent.name} />
            </Card.Section>

            <Box p="md">
              <Text c="green" size="sm">
                {agent.role}
              </Text>
              <Title order={4}>{agent.name}</Title>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  )
}
