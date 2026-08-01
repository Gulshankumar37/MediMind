import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import api from "../services/api";

const ReportDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [report, setReport] = useState(null);

  const [loading, setLoading] = useState(true);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const res = await api.get(`/report/${id}`);

      setReport(res.data.report);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch report.");
    } finally {
      setLoading(false);
    }
  };

  const deleteReport = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      setDeleting(true);

      await api.delete(`/report/${id}`);

      alert("Report deleted successfully.");

      navigate("/reports");
    } catch (error) {
      console.log(error);
      alert("Failed to delete report.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10 px-4">

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <div className="flex flex-col md:flex-row justify-between items-start gap-5 mb-8">

            <div>
              <h1 className="text-4xl font-bold text-blue-700">
                📄 {report.originalName}
              </h1>

              <p className="text-gray-500 mt-3">
                Uploaded on{" "}
                {new Date(report.createdAt).toLocaleString()}
              </p>
            </div>

            <button
              onClick={deleteReport}
              disabled={deleting}
              className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-6 py-3 rounded-lg transition font-semibold"
            >
              {deleting ? "Deleting..." : "🗑 Delete Report"}
            </button>

          </div>

          <div className="bg-gray-50 border rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-semibold mb-4">
              📑 Extracted Report
            </h2>

            <p className="whitespace-pre-wrap leading-8 text-gray-700">
              {report.reportText}
            </p>

          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">

            <h2 className="text-2xl font-semibold text-blue-700 mb-5">
              🤖 AI Analysis
            </h2>

            <div className="prose max-w-none">
              <ReactMarkdown>
                {report.aiSummary}
              </ReactMarkdown>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ReportDetails;