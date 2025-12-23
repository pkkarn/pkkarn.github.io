import { useInView, useParallax } from '@/hooks/useParallax';

const skills = [
  { name: 'Vue.js', color: '142 52% 45%' },
  { name: 'JavaScript', color: '52 95% 45%' },
  { name: 'TypeScript', color: '211 60% 48%' },
  { name: 'Node.js', color: '120 28% 45%' },
  { name: 'Python', color: '207 44% 45%' },
  { name: 'Django', color: '162 42% 32%' },
  { name: 'PostgreSQL', color: '210 52% 45%' },
  { name: 'MongoDB', color: '120 39% 35%' },
  { name: 'Express.js', color: '0 0% 30%' },
  { name: 'Ant G6', color: '217 70% 55%' },
  { name: 'HTML5', color: '14 100% 55%' },
  { name: 'CSS3', color: '207 90% 54%' },
  { name: 'Sass', color: '330 50% 55%' },
  { name: 'Bootstrap', color: '262 52% 47%' },
  { name: 'VuePress', color: '145 45% 45%' },
  { name: 'Linux', color: '40 100% 50%' },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView(0.1);
  const { mousePosition } = useParallax();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -right-48"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tools and technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-default ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${0.1 + index * 0.05}s`,
              }}
            >
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: `hsl(${skill.color})` }}
              />
              <span className="relative font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
