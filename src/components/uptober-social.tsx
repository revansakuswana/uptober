import { IconBrandX, IconBrandTelegram } from "@tabler/icons-react";

export default function UptoberSocial() {
  const socials = [
    {
      href: "https://x.com/uptober4radix",
      icon: IconBrandX,
      className:
        "h-10 w-full flex items-center justify-center bg-sky-500 hover:bg-orange-300 transition-colors transition-transform duration-500 ease-in-out hover:scale-105 border-2 rounded-lg",
    },
    {
      href: "https://t.me/uptober4radix",
      icon: IconBrandTelegram,
      className:
        "h-10 w-full flex items-center justify-center bg-sky-500 hover:bg-orange-300 transition-colors transition-transform duration-500 ease-in-out hover:scale-105 border-2 rounded-lg",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      {socials.map(({ href, icon: Icon, className }, index) => (
        <div key={index} className={className}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center w-full h-full">
              <Icon className="w-6 h-6" />
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
