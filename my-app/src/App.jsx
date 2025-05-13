import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustedSection from "./components/TrustedSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <TrustedSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
