export function SocialProof() {
  const partners = [
    "Maersk Logistics",
    "DHL Global",
    "FedEx Freight",
    "CMA CGM",
    "COSCO Shipping",
    "Kuehne+Nagel",
    "DP World",
    "Expeditors",
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Trusted by leading supply chain companies worldwide
      </div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {partners.map((name, i) => (
          <div
            key={name}
            className="flex items-center justify-center gap-2 w-full max-w-[280px] h-12 text-foreground/60 hover:text-foreground/90 transition-colors"
          >
            <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}