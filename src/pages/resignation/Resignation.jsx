import MainLayout from "../../layouts/MainLayout";

export default function Resignation() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Resignation Portal
          </h1>

          <p className="text-gray-600 mt-2">
            Submit and track your resignation request
          </p>

        </div>

      </div>

      {/* Resignation Form */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10">

        <h2 className="text-2xl font-semibold mb-6">
          Submit Resignation
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label
              htmlFor="employeeName"
              className="block mb-2 font-medium"
            >
              Employee Name
            </label>

            <input
              type="text"
              id="employeeName"
              defaultValue="Prathmesh Yadav"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label
              htmlFor="employeeId"
              className="block mb-2 font-medium"
            >
              Employee ID
            </label>

            <input
              type="text"
              id="employeeId"
              defaultValue="EMP1024"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label
              htmlFor="lastWorkingDay"
              className="block mb-2 font-medium"
            >
              Last Working Day
            </label>

            <input
              type="date"
              id="lastWorkingDay"
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

            <select
              id="reason"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            >
              <option>Career Growth</option>
              <option>Higher Education</option>
              <option>Relocation</option>
              <option>Personal Reasons</option>
              <option>Other</option>
            </select>

          </div>

          <div className="md:col-span-2">

            <label
              htmlFor="comments"
              className="block mb-2 font-medium"
            >
              Additional Comments
            </label>

            <textarea
              id="comments"
              rows="5"
              placeholder="Write your comments..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            ></textarea>

          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-2xl font-medium hover:opacity-90"
            >
              Submit Resignation
            </button>

          </div>

        </form>

      </div>

      {/* Status Tracking */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Resignation Status
        </h2>

        <div className="space-y-6">

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <p className="font-semibold">
                HR Review
              </p>

              <p className="text-gray-600 text-sm">
                Waiting for HR approval
              </p>

            </div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl text-sm">
              Pending
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <p className="font-semibold">
                Manager Approval
              </p>

              <p className="text-gray-600 text-sm">
                Reporting manager approval
              </p>

            </div>

            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm">
              Not Started
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <p className="font-semibold">
                Final Settlement
              </p>

              <p className="text-gray-600 text-sm">
                Salary and clearance process
              </p>

            </div>

            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm">
              Not Started
            </span>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}