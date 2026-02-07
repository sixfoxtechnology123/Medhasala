import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white p-5">
      <h2 className="text-xl font-bold mb-6">MEDHASHALA</h2>

      <nav className="space-y-3">
        <Link to="/dashboard" className="block hover:text-yellow-300">
          Dashboard
        </Link>

        <Link to="/exams" className="block hover:text-yellow-300">
          Exams
        </Link>

        <Link to="/videos" className="block hover:text-yellow-300">
          Videos
        </Link>

        <Link to="/blogs" className="block hover:text-yellow-300">
          Blogs
        </Link>

        <Link to="/doubts" className="block hover:text-yellow-300">
          Doubt Forum
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;