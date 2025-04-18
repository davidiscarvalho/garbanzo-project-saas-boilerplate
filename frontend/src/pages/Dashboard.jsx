const Dashboard = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-2 text-lg">Manage your account and services.</p>
      <a href="/user-details" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </a>
    </div>
  </div>
);

export default Dashboard;
