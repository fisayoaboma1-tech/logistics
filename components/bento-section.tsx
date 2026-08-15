import type { LucideIcon } from "lucide-react"
import {
  Globe,
  Route,
  Warehouse,
  ShieldCheck,
  Container,
  Radar,
} from "lucide-react"

const BentoCard = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative min-h-[220px]">
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-4 relative z-10">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-semibold leading-7">{title}</p>
        <p className="text-muted-foreground text-sm leading-6">{description}</p>
      </div>
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      icon: Globe,
      title: "Global Freight Network",
      description: "Ship to over 190 countries with our extensive network of ocean, air, and road freight partners.",
    },
    {
      icon: Radar,
      title: "Real-time GPS Tracking",
      description: "Live location tracking on every shipment with hourly status updates and geofencing alerts.",
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI-powered routing that cuts delivery times by up to 30% while minimizing fuel costs.",
    },
    {
      icon: Warehouse,
      title: "Smart Warehousing",
      description: "Strategic warehouse locations with automated inventory management and same-day fulfillment.",
    },
    {
      icon: ShieldCheck,
      title: "Cargo Insurance",
      description: "Comprehensive protection for your goods from pickup to final delivery, bundled with every shipment.",
    },
    {
      icon: Container,
      title: "Container Tracking",
      description: "Monitor containers, temperature, and humidity in real-time across ocean freight journeys.",
    },
  ]

  return (
    <section id="features-section" className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Logistics, Powered by Technology
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              From warehousing to last-mile delivery, our platform gives you complete visibility and control over your
              entire supply chain.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}