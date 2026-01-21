This is a [Next.js](https://nextjs.org) project that combines AI-powered coding assistance with video generation capabilities using Claude and Remotion.

## Features

- **AI Coding Agent**: Interactive chat interface powered by Claude for code generation and assistance
- **Video Generator**: Create animated videos using Claude + Remotion with a simple text description
- **Live Preview**: Real-time preview of generated code and videos
- **Multi-Model Support**: Choose from various AI models (GPT-5, Claude 4, Gemini, etc.)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the coding agent.

To access the video generator, navigate to [http://localhost:3000/video-generator](http://localhost:3000/video-generator).

## Video Generator

The video generator uses **Remotion** (React-based video framework) to create animated videos. You can:

1. Describe the video you want in natural language
2. Click "Generate Video" to let Claude create it
3. Preview and download the generated video

### Example Prompts:
- "Create a terminal animation showing a command being typed and executed"
- "Show an announcement text that scales up with smooth animations"
- "Make a video with logos appearing one by one"

### Remotion Studio

To preview and edit Remotion compositions directly:

```bash
npm run remotion:studio
```

This opens the Remotion Studio at [http://localhost:9000](http://localhost:9000) where you can preview compositions in real-time.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
