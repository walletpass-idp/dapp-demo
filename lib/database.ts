'use server'

import { User, Credential } from '@prisma/client'
import prisma from '@lib/prisma'

export const registerUser = async (
  email: string,
  username: string,
  avatar: string,
): Promise<User | Error> => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!existingUser) {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        avatar,
      },
    })

    return user
  }
  return existingUser
}

export async function getUserFromEmail(email: string): Promise<User | Error> {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!existingUser) {
    throw new Error('User with this email does not exist')
  }
  return existingUser
}

export async function getCredentialsOfUser(user: User): Promise<Credential[] | Error> {
  try {
    const userId = user.id
    const credentials = await prisma.credential.findMany({
      where: {
        userId,
      },
    })
    return credentials
  } catch (error) {
    console.error('Error fetching credentials:', error)
    throw error
  }
}

export async function updateCredentialSignCount(
  credentialIdToUpdate: string,
  newSignCount: number,
) {
  try {
    const updatedCredential = await prisma.credential.update({
      where: { externalId: credentialIdToUpdate },
      data: { signCount: newSignCount },
    })
  } catch (error) {
    console.error('Error updating Credential:', error)
  }
}
