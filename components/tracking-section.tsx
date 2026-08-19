"use client"

import { useState } from "react"
import type { KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Package,
  MapPin,
  Truck,
  Home,
  Factory,
  PackageCheck,
  Search,
  Copy,
  CheckCircle2,
  X,
  Loader2,
  Clock,
  Weight,
  Route,
  ShieldCheck,
  Navigation,
  PackageSearch,
  User,
  Phone,
  Mail,
  Calendar,
  Building2,
  ChevronRight,
  BadgeCheck,
} from "lucide-react"

type ShipmentStatus = "pending" | "in-transit" | "out-for-delivery" | "delivered"

interface TrackingEvent {
  status: ShipmentStatus
  title: string
  location: string
  time: string
  description: string
}

interface CustomerData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  company?: string
  customerSince: string
  totalShipments: number
  preferredContact: string
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
  customer: CustomerData
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
    customer: {
      name: "Adebayo Ogunlesi",
      email: "adebayo.ogunlesi@example.com",
      phone: "+234 803 555 0142",
      address: "12 Admiralty Way, Lekki Phase 1",
      city: "Lagos",
      country: "Nigeria",
      company: "Ogunlesi Trading Co.",
      customerSince: "Mar 2023",
      totalShipments: 47,
      preferredContact: "Phone",
    },
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
    customer: {
      name: "Fatima Bello",
      email: "fatima.bello@example.com",
      phone: "+234 809 222 7788",
      address: "Plot 45, Garki Area 2",
      city: "Abuja",
      country: "Nigeria",
      company: "Bello & Sons Enterprises",
      customerSince: "Jan 2024",
      totalShipments: 12,
      preferredContact: "Email",
    },
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
    customer: {
      name: "Chinedu Okonkwo",
      email: "chinedu.okonkwo@example.com",
      phone: "+234 805 777 3344",
      address: "8 Ibrahim Taiwo Road, Kano Municipal",
      city: "Kano",
      country: "Nigeria",
      company: "Okonkwo Global Imports",
      customerSince: "Nov 2022",
      totalShipments: 89,
      preferredContact: "Phone",
    },
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

const statusColors: Record<ShipmentStatus, string> = {
  pending: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  "in-transit": "bg-primary/10 text-primary ring-primary/20",
  "out-for-delivery": "bg-primary/10 text-primary ring-primary/20",
  delivered: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
}

const statusDotColors: Record<ShipmentStatus, string> = {
  pending: "bg-amber-400",
  "in-transit": "bg-primary",
  "out-for-delivery": "bg-primary",
  delivered: "bg-emerald-400",
}

// Country flag emoji mapping for realistic location display
const countryFlags: Record<string, string> = {
  CN: "🇨🇳",
  NG: "🇳🇬",
  AE: "🇦🇪",
  UK: "🇬🇧",
  BJ: "🇧🇯",
  US: "🇺🇸",
  DE: "🇩🇪",
  FR: "🇫🇷",
  IT: "🇮🇹",
  ES: "🇪🇸",
  NL: "🇳🇱",
  PT: "🇵🇹",
  IN: "🇮🇳",
  JP: "🇯🇵",
  KR: "🇰🇷",
  MY: "🇲🇾",
  SG: "🇸🇬",
  TH: "🇹🇭",
  VN: "🇻🇳",
  SA: "🇸🇦",
  QA: "🇶🇦",
  KW: "🇰🇼",
  BH: "🇧🇭",
  OM: "🇴🇲",
}

// Extract country code from a location string like "Shanghai, CN" or "Lagos, NG"
const getCountryCode = (location: string): string | null => {
  const match = location.match(/,\s*([A-Z]{2})\s*$/)
  return match ? match[1] : null
}

// Get flag emoji for a location string
const getFlagForLocation = (location: string): string => {
  const code = getCountryCode(location)
  return code && countryFlags[code] ? countryFlags[code] : ""
}

// Country name to flag emoji mapping (for full country names)
const countryNameFlags: Record<string, string> = {
  Nigeria: "🇳🇬",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
  China: "🇨🇳",
  "United Arab Emirates": "🇦🇪",
  Benin: "🇧🇯",
  Dubai: "🇦🇪",
}

// Get flag emoji for a country name
const getFlagForCountry = (country: string): string => {
  return countryNameFlags[country] || ""
}

