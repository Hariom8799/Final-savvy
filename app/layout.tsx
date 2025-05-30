import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { RecoilRootProvider } from "@/components/providers/recoil-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { AnimationProvider } from "@/components/providers/animation-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SplashScreen } from "@/components/splash-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Savvy Bags | Premium Tote Bags",
  description: "Handcrafted premium tote bags for every occasion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <RecoilRootProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col bg-gradient-dark">
              <SplashScreen />
              <CustomCursor />
              <Header />
              <AnimationProvider>
                <main className="flex-1">{children}</main>
              </AnimationProvider>
              <Footer />
            </div>
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
