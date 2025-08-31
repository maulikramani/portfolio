import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold font-mono glow-text">
              &lt;MR_Backend_Dev /&gt;
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate backend engineer crafting scalable, robust systems that power modern applications.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/maulikramani" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/maulikramani" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:maulikramani93@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Services', 'Projects', 'Experience', 'LeetCode', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Tech Stack</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Node.js • Python • PostgreSQL</p>
              <p>AWS • Docker • Kubernetes</p>
              <p>MongoDB • Redis • GraphQL</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Maulik Ramani. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Built with <Heart className="w-4 h-4 text-red-500" /> and <Code className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;