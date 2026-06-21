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
                30th August – 7th September 2025
              </span>
            </h1>
          </div>
        </section>

        <section id="novena" className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid gap-8">
            
            <NovenaCard 
              title={`Day 1 – 30th August 2025`}
              subtitle={`St. Parish Family Cell \n
            1st Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
    <p><strong>Hymn</strong></p>

    <p><strong>Leader:</strong> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>

    <p><strong>All:</strong> Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, 
      and against the enemy of the whole human race. Give me strength humbly to pray to thee. 
      Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, 
      which for the entire Christian world was a birth of joy, the hope and solace of its life. 
      When thou wast born, O most holy Virgin then was the world made light. 
      Happy is thy stock, holy thy root, and blessed thy fruit, 
      for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, 
      as a virgin to bear Thy God, as a virgin to bring Him forth, 
      and after His birth to remain a virgin. 
      Have mercy therefore upon me a sinner, and give me aid, O Lady, 
      so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, 
      illustrious from the stock of David, didst announce joy to the entire world, 
      so may it fill me with true joy and cleanse me from every sin. 
      Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity 
      may put a cloak over all my sins. 
      O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen.
    </p>
    <p><em>(Mention your request)</em></p>
    <p>
       1 Our Father... <br />
       1 Hail Mary... <br />
       1 Glory Be...
    </p>
    <p><strong>The Magnificat (Canticle of Mary)</strong></p>
    <p><strong>All:</strong> My soul proclaims the greatness of the Lord, my spirit finds joy in God my savior; 
      for he has looked upon His servant in her lowliness; all ages to come shall call me blessed. 
      God who is mighty has done great things for me, holy is His name; His mercy is from age to age on those who fear Him. 
      He has shown might with His arm; He has confused the proud in their inmost thoughts. 
      He has deposed the mighty from their thrones and raised the lowly to high places. 
      The hungry He has given every good thing, while the rich He has sent empty away. 
      He has upheld Israel his servant, ever mindful of His mercy; Even as He promised our fathers, 
      promised Abraham and His descendants forever. Amen.
    </p>
    <p><strong>Leader:</strong> Mary help of Christians.</p>
    <p><strong>All:</strong> Pray for us!</p>
  
                </>
              }
            />

            <NovenaCard 
              title={`Day 2 – 31st August 2025`}
              subtitle={`St.Dominic Savio Community \n
            2nd Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
    <p><strong>Hymn</strong></p>

    <p><strong>Leader:</strong> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>

    <p><strong>All:</strong> Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, 
      and against the enemy of the whole human race. Give me strength humbly to pray to thee. 
      Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, 
      which for the entire Christian world was a birth of joy, the hope and solace of its life. 
      When thou wast born, O most holy Virgin then was the world made light. 
      Happy is thy stock, holy thy root, and blessed thy fruit, 
      for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, 
      as a virgin to bear Thy God, as a virgin to bring Him forth, 
      and after His birth to remain a virgin. 
      Have mercy therefore upon me a sinner, and give me aid, O Lady, 
      so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, 
      illustrious from the stock of David, didst announce joy to the entire world, 
      so may it fill me with true joy and cleanse me from every sin. 
      Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity 
      may put a cloak over all my sins. 
      O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen.
    </p>
    <p><em>(Mention your request)</em></p>
    <p>
       1 Our Father... <br />
       1 Hail Mary... <br />
       1 Glory Be...
    </p>
    <p><strong>The Magnificat (Canticle of Mary)</strong></p>
    <p><strong>All:</strong> Remember, O most gracious Virgin Mary, that never was it known that anyone 
        who fled to your protection, implored your help or sought your intercession, was left unaided. 
        Inspired by this confidence, I fly unto you, O Virgin of virgins, my Mother. 
        To you I come, before you I stand, sinful and sorrowful. 
        O Mother of the Word incarnate, despise not my petitions, but, in your mercy, hear and answer me. Amen.
    </p>
    <p><strong>Leader:</strong> Mary help of Christians.</p>
    <p><strong>All:</strong> Pray for us!</p>
  
                </>
              }
            />

            <NovenaCard 
              title={`Day 3 – 1st September 2025`}
              subtitle={`St. Gonsalo Garcia Community \n
        3rd Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>

        <p><strong>Leader:</strong> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>

        <p><strong>All:</strong> Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>

        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>Hail Holy Queen (Salve Regina)</strong></p>
        <p><strong>All:</strong> Hail, holy Queen/ Mother of Mercy, Our life/ our sweetness and our hope. / To thee do we cry, poor banished children of Eve/ To thee do we send up our sighs,/ Mourning and weeping in this valley of tears/ Turn then, most gracious Advocate/ thine eyes of mercy/toward us, And after this our exile/ show unto us the blessed fruit of thy womb, Jesus/ O clement, O loving/O sweet Virgin Mary.</p>
        <p><strong>Leader:</strong> Pray for us, O Holy Mother of God.</p>
        <p><strong>All:</strong> That we may be made worthy of the promises of Christ. Amen!</p>
    
                </>
              }
            />

            <NovenaCard 
              title={`Day 4 – 2nd September 2025`}
              subtitle={`St. Thomas Community \n
        4th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>
        <p><strong>Leader:</strong> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
        <p><strong>All:</strong> Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>
        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>Prayer to Mother Mary for Protection</strong></p>
        <p><strong>All:</strong> : We fly to your protection, most holy Mother of God; please listen to our petitions and needs, and deliver us from all dangers, ever glorious and blessed Virgin Mary. Mary, our model and mother, by your obedience and patience you have taught us how to be true children of God. Please help us by your powerful assistance to overcome all our weaknesses, and to fulfill perfectly our tasks in life. By your compassionate aid may we ever stand in spirit with you beneath the cross of Christ so that we may also rejoice with you in your divine Son's triumphant victory over sin and death. In your maternal kindness help us to be faithful to prayers in the company of God's Church as you were one with the Apostles in the upper room as you waited for the promised Spirit of Pentecost. With your gracious assistance may we be near you in the glory of Christ's kingdom come to sing with you and all the faithful the eternal praise of God. Amen.</p>
        <p><strong>Leader:</strong> O Mary, conceived without sin,</p>
        <p><strong>All:</strong> Pray for us who have recourse to you.</p>
    
                </>
              }
            />

            <NovenaCard 
              title={`Day 5 – 3rd September 2025`}
              subtitle={`St. Francis Xavier Community \n
        5th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>
        <p><strong>Leader:</strong> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
        <p><strong>All:</strong> Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>
        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>Act of Consecration to the Immaculate Heart of Mary</strong></p>
        <p><strong>All:</strong> O most pure heart of Mary, full of goodness, show your love towards us. Let the flame of your heart, O Mary, descend on all people. We love you immensely. Impress on our hearts true love so that we may long for you. O Mary, gentle and humble of heart, remember us when we sin. You know that all people sin. Grant that through your most pure and motherly heart, we may be healed from every spiritual sickness. Grant that we may always experience the goodness of your motherly heart, and that through the flame of your heart we may be converted. Amen</p>
        <p><strong>Leader:</strong> Mary, the Mother of God,</p>
        <p><strong>All:</strong> Pray for us!</p>
    
                </>
              }
            />

            <NovenaCard 
              title={`Day 6 – 4th September 2025`}
              subtitle={`St. Joseph Community \n
        6th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>
        <p><strong>Leader:</strong> In the name of the Father... Amen.</p>
        <p><strong>All:</strong> Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen.</p>
        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>Prayer to Mother Mary for Family</strong></p>
        <p><strong>All:</strong>O Mary, loving Mother of Jesus, and our Mother, pray to Jesus for our family, for all the families of the world, to guard the cradle of the newborn, the schools of the young, and their vocations. Blessed Saint Joseph, holy guardian of Jesus and Mary, assist us by your prayers in all the necessities of life. Ask of Jesus that special grace which He granted to you, to watch over our home at the pillow of the sick and dying, so that with Mary and you, heaven may find our family unbroken in the Sacred Heart of Jesus. Amen.</p>
        <p><strong>Leader:</strong> Mary, our refuge and strength,</p>
        <p><strong>All:</strong> Pray for us!</p>
    
                </>
              }
            />

            <NovenaCard 
              title={`Day 7 – 5th September 2025`}
              subtitle={`Sacred Heart Community \n
        7th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>
        <p><strong>Leader:</strong> In the name of the Father... Amen.</p>
        <p><strong>All:</strong>Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>
        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>Prayer for Healing to Our Lady of the Miraculous Medal</strong></p>
        <p><strong>All:</strong>Mary Immaculate, you have given yourself to us as Our Lady of the Miraculous Medal. You have asked us to pray with confidence, and we will receive great graces. We know your compassion, because you saw your Son suffer and die for us. In your union with his suffering you became the mother of us all. Mary, my mother teach me to understand my sufferings as you do and to endure it in union with the suffering of Jesus. In your motherly love, calm my fears and increase my trust in God's loving care. According to God's plan, obtain for me the healing I need. Intercede with your Son that I may have the strength I need to work for God's glory and the salvation of the World. Amen.</p>
        <p><strong>Leader:</strong> Mary, health of the sick,</p>
        <p><strong>All:</strong> Pray for us!</p>
    
                </>
              }
            />

            <NovenaCard 
              title={`Day 8 – 6th September 2025`}
              subtitle={`Youth Community \n
        8th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>
        <p><strong>Leader:</strong> In the name of the Father... Amen.</p>
        <p><strong>All:</strong>Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>
        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>A Prayer to Mother Mary in time of trouble</strong></p>
        <p><strong>All:</strong>Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>
        <p><strong>Leader:</strong> Mary Queen of heaven,</p>
        <p><strong>All:</strong> Pray for us!</p>
    
                </>
              }
            />

            <NovenaCard 
              title={`Day 9 – 7th September 2025`}
              subtitle={`St. Mother Teresa Community \n
        9th Day of the Novena to the Nativity of the Blessed Virgin Mary`}
              content={
                <>
                  
        <p><strong>Hymn</strong></p>
        <p><strong>Leader:</strong> In the name of the Father... Amen.</p>
        <p><strong>All:</strong>: Vouchsafe that I may praise thee, O sacred Virgin; give me strength against thine enemies, and against the enemy of the whole human race. Give me strength humbly to pray to thee. Give me strength to praise thee in prayer with all my powers, through the merits of thy most sacred nativity, which for the entire Christian world was a birth of joy, the hope and solace of its life. When thou wast born, O most holy Virgin then was the world made light. Happy is thy stock, holy thy root, and blessed thy fruit, for thou alone as a virgin, filled with the Holy Spirit, didst merit to conceive thy God, as a virgin to bear Thy God, as a virgin to bring Him forth, and after His birth to remain a virgin. Have mercy therefore upon me a sinner, and give me aid, O Lady, so that just as thy nativity, glorious from the seed of Abraham, sprung from the tribe of Judah, illustrious from the stock of David, didst announce joy to the entire world, so may it fill me with true joy and cleanse me from every sin. Pray for me, O Virgin most prudent, that the gladsome joys of thy most helpful nativity may put a cloak over all my sins. O holy Mother of God, flowering as the lily, pray to thy sweet Son for me, a wretched sinner. Amen</p>
        <p><em>(Mention your request)</em></p>
        <p>1 Our Father... <br />1 Hail Mary... <br />1 Glory Be...</p>

        <p><strong>A Prayer to the Blessed Virgin Our Lady of Mount Carmel</strong></p>
        <p><strong>All:</strong>O most beautiful Flower of Mount Carmel, Fruitful Vine, Splendor of Heaven, Blessed Mother of the Son of God, Immaculate Virgin, assist me this my necessity. O Star of the Sea, help me and show me herein you are my Mother. O Holy Mary, Mother of God, Queen of Heaven and Earth, I humbly beseech you from the bottom of my heart, to succor me in this necessity; there are none that can withstand your power. O, show me herein you are my Mother, O Mary, conceived without sin, pray for us who have recourse to thee</p>
        <p><strong>Leader:</strong> Mary our heavenly Intercessor,</p>
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
