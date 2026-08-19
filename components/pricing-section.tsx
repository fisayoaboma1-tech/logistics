"use client"

import { useState } from "react"
import { Check, Ship, Truck, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const shippingPlans = [
    {
      name: "Standard Freight",
      monthlyPrice: "$49",
      annualPrice: "$39",
      description: "Reliable ground shipping for everyday cargo needs.",
      icon: Truck,
      features: [
        "Up to 100 shipments / month",
        "Standard 3-7 day delivery",
        "Basic tracking notifications",
        "Email support",
        "Web dashboard access",
      ],
      buttonText: "Start Shipping",
      buttonClass:
        "bg-gradient-to-b from-primary/20 to-primary/10 text-foreground ring-1 ring-primary/30 shadow-[0_2px_12px_-2px_rgba(0,255,182,0.3)] hover:from-primary/30 hover:to-primary/15 hover:shadow-[0_4px_20px_-2px_rgba(0,255,182,0.4)] hover:scale-[1.02]",
    },
    {
      name: "Express Air",
      monthlyPrice: "$199",
      annualPrice: "$159",
      description: "Priority air freight for time-sensitive deliveries.",
      icon: Plane,
      features: [
        "Up to 1,000 shipments / month",
        "Express 1-2 day delivery",
        "Real-time GPS tracking",
        "Customs brokerage included",
        "Priority phone & email support",
        "Cargo insurance up to $50K",
        "API access & integrations",
      ],
      buttonText: "Get Express",
      buttonClass:
        "bg-gradient-to-b from-primary to-primary-dark text-primary-foreground ring-1 ring-primary/30 shadow-[0_2px_12px_-2px_rgba(0,255,182,0.5)] hover:from-primary-dark hover:to-primary hover:shadow-[0_4px_20px_-2px_rgba(0,255,182,0.6)] hover:scale-[1.02]",
      popular: true,
    },
    {
      name: "Ocean & Enterprise",
      monthlyPrice: "$999",
      annualPrice: "$799",
      description: "Full-scale ocean freight and enterprise supply chain.",
      icon: Ship,
      features: [
        "Unlimited shipments",
        "Dedicated account manager",
        "Custom route planning",
        "Temperature-controlled freight",
        "Full cargo insurance up to $1M",
        "SLA guarantees & priority dispatch",
        "Dedicated API & integration support",
      ],
      buttonText: "Talk to Sales",
      buttonClass:
        "bg-gradient-to-b from-primary/20 to-primary/10 text-foreground ring-1 ring-primary/30 shadow-[0_2px_12px_-2px_rgba(0,255,182,0.3)] hover:from-primary/30 hover:to-primary/15 hover:shadow-[0_4px_20px_-2px_rgba(0,255,182,0.4)] hover:scale-[1.02]",
    },
  ]

  return (
    <section id="pricing-section" className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px] heading-tight">
            Shipping solutions for every cargo
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            From ground freight to global air and ocean shipping, choose the service <br /> that matches your
            logistics needs.
          </p>
        </div>
        <div className="pt-4">
          <div className="p-0.5 glass rounded-lg flex justify-start items-center gap-1 md:mt-0">
            <button
              onClick={() => setIsAnnual(true)}
              className={`pl-2 pr-1 py-1 flex justify-start items-start gap-2 rounded-md transition-all duration-200 ${isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Annual
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-2 py-1 flex justify-start items-start rounded-md transition-all duration-200 ${!isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${!isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Monthly
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch px-5 flex flex-col md:flex-row justify-start items-stretch gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto">
        {shippingPlans.map((plan) => {
          const Icon = plan.icon
          return (
            <div
              key={plan.name}
              className={`flex-1 p-6 overflow-hidden rounded-2xl flex flex-col justify-start items-start gap-6 transition-all duration-300 hover:-translate-y-1 card-hover ${
                plan.popular
                  ? "bg-gradient-to-b from-primary to-primary/90 shadow-[0_8px_30px_-6px_rgba(120,252,214,0.35)] ring-1 ring-primary/50"
                  : "glass hover:from-white/[0.09] hover:to-white/[0.04]"
              }`}
              style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-6 flex-1">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex justify-between items-center">
                    <div
                      className={`text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"}`}
                    >
                      {plan.name}
                      {plan.popular && (
                        <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white">
                          <div className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                            Popular
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        plan.popular ? "bg-primary-foreground/15" : "bg-primary/10 ring-1 ring-primary/20"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="flex justify-start items-center gap-1.5">
                      <div
                        className={`relative h-10 flex items-center text-3xl font-semibold leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"}`}
                      >
                        <span className="invisible">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span
                          className="absolute inset-0 flex items-center transition-all duration-500"
                          style={{
                            opacity: isAnnual ? 1 : 0,
                            transform: `scale(${isAnnual ? 1 : 0.8})`,
                            filter: `blur(${isAnnual ? 0 : 4}px)`,
                          }}
                          aria-hidden={!isAnnual}
                        >
                          {plan.annualPrice}
                        </span>
                        <span
                          className="absolute inset-0 flex items-center transition-all duration-500"
                          style={{
                            opacity: !isAnnual ? 1 : 0,
                            transform: `scale(${!isAnnual ? 1 : 0.8})`,
                            filter: `blur(${!isAnnual ? 0 : 4}px)`,
                          }}
                          aria-hidden={isAnnual}
                        >
                          {plan.monthlyPrice}
                        </span>
                      </div>
                      <div
                        className={`text-center text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                      >
                        /month
                      </div>
                    </div>
                    <div
                      className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                    >
                      {plan.description}
                    </div>
                  </div>
                </div>
                <Button
                  className={`self-stretch px-5 py-2.5 rounded-[40px] flex justify-center items-center transition-all duration-300 ${plan.buttonClass}`}
                >
                  <div className="px-1.5 flex justify-center items-center gap-2">
                    <span
                      className={`text-center text-sm font-medium leading-tight ${plan.name === "Express Air" ? "text-primary-foreground" : "text-foreground"}`}
                    >
                      {plan.buttonText}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${plan.name === "Express Air" ? "text-primary-foreground" : "text-foreground"}`} />
                  </div>
                </Button>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4 pt-4 border-t border-white/10">
                <div
                  className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {plan.name === "Standard Freight" ? "What's included:" : "Everything in the tier below +"}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="self-stretch flex justify-start items-center gap-2.5">
                      <div className="w-4 h-4 flex items-center justify-center shrink-0">
                        <Check
                          className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                          strokeWidth={2.5}
                        />
                      </div>
                      <div
                        className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                      >
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}