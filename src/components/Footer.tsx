import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-slate-400">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> by Ayoub BENDRAOU
          </p>
          <p className="text-slate-500 text-sm mt-2">{currentYear} - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
