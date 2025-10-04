import red from "@/assets/red.jpg";
import yellow from "@/assets/yellow.png";
import blue from "@/assets/blue.png";
import green from "@/assets/green.jpg";

export default function Home() {
  const images = [red, yellow, blue, green];
  return (
    <div className="bg-white border-2 rounded-lg">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-medium mb-4">$UPTOBER</h1>
        <p className="text-md text-center mb-4">
          Historically, October goes up. This time, for Radix - and a touch of
          meme-driven insanity.
        </p>
        <p className="text-md text-center break-all">
          Resource Address:
          resource_rdx1tku8vlsav6cs0wj3h7nzp3kfvf0qmw5u529xyfvutr5lcx9l8g3hfg
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, index) => (
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
