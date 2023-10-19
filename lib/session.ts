import {
  IronSessionOptions, getIronSession, getServerActionIronSession, IronSessionData,
} from 'iron-session'
import { cookies } from 'next/headers'

const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD || '',
  cookieName: 'walletpass',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

const getSession = async (req: Request, res: Response) => {
  const session = getIronSession<IronSessionData>(req, res, sessionOptions)
  return session
}

declare module 'iron-session' {
  interface IronSessionData {
    userId?: number;
    challenge?: string;
    user?: {
      id: number
      name: string
    }
  }
}

const getServerActionSession = async () => {
  const session = getServerActionIronSession<IronSessionData>(sessionOptions, cookies())
  return session
}

export default getServerActionSession
