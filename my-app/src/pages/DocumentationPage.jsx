"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState("api")

  const tabs = [
    { id: "api", label: "API Reference" },
    { id: "guides", label: "Integration Guides" },
    { id: "sdks", label: "SDKs & Libraries" },
    { id: "webhooks", label: "Webhooks" },
  ]

  const apiEndpoints = [
    {
      name: "Authentication",
      endpoint: "/v1/auth",
      method: "POST",
      description: "Authenticate and get an access token",
    },
    {
      name: "Create Payment",
      endpoint: "/v1/payments",
      method: "POST",
      description: "Create a new payment",
    },
    {
      name: "Get Payment",
      endpoint: "/v1/payments/{id}",
      method: "GET",
      description: "Retrieve a payment by ID",
    },
    {
      name: "List Payments",
      endpoint: "/v1/payments",
      method: "GET",
      description: "List all payments with optional filters",
    },
    {
      name: "Update Payment",
      endpoint: "/v1/payments/{id}",
      method: "PATCH",
      description: "Update an existing payment",
    },
    {
      name: "Cancel Payment",
      endpoint: "/v1/payments/{id}/cancel",
      method: "POST",
      description: "Cancel a payment",
    },
    {
      name: "Refund Payment",
      endpoint: "/v1/payments/{id}/refund",
      method: "POST",
      description: "Refund a payment",
    },
  ]

  const integrationGuides = [
    "Getting Started with TripxPay API",
    "Integrating Payment Forms",
    "Setting Up Webhooks",
    "Handling Payment Statuses",
    "Implementing Multi-Currency Support",
    "Managing Refunds and Cancellations",
    "Security Best Practices",
  ]

  const sdks = [
    {
      name: "JavaScript",
      description: "Official JavaScript SDK for browser and Node.js",
      link: "#",
    },
    {
      name: "PHP",
      description: "Official PHP SDK for server-side integration",
      link: "#",
    },
    {
      name: "Python",
      description: "Official Python SDK for server-side integration",
      link: "#",
    },
    {
      name: "Ruby",
      description: "Official Ruby SDK for server-side integration",
      link: "#",
    },
    {
      name: "Java",
      description: "Official Java SDK for server-side integration",
      link: "#",
    },
    {
      name: ".NET",
      description: "Official .NET SDK for server-side integration",
      link: "#",
    },
  ]

  const webhooks = [
    {
      event: "payment.created",
      description: "Triggered when a new payment is created",
    },
    {
      event: "payment.updated",
      description: "Triggered when a payment is updated",
    },
    {
      event: "payment.completed",
      description: "Triggered when a payment is completed successfully",
    },
    {
      event: "payment.failed",
      description: "Triggered when a payment fails",
    },
    {
      event: "payment.refunded",
      description: "Triggered when a payment is refunded",
    },
    {
      event: "payment.canceled",
      description: "Triggered when a payment is canceled",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="Documentation"
        description="Comprehensive guides and reference documentation for integrating with TripxPay."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id ? "bg-teal-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "api" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                <p className="text-gray-300 mb-2">
                  Our RESTful API allows you to integrate TripxPay's payment processing capabilities into your
                  applications.
                </p>
                <p className="text-gray-300">
                  Base URL:{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-teal-400">https://api.tripxpay.com</code>
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-gray-800 py-3 px-6">
                  <div className="col-span-3 font-medium">Endpoint</div>
                  <div className="col-span-2 font-medium">Method</div>
                  <div className="col-span-7 font-medium">Description</div>
                </div>
                <div className="divide-y divide-gray-800">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="grid grid-cols-12 py-4 px-6 hover:bg-gray-800">
                      <div className="col-span-3">
                        <span className="font-medium text-teal-500">{endpoint.name}</span>
                        <div className="text-xs text-gray-400 mt-1">{endpoint.endpoint}</div>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === "GET"
                              ? "bg-blue-900 text-blue-300"
                              : endpoint.method === "POST"
                                ? "bg-green-900 text-green-300"
                                : endpoint.method === "PATCH"
                                  ? "bg-yellow-900 text-yellow-300"
                                  : endpoint.method === "DELETE"
                                    ? "bg-red-900 text-red-300"
                                    : "bg-gray-800 text-gray-300"
                          }`}
                        >
                          {endpoint.method}
                        </span>
                      </div>
                      <div className="col-span-7 text-gray-300">{endpoint.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a href="#" className="inline-block px-6 py-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700">
                  View Full API Documentation
                </a>
              </div>
            </div>
          )}

          {activeTab === "guides" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Integration Guides</h2>
                <p className="text-gray-300">
                  Step-by-step guides to help you integrate TripxPay into your applications and websites.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrationGuides.map((guide, index) => (
                  <a key={index} href="#" className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                    <div className="flex items-center">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h3 className="font-medium">{guide}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeTab === "sdks" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">SDKs & Libraries</h2>
                <p className="text-gray-300">
                  Official SDKs and libraries to help you integrate TripxPay into your applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sdks.map((sdk, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2 text-teal-500">{sdk.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{sdk.description}</p>
                    <div className="flex space-x-4">
                      <a href={sdk.link} className="text-sm text-teal-500 hover:text-teal-400 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        Documentation
                      </a>
                      <a href={sdk.link} className="text-sm text-teal-500 hover:text-teal-400 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "webhooks" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Webhooks</h2>
                <p className="text-gray-300 mb-4">
                  Webhooks allow your application to receive real-time updates about payment events.
                </p>
                <p className="text-gray-300">
                  Webhook URL:{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-teal-400">
                    https://your-server.com/tripxpay-webhook
                  </code>
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-gray-800 py-3 px-6">
                  <div className="col-span-4 font-medium">Event</div>
                  <div className="col-span-8 font-medium">Description</div>
                </div>
                <div className="divide-y divide-gray-800">
                  {webhooks.map((webhook, index) => (
                    <div key={index} className="grid grid-cols-12 py-4 px-6 hover:bg-gray-800">
                      <div className="col-span-4 font-medium text-teal-500">{webhook.event}</div>
                      <div className="col-span-8 text-gray-300">{webhook.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Webhook Security</h3>
                <p className="text-gray-300 mb-4">
                  To ensure the security of your webhook endpoints, we sign all webhook requests with a signature that
                  you can verify.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>
                      {`// Example webhook verification in Node.js
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(digest),
    Buffer.from(signature)
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DocumentationPage
