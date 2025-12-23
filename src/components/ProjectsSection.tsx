import { useInView, useParallax } from '@/hooks/useParallax';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Graph Visualizer Pro',
    description: 'An interactive graph visualization tool built with Ant G6 for complex network analysis and data representation.',
    tags: ['Vue.js', 'Ant G6', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'CodeChit Blog Platform',
    description: 'A technical blog platform with VuePress for sharing insights about web development and programming.',
    tags: ['VuePress', 'Markdown', 'Vue.js'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    liveUrl: 'https://codechit.com',
    githubUrl: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Full-stack messaging app with WebSocket support, user authentication, and message persistence.',
    tags: ['Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Comprehensive admin dashboard for managing products, orders, and analytics with real-time updates.',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management System',
    description: 'Kanban-style project management tool with drag-and-drop, team collaboration, and deadline tracking.',
    tags: ['Vue.js', 'Django', 'REST API'],
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'API Gateway Service',
    description: 'Microservices API gateway with rate limiting, authentication, and request logging capabilities.',
    tags: ['Node.js', 'Express', 'Redis'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Data Analytics Platform',
    description: 'Business intelligence dashboard with interactive charts, custom reports, and data export features.',
    tags: ['Python', 'Vue.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Scheduler',
    description: 'Multi-platform social media management tool with scheduling, analytics, and content calendar.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and alerts.',
    tags: ['Vue.js', 'OpenWeather API', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing, tagging, and sharing code snippets with syntax highlighting.',
    tags: ['TypeScript', 'Vue.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
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
