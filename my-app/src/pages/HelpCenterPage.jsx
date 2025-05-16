"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const HelpCenterPage = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: "book-open",
      description: "Learn the basics of TripxPay and how to set up your account.",
      articles: 12,
    },
    {
      title: "Account Management",
      icon: "user",
      description: "Manage your account settings, team members, and permissions.",
      articles: 8,
    },
    {
      title: "Payments & Processing",
      icon: "credit-card",
      description: "Learn about payment methods, processing times, and fees.",
      articles: 15,
    },
    {
      title: "Integration",
      icon: "code",
      description: "Integrate TripxPay with your website or booking system.",
      articles: 10,
    },
    {
      title: "Security",
      icon: "shield",
      description: "Understand our security measures and best practices.",
      articles: 7,
    },
    {
      title: "Billing & Subscriptions",
      icon: "dollar-sign",
      description: "Manage your billing information and subscription plan.",
      articles: 9,
    },
  ]

  const popularArticles = [
    "How to create a payment link",
    "Setting up multi-currency support",
    "Understanding processing fees",
    "Adding team members to your account",
    "Integrating with your booking system",
    "Handling refunds and cancellations",
  ]

  const [searchQuery, setSearchQuery] = useState("")

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "book-open":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        )
      case "user":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )
      case "credit-card":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        )
      case "code":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        )
      case "shield":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        )
      case "dollar-sign":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="Help Center"
        description="Find answers to your questions and learn how to get the most out of TripxPay."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
              />
              <svg
                className="absolute left-4 top-4 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-500 bg-opacity-10 p-3 rounded-lg text-teal-500 mr-4">
                      {renderIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                      <p className="text-xs text-gray-400">{category.articles} articles</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-400">
                    View articles →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
              <div className="bg-gray-900 rounded-lg">
                <ul className="divide-y divide-gray-800">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <a href="#" className="block p-4 hover:bg-gray-800">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-teal-500 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="text-gray-300">{article}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
              <div className="bg-gray-900 rounded-lg p-6">
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Our support team is here to help you with any questions or issues.
                </p>
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-gray-400">Chat with our support team</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-sm text-gray-400">support@tripxpay.com</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700">
                    <svg
                      className="w-6 h-6 text-teal-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-sm text-gray-400">+1 (800) 555-1234</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HelpCenterPage
