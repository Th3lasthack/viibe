'use client'

import { Moon, Sun, Code2 } from 'lucide-react'

interface HeaderProps {
  theme: 'vs-dark' | 'light'
  onThemeChange: (theme: 'vs-dark' | 'light') => void
}

export default function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-viibe-primary to-viibe-secondary p-2 rounded-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Viibe Coder</h1>
            <p className="text-sm text-gray-400">Code Together, Build Better</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onThemeChange(theme === 'vs-dark' ? 'light' : 'vs-dark')}
            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white"
            aria-label="Toggle theme"
          >
            {theme === 'vs-dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-viibe-primary to-viibe-secondary flex items-center justify-center text-white font-semibold">
              V
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
