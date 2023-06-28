import './globals.css'
import './components.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
