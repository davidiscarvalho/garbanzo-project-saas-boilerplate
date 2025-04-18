const UserDetails = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold">User Profile</h1>
      <p className="mt-2 text-lg">Manage your personal information.</p>
      <a href="/dashboard" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        Update Profile
      </a>
    </div>
  </div>
);

export default UserDetails;
