"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Ship } from "lucide-react"
import Link from "next/link"

export function Header() {
  const navItems = [
    { name: "Track Shipment", href: "#track-section" },
    { name: "Features", href: "#features-section" },
    { name: "FAQ", href: "#faq-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className="w-full py-4 px-6 fixed top-0 left-0 right-0 z-[2147483647]"
      style={{ zIndex: 2147483647 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
              <Ship className="w-4 h-4 text-primary" />
            </div>
            <span className="text-foreground text-lg font-semibold tracking-tight">LogiTrack</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/[0.06]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#track-section" onClick={(e) => handleScroll(e, "#track-section")} className="hidden md:block">
            <Button variant="secondary" size="sm" className="px-6">
              Track Now
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-black text-white hover:bg-black hover:text-white z-[2147483647]"
                style={{ zIndex: 2147483647 }}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="z-[2147483647] bg-background border-t border-border text-foreground"
              style={{ zIndex: 2147483647 }}
            >
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold text-foreground tracking-tight">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-muted-foreground hover:text-foreground justify-start text-base py-2.5 px-3 rounded-xl hover:bg-white/[0.06] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="#track-section" onClick={(e) => handleScroll(e, "#track-section")} className="w-full mt-2">
                  <Button variant="secondary" className="w-full">
                    Track Shipment
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}