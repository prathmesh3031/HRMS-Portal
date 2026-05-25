import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    document.title = "Login Page | HRMS Portal";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail && !trimmedPassword) {
      setError("Please enter your email address and password.");
      emailRef.current.focus();
      return;
    }

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      emailRef.current.focus();
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError(
        "Invalid email address. Use a valid format like example@example.com."
      );
      emailRef.current.focus();
      return;
    }

    if (!trimmedPassword) {
      setError("Please enter your password.");
      passwordRef.current.focus();
      return;
    }

    if (trimmedEmail !== "admin@hrms.com") {
      setError("No account found with this email address.");
      emailRef.current.focus();
      return;
    }

    if (trimmedPassword !== "admin123") {
      setError("Incorrect password. Please try again.");
      passwordRef.current.focus();
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
            className="text-3xl font-bold text-gray-950"
          >
            Welcome Back
          </h1>

          <p className="text-gray-800 mt-2">
            Sign in to your HRMS portal
          </p>

        </div>

        <form
          className="space-y-6"
          onSubmit={handleLogin}
          noValidate
        >

          <div>

            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-950 mb-2"
            >
              Email Address
            </label>

            <input
              ref={emailRef}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className="w-full rounded-2xl border-2 border-gray-500 bg-white px-4 py-3 text-gray-950 placeholder:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-700 focus:border-blue-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={error ? "login-error" : undefined}
            />

          </div>

          <div>

            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-950 mb-2"
            >
              Password
            </label>

            <input
              ref={passwordRef}
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border-2 border-gray-500 bg-white px-4 py-3 text-gray-950 placeholder:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-700 focus:border-blue-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby={error ? "login-error" : undefined}
            />

          </div>

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-gray-900">

              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-700"
              />

              Remember me

            </label>

            <Link
              to="/forgot-password"
              className="text-blue-800 underline underline-offset-2 hover:text-blue-950 focus:outline-none focus:ring-4 focus:ring-blue-700 rounded-md"
            >
              Forgot Password?
            </Link>

          </div>

          {error && (
            <div
              id="login-error"
              role="alert"
              aria-live="assertive"
              className="rounded-2xl border-2 border-red-800 bg-red-100 px-4 py-3 text-sm font-medium text-red-950"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-black px-4 py-3 font-semibold text-white focus:outline-none focus:ring-4 focus:ring-blue-700 hover:bg-gray-900"
          >
            Sign In
          </button>

        </form>

        <footer className="mt-8 text-center text-sm text-gray-800">
          Accessible HRMS Portal © 2026
        </footer>

      </main>

    </div>
  );
}