"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Package } from "lucide-react"

export interface ShipmentData {
  trackingNumber: string
  status: "In Transit" | "Delivered" | "Pending" | "Out for Delivery"
  origin: string
  destination: string
  currentLocation: string
  estimatedDelivery: string
  lastUpdate: string
  progress: number
}

// Mock shipment data for demo
const mockShipments: Record<string, ShipmentData> = {
  "LGT-2024-001": {
    trackingNumber: "LGT-2024-001",
    status: "In Transit",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    currentLocation: "Denver, CO",
    estimatedDelivery: "2026-08-20",
    lastUpdate: "2 hours ago",
    progress: 65,
  },
  "LGT-2024-002": {
    trackingNumber: "LGT-2024-002",
    status: "Out for Delivery",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    currentLocation: "Miami, FL",
    estimatedDelivery: "2026-08-17",
    lastUpdate: "1 hour ago",
    progress: 95,
  },
  "LGT-2024-003": {
    trackingNumber: "LGT-2024-003",
    status: "Delivered",
    origin: "Seattle, WA",
    destination: "Boston, MA",
    currentLocation: "Boston, MA",
    estimatedDelivery: "2026-08-15",
    lastUpdate: "30 minutes ago",
    progress: 100,
  },
}

export function ShipmentTracker() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [shipment, setShipment] = useState<ShipmentData | null>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    setSearched(true)
    const result = mockShipments[trackingNumber.toUpperCase()]
    setShipment(result || null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-500 bg-green-500/10"
      case "Out for Delivery":
        return "text-blue-500 bg-blue-500/10"
      case "In Transit":
        return "text-amber-500 bg-amber-500/10"
      case "Pending":
        return "text-gray-500 bg-gray-500/10"
      default:
        return "text-foreground bg-foreground/10"
    }
  }

  return (
    <section id="track-section" className="w-full px-5 py-16 md:py-24">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Track Your Shipment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Real-time visibility into your package journey from pickup to delivery
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Enter tracking number (e.g., LGT-2024-001)"
                className="pl-12 h-12 text-base bg-background/50 border-white/10 text-foreground placeholder:text-foreground/50"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button
              onClick={handleSearch}
              variant="default"
              size="lg"
              className="rounded-lg"
            >
              Track
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Try: LGT-2024-001, LGT-2024-002, or LGT-2024-003
          </p>
        </div>

        {/* Results */}
        {searched && (
          <div>
            {shipment ? (
              <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tracking Number</p>
                    <p className="text-2xl font-bold text-foreground">{shipment.trackingNumber}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg font-semibold text-sm mt-4 md:mt-0 ${getStatusColor(shipment.status)}`}>
                    {shipment.status}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Delivery Progress</span>
                    <span className="text-sm text-muted-foreground">{shipment.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${shipment.progress}%` }}
                    />
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Origin */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Pickup Location</p>
                      <p className="text-foreground font-semibold">{shipment.origin}</p>
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Destination</p>
                      <p className="text-foreground font-semibold">{shipment.destination}</p>
                    </div>
                  </div>

                  {/* Current Location */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Current Location</p>
                      <p className="text-foreground font-semibold">{shipment.currentLocation}</p>
                    </div>
                  </div>

                  {/* Estimated Delivery */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                      <p className="text-foreground font-semibold">{shipment.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>

                {/* Last Update */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">
                    Last update: <span className="text-foreground">{shipment.lastUpdate}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-2">No shipment found</p>
                <p className="text-sm text-muted-foreground">
                  Try one of the sample tracking numbers: LGT-2024-001, LGT-2024-002, or LGT-2024-003
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
