export default function Home() {
  const randomImages = [
    "https://picsum.photos/200/200?random=1",
    "https://picsum.photos/200/200?random=2",
    "https://picsum.photos/200/200?random=3",
  ];
  return (
    <div className="bg-white border-2 rounded-lg">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">$UPTOBER For Radix</h1>
        <p className="text-lg text-center max-w-2xl mb-4">
          October is always UP, this time for Radix.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {randomImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Random ${index}`}
              className="w-full max-w-[200px] h-auto rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
