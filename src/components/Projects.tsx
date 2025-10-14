import { FolderGit2, Calendar } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="text-cyan-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-cyan-500"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                <div className="flex items-center gap-2 text-slate-600 whitespace-nowrap">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{project.date}</span>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

              {project.details && (
                <ul className="space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <span className="text-cyan-500 mt-1">▸</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
