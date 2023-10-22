/* eslint-disable react/button-has-type */

'use client'

import {
  FormEvent,
  useEffect, useState,
} from 'react'
import Link from 'next/link'
import { registerUser } from '@lib/database'
import { authenticatedUserIdToCookieStorage } from '@lib/cookieActions'
import { loginWalletPass } from '@lib/walletpass'
import { css } from '@styled-system/css'
import { redirect, useRouter } from 'next/navigation'

const Landing = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const getFederatedCredentials = async () => {
    try {
      const user = await loginWalletPass(1234567)
      if (user instanceof Error) {
        throw user
      }

      const localuser = await
      registerUser(
        user.email,
        user.username,
        user.avatar,
      )

      if (localuser instanceof Error) {
        setError(localuser.message ? localuser.message : 'An unknown Login error occurred')
        throw localuser
      }
      authenticatedUserIdToCookieStorage(localuser)

      router.push('/dashboard')
    } catch (err) {
      const loginError = err as Error
    }
  }

  return (
    <button
      onClick={getFederatedCredentials}
      className={css({
        bg: 'blue.500',
        color: 'white',
        py: '2',
        px: '4',
        rounded: 'md',
      })}
    >
      Test WalletPass
    </button>
  )
}

export default Landing
