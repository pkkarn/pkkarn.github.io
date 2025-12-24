import { useInView, useParallax } from '@/hooks/useParallax';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Game of Evolution (GOE)',
    description: 'A comprehensive framework to master discipline and consistency through a gamified system of "yugas" and target points.',
    tags: ['React', 'Supabase', 'Tailwind CSS'],
    image: '/projects/goe-framework.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/pkkarn/GOE_SUPABASE',
  },
  {
    title: 'LogChit Blog',
    description: 'A premium, high-tech personal blog built with Next.js and TypeScript, featuring a glassmorphism design and automated CI/CD pipeline.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/logchit.png',
    liveUrl: 'https://logchit.com',
    githubUrl: 'https://github.com/pkkarn/logchit.com',
  },
  {
    title: 'XAR AI Discord Bot',
    description: 'Powerful Discord bot integrated with Gemini 1.5 & 2.0 Flash for interactive AI chat and high-quality image generation.',
    tags: ['Node.js', 'Discord.js', 'Gemini AI'],
    image: '/projects/xar-bot.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/pkkarn/xar_ai_discord_bot',
  },
  {
    title: 'Yuga Tracker Extension',
    description: 'Chrome extension for the GOE framework, providing real-time task tracking and yuga management from the browser.',
    tags: ['Chrome Extension', 'TypeScript', 'Supabase'],
    image: '/projects/yuga-ext.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/pkkarn/yuga_tracker_goe_extension',
  },
  {
    title: 'AutoPOST Automation',
    description: 'AI-driven tool that generates structured HTML blog posts using GPT-4 and automatically publishes them to WordPress.',
    tags: ['Python', 'OpenAI GPT', 'WordPress API'],
    image: '/projects/autopost.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/pkkarn/AutoPOST',
  },
  {
    title: 'Gemini Calorie Tracker',
    description: 'Google Sheets integration using Gemini AI to automatically extract and track nutritional data for food entries.',
    tags: ['Google Apps Script', 'Gemini AI', 'Sheets'],
    image: '/projects/calorie-tracker.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/pkkarn/calorie_tracker_genai_appscript',
  },
];



const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.05);
  const { mousePosition } = useParallax();

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Floating background */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent-foreground/5 blur-3xl -bottom-72 -left-72"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured</span> <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
