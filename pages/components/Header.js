import { Header, Avatar } from '@mantine/core';
import useUser from '../hooks/useUser';
import styles from './Header.module.scss'

export default function AppHeader () {
  const { user } = useUser();

  return (
    <Header height={60} p="xs" style={{ justifyContent: 'flex-end', display: 'flex' }}>
      <Avatar color="blue" radius="xl">{user.displayName[0].toUpperCase()}</Avatar>
    </Header>
  )
}
