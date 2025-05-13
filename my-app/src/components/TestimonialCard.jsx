import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

const TestimonialCard = ({ quote, name, title, avatarColor }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col h-full"
    >
      <div className="bg-teal-600 rounded-lg p-6 flex-grow">
        <div className="text-2xl text-white mb-2">"</div>
        <p className="text-white text-sm">{quote}</p>
      </div>
      <div className="flex items-center mt-4 px-4">
        <div
          className={`${avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-medium`}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{name}</h4>
          <p className="text-gray-400 text-xs">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
