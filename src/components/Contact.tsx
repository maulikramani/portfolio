import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formRef.current?.name.value,
          email: formRef.current?.email.value,
          title: formRef.current?.subject.value,
          message: formRef.current?.message.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .finally(() => {
        setSuccessMessage("Message sent successfully!");
        formRef.current?.reset();

        setTimeout(() => setSuccessMessage(""), 2000);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maulikramani93@gmail.com",
      href: "mailto:maulikramani93@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7043275411",
      href: "tel:+917043275411",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/maulikramani",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/maulikramani",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/maulikramani6",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 glow-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your backend vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Let's Talk
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you need a robust API, database optimization,
                or complete backend architecture, I'd love to hear about your
                requirements.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Current Availability
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">
                  Available for new projects
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to both contract work and full-time opportunities. Typical
                response time: 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Send a Message
            </h3>

            <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  placeholder="Project Discussion"
                  name="subject"
                  className="bg-secondary/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project requirements, timeline, and any specific technologies you'd like to use..."
                  rows={6}
                  name="message"
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                  required
                />
              </div>

              <Button className="w-full group shadow-glow">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>

            {successMessage && (
              <p className="mt-4 text-center text-green-500 font-medium">
                {successMessage}
              </p>
            )}

            {/* <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Note:</strong> This is a demo portfolio. 
                The form is not connected to a backend service yet.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
