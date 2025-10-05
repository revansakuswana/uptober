import video1 from "@/assets/Video 1.mp4";
import video2 from "@/assets/Video 2.mp4";
import video3 from "@/assets/Video 3.mp4";

export default function VideoPlayer() {
  const videos = [video1, video2, video3];
  return (
    <div className="bg-white border-2 rounded-lg ">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-[42px] sm:text-4xl font-medium p-2">
          Funniest UPTOBER Moments
        </h1>
        <div className="flex flex-wrap justify-between gap-8">
          {videos.map((src, index) => (
            <video
              key={index}
              src={src}
              controls
              className="w-[280px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
