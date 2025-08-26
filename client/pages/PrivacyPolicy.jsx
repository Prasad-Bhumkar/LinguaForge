
const PrivacyPolicy = () => {
  return (
    const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is our privacy policy.
        </p>
      </div>
    </div>
  );
};
  );
};

export default PrivacyPolicy;
