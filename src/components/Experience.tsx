import { Building, Calendar, MapPin, TrendingUp, Users, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   company: 'Infocusp Innovations',
    //   position: 'Software Engineer',
    //   duration: '2024 - Present',
    //   location: 'Ahmedabad, India',
    //   description: 'Lead backend development for enterprise-scale applications serving 10M+ users. Architect microservices and manage team of 5 engineers.',
    //   achievements: [
    //     'Reduced API response times by 60% through optimization',
    //     'Led migration to microservices architecture',
    //     'Implemented CI/CD pipelines reducing deployment time by 80%',
    //     'Mentored 3 junior developers'
    //   ],
    //   technologies: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    //   icon: Building,
    //   color: 'bg-blue-500'
    // },
    {
      company: 'Crest Data',
      position: 'Senior Software Engineer',
      duration: '2020 - Present',
      location: 'Ahmedabad, India',
      description: 'Built scalable backend systems from scratch for a fintech startup. Worked closely with product team to deliver features rapidly.',
      achievements: [
        'Designed and implemented core API architecture',
        'Integrated 15+ third-party payment providers',
        'Achieved 99.9% uptime for critical financial services',
        'Reduced infrastructure costs by 40%'
      ],
      technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'GCP', 'Terraform', 'API Gateway', 'Microservices'],
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      company: 'Google (Contractor Engineer)',
      position: 'Full Stack Developer',
      duration: '2023',
      location: 'Remote',
      description: 'Developer secret rotator tool for the Google Secret Manager service as a competitor of the Hashicorp Vault.',
      achievements: [
        'Zero downtime database password rotation',
        'Plugin based architecture',
        'Secret Migration Support from hashicorp vault to google secret manager',
        'Secret Rotation Support for different types of secrets'
      ],
      technologies: ['Python', 'FastAPI', 'Google Secret Manager', 'Hashicorp Vault', 'Docker', 'GCP', 'Terraform', 'Plugin Architecture', 'Secret Rotation', 'Secret Migration', 'PostgreSQL', 'Oracle DB'],
      icon: Users,
      color: 'bg-purple-500'
    },
  //   {
  //     company: 'Code Academy Bootcamp',
  //     position: 'Junior Developer',
  //     duration: '2018 - 2019',
  //     location: 'Remote',
  //     description: 'Started my journey in software development with intensive training in modern web technologies and best practices.',
  //     achievements: [
  //       'Completed 6-month intensive bootcamp',
  //       'Built 10+ projects from scratch',
  //       'Learned fundamental programming concepts',
  //       'Collaborated on team projects'
  //     ],
  //     technologies: ['JavaScript', 'Node.js', 'HTML/CSS', 'Git'],
  //     icon: Zap,
  //     color: 'bg-orange-500'
  //   }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through different roles and the growth in backend development expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline Dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 ${exp.color} rounded-full shadow-lg`}>
                  <exp.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 group hover:shadow-glow transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-3">Key Achievements</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills Gained Over Time</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Languages & Frameworks</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js, Python, Go, TypeScript, Express, Hono, FastAPI, Django
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Databases & Tools</h4>
                <p className="text-sm text-muted-foreground">
                  PostgreSQL, MongoDB, Redis, Elasticsearch, Docker, Kubernetes
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Cloud & DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  AWS, GCP, Azure, CI/CD, Infrastructure as Code, Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;