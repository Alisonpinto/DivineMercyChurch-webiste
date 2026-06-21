import { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hymnsData } from '../data/hymns';

const Hymns = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('hymnBookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedHymn, setSelectedHymn] = useState(null);
  const [fontSize, setFontSize] = useState(18); // Default font size
  const [readingMode, setReadingMode] = useState('normal'); // 'normal' | 'cream'
  const [toastMessage, setToastMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Scroll to top listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save bookmarks
  useEffect(() => {
    localStorage.setItem('hymnBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (e, hymnId) => {
    e.stopPropagation();
    if (bookmarks.includes(hymnId)) {
      setBookmarks(bookmarks.filter(id => id !== hymnId));
      showToast('Removed from favorites');
    } else {
      setBookmarks([...bookmarks, hymnId]);
      showToast('Saved to favorites');
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopy = (e, text) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied Successfully');
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedHymn.title,
          text: selectedHymn.lyrics,
        });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(`${selectedHymn.title}\n\n${selectedHymn.lyrics}`).then(() => {
        showToast('Link/Text copied for sharing');
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredHymns = useMemo(() => {
    return hymnsData.filter(hymn => {
      const matchSearch = hymn.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          hymn.lyrics.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLetter = selectedLetter ? hymn.title.toUpperCase().startsWith(selectedLetter) : true;
      return matchSearch && matchLetter;
    });
  }, [searchQuery, selectedLetter]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24 pb-12 px-4 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Church Hymns</h1>
          <p className="text-gray-600 text-lg">Browse, search and copy hymns instantly.</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search by title or lyrics (e.g., 'mary', 'holy')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm text-lg focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* Alphabet Filter */}
        <div className="overflow-x-auto pb-4 mb-6 hide-scrollbar">
          <div className="flex space-x-2 min-w-max">
            <button 
              onClick={() => setSelectedLetter(null)}
              className={`px-4 py-2 rounded-xl font-bold transition-colors ${!selectedLetter ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              ALL
            </button>
            {alphabet.map(letter => (
              <button 
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-colors ${selectedLetter === letter ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'}`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Bookmarks Toggle (Optional visual filter) */}
        {bookmarks.length > 0 && (
           <div className="mb-6 flex justify-end">
             <button 
               onClick={() => {
                 if (searchQuery === '!favorites') setSearchQuery('');
                 else setSearchQuery('!favorites');
               }}
               className="flex items-center space-x-2 text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full"
             >
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
               <span>{searchQuery === '!favorites' ? 'Show All' : 'Show Favorites'}</span>
             </button>
           </div>
        )}

        {/* Hymns List */}
        <div className="grid gap-4">
          {filteredHymns.length > 0 ? (
            (searchQuery === '!favorites' ? filteredHymns.filter(h => bookmarks.includes(h.id)) : filteredHymns).map(hymn => (
              <div 
                key={hymn.id} 
                onClick={() => setSelectedHymn(hymn)}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{hymn.title}</h3>
                    <button onClick={(e) => toggleBookmark(e, hymn.id)} className="text-gray-300 hover:text-red-500 focus:outline-none">
                      <svg className={`w-5 h-5 ${bookmarks.includes(hymn.id) ? 'text-red-500' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                    </button>
                  </div>
                  <p className="text-gray-500 line-clamp-2 leading-relaxed">
                    {hymn.lyrics.split('\\n').slice(0, 2).join(' ')}...
                  </p>
                </div>
                <div className="flex space-x-3 items-center">
                  <button 
                    onClick={(e) => handleCopy(e, `${hymn.title}\n\n${hymn.lyrics}`)}
                    className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    <span>Copy</span>
                  </button>
                  <button 
                    className="px-4 py-2 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors flex items-center space-x-1"
                  >
                    <span>Open</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <p className="text-xl">No hymns found.</p>
              <p className="text-sm mt-2">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Hymn Detail Modal */}
      {selectedHymn && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white overflow-hidden shadow-2xl">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white shadow-sm z-10">
            <button onClick={() => setSelectedHymn(null)} className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setReadingMode(readingMode === 'normal' ? 'cream' : 'normal')}
                className={`p-2 rounded-full transition-colors ${readingMode === 'cream' ? 'bg-yellow-100 text-yellow-700' : 'hover:bg-gray-100 text-gray-600'}`}
                title="Toggle Reading Mode"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </button>
              <div className="flex items-center bg-gray-100 rounded-full px-2">
                <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="p-2 text-gray-600 hover:text-gray-900 font-bold" title="Decrease font size">A-</button>
                <div className="w-px h-4 bg-gray-300 mx-1"></div>
                <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className="p-2 text-gray-600 hover:text-gray-900 font-bold text-lg" title="Increase font size">A+</button>
              </div>
              <button onClick={() => handleShare()} className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors" title="Share">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </button>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className={`flex-grow overflow-y-auto px-6 py-8 md:px-12 md:py-12 transition-colors duration-300 ${readingMode === 'cream' ? 'bg-[#FCFBF4]' : 'bg-white'}`}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                {selectedHymn.title}
              </h2>
              <div 
                className="whitespace-pre-wrap text-gray-800 leading-loose"
                style={{ fontSize: `${fontSize}px` }}
              >
                {selectedHymn.lyrics}
              </div>
            </div>
            {/* Bottom Padding for scroll space */}
            <div className="h-32"></div>
          </div>
          
          {/* Fixed Bottom Actions */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex justify-center z-20">
            <button 
              onClick={() => handleCopy(null, `${selectedHymn.title}\n\n${selectedHymn.lyrics}`)}
              className="w-full max-w-sm py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-black transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <span>Copy Full Hymn</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-gray-800 text-white rounded-full shadow-xl hover:bg-gray-900 transition-all hover:-translate-y-1 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[70] bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl font-medium animate-fade-in-down flex items-center space-x-2">
           <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
           <span>{toastMessage}</span>
        </div>
      )}

      {/* Adding custom CSS for hide-scrollbar in index.css is recommended, but doing inline class style here as utility */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
};

export default Hymns;
