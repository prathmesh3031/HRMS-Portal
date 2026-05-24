import MainLayout from "../../layouts/MainLayout";

export default function Payroll() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Payroll
          </h1>

          <p className="text-gray-600 mt-2">
            Salary details and payslips
          </p>
        </div>

      </div>

      {/* Salary Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-lg font-semibold">
            Net Salary
          </h2>

          <p className="text-3xl font-bold mt-4">
            ₹85,000
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-lg font-semibold">
            Deductions
          </h2>

          <p className="text-3xl font-bold mt-4">
            ₹5,000
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-lg font-semibold">
            Bonus
          </h2>

          <p className="text-3xl font-bold mt-4">
            ₹10,000
          </p>

        </div>

      </div>

      {/* Salary Breakdown */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          Salary Breakdown
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>Basic Salary</span>
            <span>₹60,000</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>House Rent Allowance</span>
            <span>₹15,000</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Medical Allowance</span>
            <span>₹5,000</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Professional Tax</span>
            <span>- ₹2,500</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Provident Fund</span>
            <span>- ₹2,500</span>
          </div>

        </div>

      </div>

      {/* Payslip Table */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Payslip History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Month
                </th>

                <th className="text-left py-3">
                  Salary
                </th>

                <th className="text-left py-3">
                  Status
                </th>

                <th className="text-left py-3">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  May 2026
                </td>

                <td>
                  ₹85,000
                </td>

                <td className="text-green-600 font-medium">
                  Credited
                </td>

                <td>

                  <button
                    className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
                  >
                    Download
                  </button>

                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">
                  April 2026
                </td>

                <td>
                  ₹85,000
                </td>

                <td className="text-green-600 font-medium">
                  Credited
                </td>

                <td>

                  <button
                    className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
                  >
                    Download
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}