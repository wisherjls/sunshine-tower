import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.jpg" alt="Website Logo" className="h-15 w-15 rounded-full" />
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/about"
              className="hover:text-blue-200 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/discord"
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Discord
            </Link>
            <Link
              to="/join"
              className="hover:text-blue-200 transition-colors font-medium"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
