import MainLayout from "../../layouts/MainLayout";

export default function Documents() {
  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Documents Center
          </h1>

          <p className="text-gray-600 mt-2">
            Access and download official documents
          </p>

        </div>

      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">

        <label
          htmlFor="searchDocuments"
          className="block mb-3 font-medium"
        >
          Search Documents
        </label>

        <input
          type="text"
          id="searchDocuments"
          placeholder="Search documents..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Document Card */}
        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold">
            Offer Letter
          </h2>

          <p className="text-gray-600 mt-3">
            Official employment offer document
          </p>

          <button
            className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
          >
            Download
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold">
            Salary Slip
          </h2>

          <p className="text-gray-600 mt-3">
            Monthly salary statement
          </p>

          <button
            className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
          >
            Download
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold">
            Form 16
          </h2>

          <p className="text-gray-600 mt-3">
            Tax deduction certificate
          </p>

          <button
            className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
          >
            Download
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold">
            HR Policies
          </h2>

          <p className="text-gray-600 mt-3">
            Company HR guidelines and policies
          </p>

          <button
            className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
          >
            Download
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold">
            Experience Letter
          </h2>

          <p className="text-gray-600 mt-3">
            Employee experience certificate
          </p>

          <button
            className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
          >
            Download
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold">
            NDA Agreement
          </h2>

          <p className="text-gray-600 mt-3">
            Confidentiality agreement document
          </p>

          <button
            className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
          >
            Download
          </button>

        </div>

      </div>

    </MainLayout>
  );
}