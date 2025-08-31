import { Award, Clock, Code2, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Code2, label: 'Projects Completed', value: '10+' },
    { icon: Users, label: 'Happy Clients', value: '10+' },
    { icon: Award, label: 'Certifications', value: '4' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate backend engineer with expertise in building scalable, high-performance systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Backend Software Engineer with over 5 years of experience designing and 
                implementing robust, scalable backend systems. My expertise spans across multiple programming 
                languages, databases, and cloud platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating efficient APIs, optimizing database performance, and architecting 
                cloud-native solutions that can handle millions of requests. I'm committed to writing clean, 
                maintainable code and following best practices in software development.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Python</li>
                    <li>• Node.js/TypeScript</li>
                    <li>• Go</li>
                    <li>• C++</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Databases</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• PostgreSQL</li>
                    <li>• MongoDB</li>
                    <li>• Redis</li>
                    <li>• Elasticsearch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:shadow-glow transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;