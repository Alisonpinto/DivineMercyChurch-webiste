import Header from '../components/Header';
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

            <NovenaCard 
              title={`Day 1 - 30th August 2026`}
              subtitle={`- \n 1st Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary's "Yes".</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, t oday we begin our nine-day preparation for the joyful Feast of the Nativity of the Blessed Virgin Mary. This year our celebration has a special significance as we also commemorate the eighth centenary of the death of St. Francis of Assisi. Throughout these days we shall walk with Mary allowing th is great disciple to lead us ever closer to CHRIST. Mathew 16: 21-27 invites C invites us to deny ourselves, take up our cross and follow the LORD. Mary lived this call perfectly when she surrendered herself completely to GOD 'S plan with her humble "Yes." Centuries later, Francis of Assisi responded to CHRIST 'S invitation by leaving behind wealth, ambition and worldly glory to rebuild the Church through a life of holiness. As we begin this novena, let us ask for the grace of generous hearts, ready to surrender to GOD 'S will without fear or hesitation. May our celebration of this N ovena strengthen us to become faithful disciples of CHRIST.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may courageously proclaim the Gospel, faithfully carry their daily cross, and continually renew the Church through lives of holiness and humble service, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority - that they may exercise their responsibilities with wisdom, integrity and compassion, promoting justice, peace and the dignity of every human person, we pray to the LORD.</li><li>3. Like Mary, who surrendered herself completely to GOD 'S will, we too may generously respond to GOD 'S call in our lives, trusting that HIS plans are always for our good and for the salvation of the world, we pray to the LORD.</li><li>4. Following the example of St. Francis of Assisi, we may hear CHRIST 'S call to rebuild His Church-not merely through buildings, but by renewing our hearts, serving the poor, and living the Gospel with simplicity and joy, we pray to the LORD.</li><li>5. That the sick may experience GOD 'S healing, the poor HIS providence, the lonely HIS comforting presence, the homeless HIS shelter, the unemployed meaningful work, we pray to the LORD.</li><li>6. Let us pray for peace in the world as also for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our FATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> : My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, H oly is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary help of C hrist ians.</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 2 - Monday 31`}
              subtitle={`st \n 2nd Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary's humility.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, a s we continue our Novena in preparation for the Feast of the Nativity of the Blessed Virgin Mary, Luke 4 : 16-30 invites us to reflect on the beauty of humility and the freedom that comes from trusting completely in GOD. In the synagogue at Nazareth, JESUS proclaims that HE has come to bring Good News to the poor, liberty to captives, and hope to the oppressed. Yet the very people who knew HIM best fail to accept HIM because pride blinds their hearts. Mary, on the other hand, calls herself the humble servant of the LORD and sings, " HE has looked upon the lowliness of HIS handmaid." St. Francis, though born into wealth, freely embraced Lady Poverty, discovering that true riches are found in CHRIST alone. As we pray this Novena, let us pray for humble hearts, open to GOD 'S word and ready to place HIM above worldly success, possessions, and pride.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may proclaim the Gospel with humility and courage, never seeking honour for themselves but always leading GOD 'S people to CHRIST, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may govern with humility, integrity and compassion, giving special attention to the poor, those whose voices are seldom heard, we pray to the LORD.</li><li>3. That, following the example of Mary, the humble servant of the LORD, we may recognise every blessing as GOD 'S gift and learn to serve one another with simplicity, gratitude and love, we pray to the LORD.</li><li>4. That, inspired by St. Francis' joyful embrace of Lady Poverty, we may use the goods of this world responsibly, share generously with those in need, and discover that our greatest treasure is CHRIST Himself, we pray to the LORD.</li><li>5. That the poor may find dignity, the unemployed meaningful work, the sick healing, the lonely companionship, and those burdened by anxiety renewed hope through the loving care of GOD 'S people, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary help of C hrist ians.</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 3 - Tuesday 1 st September 2026`}
              subtitle={`ST. THOMAS \n 3rd Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary, Mother of JESUS.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, a s we continue our Novena in honour of the Nativity of the Blessed Virgin Mary, Church invites us to experience the love of CHRIST that gathers people into one family. In Luke 4 : 31-37, JESUS speaks with divine authority and frees a man from the power of evil, revealing that GOD 'S Kingdom is a kingdom of healing, unity and new life. JESUS welcomed Mary into the world as HIS loving Mother. At the foot of the Cross, JESUS entrusted her to the beloved disciple, making her the Mother of all HIS followers. St. Francis, inspired by the Gospel, saw every person as a brother or sister and every creature as a gift from the same loving FATHER. As we p ut forth our voices in this Novena, let us pray that our families, our parish and our society may grow in love, reconciliation and fraternity. May Mary, our Mother, lead us ever closer to CHRIST, who alone can free us from all that divides us.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may faithfully proclaim CHRIST 'S liberating Gospel, strengthen the unity of the Church, and lead GOD 'S people with love, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may work to overcome hatred, violence and injustice, promoting peace, harmony and respect for the dignity of every person, we pray to the LORD.</li><li>3. That through the loving intercession of Mary, our families may grow in faith, mutual forgiveness and unity, and that all mothers may reflect Mary's tender care in their homes, we pray to the LORD.</li><li>4. Through the intercession of St Francis, who called everyone his brother or sister, we may overcome prejudice, selfishness and indifference, becoming instruments of fraternity and compassionate service to all, we pray to the LORD.</li><li>5. That those who feel excluded from society may experience GOD 'S healing love through our care and concern, and that our departed brothers and sisters may rejoice forever in GOD 'S heavenly family, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Pray for us, O Holy Mother of GOD.</p>
                  <p><strong>All:</strong> That we may be made worthy of the promises of CHRIST. Amen!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 4 - Wednesday 2 nd September 2026`}
              subtitle={`LEGION OF MARY \n 4th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary, model disciple.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, a s we continue our Novena in honour of the Nativity of the Blessed Virgin Mary, Luke 4 : 38-44 presents JESUS as the compassionate healer WHO restores the sick, comforts the suffering and proclaims the Good News of GOD 'S Kingdom. HIS mission was not confined to one place or one group of people; HE came to bring GOD 'S saving love to all. Mary is the first and greatest disciple of JESUS. She listened attentively to GOD 'S word, treasured it in her heart, and remained faithful to her SON even at the foot of the Cross. St. Francis, inspired by the same Gospel, sought to follow CHRIST with simplicity, humility and unwavering fidelity, making the Gospel the rule of his life. As we gather to pray this N ovena today, let us ask the LORD for the grace not only to admire CHRIST but to follow HIM faithfully in our daily lives. May Mary teach us that true discipleship is expressed in loving service, steadfast faith and joyful obedience.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may faithfully proclaim the Gospel with conviction, care tenderly for GOD 'S people, and inspire others by the witness of holy lives, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may exercise their authority with wisdom, integrity and compassion, always placing the welfare of the people above personal interest, we pray to the LORD.</li><li>3. That, following the example of Mary, the faithful disciple who treasured GOD 'S word and remained steadfast beneath the Cross, we may remain faithful to CHRIST in times of both joy and trial, we pray to the LORD.</li><li>4. That, inspired by St. Francis' wholehearted love for the Gospel, we may become true disciples of CHRIST through prayer, simplicity of life, generous service to the poor and joyful witness to the Good News, we pray to the LORD.</li><li>5. That CHRIST, the Divine Healer, may bring comfort to the sick, strength to caregivers, hope to the discouraged, peace to troubled families, and eternal rest to the faithful departed, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> O Mary, conceived without sin,</p>
                  <p><strong>All:</strong> Pray for us who have recourse to you.</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 5 - Thursday 3 rd September 2026`}
              subtitle={`ST. MOTHER THERESA \n 5th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary, Star of Evangelization.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, t oday on the fifth day of our novena, we reflect on our call to become joyful disciples and courageous witnesses of JESUS CHRIST. Today we honour Mary as the Star of Evangelization. Having welcomed CHRIST into her own life, she immediately carried HIM to others. Her visit to Elizabeth was the first missionary journey of the New Testament, bringing the presence and joy of the Saviour into another home. Throughout her life, Mary always led people to JESUS and encouraged them to place their trust in HIM. We also remember St. Francis of Assisi, the joyful missionary disciple who proclaimed the Gospel not only by his words but also by the witness of his life. His love for CHRIST led him beyond the boundaries of comfort and security, inspiring countless people to rediscover the joy of following the LORD. In Luke 5: 1-11, JESUS tells Simon Peter, "From now on you will be catching people." Like Peter, Mary and Francis responded generously to GOD 'S call. May we become faithful missionary disciples, bringing CHRIST to our families, our parish and our society.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may continually respond to CHRIST 'S invitation to "put out into the deep." and draw many people into the communion of the Church, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may not seek personal honour but the common good, governing with integrity, justice and a sincere concern for the poor, we pray to the LORD.</li><li>3. That Mary, Star of Evangelization, may inspire us to carry CHRIST into our homes, our workplaces and our communities with the same joy and generosity with which she visited Elizabeth, we pray to the LORD.</li><li>4. With assistance from St Francis, we may become missionary disciples whose simplicity, humility and joyful witness proclaim the Gospel more powerfully than words alone, we pray to the LORD.</li><li>5. For those who fight for justice: that they may draw strength and inspiration from Mary to continue their mission of bringing justice to those falsely implicated, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> : My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary, the Mother of GOD,</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 6 - Friday 4th September 2026`}
              subtitle={`SACRED HEART \n 6th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary at the Foot of the Cross.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, a s we continue our Novena in honour of the Nativity of the Blessed Virgin Mary, Church invites us to discover the deeper meaning of C hrist ian discipleship. In Luke 5: 33-39, JESUS speaks of the bridegroom, new wine and new wineskins, reminding us that HIS coming brings a new way of life-a life transformed by HIS love. Mary lived this new life with unwavering fidelity. She remained beside her SON at the foot of the Cross, trusting in GOD 'S plan even in the darkest hour. St. Francis, whose heart was so deeply united with the Crucified LORD, received the sacred stigmata as a sign of his profound conformity to CHRIST. Neither Mary nor Francis sought suffering; both embraced GOD 'S will with love. In unison in this Novena, let us pray for the grace to remain faithful in times of trial, to carry our crosses with hope, and to discover that the love of CHRIST is stronger than every suffering.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may faithfully proclaim the mystery of CHRIST 'S Cross and Resurrection, encouraging GOD 'S people to persevere with hope in times of trial, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may work tirelessly to relieve the suffering of those affected by war, poverty, natural disasters and injustice, and promote peace, we pray to the LORD.</li><li>3. That, through the loving intercession of Mary, who remained faithful beneath the Cross, we may never lose hope in times of suffering but continue to trust in GOD 'S loving providence, we pray to the LORD.</li><li>4. That, following the example of St. Francis, whose life was conformed to the Crucified CHRIST, we may accept life's trials with courage and become witnesses of hope to those who are discouraged, we pray to the LORD.</li><li>5. For migrants and refugees: that they may find hope and courage and not despair in tough situations, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary, our refuge and strength,</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 7 - Saturday 5th September 2026`}
              subtitle={`ST. DOMINIC SAVIO \n 7th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary, Queen of Peace.  -</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, o n this seventh day of our novena in honour of the Nativity of the Blessed Virgin Mary, we gather around the altar to thank GOD for the gift of Mary, whom the Church honours as the Queen of Peace. She brought into the world JESUS CHRIST, the Prince of Peace, whose Kingdom is founded on love, justice and reconciliation. Today we also reflect on the life of St. Francis of Assisi, the humble messenger of peace. Through his words, his example and his courageous encounter with the Sultan during the Crusades, Francis showed that lasting peace is born not from violence but from dialogue, respect and love. In Mathew 25: 31-46, JESUS teaches that we encounter HIM in the hungry, the thirsty, the stranger, the sick and the imprisoned. Every act of compassion becomes an act of peace, for whenever we restore the dignity of another person, we build GOD 'S Kingdom. As we put forth our prayers in this Novena, let us ask Mary to help us become instruments of CHRIST 'S peace in our families, our communities and our world.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may proclaim CHRIST, the Prince of Peace, through lives of charity, reconciliation and humble service to the least of our brothers and sisters, we pray to the LORD.</li><li>2. That the leaders of nations, especially those affected by war, violence and unrest, may be guided by wisdom and compassion, choosing dialogue over conflict, justice over oppression, and peace over hatred, we pray to the LORD.</li><li>3. That Mary, Queen of Peace, who brought the Prince of Peace into the world, may help our families become places of forgiveness, mutual respect and loving unity, we pray to the LORD.</li><li>4. Through the intercession of St. Francis, we may become instruments of GOD 'S peace, bringing reconciliation where there is division, hope where there is despair, and love where there is hatred, we pray to the LORD.</li><li>5. That CHRIST, whom we encounter in the hungry, the sick, the lonely, the refugees, the elderly and all who suffer, may strengthen them with His loving presence, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER... One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary, health of the sick,</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 8 - S unday 6 th September 2026`}
              subtitle={`ST FRANCIS XAVIER \n 8th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary, Woman of Praise.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, t oday on this eighth day of our novena in honour of the Nativity of the Blessed Virgin Mary, let us thank GOD for giving us Mary, the humble woman whose whole life became a hymn of praise to the LORD. In her Magnificat she proclaimed GOD 'S greatness, rejoicing not in her own achievements but in HIS mercy and faithfulness. Today we also remember St. Francis of Assisi, whose heart overflowed with gratitude for GOD 'S presence in all creation. Through his beautiful Canticle of Brother Sun, he invited the whole universe-sun and moon, wind and water, earth and fire-to join in praising the Creator. In Mathew 18: 15-20, JESUS reminds us that C hrist ian life is lived in communion. HE calls us to seek reconciliation, to preserve unity, and to pray together in HIS name. A community united in love becomes a community that truly praises GOD. As we unite all our prayers in this Novena, let us ask Mary to teach us grateful hearts, joyful lips, and lives that glorify GOD through praise, reconciliation and loving service.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may be living witnesses of joyful faith and fostering unity for the faithful to see the presence of GOD, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may recognise the dignity of every human person, promote dialogue and reconciliation and protect the gifts of creation, we pray to the LORD.</li><li>3. That Mary, whose Magnificat proclaimed the greatness of the LORD, may teach us to live with humble and grateful hearts, praising GOD not only with our lips but also by lives of faithful service, we pray to the LORD.</li><li>4. That inspired by St. Francis of Assisi, who recognised every creature as a reflection of GOD 'S goodness, we may care responsibly for our common home and cherish the beauty of creation, we pray to the LORD.</li><li>5. That those burdened by illness, loneliness, poverty, family conflicts or discouragement may experience GOD 'S comforting presence through the kindness and support of those around them, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER. One Hail Mary. a Glory Be.</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary Queen of heaven,</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

            <NovenaCard 
              title={`Day 9 - Monday 7 th September 2026`}
              subtitle={`PARISH FAMILY CELL \n 9th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  <p><strong>Hymn</strong></p>
                  <p><strong>Leader:</strong> In the name of the FATHER, and of the SON, and of the HOLY SPIRIT. Amen</p>
                  <p className='mt-4'><strong>Theme:</strong> Mary, Mother of the Church.</p>
                  <p className='mt-4'><strong>Introduction:</strong> Dear brothers and sisters in CHRIST, t oday we gather for the ninth and final day of our novena in honour of the Nativity of the Blessed Virgin Mary. During these days we have reflected on Mary's virtues. As we prepare to celebrate Mary's birthday tomorrow, we thank GOD for giving her to us as our loving Mother and as the Mother of the Church. Today's theme invites us to contemplate Mary, who accompanied the early disciples in prayer and encouraged them to remain united in faith and hope. We also remember St. Francis of Assisi, whom GOD called to rebuild His Church-not by wealth or power, but by holiness, humility and joyful fidelity to the Gospel. In Luke 6:6-11, JESUS heals a man with a withered hand on the Sabbath, teaching us that love and mercy are always at the heart of GOD 'S law. A renewed Church is built whenever hearts are healed, lives are transformed and people are led back to GOD.</p>
                  <p className='mt-4'><strong>Novena Prayer:</strong> GOD our heavenly FATHER / the day of our salvation dawned / when the Blessed Virgin / gave birth to your SON / CHRIST our LORD / who set us free from sin / and made us blessed. / As we celebrate her Nativity / and join now in constant prayer with her / we implore YOU / to heal the sick / to comfort the sorrowful / to pardon the sinners / to grant us our special petition... (Mention your request) Look mercifully upon us / and by the power of YOUR SPIRIT / make us channels of / compassion towards others / as we follow the example / of Mary, our Mother. / YOU deigned to do great things / for the Virgin Mary / and brought her body and soul / to the glory of heaven / fill the hearts of YOUR children / with the hope of CHRIST 'S glory. / Amen.</p>
                  <p className='mt-4'><strong>Prayer of the Faithful</strong></p><p><em>Response:</em> LORD, hear our prayer.</p><ul className='mt-2 space-y-2'><li>1. For Pope Leo, Bishop Thomas, all Priests and Religious that they may continually renew the Church through holiness, faithful preaching of the Gospel and compassionate service, we pray to the LORD.</li><li>2. For the leaders of Governments and those in authority that they may exercise their responsibilities with wisdom, integrity and compassion, promoting justice, peace and the common good, we pray to the LORD.</li><li>3. That Mary, Mother of the Church, may deepen our love for CHRIST and His Church and help our families remain steadfast in faith, united in love, and generous in serving one another we pray to the LORD.</li><li>4. That following St. Francis of Assisi, we may strive to renew the Church through our own conversion, living lives of humility, simplicity, prayer and joyful fidelity to the Gospel, we pray to the LORD.</li><li>5. May our CHRIST ian communities become places of welcome, healing and hope for all who seek GOD 'S mercy, we pray to the LORD.</li><li>6. Let us pray for our personal needs, we pray to the LORD.</li></ul>
                  <p className='mt-4'><em>(Pause for some time)</em></p>
                  <p>One Our F ATHER. One Hail Mary... a Glory Be...</p>
                  <p className='mt-4'><strong>The Magnificat (Canticle of Mary)</strong></p>
                  <p><strong>All:</strong> My soul proclaims the greatness of the LORD, my spirit finds joy in GOD my savior; for HE has looked upon HIS servant in her lowliness; all ages to come shall call me blessed. GOD who is mighty has done great things for me, Holy is HIS name; HIS mercy is from age to age on those who fear HIM. HE has shown might with HIS arm; HE has confused the proud in their inmost thoughts. HE has deposed the mighty from their thrones and raised the lowly to high places. The hungry HE has given every good thing, while the rich HE has sent empty away. HE has upheld Israel HIS servant, ever mindful of HIS mercy; Even as HE promised our fathers, promised Abraham and HIS descendants forever. Amen.</p>
                  <p className='mt-4'><strong>Leader:</strong> Mary our heavenly Intercessor,</p>
                  <p><strong>All:</strong> Pray for us!</p>
                </>
              }
            />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Novena;
