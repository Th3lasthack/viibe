---
name: Viibe Coder
slug: viibe-coder
description: A modern code sharing and collaboration platform for developers with real-time code editing, syntax highlighting, and multi-language support.
framework: Next.js
useCase: Developer Tools
css: Tailwind
deployUrl: https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/viibe-coder
demoUrl: https://viibe-coder.vercel.app
relatedTemplates:
  - ai-chatgpt
  - cms-payload
---

# Viibe Coder

A modern, powerful code editor and sharing platform built for developers who want to code together and build better.

## Features

- **Monaco Editor Integration**: Full-featured code editor powered by VS Code's Monaco Editor
- **Multi-Language Support**: JavaScript, TypeScript, Python, HTML, CSS, JSON and more
- **Syntax Highlighting**: Beautiful syntax highlighting for all supported languages
- **Dark/Light Themes**: Toggle between dark and light themes
- **Code Sharing**: Share your code snippets with a unique URL
- **Auto-completion**: Intelligent code completion and suggestions
- **Code Formatting**: Automatic code formatting on paste and type
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vercel/examples.git
cd examples/solutions/viibe-coder
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
viibe-coder/
├── app/
│   ├── api/
│   │   └── share/          # API routes for code sharing
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── CodeEditor.tsx      # Monaco editor component
│   ├── Header.tsx          # App header
│   └── Sidebar.tsx         # Language selector sidebar
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Usage

### Basic Code Editing

1. Select a programming language from the sidebar
2. Start typing your code in the editor
3. Use keyboard shortcuts for common operations:
   - `Ctrl/Cmd + S`: Save code
   - `Ctrl/Cmd + /`: Toggle comment
   - `Ctrl/Cmd + F`: Find
   - `Ctrl/Cmd + H`: Find and replace

### Sharing Code

1. Write your code in the editor
2. Click the "Share" button in the toolbar
3. Copy the generated URL to share with others

### Theme Toggle

Click the sun/moon icon in the header to switch between light and dark themes.

## Customization

### Adding New Languages

Edit `components/Sidebar.tsx` to add more programming languages:

```typescript
const languages = [
  // ... existing languages
  { id: 'rust', name: 'Rust', icon: FileCode, color: 'text-orange-500' },
]
```

### Changing Editor Options

Modify the editor options in `components/CodeEditor.tsx`:

```typescript
options={{
  fontSize: 16,
  minimap: { enabled: false },
  // ... other options
}}
```

### Custom Themes

Update `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  viibe: {
    primary: '#your-color',
    secondary: '#your-color',
    // ...
  },
}
```

## Roadmap

- [ ] User authentication and profiles
- [ ] Database integration for persistent code storage
- [ ] Real-time collaborative editing
- [ ] Code execution and output preview
- [ ] Version history and revisions
- [ ] Code templates and snippets library
- [ ] Syntax highlighting for more languages
- [ ] Code comments and annotations
- [ ] Export to various formats (PDF, image)
- [ ] Integration with GitHub/GitLab

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Deploy on Vercel

The easiest way to deploy your Viibe Coder instance is to use the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/viibe-coder)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Editor powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Happy Coding with Viibe!** 🚀
