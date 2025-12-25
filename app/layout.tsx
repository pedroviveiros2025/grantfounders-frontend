import "../styles/globals.css"

export const metadata = {
  title: "GrantFounders™ Federal Readiness",
  description: "Federal Grant Readiness Engine",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gf-dark text-white">{children}</body>
    </html>
  )
}
