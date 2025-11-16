'use client'

import { useState } from 'react'
import CodeEditor from '@/components/CodeEditor'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Code2, Share2, Save, Play } from 'lucide-react'

export default function Home() {
  const [code, setCode] = useState(`// Welcome to Viibe Coder!
// Start coding and share your work with the community

function hello() {
  console.log("Hello, Viibe!");
}

hello();
`)
  const [language, setLanguage] = useState('javascript')
  const [theme, setTheme] = useState<'vs-dark' | 'light'>('vs-dark')

  const handleShare = () => {
    // TODO: Implement share functionality
    alert('Share functionality coming soon!')
  }

  const handleSave = () => {
    // TODO: Implement save functionality
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `viibe-code.${language === 'javascript' ? 'js' : language}`
    a.click()
  }

  const handleRun = () => {
    // TODO: Implement code execution
    alert('Code execution coming soon!')
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header theme={theme} onThemeChange={setTheme} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          language={language}
          onLanguageChange={setLanguage}
        />

        <main className="flex-1 flex flex-col">
          <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-viibe-primary" />
              <span className="text-white font-medium">main.{language === 'javascript' ? 'js' : language}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleRun}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
              >
                <Play className="w-4 h-4" />
                Run
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-viibe-primary hover:bg-viibe-secondary text-white rounded-md transition"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          <div className="flex-1">
            <CodeEditor
              value={code}
              onChange={setCode}
              language={language}
              theme={theme}
            />
          </div>
        </main>
      </div>
    </div>
  )
}
