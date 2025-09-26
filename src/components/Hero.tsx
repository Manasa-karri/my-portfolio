import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <p className="text-lg sm:text-xl text-muted-foreground animate-float">
            Hello, I'm <span className="text-primary font-medium">MANASA</span>. An Aspiring Engineer.
          </p>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
            <span className="hero-text">FULLSTACK</span>{" "}
            <span className="hero-text">DEVELOPER</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white font-medium px-8 py-4 text-lg rounded-full animate-glow"
              onClick={() => window.open("/Resumegt.pdf", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
        
        {/* Floating decoration */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
    </section>
  );
};

export default Hero;