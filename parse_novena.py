import re

with open('novena_content_utf8.txt', 'r', encoding='utf-8') as f:
    raw_text = f.read()

# Clean up weird characters
text = raw_text.replace('á', ' ').replace('û', '-').replace('ù', '-').replace('à', '.').replace('Æ', "'").replace('ö', '"').replace('ô', '"')

# Remove single newlines that break sentences. 
text = re.sub(r'([a-zA-Z,])\n([a-z])', r'\1 \2', text)
text = re.sub(r'\n([,.;])', r'\1', text)
text = re.sub(r' \n', ' ', text)
text = re.sub(r'\n ', '\n', text)
text = re.sub(r'\n+', '\n', text)

days_data = []

# Splitting by "Novena Day"
days_raw = re.split(r'Novena Day\s*\d*(?:\s*:)?', text)[1:] 

for i, day_text in enumerate(days_raw):
    day_num = i + 1
    
    # Parse header
    header_match = re.search(r'(.*?)-(.*?)\nHymn', day_text, re.DOTALL | re.IGNORECASE)
    date_str = ""
    community_str = ""
    if header_match:
        date_str = header_match.group(1).strip().replace('\n', ' ')
        community_str = header_match.group(2).strip().replace('\n', ' ')
    else:
        header_match = re.search(r'(.*?)-(.*?)\nHymn', day_text, re.DOTALL)
        if header_match:
            date_str = header_match.group(1).strip()
            community_str = header_match.group(2).strip()

    if not date_str:
        lines = day_text.strip().split('\n')
        date_str = lines[0]
        community_str = lines[1] if len(lines) > 1 else ""
    
    # Extract sections
    def extract_section(start_marker, end_marker):
        if end_marker:
            m = re.search(rf'{start_marker}(.*?){end_marker}', day_text, re.DOTALL | re.IGNORECASE)
        else:
            m = re.search(rf'{start_marker}(.*)', day_text, re.DOTALL | re.IGNORECASE)
        if m:
            return m.group(1).strip().replace('\n', ' ')
        return ""
    
    hymn_leader = extract_section('Hymn\nLeader:', 'Theme:')
    theme = extract_section('Theme:', 'Introduction')
    # If Theme has Leader- attached to it, let's clean it up
    theme = re.sub(r'Leader-?', '', theme).strip()
    
    intro = extract_section('Introduction', 'Novena Prayer')
    novena_prayer = extract_section('Novena Prayer\nAll-', 'Prayer of the Faithful')
    if not novena_prayer:
        novena_prayer = extract_section('Novena Prayer\n', 'Prayer of the Faithful')
    # clean up 'All-' or 'All -' from novena prayer start
    novena_prayer = re.sub(r'^All\s*-?\s*', '', novena_prayer).strip()
        
    faithful = extract_section('Prayer of the Faithful', r'\(Pause')
    if faithful:
        faithful = "Prayer of the Faithful\n" + faithful
        
    our_father = extract_section(r'\(Pause for some time\)', 'The Magnificat')
    
    # Parse Magnificat and closing
    magnificat_match = re.search(r'The Magnificat \(Canticle of Mary\)\nAll\s*-?(.*)', day_text, re.DOTALL | re.IGNORECASE)
    magnificat = ""
    closing_leader = ""
    closing_all = ""
    if magnificat_match:
        mag_text = magnificat_match.group(1)
        mag_parts = re.split(r'\nLeader:', mag_text, maxsplit=1)
        if len(mag_parts) == 2:
            magnificat = mag_parts[0].strip().replace('\n', ' ')
            lead_parts = re.split(r'\nAll:', mag_parts[1], maxsplit=1)
            if len(lead_parts) == 2:
                closing_leader = lead_parts[0].strip().replace('\n', ' ')
                closing_all = lead_parts[1].strip().replace('\n', ' ')
            else:
                closing_leader = mag_parts[1].strip().replace('\n', ' ')
        else:
            magnificat = mag_text.strip().replace('\n', ' ')
    
    days_data.append({
        'day': day_num,
        'date': date_str,
        'community': community_str,
        'theme': theme,
        'intro': intro,
        'novena_prayer': novena_prayer,
        'faithful': faithful,
        'our_father': our_father,
        'magnificat': magnificat,
        'closing_leader': closing_leader,
        'closing_all': closing_all
    })

jsx_out = """import Header from '../components/Header';
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
                30th August - 7th September 2026
              </span>
            </h1>
          </div>
        </section>

        <section id="novena" className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid gap-8">
"""

for d in days_data:
    day_num = d['day']
    date_clean = re.sub(r'^\d+\s*-\s*', '', d['date']).strip('- ')
    title = f"Day {day_num} - {date_clean}"
    
    faithful_text = d['faithful']
    faithful_html = ""
    if faithful_text:
        faithful_html = f"<p className='mt-4'><strong>Prayer of the Faithful</strong></p>"
        response_match = re.search(r'Let our response be:\s*(.*?)(?=\d\.)', faithful_text)
        if response_match:
            faithful_html += f"<p><em>Response:</em> {response_match.group(1).strip()}</p>"
        
        points = re.findall(r'(\d\.\s.*?)(?=\d\.|$)', faithful_text)
        if points:
            faithful_html += "<ul className='mt-2 space-y-2'>"
            for p in points:
                faithful_html += f"<li>{p.strip()}</li>"
            faithful_html += "</ul>"
        else:
            faithful_html += f"<p>{faithful_text}</p>"

    def ordinal(n):
        if 11 <= (n % 100) <= 13: return str(n) + 'th'
        return str(n) + {1: 'st', 2: 'nd', 3: 'rd'}.get(n % 10, 'th')

    content_jsx = f"""                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> {d['theme']}</p>
                  <p className='mt-4'><strong>Introduction:</strong> {d['intro']}</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> {d['novena_prayer']}</p>
                  {faithful_html}
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>{d['our_father']}</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> {d['magnificat']}</p>
                  <p className='mt-4'><strong>Leader:</strong> {d['closing_leader']}</p>
                  <p><strong>All:</strong> {d['closing_all']}</p>
                </>"""

    jsx_out += f"""
            <NovenaCard 
              title={{`{title}`}}
              subtitle={{`{d['community']} \\n {ordinal(day_num)} Day of the Novena to the Nativity of the Blessed Virgin Mary`}}
              content={{
{content_jsx}
              }}
            />
"""

jsx_out += """
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Novena;
"""

with open('src/pages/Novena.jsx', 'w', encoding='utf-8') as f:
    f.write(jsx_out)

print("Novena.jsx updated successfully!")
