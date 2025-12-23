import { useParallax } from '@/hooks/useParallax';
import { Button } from '@/components/ui/button';
import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { scrollY, mousePosition } = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-[120%] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating 3D elements */}
      <div
        className="absolute w-32 h-32 rounded-full bg-primary/20 blur-3xl top-1/4 left-1/4 animate-float"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full bg-accent-foreground/20 blur-3xl bottom-1/4 right-1/4 animate-float"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          animationDelay: '-3s',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto parallax-layer"
        style={{
          transform: `translateY(${scrollY * -0.2}px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
        }}
      >
        <div className="mb-6 animate-fade-up [animation-fill-mode:forwards]" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up [animation-fill-mode:forwards]"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <span className="text-foreground">Hi, I'm</span> <span className="text-gradient">PK Karn</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up [animation-fill-mode:forwards]"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          A software developer with more than 5 years of experience, currently churning <span className="text-primary">GenAI implementation</span> along with <span className="text-accent-foreground">pretty cool stuff</span> that you can checkout in socials or github. you know <span className="text-primary">something fancy</span>
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-up [animation-fill-mode:forwards]"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <Button size="lg" className="animate-glow" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-card/50 hover:bg-card text-foreground" asChild>
            <a href="mailto:p.k.karn786@gmail.com">
              <Mail className="mr-2 h-4 w-4 text-foreground" />
              Get in Touch
            </a>
          </Button>
        </div>

        <div
          className="flex gap-4 justify-center animate-fade-up [animation-fill-mode:forwards]"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          <a
            href="https://linkedin.com/in/pkkarn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin className="h-5 w-5 text-foreground" />
          </a>
          <a
            href="https://github.com/pkkarn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="h-5 w-5 text-foreground" />
          </a>
          <a
            href="https://blog.logchit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <span className="text-sm font-mono text-foreground">✍️</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
