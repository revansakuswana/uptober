import Button from "@/components/ui/button";
import logo from "@/assets/IMG_2081.png";

export default function Header() {
  return (
    <header className="w-full border-y-3 bg-white">
      <div className="mx-auto flex flex-col md:flex-row md:justify-between items-center gap-10 sm:gap-2 lg:gap-8 px-14 py-14 md:px-6 md:py-6 max-w-[67rem]">
        <img src={logo} className="w-full md:w-35 border-2 rounded-lg" />
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 sm:gap-6 lg:gap-8 w-full">
          <Button variant="default" href="#about">
            About
          </Button>
          <Button variant="default" href="#content">
            Content
          </Button>
          <Button variant="default" href="#comic">
            Comic
          </Button>
          <Button variant="default" href="#incentives">
            Incentives
          </Button>
          <Button variant="default" href="#buy">
            Buy
          </Button>
        </div>
      </div>
    </header>
  );
}
