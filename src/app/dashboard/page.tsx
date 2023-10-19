'use server'

import { getRegisteredUserIdFromCookieStorage } from '@lib/cookieActions'
import Link from 'next/link'
import Image from 'next/image'
import LogoutButton from 'src/components/LogoutButton'
import { redirect } from 'next/navigation'

async function getUserId(): Promise<number | any> {
  return getRegisteredUserIdFromCookieStorage()
}

const Dashboard = async () => {
  const userId = await getUserId()
  if (!userId) {
    redirect('/')
  }
  return (
    <>
      <h1>User Dashboard</h1>
      <span>
        User ID:
        {' '}
        {String(userId)}
      </span>
      <h2>
        <Link href="/">Back To Home Page</Link>
      </h2>
      <LogoutButton />
    </>
  )
}

export default Dashboard
