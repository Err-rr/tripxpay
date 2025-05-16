import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "How Adventure Tours Co. Increased Bookings by 37%",
      company: "Adventure Tours Co.",
      industry: "Adventure Travel",
      challenge:
        "Adventure Tours Co. was struggling with payment processing issues that led to abandoned bookings and cash flow problems.",
      solution: "Implemented TripxPay's flexible payment options and automated payment processing.",
      results: [
        "37% increase in completed bookings",
        "45% reduction in payment processing time",
        "28% improvement in cash flow",
      ],
      image: "/placeholder.svg?height=300&width=500",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Luxury Escapes Streamlines Payment Processing Across 12 Countries",
      company: "Luxury Escapes",
      industry: "Luxury Travel",
      challenge: "Managing payments across multiple currencies and countries was causing delays and increasing costs.",
      solution: "Integrated TripxPay's multi-currency support and global payment processing.",
      results: [
        "Expanded to 12 new markets in 6 months",
        "Reduced currency conversion fees by 62%",
        "Improved customer satisfaction by 41%",
      ],
      image: "/placeholder.svg?height=300&width=500",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Family Vacations Inc. Reduces Payment Fraud by 92%",
      company: "Family Vacations Inc.",
      industry: "Family Travel",
      challenge:
        "Rising instances of payment fraud were causing significant financial losses and damaging customer trust.",
      solution: "Implemented TripxPay's advanced fraud detection and secure payment processing.",
      results: [
        "92% reduction in fraudulent transactions",
        "Saved $150,000 in potential fraud losses",
        "Increased customer trust and loyalty",
      ],
      image: "/placeholder.svg?height=300&width=500",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="Case Studies"
        description="See how travel agencies are transforming their businesses with TripxPay."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <img
                        src={study.logo || "/placeholder.svg"}
                        alt={study.company}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{study.company}</h3>
                        <p className="text-teal-500 text-sm">{study.industry}</p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4">{study.title}</h2>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-2">The Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-2">The Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2">The Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <a href="#" className="inline-flex items-center text-teal-500 hover:text-teal-400">
                        Read full case study
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="h-64 md:h-auto">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-700 to-teal-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to become our next success story?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of travel agencies that have transformed their payment processes and grown their businesses
              with TripxPay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-gray-100">
                Schedule a Demo
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-teal-600"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage
