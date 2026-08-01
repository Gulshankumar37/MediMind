import { useState } from "react";
import api from "../services/api";
import ReactMarkdown from "react-markdown";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const UploadReport = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const uploadReport = async () => {
    if (!file) {
      alert("Choose a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("report", file);

    try {
      setLoading(true);

      const res = await api.post("/report/upload", formData);

      setSummary(res.data.report.aiSummary);
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex justify-center items-start py-12 px-4">

        <div className="w-full max-w-5xl">

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10">

            <h1 className="text-4xl font-bold text-center text-blue-700">
              🩺 MediMind AI
            </h1>

            <p className="text-center text-gray-600 mt-2">
              Upload your medical report and get an AI explanation.
            </p>

            <div className="mt-10">

              <label
                htmlFor="report"
                className="block border-2 border-dashed border-blue-400 rounded-2xl p-12 text-center cursor-pointer transition hover:border-blue-600 hover:bg-blue-50"
              >

                <div className="text-6xl">
                  📄
                </div>

                <h2 className="text-xl font-semibold mt-4">
                  Click to Upload PDF
                </h2>

                <p className="text-gray-500 mt-2">
                  Only PDF files are supported
                </p>

                <input
                  id="report"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />

              </label>

              {file && (
                <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4 flex items-center justify-between">

                  <div>
                    <p className="font-semibold text-green-700">
                      Selected File
                    </p>

                    <p>{file.name}</p>
                  </div>

                  <span className="text-3xl">
                    ✅
                  </span>

                </div>
              )}

              <div className="text-center mt-8">

                <button
                  onClick={uploadReport}
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 disabled:opacity-50"
                >
                  {loading ? "Analyzing..." : "Upload & Analyze"}
                </button>

              </div>

            </div>

          </div>

          {loading && (
            <div className="mt-8">
              <Loader />
            </div>
          )}

          {summary && (

            <div className="mt-10 bg-white rounded-3xl shadow-2xl p-8 animate-pulse">

              <h2 className="text-3xl font-bold text-blue-700 mb-6">
                🤖 AI Medical Report Analysis
              </h2>

              <div className="prose max-w-none">

                <ReactMarkdown>
                  {summary}
                </ReactMarkdown>

              </div>

            </div>

          )}

        </div>

      </div>
    </>
  );
};

export default UploadReport;