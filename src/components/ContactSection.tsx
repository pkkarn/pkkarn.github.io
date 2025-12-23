import { useInView } from '@/hooks/useParallax';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Code2, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const { ref, isInView } = useInView(0.2);

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'p.k.karn786@gmail.com',
      href: 'mailto:p.k.karn786@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pkkarn',
      href: 'https://linkedin.com/in/pkkarn',
    },
    {
      icon: Code2,
      label: 'HackerRank',
      value: 'pk2psp',
      href: 'https://www.hackerrank.com/pk2psp',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div 
          className={`max-w-2xl mx-auto ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="grid gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-semibold group-hover:text-primary transition-colors duration-300">
                    {link.value}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          <div 
            className={`text-center mt-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <Button size="lg" className="animate-glow" asChild>
              <a href="mailto:p.k.karn786@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
