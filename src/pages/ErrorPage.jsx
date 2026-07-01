import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          The page you're looking for doesn't exist, has been moved, or the URL
          might be incorrect.
        </p>

        {/* Illustration */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl absolute"></div>
            <div className="relative h-32 w-32 rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.5)]">
              <span className="text-5xl">🚀</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105"
          >
            Go Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-200 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-500">
          Error Code: <span className="text-cyan-400">404</span> • Page Not
          Found
        </p>
      </div>
    </div>
  );
}
