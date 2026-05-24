import MainLayout from "../../layouts/MainLayout";

export default function Leave() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Leave Management
          </h1>

          <p className="text-gray-600 mt-2">
            Apply and manage your leaves
          </p>
        </div>

      </div>

      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-lg font-semibold">
            Casual Leave
          </h2>

          <p className="text-3xl font-bold mt-4">
            5
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-lg font-semibold">
            Sick Leave
          </h2>

          <p className="text-3xl font-bold mt-4">
            3
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-lg font-semibold">
            Paid Leave
          </h2>

          <p className="text-3xl font-bold mt-4">
            12
          </p>

        </div>

      </div>

      {/* Apply Leave Form */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          Apply Leave
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label
              htmlFor="leaveType"
              className="block mb-2 font-medium"
            >
              Leave Type
            </label>

            <select
              id="leaveType"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            >
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Paid Leave</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="fromDate"
              className="block mb-2 font-medium"
            >
              From Date
            </label>

            <input
              type="date"
              id="fromDate"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label
              htmlFor="toDate"
              className="block mb-2 font-medium"
            >
              To Date
            </label>

            <input
              type="date"
              id="toDate"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block mb-2 font-medium"
            >
              Reason
            </label>

            <input
              type="text"
              id="reason"
              placeholder="Enter reason"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90"
            >
              Apply Leave
            </button>

          </div>

        </form>

      </div>

      {/* Leave History */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Leave History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Leave Type
                </th>

                <th className="text-left py-3">
                  From
                </th>

                <th className="text-left py-3">
                  To
                </th>

                <th className="text-left py-3">
                  Reason
                </th>

                <th className="text-left py-3">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  Sick Leave
                </td>

                <td>
                  10 May 2026
                </td>

                <td>
                  11 May 2026
                </td>

                <td>
                  Fever
                </td>

                <td className="text-green-600 font-medium">
                  Approved
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">
                  Casual Leave
                </td>

                <td>
                  02 May 2026
                </td>

                <td>
                  03 May 2026
                </td>

                <td>
                  Personal Work
                </td>

                <td className="text-yellow-600 font-medium">
                  Pending
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}