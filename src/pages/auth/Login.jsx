import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail && !trimmedPassword) {
      setError("Please enter your email address and password.");
      return;
    }

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError(
        "Invalid email address. Use a valid format like example@example.com."
      );
      return;
    }

    if (!trimmedPassword) {
      setError("Please enter your password.");
      return;
    }

    if (trimmedEmail !== "admin@hrms.com") {
      setError(
        "No account found with this email address."
      );
      return;
    }

    if (trimmedPassword !== "admin123") {
      setError(
        "Incorrect password. Please try again."
      );
      return;
    }

    setError("");
    navigate("/dashboard");
  };

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

        <form className="space-y-6" onSubmit={handleLogin}>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Remember me
            </label>

            <div className="text-right">

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot Password?
              </Link>

            </div>

          </div>
          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="bg-red-100 text-red-700 px-4 py-3 rounded-xl text-sm"
            >
              {error}
            </div>
          )}
          <button
            type="submit"
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