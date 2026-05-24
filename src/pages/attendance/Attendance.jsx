import MainLayout from "../../layouts/MainLayout";

export default function Attendance() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Attendance
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your attendance and working hours
          </p>
        </div>

      </div>

      {/* Attendance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Today's Status
          </h2>

          <p className="text-green-600 mt-3 font-medium">
            Checked In
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Check In Time
          </h2>

          <p className="mt-3 text-gray-700">
            09:30 AM
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Working Hours
          </h2>

          <p className="mt-3 text-gray-700">
            07h 15m
          </p>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-10">

        <button
          className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90"
        >
          Check In
        </button>

        <button
          className="bg-red-600 text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90"
        >
          Check Out
        </button>

      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Attendance History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Date
                </th>

                <th className="text-left py-3">
                  Check In
                </th>

                <th className="text-left py-3">
                  Check Out
                </th>

                <th className="text-left py-3">
                  Working Hours
                </th>

                <th className="text-left py-3">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  22 May 2026
                </td>

                <td>
                  09:30 AM
                </td>

                <td>
                  06:30 PM
                </td>

                <td>
                  09h 00m
                </td>

                <td className="text-green-600 font-medium">
                  Present
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">
                  21 May 2026
                </td>

                <td>
                  09:15 AM
                </td>

                <td>
                  06:10 PM
                </td>

                <td>
                  08h 55m
                </td>

                <td className="text-green-600 font-medium">
                  Present
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}