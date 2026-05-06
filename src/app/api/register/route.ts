import { NextResponse } from 'next/server'
import payload from 'payload'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      type, // 'user' | 'agent'
      name,
      email,
      password,

      // agent-only
      phone,
      licenseNo,
      districts,
      commissionRate,
      position,
      bio,
      officeAddress,
      website,
    } = body

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const user = await payload.create({
      collection: 'users',
      data: {
        name,
        email,
        password,
        role: 'user',
      },
    })

    // ✅ 2. If agent → create agent profile
    let agent = null

    if (type === 'agent') {
      agent = await payload.create({
        collection: 'agents',
        data: {
          user: user.id,
          phone,
          licenseNo,
          districts: districts || [],
          commissionRate,
          position,
          bio,
          officeAddress,
          website,
        },
      })
    }

    return NextResponse.json({
      success: true,
      user,
      agent,
    })
  } catch (err: any) {
    console.error('❌ register failed', err)

    return NextResponse.json({ error: err.message || 'Registration failed' }, { status: 500 })
  }
}
