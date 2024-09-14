export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen text-center bg-slate-200"
    >
      {/* Error Icon */}
      <div className="bg-white p-4 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-red-500 animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m0 4.5h.008v.008H12v-.008zm9-4.5a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Error Title */}
      <h1 className="text-6xl font-bold mt-8 text-red-500">Oops!</h1>

      {/* Error Message */}
      <p className="text-2xl mt-4">Sorry, an unexpected error has occurred.</p>

      {/* Secondary Message */}
      <p className="text-lg mt-2 italic text-gray-400">
        "Something went wrong"
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
}
