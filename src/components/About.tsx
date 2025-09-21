const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="hero-text">Who am I</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey, I'm <span className="text-primary font-semibold">YOUR NAME</span>! I'm currently pursuing a degree in{" "}
                <span className="text-accent font-semibold">COMPUTER SCIENCE</span> and working my way into becoming a strong{" "}
                <span className="text-primary font-semibold">FULLSTACK DEVELOPER</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy solving problems with code, learning new technologies, and building web apps that actually work well and look great.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about creating things — whether it's writing logic, fixing bugs, or just making the UI feel smooth. I believe in constantly learning and pushing boundaries.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold hero-text">Education</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-foreground">Computer Science</h4>
                  <p className="text-muted-foreground">Sept 2023 - May 2027</p>
                  <p className="text-primary font-medium">Your University Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;