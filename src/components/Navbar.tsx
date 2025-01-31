export const Navbar = () => {
  return (
    <header className="bg-emerald-900">
      <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">JB.</h1>
        <div className="flex gap-6">
          <a href="#experience" className="text-emerald-100 hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="text-emerald-100 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-emerald-100 hover:text-white transition-colors">Projects</a>
        </div>
      </nav>
    </header>
  );
};