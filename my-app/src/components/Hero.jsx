const Hero = () => {
  return (
    <div className="relative w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-yellow-500">One Platform,</span> Everything You Need
          <br />
          For Travel <span className="text-white">Payments...</span>
        </h1>
        <p className="text-gray-400 mb-8">Flexible, secure, and built for the future of travel payments</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-6 rounded-full">
            GET STARTED
          </button>
          <button className="border border-gray-700 hover:border-gray-500 text-white font-medium py-2 px-6 rounded-full">
            KNOW ABOUT US
          </button>
        </div>
      </div>

      {/* Travel stickers */}
      <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="relative h-64">
          <div className="absolute left-20 bottom-10">
            <img src="/placeholder.svg?height=80&width=100" alt="LA" className="w-20 h-16 object-contain" />
          </div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
            <img src="/placeholder.svg?height=120&width=140" alt="Colosseum" className="w-32 h-28 object-contain" />
          </div>
          <div className="absolute right-20 bottom-10">
            <img src="/placeholder.svg?height=80&width=100" alt="Morocco" className="w-20 h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Background dots pattern */}
      <div className="absolute inset-0 z-[-1] opacity-30">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array(120)
            .fill()
            .map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-600"></div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
