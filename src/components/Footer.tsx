import logoImg from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 pt-12 pb-8 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-5 gap-8 pb-10">
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <a href="#"><img src={logoImg} alt="DevStack Logo" className="h-8 w-auto object-contain" /></a>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed px-4 md:px-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center justify-center gap-3 text-xs font-semibold text-slate-700 pt-2">
              <a href="#" className="hover:text-pink-600 transition-colors"> GitHub </a>
              <span className="text-gray-300 md:hidden"></span>
              <a href="#" className="hover:text-pink-600 transition-colors"> Twitter</a>
              <span className="text-gray-300 md:hidden"></span>
              <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">Product</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>
          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
              <li> <a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="hidden md:block space-y-3">
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-row items-center justify-between text-xs text-gray-400">
          <p className="text-shadow-gray-800">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
