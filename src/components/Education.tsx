import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-cyan-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-cyan-500"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-cyan-600 font-semibold mb-2">{edu.institution}</p>
                  {edu.honors && (
                    <p className="text-slate-600 italic">Honors: {edu.honors}</p>
                  )}
                </div>
                <div className="text-right text-slate-600">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <Calendar size={16} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
