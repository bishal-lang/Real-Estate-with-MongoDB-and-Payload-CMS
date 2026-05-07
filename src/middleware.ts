import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('payload-token')
  const pathname = req.nextUrl.pathname

  // -----------------------------
  // Not logged in
  // -----------------------------
  if (!token) {
    // protect dashboard routes
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
  }

  // -----------------------------
  // Decode JWT
  // -----------------------------
  try {
    const payload = JSON.parse(Buffer.from(token.value.split('.')[1], 'base64').toString())

    const role = payload.role

    // -----------------------------
    // USER trying to access AGENT
    // -----------------------------
    if (role === 'user' && pathname.startsWith('/dashboard/agent')) {
      return NextResponse.redirect(new URL('/dashboard/user', req.url))
    }

    // -----------------------------
    // AGENT trying to access USER
    // -----------------------------
    if (role === 'agent' && pathname.startsWith('/dashboard/user')) {
      return NextResponse.redirect(new URL('/dashboard/agent', req.url))
    }

    // -----------------------------
    // Non-admin trying admin
    // -----------------------------
    if (role !== 'admin' && pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // -----------------------------
    // Logged in user opening login/register
    // -----------------------------
    if (pathname === '/login' || pathname === '/register') {
      switch (role) {
        case 'agent':
          return NextResponse.redirect(new URL('/dashboard/agent', req.url))

        case 'admin':
          return NextResponse.redirect(new URL('/admin', req.url))

        default:
          return NextResponse.redirect(new URL('/dashboard/user', req.url))
      }
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}
