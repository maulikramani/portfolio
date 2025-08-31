import { ExternalLink, Github, Database, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Projects = () => {
  const projects = [
    {
      title: "Instant PDF Label Cropper",
      description:
        "Scalable PDF processing tool to make online sellers life easy. It delects the label from the PDF and returns the cropped PDF for multiple e-commerce platforms like Meesho, Flipkart, Amazon etc.",
      tech: [
        "Python",
        "next.js",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "Terraform",
      ],
      features: [
        "Instant Label Cropping",
        "Multiple E-commerce Platform Support",
        "Scalable PDF Processing",
        "Fast Response Time",
      ],
      metrics: {
        processing: "10k+ pdf/day",
        latency: "<100ms processing",
        accuracy: "99.5% accurate extraction",
      },
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      live_demo_enabled: true,
      live_demo_url: "https://www.instantlabelcrop.com/",
      live_demo_hover_text: "View Live Demo",
    },
    {
      title: "E-commerce API Gateway",
      description:
        "High-performance microservices API gateway handling 1M+ requests daily with advanced caching and load balancing.",
      tech: [
        "Node.js",
        "Hono",
        "Redis",
        "PostgreSQL",
        "Docker",
        "AWS",
        "API Gateway",
        "AWS Lambda",
        "Terraform",
      ],
      features: [
        "Rate limiting and API throttling",
        "Real-time analytics dashboard",
        "Microservices orchestration",
        "Automated failover system",
      ],
      metrics: {
        performance: "99.9% uptime",
        scale: "1M+ requests/day",
        speed: "<100ms response time",
      },
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      live_demo_enabled: false,
      live_demo_hover_text: "Unavailable due to NDA agreement.",
    },
    {
      title: "Payment Orchestration System",
      description:
        "Enterprise-grade recurring payment orchestration system for financial transactions with encryption, fraud detection, and compliance monitoring.",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Kubernetes",
        "Docker",
        "GCP",
        "CronJobs",
        "Redis",
        "AWS",
        "API Gateway",
        "AWS Lambda",
        "Stripe",
        "Authnet",
        "React.js",
        "Terraform",
      ],
      features: [
        "End-to-end encryption",
        "Fraud detection algorithms",
        "PCI DSS compliance",
        "Multi-factor authentication",
      ],
      metrics: {
        security: "100% PCI compliant",
        transactions: "$100K+ monthly",
        fraud: "0.02% fraud rate",
      },
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
      live_demo_enabled: false,
      live_demo_hover_text: "Unavailable due to NDA agreement.",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of robust backend systems I've architected and developed
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:shadow-glow transition-all duration-500"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3">
                      Key Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            variant="outline"
                            size="sm"
                            className="group"
                            disabled={true}
                          >
                            <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            View Code
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Can't share due to NDA agreement.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button
                            variant="outline"
                            size="sm"
                            className="group"
                            disabled={!project.live_demo_enabled}
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            <a href={project.live_demo_url} target="blank">
                              Live Demo
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.live_demo_hover_text}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-foreground mb-4">
                    Project Metrics
                  </h4>
                  {Object.entries(project.metrics).map(
                    ([key, value], metricIndex) => (
                      <div
                        key={metricIndex}
                        className="glass-card p-4 text-center"
                      >
                        <div className="text-lg font-bold text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        {/* <div className="text-center mt-16">
          <div className="glass-card p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-3">Want to see more?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Check out my complete portfolio on GitHub
            </p>
            <Button className="group">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              View All Projects
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
