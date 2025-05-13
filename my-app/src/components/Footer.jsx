const Footer = () => {
  const footerLinks = [
    {
      title: null,
      links: [{ name: "TripxPay", url: "#" }],
    },
    {
      title: null,
      links: [
        { name: "about us", url: "#" },
        { name: "careers", url: "#" },
        { name: "help center", url: "#" },
        { name: "case studies", url: "#" },
      ],
    },
    {
      title: null,
      links: [
        { name: "blogs", url: "#" },
        { name: "contact", url: "#" },
        { name: "documentation", url: "#" },
      ],
    },
    {
      title: null,
      links: [
        { name: "privacy policy", url: "#" },
        { name: "terms & conditions", url: "#" },
        { name: "merchant login", url: "#" },
      ],
    },
  ]

  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.title && <h3 className="text-lg font-bold mb-4">{column.title}</h3>}
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className={`text-sm ${columnIndex === 0 ? "text-xl font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-sm text-gray-500">© 2025 Tripxpay. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
