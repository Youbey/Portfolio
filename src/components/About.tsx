import { User } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <User className="text-cyan-600" size={32} />
          <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
        </div>
        <div className="max-w-4xl">
          <p className="text-lg text-slate-700 leading-relaxed">
            {profileData.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
