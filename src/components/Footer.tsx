export function Footer() {
  return (
    <footer className="bg-white px-6 py-12 md:py-16 mt-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-600 font-medium text-lg md:text-2xl leading-relaxed max-w-3xl mb-12">
          Active Frame is India's Fastest-Growing Influencer Marketplace, Helping Brands Discover, Connect, And Collaborate With Creators, To Get Best Results.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-400 font-medium text-sm">Help</h4>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Contact Us</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-400 font-medium text-sm">About</h4>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t border-gray-100 gap-4">
          <p className="text-gray-400 text-xs font-medium">
            © 2026 Active Frame Agency. All rights reserved.
          </p>
          <p className="text-black text-xs font-bold uppercase tracking-wider">
            Made In India <span className="text-red-500 ml-1">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
