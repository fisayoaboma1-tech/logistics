"use client"

import { Twitter, Github, Linkedin, Ship } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
            <Ship className="w-4 h-4 text-primary" />
          </div>
          <div className="text-center text-foreground text-xl font-semibold leading-8 tracking-tight">LogiTrack</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
          Logistics made effortless — track every shipment, everywhere.
        </p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-full h-full" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-full h-full" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-full h-full" />
          </a>
        </div>
      </div>
      {/* Right Section: Services, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5 tracking-tight">Services</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a href="#track-section" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Shipment Tracking
            </a>
            <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Freight Forwarding
            </a>
            <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Warehousing
            </a>
            <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Customs Brokerage
            </a>
            <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Container Tracking
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5 tracking-tight">Company</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              About us
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Our network
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Careers
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Partners
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5 tracking-tight">Resources</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Terms of service
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Shipping API
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Rate calculator
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:text-primary transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}