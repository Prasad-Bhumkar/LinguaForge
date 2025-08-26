import { useEffect, useState } from "react";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  // Fetch users on component mount
  useEffect(() => {
    fetchDemo();
  }, []);

  // Example of how to fetch data from the server (if needed)
  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = await response.json();
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-green-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* TODO: FUSION_GENERATION_APP_PLACEHOLDER replace everything here with the actual app! */}
          <h1 className="text-2xl font-semibold text-slate-800 flex items-center justify-center gap-3">
            <svg
              className="animate-spin h-8 w-8 text-slate-400"
              viewBox="0 0 50 50"
            >
              <circle
                className="opacity-30"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
              />
              <circle
                className="text-slate-600"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset="75"
              />
            </svg>
            Generating your app...
          </h1>
          <p className="mt-4 text-slate-600 max-w-md">
            Watch the chat on the left for updates that might need your attention
            to finish generating
          </p>
          <p className="mt-4 hidden max-w-md">{exampleFromServer}</p>
        </div>
      </div>
    </div>
  );
}
