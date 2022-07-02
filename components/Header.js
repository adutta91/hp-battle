import { Header, Avatar, Loader } from '@mantine/core';
import useUser from '../hooks/useUser';

export default function AppHeader () {
  const { user } = useUser();

  return (
    <Header height={60} p="xs" style={{ justifyContent: 'flex-end', display: 'flex' }}>
      {
        user ? (
          <Avatar color="blue" radius="xl">{user.displayName[0].toUpperCase()}</Avatar>
        ) : <Loader />
      }
    </Header>
  )
}
