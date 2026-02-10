export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
