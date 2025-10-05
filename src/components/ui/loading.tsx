export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-4 h-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce"></div>
      </div>
      <p className="text-xl font-semibold tracking-wide">Loading...</p>
    </div>
  );
}
