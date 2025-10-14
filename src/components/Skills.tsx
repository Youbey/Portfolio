import { Code2, Shield as ShieldIcon } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-cyan-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldIcon className="text-cyan-600" size={20} />
                <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-300 hover:border-cyan-500 hover:text-cyan-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
