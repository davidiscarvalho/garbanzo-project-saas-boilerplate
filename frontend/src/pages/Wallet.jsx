const Wallet = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Your Wallet</h1>
      <p className="mt-2 text-lg">Manage your payment methods and transactions.</p>
      <a href="/dashboard" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        Add Funds
      </a>
    </div>
  </div>
);

export default Wallet;
