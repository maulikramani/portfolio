import { ArrowDown, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="text-primary w-8 h-8 opacity-60" />
      </div>
      <div
        className="absolute top-32 right-16 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Database className="text-accent w-10 h-10 opacity-60" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Server className="text-primary w-6 h-6 opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-slide-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/images/profile.png"
                alt="Maulik Ramani"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-4 border-primary/20 shadow-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
            <span className="bg-hero-gradient bg-clip-text text-transparent glow-text">
              Maulik Ramani
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground">
            Backend Developer
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Crafting robust, scalable backend systems that power modern
            applications. Specialized in API design, database optimization, and
            cloud architecture.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay"
            style={{ animationDelay: "1s" }}
          >
            <Button size="lg" className="group shadow-glow">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div
          className="mt-16 animate-fade-in-delay"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "FastAPI", "Django", "Flask",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "GCP",
              "Azure",
              "Docker",
              "Kubernetes",
              "Microservices",
              "GraphQL",
              "REST API",
              "Security",
              "LLM Integration",
              "Unit Testing",
              "React.js"
            ].map((tech) => (
              <span
                key={tech}
                className="glass-card px-4 py-2 text-sm font-medium hover:shadow-glow transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
