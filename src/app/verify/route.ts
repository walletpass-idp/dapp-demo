/* eslint-disable import/prefer-default-export */
import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { token } = await request.json()

  try {
    const {
      payload: {
        sub, email, picture,
      },
    } = await jwtVerify(token, new TextEncoder().encode('walletpass-idp'))
    const incomingUser = {
      email: String(email),
      avatar: String(picture),
      username: 'test',
    }

    return NextResponse.json({ incomingUser }, { status: 200 })
  } catch (err) {
    const registerError = err as Error
    return NextResponse.json({ registerError }, { status: 500 })
  }
}
