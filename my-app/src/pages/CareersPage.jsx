import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote (Global)",
      type: "Full-time",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote (US)",
      type: "Full-time",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
    },
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description:
        "We offer competitive salaries and equity packages to ensure you're rewarded for your contributions.",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
    },
    {
      title: "Flexible Work",
      description: "Work remotely or from one of our offices with flexible hours to maintain work-life balance.",
    },
    {
      title: "Unlimited PTO",
      description: "Take the time you need to rest, recharge, and explore the world.",
    },
    {
      title: "Professional Development",
      description: "Learning stipend and dedicated time for professional growth and development.",
    },
    {
      title: "Team Retreats",
      description: "Regular company retreats to connect, collaborate, and celebrate our achievements.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="Join Our Team"
        description="Help us revolutionize travel payments and build the future of the industry."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Why TripxPay?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  At TripxPay, we're on a mission to transform how travel agencies handle payments. We're building
                  innovative solutions that make travel more accessible and businesses more successful.
                </p>
                <p className="text-gray-300 mb-4">
                  Our team is made up of passionate individuals from diverse backgrounds who share a common goal: to
                  create exceptional products that solve real problems in the travel industry.
                </p>
                <p className="text-gray-300">
                  We value creativity, collaboration, and continuous learning. We believe in empowering our team members
                  to take ownership of their work and make meaningful contributions to our mission.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Innovation: We constantly push boundaries and embrace new ideas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Integrity: We operate with honesty and transparency in all we do.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Collaboration: We believe great things happen when we work together.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Customer Focus: We put our customers at the center of everything we do.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-teal-500">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 bg-gray-800 py-3 px-6">
                <div className="col-span-5 font-medium">Position</div>
                <div className="col-span-3 font-medium">Department</div>
                <div className="col-span-3 font-medium">Location</div>
                <div className="col-span-1 font-medium">Type</div>
              </div>
              <div className="divide-y divide-gray-800">
                {openPositions.map((position, index) => (
                  <div key={index} className="grid grid-cols-12 py-4 px-6 hover:bg-gray-800">
                    <div className="col-span-5 font-medium text-teal-500">{position.title}</div>
                    <div className="col-span-3 text-gray-300">{position.department}</div>
                    <div className="col-span-3 text-gray-300">{position.location}</div>
                    <div className="col-span-1 text-gray-300">{position.type}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Don't see a position that matches your skills?</p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-teal-500 rounded-lg text-white font-medium hover:bg-teal-600"
              >
                Send Us Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CareersPage
