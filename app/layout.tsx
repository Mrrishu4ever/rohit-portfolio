import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Kumar | Full Stack Developer',
  description: 'Full Stack Developer specializing in Java, Spring Boot, React.js, Node.js, and AWS. Building production web applications.',
  keywords: 'Full Stack Developer, Java, Spring Boot, React.js, Node.js, AWS, Web Development',
  openGraph: {
    title: 'Rohit Kumar | Full Stack Developer',
    description: 'Building production web applications with modern tech stack',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}