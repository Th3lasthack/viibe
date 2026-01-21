import { VideoGenerator } from './video-generator'
import { Header } from '../header'

export default function VideoGeneratorPage() {
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden p-2 space-y-2">
      <Header className="flex items-center w-full" />
      <div className="flex-1 flex w-full min-h-0 overflow-hidden">
        <VideoGenerator className="flex-1 overflow-hidden" />
      </div>
    </div>
  )
}
