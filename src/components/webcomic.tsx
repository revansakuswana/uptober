export default function Webcomic() {
  const images = [
    "https://picsum.photos/200/200?random=1",
    "https://picsum.photos/200/200?random=2",
    "https://picsum.photos/200/200?random=3",
  ];

  return (
    <div className="bg-white border-2 rounded-lg">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-medium mb-4">
          Read the ‘UPTOBER vs Bear Demons’
        </h1>
        <p className="mb-6">Learn about the backstory of UPTOBER!</p>

        <p>Here's a few panels of comic:</p>

        <div className="flex flex-wrap justify-center gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Comic panel ${index + 1}`}
              className="w-full max-w-[200px] h-auto object-cover shadow-md rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
