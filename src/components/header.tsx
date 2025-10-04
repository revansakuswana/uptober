import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-y-3 bg-white">
      <div className="mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-10 px-4 py-4 md:px-8 md:py-6 max-w-[67rem]">
        <img
          src="https://img.freepik.com/vektor-gratis/logo-vektor-gradien-warna-warni-burung_343694-1365.jpg?semt=ais_hybrid&w=740&q=80"
          className="w-80 md:w-35 border-2 rounded-lg"
        />
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 w-full">
          <Button variant="default" href="#about">
            Home
          </Button>
          <Button variant="default" href="#about">
            About
          </Button>
          <Button variant="default" href="#projects">
            Projects
          </Button>
          <Button variant="default" href="#contact">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
