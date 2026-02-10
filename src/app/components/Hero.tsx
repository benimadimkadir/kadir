import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl mb-6">
          Fullstack Web Developer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building powerful ecommerce platforms, stunning portfolios, and professional corporate websites. 
          Crafting digital experiences that drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
