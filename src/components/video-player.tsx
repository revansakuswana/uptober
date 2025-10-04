export default function VideoPlayer() {
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4?random=1",
    "https://www.w3schools.com/html/mov_bbb.mp4?random=2",
    "https://www.w3schools.com/html/mov_bbb.mp4?random=3",
  ];
  return (
    <div className="bg-white border-2 rounded-lg">
      <div className="flex flex-wrap justify-center gap-4 p-8">
        {videos.map((src, index) => (
          <video
            key={index}
            src={src}
            controls
            className="w-64 h-64 rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
}
