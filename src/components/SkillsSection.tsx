import { useInView, useParallax } from '@/hooks/useParallax';

const skills = [
  { name: 'Generative AI', color: '280 80% 60%' },
  { name: 'OpenAI', color: '160 84% 39%' },
  { name: 'Chrome Extension', color: '20 90% 55%' },
  { name: 'React', color: '193 95% 68%' },
  { name: 'TypeScript', color: '211 60% 48%' },
  { name: 'Node.js', color: '120 28% 45%' },
  { name: 'Python', color: '207 44% 45%' },
  { name: 'PostgreSQL', color: '210 52% 45%' },
  { name: 'Cursor AI', color: '200 70% 50%' },
  { name: 'Antigravity', color: '260 90% 65%' },
  { name: 'Vibe Engineering', color: '330 80% 60%' },
  { name: 'Supabase', color: '158 45% 45%' },
  { name: 'Tailwind CSS', color: '198 90% 48%' },
  { name: 'JavaScript', color: '52 95% 45%' },
  { name: 'Git & GitHub', color: '0 0% 40%' },
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
            <span className="text-foreground">Skills &</span> <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tools and technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-default ${isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
              style={{
                animationDelay: `${0.1 + index * 0.05}s`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: `hsl(${skill.color})` }}
              />
              <span className="relative font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
