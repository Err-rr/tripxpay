import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const TermsConditionsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using TripxPay's services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, you may not access or use our services.",
    },
    {
      title: "2. Description of Services",
      content:
        "TripxPay provides payment processing services for travel agencies and related businesses. Our services include but are not limited to payment processing, fraud detection, and payment management tools.",
    },
    {
      title: "3. Account Registration",
      content:
        "To use our services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
    },
    {
      title: "4. Fees and Payment",
      content:
        "You agree to pay all fees associated with your use of our services. Fees are described in your service agreement or on our pricing page. We reserve the right to change our fees upon notice.",
    },
    {
      title: "5. User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "6. Prohibited Activities",
      content:
        "You agree not to engage in any activity that interferes with or disrupts our services or the servers and networks connected to our services. You also agree not to use our services for any illegal or unauthorized purpose.",
    },
    {
      title: "7. Intellectual Property",
      content:
        "Our services and all related content, features, and functionality are owned by TripxPay and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
    },
    {
      title: "8. Termination",
      content:
        "We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms and Conditions.",
    },
    {
      title: "9. Limitation of Liability",
      content:
        "In no event shall TripxPay be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    },
    {
      title: "10. Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless TripxPay and its officers, directors, employees, agents, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms and Conditions.",
    },
    {
      title: "11. Governing Law",
      content:
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.",
    },
    {
      title: "12. Changes to Terms",
      content:
        "We reserve the right to modify these Terms and Conditions at any time. We will provide notice of any material changes. Your continued use of our services after such modifications will constitute your acknowledgment and agreement to the modified terms.",
    },
    {
      title: "13. Contact Information",
      content: "If you have any questions about these Terms and Conditions, please contact us at legal@tripxpay.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader title="Terms & Conditions" description="Last updated: May 15, 2025" />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsConditionsPage
