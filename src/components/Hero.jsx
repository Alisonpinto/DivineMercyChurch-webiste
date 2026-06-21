import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-screen pt-16">
      {/* Mobile Hero (only visible on mobile) */}
      <div className="flex md:hidden h-full items-center justify-center bg-[url('https://i.pinimg.com/736x/09/b7/69/09b7693afb89cd04662ac2807cd31f6e.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-2xl p-6">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Welcome to Divine Mercy Church Kalher</h2>
          <p className="text-lg mb-8 drop-shadow-md">Join us in prayer, reflection, and hymns of faith.</p>
          <Link to="/novena" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 inline-block">
            Join the Novena
          </Link>
        </div>
      </div>

      {/* PC Hero (only visible on desktop) */}
      <div className="hidden md:flex h-full">
        {/* Left Side (Text on black bg) */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-12">
          <div className="max-w-lg text-left">
            <h2 className="text-6xl font-bold mb-6 leading-tight">Welcome to Divine Mercy Church Kalher</h2>
            <p className="text-xl mb-10 text-gray-300">Join us in prayer, reflection, and hymns of faith.</p>
            <Link to="/novena" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-blue-500/50 inline-block text-lg">
              Join the Novena
            </Link>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 bg-black overflow-hidden relative group">
          <img 
            src="https://i.pinimg.com/736x/f7/35/0e/f7350e479b077a0385852e85c27b2d97.jpg" 
            alt="Church" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
