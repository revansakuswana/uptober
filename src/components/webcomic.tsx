import comic1 from "@/assets/IMG_2042.png";
import comic2 from "@/assets/IMG_2055.png";
import comic3 from "@/assets/IMG_2049.png";
import comic4 from "@/assets/IMG_2050.png";
import comic5 from "@/assets/IMG_2051.png";

export default function Webcomic() {
  const images = [comic1, comic2, comic3, comic4, comic5];

  return (
    <div className="bg-white border-2 rounded-lg">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-[42px] sm:text-4xl font-medium p-2">
          Read the ‘UPTOBER vs Bear Demons’
        </h1>
        <p className="mb-6 text-[9.3px] md:text-sm">
          Learn about the backstory of UPTOBER!
        </p>

        <p className="text-[9.3px] md:text-sm">Here's a few panels of comic:</p>

        <div className="flex flex-wrap justify-center gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Comic panel ${index + 1}`}
              className="w-full max-w-[200px] h-auto object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
