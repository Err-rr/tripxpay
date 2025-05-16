"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const HelpSupportPage = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "getting-started", name: "Getting Started" },
    { id: "account", name: "Account Management" },
    { id: "payments", name: "Payments & Processing" },
    { id: "integration", name: "Integration" },
    { id: "security", name: "Security" },
    { id: "billing", name: "Billing & Subscriptions" },
  ]

  const faqs = {
    "getting-started": [
      {
        question: "How do I create a TripxPay account?",
        answer:
          "To create a TripxPay account, click on the 'Sign Up' button in the top right corner of our website. Fill out the registration form with your business details and follow the verification steps.",
      },
      {
        question: "What documents do I need to set up my account?",
        answer:
          "You'll need your business registration documents, a government-issued ID, and your banking information to complete the account setup process.",
      },
      {
        question: "How long does account verification take?",
        answer:
          "Account verification typically takes 1-2 business days. For some businesses, additional verification may be required, which can extend this timeframe.",
      },
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer:
          "To reset your password, click on 'Forgot password?' on the login page. Enter your email address, and we'll send you instructions to reset your password.",
      },
      {
        question: "Can I have multiple users on my account?",
        answer:
          "Yes, you can add team members to your account with different permission levels. Go to 'Account Settings' > 'Team Members' to manage users.",
      },
    ],
    payments: [
      {
        question: "What payment methods can my customers use?",
        answer:
          "TripxPay supports all major credit cards, debit cards, ACH transfers, and digital wallets like Apple Pay and Google Pay.",
      },
      {
        question: "How long does it take for funds to reach my account?",
        answer:
          "Standard processing time is 3-5 business days. Professional and Enterprise plans offer faster processing times of 1-2 days and same-day respectively.",
      },
    ],
    integration: [
      {
        question: "Can I integrate TripxPay with my existing booking system?",
        answer:
          "Yes, TripxPay offers API integration with most popular booking systems. Check our documentation for specific integration guides.",
      },
      {
        question: "Do you provide a payment widget for my website?",
        answer:
          "Yes, we offer customizable payment widgets that you can easily embed on your website with minimal coding required.",
      },
    ],
    security: [
      {
        question: "Is TripxPay PCI compliant?",
        answer:
          "Yes, TripxPay is PCI DSS Level 1 compliant, the highest level of certification available in the payments industry.",
      },
      {
        question: "How does TripxPay protect against fraud?",
        answer:
          "We use advanced fraud detection systems, including machine learning algorithms, to identify and prevent fraudulent transactions.",
      },
    ],
    billing: [
      {
        question: "How do I upgrade or downgrade my plan?",
        answer:
          "You can change your plan at any time from the 'Billing' section in your account dashboard. Changes take effect at the start of your next billing cycle.",
      },
      {
        question: "What happens if I exceed my monthly processing limit?",
        answer:
          "If you exceed your monthly processing limit, you'll be charged an additional 1% fee on the excess amount. We'll also notify you that it might be time to upgrade your plan.",
      },
    ],
  }

  const filteredFaqs = searchQuery
    ? Object.values(faqs)
        .flat()
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        )
    : faqs[activeCategory]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="Help & Support"
        description="Find answers to common questions or contact our support team for assistance."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <svg
                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
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

          {!searchQuery && (
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-4 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-teal-500 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6">
            {searchQuery && filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-500">Try a different search term or browse by category</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))
            )}
          </div>

          <div className="mt-12 bg-gray-900 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Still need help?</h3>
            <p className="text-gray-400 mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:support@tripxpay.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Email Support
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Live Chat
              </a>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 rounded-lg text-white hover:bg-teal-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HelpSupportPage
