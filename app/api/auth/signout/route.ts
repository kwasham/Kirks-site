import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST() {
  const { userId, sessionId } = await auth()

  if (!userId || !sessionId) {
    return NextResponse.redirect('/sign-in')
  }

  try {
    const client = await clerkClient()
    await client.sessions.revokeSession(sessionId)
    return NextResponse.redirect(new URL('/sign-in', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'))
  } catch (error) {
    console.error('Sign out error:', error)
    return NextResponse.redirect(new URL('/sign-in', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'))
  }
}
