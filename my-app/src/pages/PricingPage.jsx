"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small travel agencies just getting started",
      price: billingCycle === "monthly" ? 49 : 470,
      features: [
        "Process up to $25,000 in monthly payments",
        "Basic payment protection",
        "Email support",
        "Standard processing time (3-5 days)",
        "Basic reporting",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing travel agencies with regular bookings",
      price: billingCycle === "monthly" ? 99 : 950,
      features: [
        "Process up to $100,000 in monthly payments",
        "Enhanced payment protection",
        "Priority email & chat support",
        "Faster processing time (1-2 days)",
        "Advanced reporting & analytics",
        "Custom payment pages",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For established agencies with high transaction volumes",
      price: billingCycle === "monthly" ? 249 : 2390,
      features: [
        "Unlimited payment processing",
        "Premium payment protection",
        "24/7 dedicated support",
        "Same-day processing",
        "Comprehensive reporting & analytics",
        "Custom payment pages",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="Simple, Transparent Pricing"
        description="Choose the plan that's right for your travel agency. All plans include our core payment processing features."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 p-1 rounded-full">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingCycle === "monthly" ? "bg-teal-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  billingCycle === "annual" ? "bg-teal-500 text-white" : "text-gray-400"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl overflow-hidden ${
                  plan.highlighted ? "ring-2 ring-teal-500 transform md:-translate-y-4" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-teal-500 text-center py-2 text-sm font-medium">Most Popular</div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/signup"
                    className={`block w-full py-3 text-center rounded-lg font-medium ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Are there any transaction fees?",
                  answer:
                    "Yes, all plans have a 2.9% + $0.30 transaction fee for credit card payments. ACH payments are charged at 1% with a $3 cap.",
                },
                {
                  question: "Can I change plans later?",
                  answer:
                    "You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
                },
                {
                  question: "Is there a setup fee?",
                  answer:
                    "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee plus transaction fees.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PricingPage
