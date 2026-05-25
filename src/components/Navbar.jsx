export default function Navbar() {
  return (
    <header
      className="bg-white shadow rounded-2xl px-6 py-4 mb-8 flex items-center justify-between"
    >

      {/* Left Section */}
      <div>

        <p className="text-2xl font-bold">
          Welcome Back 👋
        </p>

        <p className="text-gray-600 mt-1">
          Manage your HR activities efficiently
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="border border-gray-300 rounded-xl px-4 py-2"
        />

        {/* Notification */}
        <button
          aria-label="Notifications"
          className="relative bg-gray-100 p-3 rounded-xl hover:bg-gray-200"
        >
          🔔

          <span
            className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"
            aria-hidden="true"
          ></span>

        </button>

        {/* Profile */}
        <button
          aria-label="User Profile"
          className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
        >
          PY
        </button>

      </div>

    </header>
  );
}