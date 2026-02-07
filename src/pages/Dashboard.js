const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        MEDHASHALA Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <div className="bg-white p-4 shadow rounded">
          Total Exams
        </div>

        <div className="bg-white p-4 shadow rounded">
          Active Students
        </div>

        <div className="bg-white p-4 shadow rounded">
          Daily Attempts
        </div>

      </div>
    </div>
  );
};

export default Dashboard;