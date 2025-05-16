import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <ul className="space-y-2">
             <div className="flex">
              <Logo/> <li>
                
                <Link to="/" className="text-xl font-bold">
                  <h1 className="mt-2 px-2">TripxPay</h1>
                </Link>
              </li></div>
            </ul>
          </div>

          {/* Column 2 - Main Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white">
                  about us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-400 hover:text-white">
                  careers
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="text-sm text-gray-400 hover:text-white">
                  help center
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-400 hover:text-white">
                  case studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
                  contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm text-gray-400 hover:text-white">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-sm text-gray-400 hover:text-white">
                  documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-sm text-gray-400 hover:text-white">
                  terms & conditions
                </Link>
              </li>
              <li>
                <Link to="/merchant-login" className="text-sm text-gray-400 hover:text-white">
                  merchant login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          © 2025 Tripxpay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;