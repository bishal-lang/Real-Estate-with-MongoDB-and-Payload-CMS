import { Grid, GridCol } from '@mantine/core'
import ConversationsList from './ConversationsList'
import ChatArea from './ChatArea'
import ContextSidebar from './ContextSidebar'

export default function MessagesLayout() {
  return (
    <Grid gap="md">
      <GridCol span={{ base: 12, md: 4, lg: 3 }}>
        <ConversationsList />
      </GridCol>

      <GridCol span={{ base: 12, md: 8, lg: 6 }}>
        <ChatArea />
      </GridCol>

      <GridCol span={{ base: 12, lg: 3 }}>
        <ContextSidebar />
      </GridCol>
    </Grid>
  )
}
