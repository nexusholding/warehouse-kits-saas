import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Warehouse Kit Manager',
    description: 'Gerenciar composição de kits no armazém',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="pt-BR">
                <body>{children}</body>body>
          </html>html>
        )
}</html>
