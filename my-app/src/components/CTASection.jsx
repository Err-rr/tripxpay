import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import cardimage from "./Images/card.jpeg"
import { Link } from "react-router-dom";
const CTASection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2 })

  const imageControls = useAnimation()
  const textControls = useAnimation()

  useEffect(() => {
    if (inView) {
      imageControls.start("visible")
      textControls.start("visible")
    } else {
      imageControls.start("hidden")
      textControls.start("hidden")
    }
  }, [inView, imageControls, textControls])

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
    },
  }

  return (
    <div className="w-full py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="bg-[#44b8acf6] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center"
        >
          <motion.div
            className="md:w-1/3 mb-6 md:mb-0"
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
          >
            <div className="w-54 h-54 mx-auto rounded-full overflow-hidden">
  <img
    src={cardimage}
    alt="Payment devices"
    className="w-full h-full object-cover"
  />
</div>
          </motion.div>

          <motion.div
            className="md:w-2/3 md:pl-8"
            initial="hidden"
            animate={textControls}
            variants={textVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to revolutionize <span className="text-white">how</span> your
              <br />
              clients <span className="text-white">pay for</span> travel?
            </h2>
            <p className="text-gray-200 mb-6">
              Join hundreds of forward-thinking travel agencies
              <br />
              embracing flexible, risk-free payment solutions with
              <br />
              TripX Pay.
            </p><Link to="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-6 rounded-full">
           
              START YOUR JOURNEY →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default CTASection
