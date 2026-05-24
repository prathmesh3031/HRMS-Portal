import MainLayout from "../../layouts/MainLayout";

export default function Organization() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Organization Hierarchy
          </h1>

          <p className="text-gray-600 mt-2">
            View organizational structure and reporting hierarchy
          </p>

        </div>

      </div>

      {/* CEO */}
      <div className="flex flex-col items-center">

        <div className="bg-black text-white rounded-2xl p-6 w-72 text-center shadow-lg">

          <h2 className="text-2xl font-bold">
            CEO
          </h2>

          <p className="mt-2">
            Rahul Sharma
          </p>

        </div>

        {/* Connector Line */}
        <div className="w-1 h-12 bg-gray-400"></div>

        {/* Managers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* HR Manager */}
          <div className="flex flex-col items-center">

            <div className="bg-white rounded-2xl shadow p-6 w-64 text-center">

              <h3 className="text-xl font-semibold">
                HR Manager
              </h3>

              <p className="mt-2 text-gray-600">
                Sneha Verma
              </p>

            </div>

            <div className="w-1 h-10 bg-gray-300"></div>

            <div className="bg-gray-100 rounded-xl p-4 w-56 text-center">

              <p className="font-medium">
                HR Executive
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Priya Shah
              </p>

            </div>

          </div>

          {/* Engineering Manager */}
          <div className="flex flex-col items-center">

            <div className="bg-white rounded-2xl shadow p-6 w-64 text-center">

              <h3 className="text-xl font-semibold">
                Engineering Manager
              </h3>

              <p className="mt-2 text-gray-600">
                Amit Kumar
              </p>

            </div>

            <div className="w-1 h-10 bg-gray-300"></div>

            <div className="bg-gray-100 rounded-xl p-4 w-56 text-center">

              <p className="font-medium">
                Accessibility Engineer
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Prathmesh Yadav
              </p>

            </div>

          </div>

          {/* Finance Manager */}
          <div className="flex flex-col items-center">

            <div className="bg-white rounded-2xl shadow p-6 w-64 text-center">

              <h3 className="text-xl font-semibold">
                Finance Manager
              </h3>

              <p className="mt-2 text-gray-600">
                Karan Mehta
              </p>

            </div>

            <div className="w-1 h-10 bg-gray-300"></div>

            <div className="bg-gray-100 rounded-xl p-4 w-56 text-center">

              <p className="font-medium">
                Accountant
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Neha Joshi
              </p>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}