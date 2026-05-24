import MainLayout from "../../layouts/MainLayout";

export default function Profile() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Employee Profile
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your personal information
          </p>

        </div>

      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow p-8 mb-10">

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div
            className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-4xl font-bold"
            aria-label="Profile Avatar"
          >
            PY
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Prathmesh Yadav
            </h2>

            <p className="text-gray-600 mt-2">
              Accessibility Engineer
            </p>

            <p className="text-gray-600">
              Employee ID: EMP1024
            </p>

          </div>

        </div>

      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label
              htmlFor="fullName"
              className="block mb-2 font-medium"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullName"
              defaultValue="Prathmesh Yadav"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>

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
              defaultValue="prathmesh@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label
              htmlFor="phone"
              className="block mb-2 font-medium"
            >
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              defaultValue="+91 9876543210"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label
              htmlFor="department"
              className="block mb-2 font-medium"
            >
              Department
            </label>

            <input
              type="text"
              id="department"
              defaultValue="Accessibility"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>

        </div>

      </div>

      {/* Accessibility Preferences */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          Accessibility Preferences
        </h2>

        <div className="space-y-6">

          <label className="flex items-center gap-3">

            <input type="checkbox" />

            <span>
              Enable High Contrast Mode
            </span>

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" />

            <span>
              Enable Large Text
            </span>

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" />

            <span>
              Reduce Motion Animations
            </span>

          </label>

        </div>

      </div>

      {/* Save Button */}
      <button
        className="bg-black text-white px-8 py-3 rounded-2xl font-medium hover:opacity-90"
      >
        Save Changes
      </button>

    </MainLayout>
  );
}