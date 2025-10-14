import { Mail, Phone, MapPin, Github, Shield } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-lg">
            <Shield size={48} className="text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-2">{profileData.name}</h1>
            <p className="text-2xl text-cyan-400 font-light">{profileData.title}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-slate-300">
          <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail size={18} />
            <span>{profileData.email}</span>
          </a>
          <a href={`tel:${profileData.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone size={18} />
            <span>{profileData.phone}</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{profileData.location}</span>
          </div>
          <a
            href={`https://${profileData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Github size={18} />
            <span>{profileData.github}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
