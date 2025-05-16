import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "This Privacy Policy explains how TripxPay ('we', 'us', or 'our') collects, uses, and discloses your information when you use our services. We are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services.",
    },
    {
      title: "Information We Collect",
      content:
        "We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, payment information, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our services, including IP address, device type, browser type, and cookies.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and communicate with you about products, services, offers, and events. We may also use your information to monitor and analyze trends, usage, and activities in connection with our services, detect, prevent, and address fraud and other illegal activities, and for compliance purposes.",
    },
    {
      title: "Information Sharing",
      content:
        "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service. We may also share information if required by law, in connection with a merger or acquisition, or with your consent. We do not sell your personal information to third parties.",
    },
    {
      title: "Data Security",
      content:
        "We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems.",
    },
    {
      title: "Your Rights and Choices",
      content:
        "You may update, correct, or delete your account information at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those communications. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.",
    },
    {
      title: "International Data Transfers",
      content:
        "We may transfer your personal information to countries other than the one in which you live. We deploy appropriate safeguards when we transfer personal data.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.",
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@tripxpay.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader title="Privacy Policy" description="Last updated: May 15, 2025" />

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

export default PrivacyPolicyPage
