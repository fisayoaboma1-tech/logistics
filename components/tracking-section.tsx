"use client"

import { useState } from "react"
import type { KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, MapPin, Truck, Home, Factory, PackageCheck, Search, Copy, CheckCircle2 } from "lucide-react"

type ShipmentStatus = "pending" | "in-transit" | "out-for-delivery" | "delivered"

interface TrackingEvent {
  status: ShipmentStatus
  title: string
  location: string
  time: string
  description: string
}

interface ShipmentData {
  trackingNumber: string
  status: ShipmentStatus
  statusLabel: string
  progress: number
  origin: string
  destination: string
  estimatedDelivery: string
  carrier: string
  service: string
  weight: string
  events: TrackingEvent[]
}

const shipments: Record<string, ShipmentData> = {
  "LT-2024-001": {
    trackingNumber: "LT-2024-001",
    status: "in-transit",
    statusLabel: "In Transit",
    progress: 65,
    origin: "Shanghai, CN",
    destination: "Lagos, NG",
    estimatedDelivery: "Aug 18, 2026",
    carrier: "LogiTrack Global",
    service: "Ocean Freight",
    weight: "2,450 kg",
    events: [
      {
        status: "delivered",
        title: "Customs cleared",
        location: "Port of Shanghai",
        time: "Aug 10, 2026 · 09:42",
        description: "Shipment cleared customs and departed from the port.",
      },
      {
        status: "delivered",
        title: "Departed port",
        location: "Shanghai, CN",
        time: "Aug 11, 2026 · 14:30",
        description: "Container vessel departed as scheduled.",
      },
      {
        status: "delivered",
        title: "In transit",
        location: "Indian Ocean",
        time: "Aug 13, 2026 · 06:15",
        description: "Vessel is currently in transit across the Indian Ocean.",
      },
      {
        status: "in-transit",
        title: "Arriving at port",
        location: "Lagos, NG",
        time: "Aug 15, 2026 · ETA",
        description: "Expected to arrive at the Port of Apapa within 72 hours.",
      },
    ],
  },
  "LT-2024-002": {
    trackingNumber: "LT-2024-002",
    status: "out-for-delivery",
    statusLabel: "Out for Delivery",
    progress: 88,
    origin: "Dubai, AE",
    destination: "Abuja, NG",
    estimatedDelivery: "Today, 2:30 PM",
    carrier: "LogiTrack Express",
    service: "Air Freight",
    weight: "85 kg",
    events: [
      {
        status: "delivered",
        title: "Shipment picked up",
        location: "Dubai, AE",
        time: "Aug 13, 2026 · 10:20",
        description: "Package picked up from the sender's location.",
      },
      {
        status: "delivered",
        title: "Arrived at facility",
        location: "DXB Airport",
        time: "Aug 13, 2026 · 16:45",
        description: "Shipment arrived at the air freight facility.",
      },
      {
        status: "delivered",
        title: "In transit",
        location: "Flight EK 787",
        time: "Aug 14, 2026 · 04:10",
        description: "Airborne — en route to Lagos, Nigeria.",
      },
      {
        status: "delivered",
        title: "Arrived in country",
        location: "Lagos, NG",
        time: "Aug 14, 2026 · 18:55",
        description: "Cleared customs and handed to local delivery partner.",
      },
      {
        status: "out-for-delivery",
        title: "Out for delivery",
        location: "Abuja, NG",
        time: "Aug 15, 2026 · 09:00",
        description: "Courier is on the way to the destination address.",
      },
    ],
  },
  "LT-2024-003": {
    trackingNumber: "LT-2024-003",
    status: "delivered",
    statusLabel: "Delivered",
    progress: 100,
    origin: "London, UK",
    destination: "Kano, NG",
    estimatedDelivery: "Delivered Aug 12, 2026",
    carrier: "LogiTrack Global",
    service: "Road Freight",
    weight: "1,210 kg",
    events: [
      {
        status: "delivered",
        title: "Shipment created",
        location: "London, UK",
        time: "Aug 5, 2026 · 08:00",
        description: "Label created and shipment registered in the system.",
      },
      {
        status: "delivered",
        title: "Picked up",
        location: "London, UK",
        time: "Aug 6, 2026 · 11:30",
        description: "Goods collected from the consignor.",
      },
      {
        status: "delivered",
        title: "In transit",
        location: "Channel Tunnel",
        time: "Aug 7, 2026 · 03:20",
        description: "Crossed the English Channel via tunnel.",
      },
      {
        status: "delivered",
        title: "Customs clearance",
        location: "Cotonou, BJ",
        time: "Aug 10, 2026 · 15:10",
        description: "Shipment cleared customs in Cotonou.",
      },
      {
        status: "delivered",
        title: "Delivered",
        location: "Kano, NG",
        time: "Aug 12, 2026 · 14:45",
        description: "Signed and delivered to the recipient.",
      },
    ],
  },
}

