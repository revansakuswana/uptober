import video1 from "@/assets/Video 1.mp4";
import video2 from "@/assets/Video 2.mp4";
import video3 from "@/assets/Video 3.mp4";

export default function VideoPlayer() {
  const videos = [video1, video2, video3];
  return (
    <div id="content" className="bg-white border-2 rounded-lg p-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-full overflow-hidden">
        {videos.map((src, index) => (
          <video
            key={index}
            src={src}
            controls
            className="w-[250px] sm:w-[180px] md:w-[250px] lg:w-[280px] object-cover sm:w-"
          />
        ))}
      </div>
    </div>
  );
}
