import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { code, language, title } = await request.json()

    // Generate a unique ID for the shared code
    const id = Math.random().toString(36).substring(2, 15)

    // TODO: Store in a database
    // For now, we'll just return a mock response
    const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/share/${id}`

    return NextResponse.json({
      success: true,
      id,
      shareUrl,
      message: 'Code shared successfully!',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to share code',
      },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json(
      { success: false, error: 'ID is required' },
      { status: 400 }
    )
  }

  // TODO: Fetch from database
  // For now, return a mock response
  return NextResponse.json({
    success: true,
    data: {
      id,
      code: '// Your shared code will appear here',
      language: 'javascript',
      title: 'Shared Code',
    },
  })
}