const statusIcons: Record<ShipmentStatus, typeof Home> = {
  pending: Package,
  "in-transit": Truck,
  "out-for-delivery": MapPin,
  delivered: Home,
}

export function TrackingSection() {
  const [trackingInput, setTrackingInput] = useState("")
  const [shipment, setShipment] = useState<ShipmentData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleTrack = () => {
    const query = trackingInput.trim().toUpperCase()
    if (!query) {
      setError("Please enter a tracking number.")
      return
    }
    if (shipments[query]) {
      setShipment(shipments[query])
      setError(null)
    } else {
      setError(
        `No shipment found for "${query}". Try one of these: ${Object.keys(shipments).join(", ")}`
      )
    }
  }

  const handleCopy = async () => {
    if (!shipment) return
    try {
      await navigator.clipboard.writeText(shipment.trackingNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for unsupported clipboard
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTrack()
    }
  }

  return (
    <section id="track-section" className="w-full px-5 py-8 md:py-14 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1100px]">
        <div className="flex flex-col justify-center items-center gap-4 mb-8 text-center">
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
            Track Your Shipment
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-2xl">
            Enter your tracking number to see real-time status, location, and estimated delivery for your cargo.
          </p>
        </div>

        {/* Tracking Input */}
        <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter tracking number (e.g. LT-2024-001)"
              className="pl-12 py-6 rounded-xl bg-[rgba(231,236,235,0.08)] border-border text-foreground placeholder:text-muted-foreground/50"
            />
          </div>
          <Button
            onClick={handleTrack}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 rounded-xl font-medium"
          >
            Track
          </Button>
        </div>
        {error && <p className="text-center text-sm text-red-400 mt-4">{error}</p>}

        {/* Sample tracking chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
          <span className="text-sm text-muted-foreground">Try:</span>
          {Object.keys(shipments).map((code) => (
            <button
              key={code}
              onClick={() => {
                setTrackingInput(code)
                setShipment(shipments[code])
                setError(null)
              }}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[rgba(231,236,235,0.08)] border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {code}
            </button>
          ))}
        </div>

        {/* Tracking Result */}
        {shipment && (
          <div className="mt-10 w-full">
            {/* Header Card */}
            <div className="rounded-2xl border border-border bg-[rgba(231,236,235,0.08)] backdrop-blur-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <PackageCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tracking Number</p>
                        <div className="flex items-center gap-2">
                          <p className="text-foreground text-lg font-semibold">{shipment.trackingNumber}</p>
                          <button
                            onClick={handleCopy}
                            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Copy tracking number"
                          >
                            {copied ? (
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      shipment.status === "delivered"
                        ? "bg-primary/10 text-primary"
                        : shipment.status === "out-for-delivery"
                          ? "bg-[rgba(78,255,182,0.1)] text-primary-dark"
                          : "bg-primary/10 text-primary"
                    }`}
                  >
                    {shipment.statusLabel}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                      style={{ width: `${shipment.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>{shipment.origin}</span>
                    <span>{shipment.destination}</span>
                  </div>
                </div>

                {/* Shipment Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Origin</span>
                    <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Factory className="w-3.5 h-3.5 text-primary" />
                      {shipment.origin}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Destination</span>
                    <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-primary" />
                      {shipment.destination}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Carrier</span>
                    <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-primary" />
                      {shipment.carrier}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">Est. Delivery</span>
                    <span className="text-sm font-medium text-foreground">{shipment.estimatedDelivery}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-6 rounded-2xl border border-border bg-[rgba(231,236,235,0.08)] backdrop-blur-sm p-6 md:p-8">
              <h3 className="text-foreground font-semibold text-lg mb-6">Shipment Timeline</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
                <div className="flex flex-col gap-6">
                  {shipment.events.map((event, index) => {
                    const Icon = statusIcons[event.status]
                    const isLatest = index === shipment.events.length - 1
                    const isPast = event.status === "delivered"
                    return (
                      <div key={index} className="relative flex gap-4">
                        <div
                          className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border shrink-0 ${
                            isPast
                              ? "bg-primary/10 border-primary/30"
                              : isLatest
                                ? "bg-primary/20 border-primary animate-pulse"
                                : "bg-muted border-border"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              isPast || isLatest ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1 pb-2">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                            <p className={`text-sm font-semibold ${isPast || isLatest ? "text-foreground" : "text-muted-foreground"}`}>
                              {event.title}
                            </p>
                            <span className="text-xs text-muted-foreground">{event.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{event.location}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">{event.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}