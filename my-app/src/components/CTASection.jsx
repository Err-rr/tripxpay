const CTASection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Payment devices"
              className="w-full max-w-xs mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
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
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-6 rounded-full">
              START YOUR JOURNEY →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
