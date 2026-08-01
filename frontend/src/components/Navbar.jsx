import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await api.get("/auth/logout");

      setUser(null);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <Link
        to="/reports"
        className="text-2xl font-bold tracking-wide"
      >
        🩺 MediMind AI
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">

        <Link
          to="/upload"
          className="hover:text-gray-200 transition duration-200"
        >
          Upload
        </Link>

        <Link
          to="/reports"
          className="hover:text-gray-200 transition duration-200"
        >
          My Reports
        </Link>

        <span className="font-semibold">
          👤 {user?.username}
        </span>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-200"
        >
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar;