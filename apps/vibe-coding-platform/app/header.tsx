import { ToggleWelcome } from '@/components/modals/welcome'
import { VercelDashed } from '@/components/icons/vercel-dashed'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Video, Home } from 'lucide-react'

interface Props {
  className?: string
}

export async function Header({ className }: Props) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <VercelDashed className="ml-1 md:ml-2.5 mr-1.5" />
          <span className="hidden md:inline text-sm uppercase font-mono font-bold tracking-tight">
            turkpac
          </span>
        </div>
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden md:inline">Coding Agent</span>
          </Link>
          <Link
            href="/video-generator"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md hover:bg-accent transition-colors"
          >
            <Video className="w-4 h-4" />
            <span className="hidden md:inline">Video Generator</span>
          </Link>
        </nav>
      </div>
      <div className="flex items-center ml-auto space-x-1.5">
        <ToggleWelcome />
      </div>
    </header>
  )
}
