import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My blog post',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
