import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 300 // 5 minutes timeout for video generation

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    console.log('Generating video with prompt:', prompt)

    // Dynamically import Remotion modules only on the server
    const { bundle } = await import('@remotion/bundler')
    const { renderMedia, selectComposition } = await import('@remotion/renderer')

    // Bundle the Remotion project
    const bundleLocation = await bundle({
      entryPoint: path.resolve(process.cwd(), 'remotion/index.ts'),
      webpackOverride: (config) => config,
    })

    console.log('Bundle created at:', bundleLocation)

    // Get composition
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: 'VideoGeneration',
    })

    console.log('Composition selected:', composition.id)

    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'public', 'videos')
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const outputLocation = path.join(outputDir, `video-${timestamp}.mp4`)

    console.log('Rendering video to:', outputLocation)

    // Render the video
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation,
      inputProps: {
        prompt,
      },
    })

    console.log('Video rendered successfully')

    // Return the video URL
    const videoUrl = `/videos/video-${timestamp}.mp4`

    return NextResponse.json({
      success: true,
      videoUrl,
      message: 'Video generated successfully',
    })
  } catch (error) {
    console.error('Error generating video:', error)
    return NextResponse.json(
      {
        error: 'Failed to generate video',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
