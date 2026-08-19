const testimonials = [
  {
    quote:
      "The real-time GPS tracking from LogiTrack feels like having a logistics command center for every shipment. The accuracy of ETAs has improved our customer satisfaction dramatically while cutting support calls in half.",
    name: "Annette Black",
    company: "FreshCart Grocers",
    avatar: "/images/avatars/annette-black.png",
    type: "large-teal",
  },
  {
    quote:
      "Integrating LogiTrack into our warehouse system was smooth, and the API saved us days of manual tracking work.",
    name: "Dianne Russell",
    company: "Northwind Retail",
    avatar: "/images/avatars/dianne-russell.png",
    type: "small-dark",
  },
  {
    quote:
      "LogiTrack's route optimization has been a game changer. We're delivering in hours what used to take entire days.",
    name: "Cameron Williamson",
    company: "Metro Distribution",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small-dark",
  },
  {
    quote:
      "We no longer juggle multiple freight providers. LogiTrack brought our entire supply chain into one dashboard, which simplified everything.",
    name: "Robert Fox",
    company: "Apex Manufacturing",
    avatar: "/images/avatars/robert-fox.png",
    type: "small-dark",
  },
  {
    quote:
      "We started with the Starter plan just to test it out, but within a month we upgraded to Business. Now, we can't imagine shipping without it.",
    name: "Darlene Robertson",
    company: "Lumina Beauty",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
  },
  {
    quote:
      "Tracking our containers in real time feels effortless now. With LogiTrack's smart alerts, customs delays are no longer a surprise.",
    name: "Cody Fisher",
    company: "Global Tech Gear",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small-dark",
  },
  {
    quote:
      "Handing our global logistics to LogiTrack was not just simple, it felt seamless. We went from manual spreadsheet tracking to live shipment visibility in minutes.",
    name: "Albert Flores",
    company: "Evergreen Foods",
    avatar: "/images/avatars/albert-flores.png",
    type: "large-light",
  },
]

interface Testimonial {
  quote: string
  name: string
  company: string
  avatar: string
  type: string
}

const TestimonialCard = ({ quote, name, company, type }: Testimonial) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding} card-hover`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8 tracking-tight"
    nameClasses += " text-primary-foreground text-base font-normal leading-6"
    companyClasses += " text-primary-foreground/60 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " glass-strong"
    quoteClasses += " text-foreground text-2xl font-medium leading-8 tracking-tight"
    nameClasses += " text-foreground text-base font-normal leading-6"
    companyClasses += " text-muted-foreground text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " glass"
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6"
    nameClasses += " text-foreground text-sm font-normal leading-[22px]"
    companyClasses += " text-muted-foreground text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex justify-start items-center gap-3">
        <div
          className={`flex items-center justify-center ${avatarBorderRadius} bg-primary/10`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)", width: avatarSize, height: avatarSize }}
        >
          <span className="text-primary font-semibold text-sm">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section id="testimonials-section" className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px] heading-tight">
            Loved by supply chain teams
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Hear how logistics professionals ship faster, track smarter,"} <br />{" "}
            {"and deliver with confidence using LogiTrack"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}