import { Grid, GridCol } from '@mantine/core'
import ConversationsList from './ConversationsList'
import ChatArea from './ChatArea'
import ContextSidebar from './ContextSidebar'
import { ConversationProvider } from './ConversationContext'

export default function MessagesLayout() {
  return (
    <Grid gap="md">
      <GridCol span={{ base: 12, md: 4, lg: 3 }}>
        <ConversationProvider>
          <ConversationsList />
        </ConversationProvider>
      </GridCol>

      <GridCol span={{ base: 12, md: 8, lg: 6 }}>
        <ConversationProvider>
          <ChatArea />
        </ConversationProvider>
      </GridCol>

      <GridCol span={{ base: 12, lg: 3 }}>
        <ConversationProvider>
          <ContextSidebar />
        </ConversationProvider>
      </GridCol>
    </Grid>
  )
}
