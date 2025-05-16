import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BackButton from "../components/BackButton"

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState("email") // "email", "phone" or "gmail"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [codeSent, setCodeSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginMethod === "email") {
      // Handle email login logic here
      console.log({ email, password, rememberMe })
    } else if (loginMethod === "phone") {
      // Handle phone login logic here
      console.log({ phoneNumber, verificationCode, rememberMe })
    } else if (loginMethod === "gmail") {
      // Handle Gmail login logic here
      handleGmailLogin()
    }
  }

  const handleSendCode = (e) => {
    e.preventDefault()
    // Logic to send verification code
    console.log(`Sending code to ${phoneNumber}`)
    setCodeSent(true)
  }

  const handleGmailLogin = () => {
    // Implement Gmail OAuth login
    console.log("Logging in with Gmail")
    // This would typically redirect to Google's OAuth flow
    // For demonstration purposes, we're just logging
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />
      
      <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-gradient-to-br from-[#00ffb4]/40 to-transparent rotate-12 blur-[120px] rounded-[30%] pointer-events-none z-0"/>
      <div className="absolute top-0 right-0 w-[500px] h-[300px] md:bg-gradient-to-br from-[#00ffb4]/40 to-transparent rotate-12 blur-[120px] rounded-[30%] pointer-events-none z-0 md:top-4" />
      
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <BackButton />
            <div className="flex items-center">
              <h1 className="text-4xl font-bold mb-2">Welcome </h1>
              <h2 className="text-4xl font-bold px-3 mb-2 text-yellow-500">back!</h2>
            </div>
            <p className="text-gray-400">Sign in to your TripxPay account</p>
          </div>

          {/* Login Method Tabs */}
          <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium ${
                loginMethod === "email"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setLoginMethod("email")}
            >
              Email Login
            </button>
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium ${
                loginMethod === "phone"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setLoginMethod("phone")}
            >
              Phone Login
            </button>
            <button
              className={`flex-1 py-2 rounded-md text-sm font-medium ${
                loginMethod === "gmail"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setLoginMethod("gmail")}
            >
              Gmail
            </button>
          </div>

          <div className="space-y-6">
            {loginMethod === "email" ? (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <a href="#" className="text-sm text-teal-500 hover:text-teal-400">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your password"
                  />
                </div>
              </>
            ) : loginMethod === "phone" ? (
              <>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <div className="flex space-x-2">
                    <input
                      id="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your phone number"
                    />
                    <button
                      type="button"
                      onClick={handleSendCode}
                      className="px-4 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      {codeSent ? "Resend" : "Send Code"}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-1">
                    Verification Code
                  </label>
                  <input
                    id="code"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your verification code"
                  />
                </div>
              </>
            ) : (
              // Gmail login option
              <div className="py-4">
                <button
                  onClick={handleGmailLogin}
                  className="w-full flex items-center justify-center py-3 px-4 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-4"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg>
                  Continue with Gmail
                </button>
                <p className="text-sm text-center text-gray-400">
                  We'll securely log you in with your Google account
                </p>
              </div>
            )}

            {loginMethod !== "gmail" && (
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
            )}

            {loginMethod !== "gmail" && (
              <button
                onClick={handleSubmit}
                className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Sign In
              </button>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <a href="#" className="text-teal-500 hover:text-teal-400 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LoginPage