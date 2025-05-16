import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import { motion } from "framer-motion"

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 }
    }
  }

  // Custom variant for Core Values section - appears first
  const coreValuesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  // Custom variant for Leadership section - appears after Core Values
  const leadershipVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  }

  const leaderItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.8
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="About TripxPay"
        description="We're revolutionizing how travel agencies handle payments, making it easier, safer, and more efficient. Our platform streamlines the entire payment process, reduces transaction costs, eliminates currency conversion headaches, and provides unparalleled security and fraud protection. With TripxPay, travel agencies can focus on creating exceptional experiences while we handle the financial complexities."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-500">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At TripxPay, our mission is to transform the travel payment landscape by providing innovative, secure,
                and flexible payment solutions that empower travel agencies to grow their business without financial
                constraints.
              </p>
              <p className="text-gray-300">
                We believe that travel agencies should focus on creating amazing experiences for their clients, not
                worrying about payment processing, cash flow, or financial risk.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-500">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2025 by a team of travel industry veterans and fintech experts, TripxPay was born out of the
                recognition that traditional payment methods were failing travel agencies.
              </p>
              <p className="text-gray-300">
                We've since grown to serve hundreds of forward-thinking travel agencies across the globe, processing
                millions in travel payments and helping our clients focus on what they do best: creating unforgettable
                travel experiences.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={coreValuesVariants}
          >
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center"
              variants={itemVariants}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly push the boundaries of what's possible in travel payments, developing new solutions to old problems.",
                },
                {
                  title: "Security",
                  description:
                    "We prioritize the security of our clients' data and financial transactions above all else, implementing bank-level security measures.",
                },
                {
                  title: "Customer Success",
                  description: "We measure our success by the success of our clients. Their growth is our growth.",
                },
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 p-6 rounded-lg"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                >
                  <h3 className="text-xl font-bold mb-3 text-teal-500">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leadershipVariants}
            className="mt-24"
          >
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Leadership Team
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
            >
              {[
                {
                  name: "Mukul Kaushik",
                  title: "Founder",
                  bio: "Former travel agency owner with 15+ years in the industry.",
                },
                {
                  name: "Shivansh Pandey",
                  title: "Co-Founder",
                  bio: "Fintech expert with experience at leading payment processors.",
                },
              ].map((person, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={leaderItemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.5 } }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 + 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div 
                    className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#134e4a", 
                      transition: { duration: 0.3 } 
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  >
                    <span className="text-4xl text-teal-500">{person.name.charAt(0)}</span>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.7 }}
                  >{person.name}</motion.h3>
                  <motion.p 
                    className="text-teal-500 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                  >{person.title}</motion.p>
                  <motion.p 
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.9 }}
                  >{person.bio}</motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage