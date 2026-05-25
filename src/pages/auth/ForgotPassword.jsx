import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-2">
          Forgot Password
        </h1>

        <p className="text-gray-600 mb-6">
          Enter your registered email to receive reset instructions.
        </p>

        <form className="space-y-5">

          <div>

            <label
              htmlFor="email"
              className="block mb-2 font-medium"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90"
          >
            Send Reset Link
          </button>

        </form>

        <div className="mt-6 text-center">

          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}