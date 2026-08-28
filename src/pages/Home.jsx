import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import heroImg from '../assets/heroimg2.jpeg';
import secondSectionImg from '../assets/2ndsection.jpeg';
import { albumsData } from '../data/albumsData';

const Home = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const albums = albumsData;
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* SECTION 1: HERO */}
        <section className="relative w-full h-[85vh] bg-gray-900 flex items-center justify-center overflow-hidden">
          <img 
            src={heroImg} 
            alt="Divine Mercy Church" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 object-center"
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
              Divine Mercy Church
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 drop-shadow-md font-light leading-relaxed max-w-2xl">
              Welcome to Divine Mercy Church, Kalher. <br className="hidden md:block" />
              A place of prayer, faith, worship and devotion to Jesus Christ.
            </p>
          </div>
        </section>

        {/* SECTION 2: ABOUT CHURCH */}
        <section id="about" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Divine Mercy Church</h2>
                <div className="w-20 h-1 bg-red-600 rounded mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Divine Mercy Church serves the faithful of the Kalher region and promotes devotion to the Divine Mercy through prayer, worship, novenas, and community gatherings. We welcome everyone to join our parish family and experience the boundless love and mercy of Jesus Christ.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <img 
                  src={secondSectionImg} 
                  alt="Church Event" 
                  className="w-full h-80 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ALBUMS GALLERY */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Photo Albums</h2>
              <div className="w-20 h-1 bg-gray-300 rounded mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album) => (
                <div 
                  key={album.id} 
                  onClick={() => setSelectedAlbum(album)}
                  className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all relative"
                >
                  {album.cover ? (
                    <img src={album.cover} alt={album.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold tracking-wide">{album.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">View Album →</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: ESTABLISHMENT */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Church Information</h2>
              <div className="w-20 h-1 bg-red-600 rounded mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto border-t border-b border-gray-200 py-12">
              <div>
                <h3 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-2">Parish Priest</h3>
                <p className="text-2xl font-serif text-gray-900">Fr Antony Renju</p>
              </div>
              <div className="md:border-l md:border-r border-gray-200 px-4">
                <h3 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-2">Diocese</h3>
                <p className="text-2xl font-serif text-gray-900">Diocese of Vasai</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-2">Location</h3>
                <p className="text-2xl font-serif text-gray-900">Kalher</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4.5: MASS TIMINGS */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mass Timings</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto border-t border-b border-gray-200 py-12">
              <div>
                <h3 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Sundays</h3>
                <p className="text-3xl font-serif text-gray-900 mb-2">8:00 AM</p>
                <p className="text-sm text-gray-500 italic">Weekly Sunday Mass</p>
              </div>
              <div className="md:border-l border-gray-200 px-4">
                <h3 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Weekdays <span className="lowercase tracking-normal text-xs text-gray-400 font-medium">(Mon-Fri)</span></h3>
                <p className="text-3xl font-serif text-gray-900 mb-2">6:50 AM</p>
                <p className="text-sm text-gray-500 italic">Daily Morning Mass</p>
              </div>
              <div className="md:border-l border-gray-200 px-4">
                <h3 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Fridays</h3>
                <p className="text-3xl font-serif text-gray-900 mb-2">6:30 PM</p>
                <p className="text-sm text-gray-500 italic">Evening Mass</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTACT US */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto mb-16">
              <div className="flex flex-col items-center">
                <h4 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Visit Us</h4>
                <p className="text-lg font-serif text-gray-900 leading-relaxed max-w-xs">
                  Priests of the Sacred Heart of Jesus, Old Agra Rd, beside B Mart, Durgesh Park, DEHONIANS - SCJ, Kalher, Maharashtra 421302
                </p>
              </div>
              <div className="flex flex-col items-center md:border-l md:border-r border-gray-200 px-4">
                <h4 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Call Us</h4>
                <p className="text-lg font-serif text-gray-900 mb-4">[Placeholder Phone]</p>
                <a href="tel:0000000000" className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-900 hover:text-gray-500 hover:border-gray-500 transition-colors pb-1">
                  Call Now
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Email Us</h4>
                <p className="text-lg font-serif text-gray-900 mb-4">[Placeholder Email]</p>
                <a href="mailto:email@example.com" className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-900 hover:text-gray-500 hover:border-gray-500 transition-colors pb-1">
                  Send Email
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="https://maps.app.goo.gl/WZRLdgzNYX7racDW8" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium tracking-wide transition-colors flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 6: GOOGLE MAP */}
        <section className="w-full h-96 bg-gray-200 relative">
          <iframe 
            src="https://maps.google.com/maps?q=Priests%20of%20the%20Sacred%20Heart%20of%20Jesus,%20Kalher,%20Maharashtra%20421302&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Google Map showing location of Divine Mercy Church, Kalher"
          ></iframe>
        </section>
      </main>

      <Footer />

      {/* ALBUM VIEW MODAL */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 bg-white">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedAlbum.title}</h2>
              <p className="text-sm text-gray-500">Photo Album</p>
            </div>
            <button 
              onClick={() => setSelectedAlbum(null)}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {selectedAlbum.photos && selectedAlbum.photos.length > 0 ? (
                  selectedAlbum.photos.map((photo, idx) => (
                    <div key={idx} className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm group relative hover:shadow-md transition-shadow">
                      <img src={photo} alt={`${selectedAlbum.title} ${idx + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500 py-10">No photos available in this album yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Home;
