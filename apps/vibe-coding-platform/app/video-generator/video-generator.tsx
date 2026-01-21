'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Video, Loader2, Download } from 'lucide-react'
import { toast } from 'sonner'

interface VideoGeneratorProps {
  className?: string
}

export function VideoGenerator({ className }: VideoGeneratorProps) {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a video description')
      return
    }

    setIsGenerating(true)
    setError(null)
    setVideoUrl(null)

    try {
      const response = await fetch('/api/video/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate video')
      }

      const data = await response.json()
      setVideoUrl(data.videoUrl)
      toast.success('Video generated successfully!')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate video'
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (videoUrl) {
      const link = document.createElement('a')
      link.href = videoUrl
      link.download = 'generated-video.mp4'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className={`flex flex-col lg:flex-row gap-4 ${className}`}>
      {/* Input Panel */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            AI Video Generator
          </CardTitle>
          <CardDescription>
            Describe the video you want to create and Claude will generate it using Remotion
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Video Description</label>
            <Textarea
              placeholder="Example: Create a terminal animation showing a command being typed and executed..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[200px] font-mono text-sm"
              disabled={isGenerating}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Example Prompts:</h3>
            <div className="space-y-2">
              <button
                onClick={() =>
                  setPrompt(
                    'Create a terminal animation showing a command being typed: "npx create-video with claude" with output showing success'
                  )
                }
                className="block text-left text-xs text-muted-foreground hover:text-foreground transition-colors p-2 rounded border border-border hover:border-primary w-full"
                disabled={isGenerating}
              >
                Terminal animation with typing effect
              </button>
              <button
                onClick={() =>
                  setPrompt(
                    'Show an announcement text "AI Video Generation" that scales up, then display "Powered by Claude + Remotion"'
                  )
                }
                className="block text-left text-xs text-muted-foreground hover:text-foreground transition-colors p-2 rounded border border-border hover:border-primary w-full"
                disabled={isGenerating}
              >
                Announcement with text animations
              </button>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Video...
              </>
            ) : (
              <>
                <Video className="w-4 h-4 mr-2" />
                Generate Video
              </>
            )}
          </Button>

          {error && (
            <div className="p-3 rounded bg-destructive/10 text-destructive text-sm">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Preview Panel */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Your generated video will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          {isGenerating && (
            <div className="flex items-center justify-center h-[400px] border border-border rounded-lg bg-muted/20">
              <div className="text-center space-y-4">
                <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">
                  Generating your video with Claude...
                </p>
              </div>
            </div>
          )}

          {!isGenerating && !videoUrl && (
            <div className="flex items-center justify-center h-[400px] border border-dashed border-border rounded-lg">
              <div className="text-center space-y-2">
                <Video className="w-12 h-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  No video generated yet
                </p>
              </div>
            </div>
          )}

          {videoUrl && (
            <div className="space-y-4">
              <video
                src={videoUrl}
                controls
                className="w-full rounded-lg border border-border"
                autoPlay
                loop
              />
              <Button onClick={handleDownload} className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Video
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
