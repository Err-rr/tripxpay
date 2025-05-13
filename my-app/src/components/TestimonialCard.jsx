const TestimonialCard = ({ quote, name, title, avatarColor }) => {
  return (
    <div className="flex flex-col h-full">
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
    </div>
  )
}

export default TestimonialCard
