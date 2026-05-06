import PersonalInfoForm from './PersonalInfoForm'
import ProfileHeader from './ProfileHeader'
import { getCurrentUser } from '@/lib/getCurrentUser'
import { Stack } from '@mantine/core'

export default async function ProfilePage() {
  const user = await getCurrentUser()

  return (
    <Stack>
      <ProfileHeader user={user} />
      <PersonalInfoForm user={user} />
    </Stack>
  )
}
