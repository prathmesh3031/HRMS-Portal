import MainLayout from "../../layouts/MainLayout";

export default function Events() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Events & Celebrations
          </h1>

          <p className="text-gray-600 mt-2">
            Employee birthdays, anniversaries and company events
          </p>

        </div>

      </div>

      {/* Birthday Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          🎂 Upcoming Birthdays
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <p className="font-semibold">
                Priya Sharma
              </p>

              <p className="text-gray-600 text-sm">
                HR Department
              </p>

            </div>

            <span className="text-gray-700">
              24 May
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <p className="font-semibold">
                Rahul Verma
              </p>

              <p className="text-gray-600 text-sm">
                Engineering Team
              </p>

            </div>

            <span className="text-gray-700">
              27 May
            </span>

          </div>

        </div>

      </div>

      {/* Work Anniversary Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          🎉 Work Anniversaries
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <p className="font-semibold">
                Amit Kumar
              </p>

              <p className="text-gray-600 text-sm">
                5 Years Completed
              </p>

            </div>

            <span className="text-gray-700">
              25 May
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <p className="font-semibold">
                Sneha Mehta
              </p>

              <p className="text-gray-600 text-sm">
                2 Years Completed
              </p>

            </div>

            <span className="text-gray-700">
              29 May
            </span>

          </div>

        </div>

      </div>

      {/* Company Events */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          📅 Upcoming Events
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-4">

            <p className="font-semibold">
              Accessibility Awareness Workshop
            </p>

            <p className="text-gray-600 text-sm mt-1">
              30 May 2026 | 11:00 AM
            </p>

          </div>

          <div className="border-b pb-4">

            <p className="font-semibold">
              Quarterly Team Meeting
            </p>

            <p className="text-gray-600 text-sm mt-1">
              05 June 2026 | 03:00 PM
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}