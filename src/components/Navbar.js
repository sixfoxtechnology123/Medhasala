const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold">Learning Platform</h1>

      <button
        className="bg-red-500 text-white px-4 py-1 rounded"
        onClick={() => {
          localStorage.removeItem("token");
          window.location = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;