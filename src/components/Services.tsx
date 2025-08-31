import { 
  Plug, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Settings,
  BarChart3,
  Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plug,
      title: 'API Development',
      description: 'Design and build RESTful APIs and GraphQL endpoints that are fast, secure, and scalable.',
      features: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Rate Limiting']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimize database schemas and queries for maximum performance and data integrity.',
      features: ['Schema Design', 'Query Optimization', 'Data Modeling', 'Migration Strategies']
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Build cloud-native applications using AWS, Azure, or Google Cloud Platform.',
      features: ['Microservices', 'Serverless', 'Container Orchestration', 'Auto Scaling']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Implement robust security measures to protect your applications and data.',
      features: ['Authentication', 'Authorization', 'Data Encryption', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance application performance through caching, load balancing, and optimization.',
      features: ['Caching Strategies', 'Load Balancing', 'Database Tuning', 'Code Optimization']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Integrate third-party services and APIs to extend your application functionality.',
      features: ['Third-party APIs', 'Webhook Integration', 'Data Synchronization', 'Legacy Migration']
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Analytics',
      description: 'Implement comprehensive logging, monitoring, and analytics for your backend systems.',
      features: ['Application Monitoring', 'Error Tracking', 'Performance Metrics', 'Log Analysis']
    },
    {
      icon: Globe,
      title: 'DevOps & Deployment',
      description: 'Set up CI/CD pipelines and deployment strategies for reliable software delivery.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Deployment', 'Environment Management']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text">
            Services I Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive backend development services to power your applications and drive business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 group hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="text-xs text-muted-foreground flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project requirements and build something amazing together.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;