const Skills = () => {
  const skills = {
    Frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    Others: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="hero-text">Skills</span>
        </h2>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-8">
              <h3 className="text-2xl font-semibold text-center text-primary">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center space-y-3"
                  >
                    <div className="tech-icon">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;