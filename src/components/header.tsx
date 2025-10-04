import Button from "@/components/ui/button";
import logo from "@/assets/IMG_2081.png";

export default function Header() {
  return (
    <header className="w-full border-y-3 bg-white">
      <div className="mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-10 px-4 py-4 md:px-8 md:py-6 max-w-[67rem]">
        <img src={logo} className="w-full md:w-35 border-2 rounded-lg" />
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 w-full">
          <Button variant="default" href="#about">
            Home
          </Button>
          <Button variant="default" href="#about">
            About
          </Button>
          <Button variant="default" href="#projects">
            Comic
          </Button>
          <Button variant="default" href="#contact">
            Incentives
          </Button>
          <Button variant="default" href="#contact">
            Buy
          </Button>
        </div>
      </div>
    </header>
  );
}
