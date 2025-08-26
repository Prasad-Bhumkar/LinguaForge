
const Support = () => {
  return (
    const Support = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Support</h1>
        <p className="text-lg text-gray-600 mb-8">
          If you need help, please reach out to us.
        </p>
      </div>
    </div>
  );
};
  );
};

export default Support;
