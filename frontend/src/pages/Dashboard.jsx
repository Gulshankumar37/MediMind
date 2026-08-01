import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 p-8">

        {/* Welcome Card */}

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl shadow-2xl text-white p-10">

          <h1 className="text-5xl font-bold">
            👋 Welcome,
            <span className="text-yellow-300">
              {" "}
              {user?.username}
            </span>
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl">
            Upload your medical reports and let AI explain complex medical
            terms in simple language within seconds.
          </p>

          <div className="flex gap-5 mt-8 flex-wrap">

            <Link
              to="/upload"
              className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              📤 Upload Report
            </Link>

            <Link
              to="/reports"
              className="bg-blue-800 text-white px-7 py-3 rounded-xl hover:bg-blue-900 transition duration-300"
            >
              📑 My Reports
            </Link>

          </div>

        </div>

        {/* Stats */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-4">📄</div>

            <h2 className="text-3xl font-bold text-blue-600">
              Unlimited
            </h2>

            <p className="text-gray-600 mt-2">
              Upload Medical Reports
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-4">🤖</div>

            <h2 className="text-3xl font-bold text-cyan-600">
              AI Powered
            </h2>

            <p className="text-gray-600 mt-2">
              Medical Report Analysis
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

            <div className="text-5xl mb-4">⚡</div>

            <h2 className="text-3xl font-bold text-green-600">
              Instant
            </h2>

            <p className="text-gray-600 mt-2">
              Results in Seconds
            </p>

          </div>

        </div>

        {/* Features */}

        <div className="max-w-6xl mx-auto mt-12">

          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            🚀 Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition duration-300">

              <div className="text-4xl mb-4">📤</div>

              <h3 className="font-bold text-xl mb-2">
                Upload PDF
              </h3>

              <p className="text-gray-600">
                Upload blood tests, prescriptions and medical reports.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition duration-300">

              <div className="text-4xl mb-4">🧠</div>

              <h3 className="font-bold text-xl mb-2">
                AI Explanation
              </h3>

              <p className="text-gray-600">
                AI explains every medical term in simple English.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition duration-300">

              <div className="text-4xl mb-4">📚</div>

              <h3 className="font-bold text-xl mb-2">
                Report History
              </h3>

              <p className="text-gray-600">
                Access all previously uploaded reports anytime.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition duration-300">

              <div className="text-4xl mb-4">🔒</div>

              <h3 className="font-bold text-xl mb-2">
                Secure Storage
              </h3>

              <p className="text-gray-600">
                Your reports remain private and linked to your account.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Dashboard;
