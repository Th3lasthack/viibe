'use client'

import { FileCode, FileJson, FileText, Code } from 'lucide-react'

interface SidebarProps {
  language: string
  onLanguageChange: (language: string) => void
}

const languages = [
  { id: 'javascript', name: 'JavaScript', icon: FileCode, color: 'text-yellow-400' },
  { id: 'typescript', name: 'TypeScript', icon: FileCode, color: 'text-blue-400' },
  { id: 'python', name: 'Python', icon: FileCode, color: 'text-green-400' },
  { id: 'html', name: 'HTML', icon: FileText, color: 'text-orange-400' },
  { id: 'css', name: 'CSS', icon: FileText, color: 'text-purple-400' },
  { id: 'json', name: 'JSON', icon: FileJson, color: 'text-gray-400' },
]

export default function Sidebar({ language, onLanguageChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">
          Languages
        </h2>

        <div className="space-y-1">
          {languages.map((lang) => {
            const Icon = lang.icon
            return (
              <button
                key={lang.id}
                onClick={() => onLanguageChange(lang.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  language === lang.id
                    ? 'bg-viibe-primary text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${language === lang.id ? 'text-white' : lang.color}`} />
                <span className="font-medium">{lang.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">
          Features
        </h2>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Syntax Highlighting</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Auto-completion</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Code Formatting</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