export function TrackingSection() {
  const [trackingInput, setTrackingInput] = useState("")
  const [shipment, setShipment] = useState<ShipmentData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false)

  const handleTrack = () => {
    const query = trackingInput.trim().toUpperCase()
    if (!query) {
      setError("Please enter a tracking number.")
      return
    }
    setIsLoading(true)
    setError(null)
    setHasSearched(true)

    // Simulate API request for better UX
    setTimeout(() => {
      if (shipments[query]) {
        setShipment(shipments[query])
        setError(null)
      } else {
        setShipment(null)
        setError(
          `No shipment found for "${query}". Try one of these: ${Object.keys(shipments).join(", ")}`
        )
      }
      setIsLoading(false)
    }, 600)
  }

  const handleCopy = async () => {
    if (!shipment) return
    try {
      await navigator.clipboard.writeText(shipment.trackingNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTrack()
    }
  }

  const clearSearch = () => {
    setTrackingInput("")
    setShipment(null)
    setError(null)
    setHasSearched(false)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  return (
    <section id="track-section" className="w-full px-5 py-8 md:py-14 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1100px]">
        <div className="flex flex-col justify-center items-center gap-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass inner-highlight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium text-muted-foreground tracking-tight">Live Tracking</span>
          </div>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight heading-tight">
            Track Your <span className="text-gradient-primary">Shipment</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-2xl">
            Enter your tracking number to see real-time status, location, and estimated delivery for your cargo.
          </p>
        </div>

        {/* Tracking Input */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter tracking number (e.g. LT-2024-001)"
                className="pl-12 pr-10 py-6 rounded-xl glass placeholder:text-foreground/40 focus-visible:ring-primary/30 transition-all duration-300"
              />
              {trackingInput && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              onClick={handleTrack}
              variant="secondary"
              className="px-8 py-6 rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Tracking...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Track
                </>
              )}
            </Button>
          </div>
          {error && (
            <div className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400 animate-in fade-in slide-in-from-top-2 duration-300">
              <PackageSearch className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}
        </div>

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
                setHasSearched(true)
              }}
              className="px-3 py-1.5 rounded-full text-xs font-medium glass text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              {code}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {!shipment && !isLoading && hasSearched && !error && (
          <div className="mt-10 w-full rounded-2xl glass-strong p-10 md:p-14 text-center animate-in fade-in duration-500">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-5">
              <PackageSearch className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-foreground text-xl font-semibold tracking-tight mb-2">No shipment found</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              We couldn't find a shipment with that tracking number. Please check the number and try again, or use one of the sample tracking numbers above.
            </p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="mt-10 w-full rounded-2xl glass-strong p-10 md:p-14 text-center animate-in fade-in duration-300">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-5">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
            <h3 className="text-foreground text-xl font-semibold tracking-tight mb-2">Fetching shipment...</h3>
            <p className="text-muted-foreground text-sm">Retrieving the latest tracking information.</p>
          </div>
        )}

        {/* Tracking Result */}
        {shipment && !isLoading && (
          <div className="mt-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Card */}
            <div className="rounded-2xl glass-strong overflow-hidden card-hover shadow-premium-lg">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                        <PackageCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tracking Number</p>
                        <div className="flex items-center gap-2">
                          <p className="text-foreground text-lg font-semibold tracking-tight">{shipment.trackingNumber}</p>
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
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusDotColors[shipment.status]}`}
                        />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${statusDotColors[shipment.status]}`} />
                      </span>
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-semibold ring-1 ${statusColors[shipment.status]}`}
                    >
                      {shipment.statusLabel}
                    </div>
                  </div>
                </div>

                {/* Route Visualization */}
                <div className="mt-8 rounded-xl bg-white/[0.03] border border-white/5 p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col items-center gap-2 text-center flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 ring-1 ring-primary/20">
                        <Factory className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Origin</p>
                        <p className="text-sm font-semibold text-foreground">{getFlagForLocation(shipment.origin)} {shipment.origin}</p>
                      </div>
                    </div>

                    {/* Animated route line */}
                    <div className="flex-1 relative flex items-center">
                      <div className="w-full h-px bg-white/10 relative overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/40 to-primary"
                          style={{ width: `${shipment.progress}%` }}
                        />
                        <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" style={{ left: `${shipment.progress}%` }} />
                      </div>
                      <div
                        className="absolute w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_12px_rgba(120,252,214,0.5)]"
                        style={{ left: `calc(${shipment.progress}% - 6px)` }}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-2 text-center flex-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                        <Home className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Destination</p>
                        <p className="text-sm font-semibold text-foreground">{shipment.destination}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Delivery Progress</span>
                    <span className="text-xs font-semibold text-primary">{shipment.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all duration-1000 ease-out"
                      style={{ width: `${shipment.progress}%` }}
                    />
                  </div>
                </div>

                {/* Shipment Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Route className="w-3 h-3 text-primary" />
                      Service
                    </span>
                    <span className="text-sm font-medium text-foreground">{shipment.service}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Truck className="w-3 h-3 text-primary" />
                      Carrier
                    </span>
                    <span className="text-sm font-medium text-foreground">{shipment.carrier}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Weight className="w-3 h-3 text-primary" />
                      Weight
                    </span>
                    <span className="text-sm font-medium text-foreground">{shipment.weight}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-primary" />
                      Est. Delivery
                    </span>
                    <span className="text-sm font-medium text-foreground">{shipment.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Customer Details Button */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <Button
                    onClick={() => setIsCustomerModalOpen(true)}
                    variant="ghost"
                    className="w-full md:w-auto group flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Show Customer Details</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-6 rounded-2xl glass-strong p-6 md:p-8 card-hover">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-foreground font-semibold text-lg tracking-tight">Shipment Timeline</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  {shipment.events.length} events
                </div>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border" />
                <div className="flex flex-col gap-6">
                  {shipment.events.map((event, index) => {
                    const Icon = statusIcons[event.status]
                    const isLatest = index === shipment.events.length - 1
                    const isPast = event.status === "delivered"
                    return (
                      <div key={index} className="relative flex gap-4 group">
                        <div
                          className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border shrink-0 transition-all duration-300 ${
                            isPast
                              ? "bg-primary/10 border-primary/30 group-hover:bg-primary/20"
                              : isLatest
                                ? "bg-primary/20 border-primary animate-pulse shadow-[0_0_16px_rgba(120,252,214,0.3)]"
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
                            <div className="flex items-center gap-2">
                              <p className={`text-sm font-semibold ${isPast || isLatest ? "text-foreground" : "text-muted-foreground"}`}>
                                {event.title}
                              </p>
                              {isLatest && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary ring-1 ring-primary/20">
                                  Current
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
                            <Navigation className="w-3 h-3 text-primary/60" />
                            {event.location}
                          </p>
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

      {/* Customer Details Modal */}
      <Dialog open={isCustomerModalOpen} onOpenChange={setIsCustomerModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg bg-background border border-white/10 rounded-2xl p-0 overflow-hidden shadow-premium-lg">
          {/* Modal Header with gradient */}
          <div className="relative bg-gradient-to-br from-primary/20 via-primary/5 to-transparent px-6 pt-6 pb-5 border-b border-white/5">
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-primary" />
                Customer Details
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Shipment {shipment?.trackingNumber} — recipient information
              </DialogDescription>
            </DialogHeader>
          </div>

          {shipment && (
            <div className="px-6 py-5">
              {/* Customer Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 ring-1 ring-primary/30 text-primary text-xl font-bold tracking-tight">
                    {getInitials(shipment.customer.name)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-foreground text-lg font-semibold tracking-tight truncate">
                    {shipment.customer.name}
                  </h4>
                  {shipment.customer.company && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-primary/70" />
                      {shipment.customer.company}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary ring-1 ring-primary/20">
                      Verified Customer
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-muted-foreground ring-1 ring-white/10">
                      Since {shipment.customer.customerSince}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 ring-1 ring-primary/20 shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Phone</p>
                    <p className="text-sm font-medium text-foreground truncate">{shipment.customer.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 ring-1 ring-primary/20 shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Email</p>
                    <p className="text-sm font-medium text-foreground truncate">{shipment.customer.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 ring-1 ring-primary/20 shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Delivery Address</p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {shipment.customer.address}, {shipment.customer.city}, {shipment.customer.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors duration-200">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 ring-1 ring-primary/20 shrink-0">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Expected Delivery</p>
                    <p className="text-sm font-medium text-foreground">{shipment.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-2xl font-bold text-primary tracking-tight">{shipment.customer.totalShipments}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Total Shipments</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-2xl font-bold text-primary tracking-tight">{shipment.progress}%</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Delivery Progress</span>
                </div>
              </div>

              {/* Preferred Contact */}
              <div className="mt-5 flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
                <span className="text-xs text-muted-foreground">Preferred Contact Method</span>
                <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  {shipment.customer.preferredContact}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}