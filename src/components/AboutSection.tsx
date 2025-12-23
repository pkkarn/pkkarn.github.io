import { useInView } from '@/hooks/useParallax';
import { Code, BookOpen, MessageSquare } from 'lucide-react';

const AboutSection = () => {
  const { ref, isInView } = useInView(0.2);

  const highlights = [
    {
      icon: Code,
      title: 'Currently Learning',
      description: 'Graph Visualization',
    },
    {
      icon: BookOpen,
      title: 'Writing Articles',
      description: 'codechit.com',
      link: 'https://codechit.com',
    },
    {
      icon: MessageSquare,
      title: 'Ask Me About',
      description: 'Vue, JS Frameworks, Graphs',
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32" />
      
      <div 
        ref={ref}
        className="container mx-auto px-4"
      >
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate developer who thrives on building innovative solutions 
            and exploring the depths of web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
