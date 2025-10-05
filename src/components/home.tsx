import red from "@/assets/red.jpg";
import yellow from "@/assets/yellow.png";
import blue from "@/assets/blue.png";
import green from "@/assets/green.jpg";

export default function Home() {
  const images = [red, yellow, blue, green];
  return (
    <div id="home" className="bg-white border-2 rounded-lg">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-[42px] sm:text-4xl font-medium p-2">$UPTOBER</h1>
        <p className="text-center text-[9.3px] md:text-sm mb-4">
          Historically, October goes up. This time, for Radix - and a touch of
          meme-driven insanity.
        </p>
        <p className="text-center text-[9.3px] md:text-sm break-all">
          Resource Address:
          <span className="text-red-500">
            resource_rdx1tku8vlsav6cs0wj3h7nzp3kfvf0qmw5u529xyfvutr5lcx9l8g3hfg
          </span>
        </p>
        <div className="flex justify-center gap-0 md:gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Random ${index}`}
              className="w-[65px] sm:w-[168px] h-auto object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
