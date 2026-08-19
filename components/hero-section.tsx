import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0"
    >
      {/* Video Background - barely visible */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105 opacity-60"
          autoPlay
          muted
          loop
          playsInline
          src="https://res.cloudinary.com/qz5m8bhg/video/upload/v1786803417/5fb4744d5d934c5b990e919d2d6e2e01_ztm1ft.mp4"
        />
        {/* Premium gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
        {/* Subtle premium ring */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
      </div>

      <div className="relative z-10 space-y-5 md:space-y-6 lg:space-y-7 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass inner-highlight">
          <Package className="w-4 h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-tight">
            Real-time tracking for global shipments
          </span>
        </div>
        <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight heading-tighter">
          Ship Smarter.{" "}
          <span className="text-gradient-primary">
            Deliver Faster.
          </span>
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
          Global logistics with end-to-end visibility, route optimization, and instant tracking for every package in
          your supply chain.
        </p>
      </div>

      <Link href="#track-section" className="relative z-10 group">
        <Button variant="secondary" size="lg" className="px-8 ring-1 ring-white/10 group-hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)]">
          Track Your Shipment
        </Button>
      </Link>
    </section>
  )
}