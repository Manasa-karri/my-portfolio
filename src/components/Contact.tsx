import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sai-manasa-karri-860945270/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Manasa-karri",
      color: "hover:text-purple-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "https://mail.google.com/mail/?view=cm&to=saimanasa1119@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="hero-text">Let's Connect</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or simply chatting about tech. 
            Feel free to reach out via any of the platforms below!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className={`border-primary/50 hover:border-primary bg-card hover:scale-110 transition-all duration-300 ${link.color} group`}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <IconComponent className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {link.name}
                </Button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;