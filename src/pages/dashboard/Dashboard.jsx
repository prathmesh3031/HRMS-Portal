import MainLayout from "../../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">
            Attendance
          </h2>

          <p className="mt-2 text-gray-600">
            Checked In: 09:30 AM
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">
            Leave Balance
          </h2>

          <p className="mt-2 text-gray-600">
            12 Leaves Remaining
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">
            Payroll
          </h2>

          <p className="mt-2 text-gray-600">
            Salary Credited
          </p>
        </div>

      </div>

    </MainLayout>
  );
}