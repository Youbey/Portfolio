import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-cyan-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border-l-4 border-cyan-500"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-cyan-600 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="text-right text-slate-600">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
