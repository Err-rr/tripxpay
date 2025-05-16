"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "general", name: "General Updates" },
    { id: "events", name: "Events" },
    { id: "system", name: "System Notices" },
    { id: "features", name: "New Features" },
  ]

  const announcementPosts = [
    {
      id: 1,
      title: "TripxPay Launches SmartPay for Travelers",
      excerpt: "Our new SmartPay system lets travelers split and schedule payments easily.",
      category: "features",
      author: "Team TripxPay",
      date: "May 12, 2025",
      readTime: "2 min read",
    },
    {
      id: 2,
      title: "Scheduled Maintenance on May 20",
      excerpt: "Expect brief downtime as we perform upgrades to improve your experience.",
      category: "system",
      author: "System Admin",
      date: "May 10, 2025",
      readTime: "1 min read",
    },
    {
      id: 3,
      title: "Join Us at TravelTech Expo 2025",
      excerpt: "TripxPay will be showcasing innovations at the expo. Stop by our booth!",
      category: "events",
      author: "Marketing Team",
      date: "May 8, 2025",
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "Service Update: Faster Transaction Times",
      excerpt: "We've optimized backend processing for speedier payments.",
      category: "general",
      author: "Product Team",
      date: "May 4, 2025",
      readTime: "2 min read",
    },
  ]

  const filteredPosts =
    activeCategory === "all" ? announcementPosts : announcementPosts.filter((post) => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <PageHeader
        title="TripxPay Announcements"
        description="Stay informed about the latest updates, features, and events."
      />

      <div className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-teal-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-gray-900 rounded-lg p-6 flex flex-col justify-between h-full">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium text-teal-500 bg-teal-500 bg-opacity-10 px-2 py-1 rounded">
                    {categories.find((c) => c.id === post.category)?.name}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                  <span className="text-xs text-gray-400">{post.author}</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No announcements found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogsPage
