import TestimonialCard from "./TestimonialCard"

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "TripxPay transformed how I manage travel expenses. The customized payment solutions make travel possible without financial stress.",
      name: "Jamie Doe",
      title: "Tour Operator",
      avatarColor: "bg-purple-500",
    },
    {
      quote:
        "The customer service provided by TripxPay is exceptional. They're always there to answer our questions and solve issues quickly.",
      name: "Alex Smith",
      title: "Business Traveler",
      avatarColor: "bg-pink-500",
    },
    {
      quote:
        "The rewards program is incredible. I've earned enough points from my travels to cover a weekend getaway trip!",
      name: "Morgan Johnson",
      title: "Travel Blogger",
      avatarColor: "bg-yellow-500",
    },
  ]

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What Our Clients Say</h2>
        <p className="text-gray-400 text-center mb-12">
          Don't just take our word for it — here's what travel agencies are saying about TripX Pay.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarColor={testimonial.avatarColor}
              index={index} // ✅ Pass index for staggered animation
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
