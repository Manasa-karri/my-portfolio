import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-nav-bg backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <div className="flex space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border">
            <button
              onClick={() => scrollToSection("hero")}
              className="nav-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;