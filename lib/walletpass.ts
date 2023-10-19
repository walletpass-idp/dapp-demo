/* eslint-disable consistent-return */

'use client'

import { User } from '@prisma/client'

const IDP_ORIGIN = 'https://flood.cash'
const IDP_CONFIG = `${IDP_ORIGIN}/fedcm.json`

const CLIENT_ID = 'http://localhost:3000'

const securefetch = async (path:string, payload = '') => {
  const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  }
  if (payload) {
    // eslint-disable-next-line no-param-reassign
    payload = JSON.stringify({ token: payload })
  }
  const res = await fetch(path, {
    method: 'POST',
    credentials: 'same-origin',
    headers,
    body: payload,
  })
  if (res.status === 200) {
    // Server authentication succeeded
    return res.json()
  }
  // Server authentication failed
  const result = await res.json()
  throw result.error
}

export const loginWalletPass = async (nonce: number): Promise<User | Error> => {
  try {
    const credential = await navigator.credentials.get({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      identity: {
        providers: [{
          configURL: IDP_CONFIG,
          clientId: CLIENT_ID,
          nonce,

        }],
      },
      mediation: 'optional',
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-destructuring
    const token = credential.token
    const { incomingUser } = await securefetch('/verify', token)

    if (incomingUser) {
      const user = incomingUser
      return user
    }
  } catch (err) {
    const verifyAuthenticationError = err as Error
    throw new Error(verifyAuthenticationError.message)
  }
  return new Error('no data')
}

export default loginWalletPass
