import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <main
        className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8"
        aria-labelledby="login-heading"
      >
        <div className="mb-8 text-center">

          <h1
            id="login-heading"
            className="text-3xl font-bold text-gray-900"
          >
            Welcome Back
          </h1>

          <p className="text-gray-600 mt-2">
            Sign in to your HRMS portal
          </p>

        </div>

        <form className="space-y-6">

          <div>
            <label
              htmlFor="emailOrPhone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address or Phone Number
            </label>

            <input
              id="emailOrPhone"
              type="text"
              placeholder="Enter your email or phone number"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:opacity-90"
          >
            Sign In
          </button>

        </form>

        <footer className="mt-8 text-center text-sm text-gray-500">
          Accessible HRMS Portal © 2026
        </footer>

      </main>
    </div>
  );
}