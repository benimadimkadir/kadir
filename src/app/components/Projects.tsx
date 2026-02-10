import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fashion Ecommerce Store',
    description: 'A modern online fashion boutique with integrated payment processing, size guides, and wishlist functionality.',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MDU2NzU4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    description: 'A stunning portfolio website for a photographer, featuring gallery layouts and contact forms.',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1577716334258-196a0c967a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc3MDUxMzIxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Tailwind', 'Sanity CMS'],
  },
  {
    id: 3,
    title: 'Tech Corporate Website',
    description: 'A professional corporate site for a technology company with services pages, team profiles, and blog.',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcwNTQ4NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Recent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in web development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-primary mb-2">{project.category}</div>
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
