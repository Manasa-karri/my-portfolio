import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import partnrImage from "@/assets/Delicia.png";
import watrImage from "@/assets/Profound.png";

const Projects = () => {
  const projects = [
    {
      title: "DELICIA",
      description: "A recipe-sharing platform to discover, post, and personalize culinary experiences.",
      image: partnrImage,
      liveUrl: null,
      githubUrl: "https://github.com/Manasa-karri/DELICIA",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "PROFOUND",
      description: "A networking platform to connect people in tech through shared skills and interests.",
      image: watrImage,
      liveUrl: "https://pro-found.vercel.app/",
      githubUrl: "https://github.com/Manasa-karri/PRO-FOUND",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="hero-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold hero-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;