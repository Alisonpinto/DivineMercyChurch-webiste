const fs = require('fs');
const cheerio = require('cheerio');

function convertToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/<br>/g, '<br />')
    .replace(/<!--[\s\S]*?-->/g, '');
}

function extractWayOfTheCross() {
  const html = fs.readFileSync('legacy_html_files/way_of_the_cross.html', 'utf8');
  const $ = cheerio.load(html);

  let englishStations = '';
  let hindiStations = '';

  const allStations = $('.bg-white.rounded-lg.shadow-lg.overflow-hidden');
  
  allStations.each((i, el) => {
    const img = $(el).find('img').attr('src');
    const title = $(el).find('h2').text().trim();
    const desc = $(el).find('h5').text().trim();
    const contentHtml = $(el).find('.md\\:w-2\\/3').html();
    
    const content$ = cheerio.load(contentHtml);
    content$('h2').remove();
    content$('h5').remove();
    let innerContent = convertToJsx(content$('body').html() || '');

    const jsx = `
            <StationCard 
              title={\`${title}\`}
              description={\`${desc}\`}
              image="${img}"
            >
              ${innerContent}
            </StationCard>
`;
    if (i < 14) {
      englishStations += jsx;
    } else {
      hindiStations += jsx;
    }
  });

  const wayOfTheCrossTemplate = `import Header from '../components/Header';
import Footer from '../components/Footer';
import StationCard from '../components/StationCard';

const WayOfTheCross = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-100">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Banner Section */}
        <div className="relative bg-yellow-800 overflow-hidden">
          <img 
            src="/images/Way of the cross banner.jpg" 
            alt="Way of the Cross Banner" 
            className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] object-cover object-center opacity-40 transform hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-8 drop-shadow-2xl tracking-wide">
              Way Of The Cross
            </h1>
            
            <div className="text-center bg-black/30 p-8 rounded-3xl backdrop-blur-md">
              <p className="text-xl md:text-2xl text-white mb-6 font-medium">Choose a Language</p>
              <div className="flex justify-center gap-6">
                <button 
                  onClick={() => scrollToSection('english')}
                  className="px-10 py-3 rounded-xl bg-white text-yellow-800 font-bold text-lg hover:bg-yellow-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  English
                </button>
                <button 
                  onClick={() => scrollToSection('hindi')}
                  className="px-10 py-3 rounded-xl bg-white text-yellow-800 font-bold text-lg hover:bg-yellow-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Hindi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* English Section */}
        <div id="english" className="pt-24 pb-8 scroll-mt-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 border-t-4 border-yellow-600">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-6">Preparatory Prayers</h2>
                <div className="text-lg leading-relaxed text-gray-700">
                  <p className="mb-6 italic">Father, forgive them. They know not what they do...<br />
                  They see me lying in the street<br />
                  And never lend a hand;<br />
                  The night goes by while they're asleep,<br />
                  Yet I'm still in the sand;<br />
                  And I cry each night for their blinded eyes,<br />
                  That never, seem to see.<br />
                  Father, forgive them.<br />
                  They know not what they do.</p>
                  <p className="text-justify">
                    O Jesus, our adorable Saviour, we now contemplate Your sacred passion. Help us to understand that the sufferings of our life are the continuation of Your passion. We ask for strength of our souls to go through our passion, in the spirit with which You went through Yours. Amen.
                  </p>
                </div>
              </div>
            </div>

            ${englishStations}

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">Concluding Prayer</h2>
                <div className="text-base md:text-lg leading-relaxed">
                  <p className="mb-6"><span className="underline font-bold">All</span>: From the depths I call to you, O Lord,
                  Listen to my cry.
                  So let us trust him for in him is mercy;
                  He, the Lord, is kind.
                  He gives us pardon, generous redemption
                  Casts our sins behind.</p>
                  <p className="mb-6">
                  Heavenly Father, we have contemplated your Son, Jesus, on his Way of the Cross, in his Spirit which you have gifted to us. We accept our way of the cross. We know it will lead us to, where it led him to, our resurrection with him. We thank You for the joy of this vision of faith. 
                  For the intention of the Holy Father,</p>
                  <ul className="text-sm mb-6 space-y-1 text-center">
                    <li>- Our Father in Heaven</li>
                    <li>- Hail Mary</li>
                    <li>- Glory Be</li>
                  </ul>
                  <p className="mb-2"><span className="underline font-bold">Leader</span>: Have mercy on us, O Lord.</p>
                  <p><span className="underline font-bold">All</span>: Have mercy on us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hindi Section */}
        <div id="hindi" className="pt-24 pb-8 bg-stone-200 scroll-mt-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl md:text-4xl text-yellow-800 font-bold text-center mb-12">
              Hindi
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">प्रारंभिक प्रार्थना</h2>
                <div className="text-base md:text-lg leading-relaxed">
                  <div className="text-center font-bold">
                    हे प्रभू येशू, हमारे पूज्य संरक्षक, हम अब तेरे अति दुःख भोग को स्मरण कर, तेरे पास आते हैं। हमें यह समझने की शक्ति दे कि हमारे जीवन के दुःख तेरे अति दुःख भाग से जुड़े हुए हैं। हमारी आत्मा को बल प्रदान कर। हम भी उसी साहस से अपने दुःख भोगें जैसे तूने भोगा था। हम तेरे चरणों में अपने आपको समर्पित करते है। आमेन
                  </div>
                </div>
              </div>
            </div>

            ${hindiStations}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WayOfTheCross;
`;

  fs.writeFileSync('src/pages/WayOfTheCross.jsx', wayOfTheCrossTemplate);
}

function extractNovena() {
  const html = fs.readFileSync('legacy_html_files/Novena.html', 'utf8');
  const $ = cheerio.load(html);

  let novenaCards = '';

  const allCards = $('.bg-white.rounded-2xl.shadow-md');

  allCards.each((i, el) => {
    const title = $(el).find('h2').text().trim();
    let subtitleHtml = $(el).find('p.italic').html() || '';
    let subtitle = subtitleHtml.replace(/<br\s*\/?>/g, '\\n').replace(/&nbsp;/g, ' ').trim();
    const contentHtml = $(el).find('.space-y-4').html();
    const content = convertToJsx(contentHtml || '');

    novenaCards += `
            <NovenaCard 
              title={\`${title}\`}
              subtitle={\`${subtitle}\`}
              content={
                <>
                  ${content}
                </>
              }
            />
`;
  });

  const novenaTemplate = `import Header from '../components/Header';
import Footer from '../components/Footer';
import NovenaCard from '../components/NovenaCard';

const Novena = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="relative w-full overflow-hidden">
          <img 
            src="/images/Mother mary.webp" 
            alt="Mother Mary"
            className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] object-cover object-center shadow-lg transform hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center leading-tight drop-shadow-lg">
              Nativity of the Blessed Virgin Mary <br />
              <span className="text-lg md:text-2xl font-light mt-4 block">
                30th August – 7th September 2025
              </span>
            </h1>
          </div>
        </section>

        <section id="novena" className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid gap-8">
            ${novenaCards}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Novena;
`;

  fs.writeFileSync('src/pages/Novena.jsx', novenaTemplate);
}

extractWayOfTheCross();
extractNovena();
console.log('Extraction complete!');
