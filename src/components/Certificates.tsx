import { Award } from 'lucide-react';
import { certificates, languages, interests } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Award className="text-cyan-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">Certificates & Additional Info</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-cyan-600" size={24} />
              Certificates
            </h3>
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <div>
                    <p className="text-slate-800 font-medium">{cert.name}</p>
                    {cert.status && (
                      <p className="text-sm text-slate-600 italic">{cert.status}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Languages</h3>
            <ul className="space-y-4">
              {languages.map((lang, index) => (
                <li key={index}>
                  <p className="text-slate-900 font-semibold text-lg">{lang.name}</p>
                  <p className="text-slate-600">{lang.level}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Interests</h3>
            <ul className="space-y-4">
              {interests.map((interest, index) => (
                <li key={index}>
                  <p className="text-slate-900 font-semibold text-lg">{interest.name}</p>
                  <p className="text-slate-600">{interest.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
