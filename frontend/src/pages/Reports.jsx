import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import api from "../services/api";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    try {
      const res = await api.get("/report/all");

      console.log(res.data);

      setReports(res.data.reports);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-10">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          🩺 My Medical Reports
        </h1>

        {loading ? (
          <Loader />
        ) : reports.length === 0 ? (
          <div className="text-center text-xl">
            No Reports Found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reports.map((report) => (

              <div
                key={report._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6"
              >

                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  📄 {report.originalName}
                </h2>

                <p className="text-gray-500 text-sm">
                  Uploaded on
                </p>

                <p className="font-semibold mb-4">
                  {new Date(report.createdAt).toLocaleString()}
                </p>

                <p className="text-gray-700 line-clamp-5">
                  {report.aiSummary
                    ? report.aiSummary.substring(0, 180)
                    : "No AI Summary Available"}
                  ...
                </p>

                <Link
                  to={`/report/${report._id}`}
                  className="block mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                >
                  View Report
                </Link>

              </div>

            ))}

          </div>
        )}

      </div>
    </>
  );
};

export default Reports;