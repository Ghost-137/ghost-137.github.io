const articles = [
  {
    id: 0,
    title: "The Lost City",
    excerpt: "A deep dive into the mysterious ancient ruins...",
    image: "images/oldCity.jpg",
    alt: "Ancient stone ruins covered in moss",
    content: `
      <h5>Discovery of the Ruins</h5>
      <p>The lost city was first discovered in 1924 by explorer John Smith during his expedition through the Amazon rainforest. The stone structures showed advanced architectural techniques not thought to exist in the region at that time.</p>
      
      <h5>Architectural Features</h5>
      <p>The most striking feature is the pyramid-like structure at the center, standing approximately 30 meters tall. The stones fit together without mortar, similar to Incan construction methods.</p>
      
      <img src="images/articles/ruins_detail.jpg" alt="Close-up of stone carvings" class="article-image">

      <table>
  <tr><th>Feature</th><th>Description</th></tr>
  <tr><td>Discovery</td><td>1924 by John Smith in Amazon</td></tr>
  <tr><td>Main Structure</td><td>30m mortarless pyramid</td></tr>
  <tr><td>Unique Aspect</td><td>Advanced pre-Incan engineering</td></tr>
  <tr><td>Recent Findings</td><td>Underground chambers via LIDAR</td></tr>
</table>
      
      <h5>Current Research</h5>
      <p>Modern archaeologists continue to study the site, with recent LIDAR scans revealing an extensive network of underground chambers that have yet to be explored.</p>
    `
  },
  {
    id: 1,
    title: "European Folklore Legends",
    excerpt: "Legends that have shaped cultures for centuries...",
    image: "images/pyramid.jpg",
    alt: "Old Helsinki street with traditional buildings",
    content: `
      <h5>Origins of Nordic Myths</h5>
      <p>The folklore of Northern Europe developed from a combination of pre-Christian beliefs and later medieval influences. Many stories were preserved through oral tradition before being written down.</p>
      
      <h5>Common Themes</h5>
      <p>Recurring motifs include nature spirits, magical creatures, and moral lessons. The harsh climate of the region influenced many tales about survival and perseverance.</p>
      
      <blockquote>
        "The forest listens when you speak of its inhabitants" - Old Finnish proverb
      </blockquote>
      
      <h5>Modern Interpretations</h5>
      <table>
  <tr><th>Legend</th><th>Key Features</th></tr>
  <tr><td>Nordic Myths</td><td>Nature spirits, survival tales</td></tr>
  <tr><td>Finnish Legends</td><td>Forest spirits, magical creatures</td></tr>
  <tr><td>Common Themes</td><td>Moral lessons, harsh climates</td></tr>
  <tr><td>Modern Influence</td><td>Books, films, video games</td></tr>
</table>
      <p>These ancient stories continue to inspire contemporary literature, films, and even video games, keeping the traditions alive for new generations.</p>
    `
  },
  {
    id: 2,
    title: "The Curse of Tutankhamun",
    excerpt: "The deadly legend that followed the discovery of the boy king's tomb...",
    image: "images/tutenkham.jpg",
    alt: "Golden mask of Tutankhamun in museum display",
    content: `
      <h5>The Discovery That Shocked the World</h5>
      <p>When Howard Carter uncovered Tutankhamun's tomb in 1922, archaeologists rejoiced at the pristine burial chamber. But celebrations turned to fear as mysterious deaths began plaguing the excavation team.</p>
      
      <h5>Victims of the Pharaoh's Wrath?</h5>
      <p>Lord Carnarvon, the expedition's financier, died just months later from an infected mosquito bite. His death was followed by several others connected to the dig - some from natural causes, others under strange circumstances.</p>
      
      <blockquote>
        "Death shall come on swift wings to him who disturbs the peace of the King" - Alleged tomb inscription (later disproven)
      </blockquote>
      <table>
  <tr><th>Event</th><th>Details</th></tr>
  <tr><td>Discovery</td><td>Howard Carter, 1922 (Valley of the Kings)</td></tr>
  <tr><td>First Victim</td><td>Lord Carnarvon (mosquito bite infection, 1923)</td></tr>
  <tr><td>"Curse" Origin</td><td>Media exaggeration of deaths (mostly natural causes)</td></tr>
  <tr><td>Scientific Explanation</td><td>Toxic mold/ancient bacteria in sealed tomb</td></tr>
  <tr><td>Legacy</td><td>Mummy revenge tropes in pop culture</td></tr>
</table>
      <h5>Science Versus Superstition</h5>
      <p>Modern researchers suggest toxic mold or ancient bacteria may explain some deaths. The real "curse" was likely media sensationalism, as newspapers exaggerated events for dramatic effect.</p>
      
      <h5>The Curse's Lasting Legacy</h5>
      <p>Despite rational explanations, the legend persists in popular culture, inspiring countless books and films about mummies' revenge.</p>
    `
  },
  {
    id: 3,
    title: "The Minotaur's Labyrinth: Truth Behind the Myth",
    excerpt: "The terrifying half-man, half-bull creature that demanded human sacrifice in Crete's impossible maze...",
    image: "images/labyrinth.jpg",
    alt: "Ancient Knossos palace ruins with labyrinth patterns",
    content: `
      <h5>The Birth of a Monster</h5>
      <p>According to Greek mythology, the Minotaur was born from Queen Pasiphaë's unnatural union with a sacred bull - a divine punishment from Poseidon. King Minos, horrified yet unable to kill the half-bull child, commissioned the brilliant architect Daedalus to build an inescapable labyrinth beneath his palace at Knossos.</p>
      
      <h5>The Labyrinth's Dark Purpose</h5>
      <p>The twisting corridors served as both prison and feeding ground. Every nine years, Athens sent seven youths and seven maidens as tribute to be devoured by the Minotaur. This gruesome tradition continued until Prince Theseus volunteered as sacrifice, determined to end the terror.</p>
      
      <blockquote>
        "No one who entered the labyrinth had ever returned - the walls shifted like living things, the very air thick with the stench of blood and madness."
      </blockquote>
      
      <h5>Theseus' Impossible Quest</h5>
      <p>With help from Minos' daughter Ariadne, Theseus unraveled a ball of golden thread to mark his path. Ancient texts describe his confrontation with the Minotaur in vivid detail - the creature's deafening roars, the slick stone floors, and how Theseus used the monster's own brute strength against it.</p>
      <table>
  <tr><th>Myth Element</th><th>Historical Basis</th></tr>
  <tr><td>Minotaur Creature</td><td>Bull motifs in Minoan art (1500 BCE)</td></tr>
  <tr><td>Labyrinth</td><td>Complex Knossos palace layout</td></tr>
  <tr><td>Human Sacrifices</td><td>Child remains found at Cretan sites</td></tr>
  <tr><td>Theseus' Thread</td><td>Possible earthquake cracks as maze inspiration</td></tr>
  <tr><td>Modern Legacy</td><td>Psychological symbol of life's challenges</td></tr>
</table>
      <h5>Archaeological Evidence</h5>
      <p>At the ruins of Knossos, archaeologists found:
        <ul>
          <li>Bull motif frescoes dating to 1500 BCE</li>
          <li>A complex palace layout resembling a maze</li>
          <li>Child remains showing possible ritual sacrifice</li>
        </ul>
      Some scholars believe the myth preserves memory of Minoan bull-worship turned monstrous by Greek storytellers.</p>
      
      <h5>The Labyrinth in Modern Culture</h5>
      <p>The legend endures as:
        <ul>
          <li>Psychological symbol of life's complex journeys</li>
          <li>Inspiration for maze designs worldwide</li>
          <li>Metaphor for confronting one's inner demons</li>
        </ul>
      Recent discoveries suggest the myth may have originated from earthquake damage that created maze-like cracks in the palace.</p>
      
      <h5>Lasting Mysteries</h5>
      <p>Key unanswered questions:
        <ul>
          <li>Was Daedalus' labyrinth real architecture or pure myth?</li>
          <li>Did bull-leaping rituals inspire the Minotaur concept?</li>
          <li>Why does this story appear across Mediterranean cultures?</li>
        </ul>
      The truth may lie buried beneath layers of myth and memory.</p>
    `
  },
  {
    id: 4,
    title: "Vlad the Impaler: The True Dracula",
    excerpt: "The blood-soaked prince who inspired the world's most famous vampire legend...",
    image: "images/dracula.jpg",
    alt: "Medieval painting of Vlad III Dracula",
    content: `
      <h5>The Prince of Wallachia</h5>
      <p>Born in 1431, Vlad III earned his gruesome nickname by impaling over 20,000 Ottoman invaders on wooden stakes. As ruler of Wallachia (modern Romania), he used psychological warfare - leaving forests of rotting corpses to terrify enemies. His father, Vlad II Dracul, was a knight in the Order of the Dragon, inspiring the surname "Dracula" meaning "Son of the Dragon."</p>
      
      <h5>Methods of Terror</h5>
      <p>Historical accounts describe his signature punishments:
        <ul>
          <li><strong>The Golden Cup:</strong> Left a jeweled chalet in public squares - none dared steal it</li>
          <li><strong>Nailhead Diplomacy:</strong> Refused to remove his hat before Ottoman envoys, nailing it to their heads</li>
          <li><strong>Night Attack of 1462:</strong> Sent plague victims' corpses into enemy camps</li>
        </ul>
      His cruelty became legendary when he allegedly dined among impaled corpses during an Ottoman invasion.</p>
      
      <blockquote>
        "He roasted children and forced mothers to eat them. He impaled victims through their anus until the stake emerged from their mouth." - German pamphlets, 15th century
      </blockquote>
      
      <h5>From History to Horror</h5>
      <p>Bram Stoker's 1897 novel <em>Dracula</em> blended Vlad's history with Transylvanian folklore:
        <ul>
          <li>Vlad's decapitated head was sent to Constantinople - mirroring vampire beheading myths</li>
          <li>His family castle, Poenari Fortress, resembles descriptions of Castle Dracula</li>
          <li>Romanian word "drac" means both "dragon" and "devil"</li>
        </ul>
      </p>
      
      <h5>Archaeological Discoveries</h5>
      <p>Recent findings reveal:
        <ul>
          <li>His lost grave at Snagov Monastery contained headless remains</li>
          <li>Chemical analysis shows his letters were written in blood-tinged ink</li>
          <li>Mass graves in Târgoviște confirm impalement methods</li>
        </ul>
      </p>
      
      <h5>Was He Hero or Monster?</h5>
      <p>Romanians revere him as:
        <ul>
          <li>A defender against Ottoman expansion</li>
          <li>An early law-and-order ruler who eradicated crime</li>
          <li>A national symbol featured on currency and stamps</li>
        </ul>
      While Western accounts emphasize his sadism, Romanian oral tradition tells of him executing corrupt boyars to protect peasants.</p>
      
      <h5>Modern Vampire Connections</h5>
      <p>The real Vlad III differs from fictional vampires:
        <table>
          <tr><th>Vlad the Impaler</th><th>Count Dracula</th></tr>
          <tr><td>Fought Muslims</td><td>Fears Christian symbols</td></tr>
          <tr><td>Died age 45 in battle</td><td>Immortal</td></tr>
          <tr><td>Used psychological terror</td><td>Uses supernatural powers</td></tr>
        </table>
      </p>
    `
  },
  {
    id: 5,
    title: "Robin Hood: Outlaw or Myth?",
    excerpt: "The legendary archer who stole from the rich and gave to the poor - but did he really exist?",
    image: "images/robin.jpg",
    alt: "Medieval illustration of Robin Hood with longbow in Sherwood Forest",
    content: `
      <h5>The Earliest Ballads (13th Century)</h5>
      <p>The first written references appear in court records from 1225-1247 mentioning "Robinhood" fugitives. The oldest surviving ballad, <em>Robin Hood and the Monk</em> (1450), depicts him as a violent yeoman - not the nobleman of later tales. Key early elements include:
        <ul>
          <li>Battles with the Sheriff of Nottingham (a real position)</li>
          <li>Hideouts in Barnsdale Forest (not Sherwood)</li>
          <li>No mention of Maid Marian or giving to the poor</li>
        </ul>
      </p>
  
      <blockquote>
        "Robyn hod in scherewod stod" - First known written reference (1377 poem <em>Piers Plowman</em>)
      </blockquote>
  
      <h5>Historical Candidates</h5>
      <p>Scholars propose several real figures who may have inspired the legend:
        <table>
          <tr><th>Name</th><th>Connection</th><th>Period</th></tr>
          <tr><td>Robert Hod</td><td>Fugitive in York records</td><td>1226</td></tr>
          <tr><td>Roger Godberd</td><td>Outlaw who evaded capture</td><td>1260s</td></tr>
          <tr><td>Robert Deyville</td><td>Knight turned rebel</td><td>1290s</td></tr>
        </table>
        The name "Robin Hood" became a generic term for outlaws by 1300.
      </p>
  
      <h5>Evolution of the Merry Men</h5>
      <p>The familiar characters joined the legend at different times:
        <ul>
          <li><strong>Little John</strong>: Appears in earliest ballads (size exaggerated later)</li>
          <li><strong>Friar Tuck</strong>: Added in 15th century May Day plays</li>
          <li><strong>Maid Marian</strong>: Merged from French pastoral tales (16th century)</li>
          <li><strong>Will Scarlet</strong>: Originally "Will Scarlok" in 1400s ballads</li>
        </ul>
      </p>
  
      <h5>Sherwood Forest Archaeology</h5>
      <p>Recent discoveries in Nottinghamshire:
        <ul>
          <li>12th-century hunting lodge that may have inspired the Sheriff's base</li>
          <li>Medieval arrowheads matching longbow descriptions</li>
          <li>Caves with hearths dated to 1200s (possible hideouts)</li>
        </ul>
        The Major Oak tree (now a tourist site) couldn't have been his hideout - it's only 800 years old.
      </p>
  
      <h5>Why the Legend Endures</h5>
      <p>Robin Hood represents:
        <ul>
          <li>Resistance to oppressive taxation (especially relevant during the 1381 Peasants' Revolt)</li>
          <li>Medieval class struggle between Saxons and Normans</li>
          <li>The romantic ideal of honorable banditry</li>
        </ul>
        Modern adaptations from Errol Flynn to Disney keep reinventing him for new generations.
      </p>
  
      <h5>Fact vs Fiction</h5>
      <table>
        <tr><th>Hollywood Myth</th><th>Historical Reality</th></tr>
        <tr><td>Nobleman returning from Crusades</td><td>Likely a yeoman or small landowner</td></tr>
        <tr><td>Always gave to the poor</td><td>Early ballads show him keeping loot</td></tr>
        <tr><td>Fought Prince John</td><td>Stories predate John's reign (1199-1216)</td></tr>
      </table>
    `
  },
  {
    id: 6,
    title: "Atlantis: The Sunken Civilization",
    excerpt: "Did Plato's legendary island empire really exist?",
    image: "images/atlantis.jpg",
    alt: "Artistic depiction of Atlantis with concentric rings",
    content: `
      <h5>Plato's Original Account</h5>
      <p>In his dialogues <em>Timaeus</em> and <em>Critias</em> (360 BCE), Plato described Atlantis as an advanced naval power that sank "in a single day and night" around 9600 BCE. Key details include:
        <ul>
          <li>Concentric rings of water and land</li>
          <li>Poseidon's temple covered in silver and gold</li>
          <li>Elephants in the royal palace</li>
        </ul>
      </p>
      <blockquote>"There occurred violent earthquakes and floods... Atlantis disappeared into the depths of the sea." - Plato</blockquote>
      <h5>Top Modern Theories</h5>
      <ul>
        <li><strong>Santorini Eruption:</strong> The Minoan civilization's destruction (1600 BCE)</li>
        <li><strong>Doggerland:</strong> Sunken North Sea landmass</li>
        <li><strong>Richat Structure:</strong> Eye of Africa's geological formation</li>
      </ul>

      <table>
  <tr><th>Plato's Description</th><th>Modern Theories</th></tr>
  <tr><td>Circular island city</td><td>Santorini eruption (1600 BCE)</td></tr>
  <tr><td>Advanced naval power</td><td>Minoan civilization influence</td></tr>
  <tr><td>Sank in 9600 BCE</td><td>Doggerland flooding (6000 BCE)</td></tr>
  <tr><td>Elephants in palace</td><td>Richat Structure (Africa)</td></tr>
</table>
    `
  },
  {
    id: 7,
    title: "El Dorado: The Gilded King",
    excerpt: "How a Muisca ritual became the obsession of conquistadors",
    image: "images/eldorado.jpg",
    alt: "Golden Muisca raft artifact from Colombia",
    content: `
      <h5>The Original Ritual</h5>
      <p>At Lake Guatavita near Bogotá, the Muisca people performed a ceremony where their king (the "Gilded One") covered himself in gold dust and washed it off as an offering.</p>
      <h5>Conquistador Madness</h5>
      <p>Between 1530-1650, over 15 expeditions searched for the mythical city, including:
        <table>
          <tr><th>Explorer</th><th>Fate</th></tr>
          <tr><td>Gonzalo Pizarro</td><td>Lost 4,000 men in Amazon</td></tr>
          <tr><td>Walter Raleigh</td><td>Executed after failed search</td></tr>
        </table>
      </p>
      <blockquote>"They marched through swamps up to their waists, eating their horses and leather bags." - Chronicler of the Orellana expedition</blockquote>
      <table>
  <tr><th>Legend</th><th>Reality</th></tr>
  <tr><td>Golden city</td><td>Muisca gold rituals at Lake Guatavita</td></tr>
  <tr><td>Conquistador quests</td><td>15+ failed expeditions (1530-1650)</td></tr>
  <tr><td>Endless riches</td><td>Actual finds: golden raft artifacts</td></tr>
  <tr><td>Lost civilization</td><td>Spanish exaggerated local gold offerings</td></tr>
</table>
    `
  },
  {
    id: 8,
    title: "Joan of Arc: The Maid Who Heard Voices",
    excerpt: "A peasant girl who changed the course of the Hundred Years' War",
    image: "images/joan.jpg",
    alt: "Medieval painting of Joan of Arc in armor",
    content: `
      <h5>The Voices Begin (1424)</h5>
      <p>At age 13 in Domrémy, Joan reported visions of Archangel Michael and Saints Catherine and Margaret telling her to drive the English from France.</p>
      <h5>Military Campaigns</h5>
      <ul>
        <li>Convinced Charles VII to give her troops</li>
        <li>Lifted the Siege of Orléans in 9 days</li>
        <li>Had her sword examined by priests to prove its holiness</li>
      </ul>
      <blockquote>"I was admonished to adopt a man's dress... I obeyed this voice." - Trial testimony (1431)</blockquote>
      <table>
  <tr><th>Event</th><th>Fact</th></tr>
  <tr><td>First heard voices</td><td>Age 13 (1424), Domrémy</td></tr>
  <tr><td>Military victories</td><td>Lifted Siege of Orléans in 9 days</td></tr>
  <tr><td>Trial & execution</td><td>Burned at stake (1431), age 19</td></tr>
  <tr><td>Posthumous pardon</td><td>Retrial cleared her name (1456)</td></tr>
  <tr><td>Canonization</td><td>Declared saint (1920)</td></tr>
</table>
    `
  },
  {
    id: 9,
    title: "The Legend of the White Snake",
    excerpt: "China's tale of love, betrayal, and supernatural beings",
    image: "images/whitesnake.jpg",
    alt: "Illustration of the White Snake",
    content: `
      <h5>Origins</h5>
      <p>The legend dates back to the Tang dynasty and has evolved over centuries. Key elements include:
        <ul>
          <li>White Snake (Bai Suzhen) transforms into a beautiful woman</li>
          <li>Falls in love with a mortal, Xu Xian</li>
          <li>Faced with opposition from the monk Fahai</li>
        </ul>
      </p>
      <h5>Modern Interpretations</h5>
      <table>
        <tr><th>Medium</th><th>Adaptation</th></tr>
        <tr><td>Film</td><td>Various movies and TV series</td></tr>
        <tr><td>Literature</td><td>Novels and operas</td></tr>
        <tr><td>Art</td><td>Paintings and sculptures</td></tr>
      </table>
      <blockquote>"True love transcends the boundaries of life and death." - Traditional saying</blockquote>
    `
  },
  {
    id: 10,
    title: "The Tale of the Bamboo Cutter",
    excerpt: "Japan's oldest narrative, featuring Princess Kaguya",
    image: "images/bamboo-cutter.jpg",
    alt: "Illustration of Princess Kaguya",
    content: `
      <h5>Storyline</h5>
      <p>Also known as "The Tale of Princess Kaguya," this story is a cornerstone of Japanese folklore. Key points include:
        <ul>
          <li>Old bamboo cutter finds a tiny girl inside a bamboo stalk</li>
          <li>Girl grows into a beautiful woman, attracting many suitors</li>
          <li>Reveals her celestial origins and returns to the moon</li>
        </ul>
      </p>
      <h5>Significance</h5>
      <table>
        <tr><th>Aspect</th><th>Importance</th></tr>
        <tr><td>Literature</td><td>Considered Japan's oldest prose narrative</td></tr>
        <tr><td>Culture</td><td>Influences various art forms and traditions</td></tr>
        <tr><td>Film</td><td>Adapted into animated films</td></tr>
      </table>
      <blockquote>"Her beauty was beyond earthly comparison." - The Tale of the Bamboo Cutter</blockquote>
    `
  },
  {
    id: 11,
    title: "The Epic of Gilgamesh",
    excerpt: "Ancient Mesopotamia's heroic saga",
    image: "images/gilgamesh.jpg",
    alt: "Ancient tablet depicting Gilgamesh",
    content: `
      <h5>Overview</h5>
      <p>One of the oldest known literary works, the Epic of Gilgamesh explores themes of friendship, heroism, and mortality. Key elements include:
        <ul>
          <li>Gilgamesh, King of Uruk, embarks on epic quests</li>
          <li>Forms a deep bond with Enkidu</li>
          <li>Seeks immortality after Enkidu's death</li>
        </ul>
      </p>
      <h5>Legacy</h5>
      <table>
        <tr><th>Aspect</th><th>Impact</th></tr>
        <tr><td>Literature</td><td>Influences countless works of fiction</td></tr>
        <tr><td>Archaeology</td><td>Provides insights into ancient Mesopotamian culture</td></tr>
        <tr><td>Philosophy</td><td>Explores existential themes</td></tr>
      </table>
      <blockquote>"For whom have I labored? For whom have I journeyed?" - Gilgamesh</blockquote>
    `
  },
  {
    id: 12,
    title: "World War I",
    excerpt: "The Great War that reshaped the world",
    image: "images/warone.jpg",
    alt: "Soldiers in trenches during World War I",
    content: `
      <h5>Causes</h5>
      <p>World War I, also known as the Great War, began in 1914 due to a complex web of alliances and conflicts. Key causes include:
        <ul>
          <li>Assassination of Archduke Franz Ferdinand</li>
          <li>Nationalism and imperialism</li>
          <li>Military alliances and arms race</li>
        </ul>
      </p>
      <h5>Major Battles</h5>
      <table>
  <tr><th>Event</th><th>Details</th></tr>
  <tr><td>Start Date</td><td>July 28, 1914</td></tr>
  <tr><td>Trigger</td><td>Assassination of Archduke Franz Ferdinand</td></tr>
  <tr><td>Major Powers</td><td>Allies vs Central Powers</td></tr>
  <tr><td>Key Battle</td><td>Battle of the Somme (1916)</td></tr>
  <tr><td>End Date</td><td>November 11, 1918</td></tr>
  <tr><td>Casualties</td><td>~20 million dead</td></tr>
  <tr><td>Legacy</td><td>League of Nations formed</td></tr>
</table>
      <p>Significant battles that defined the war:
        <ul>
          <li>Battle of the Somme</li>
          <li>Battle of Verdun</li>
          <li>Battle of Gallipoli</li>
        </ul>
      </p>
      <h5>Consequences</h5>
      <p>The war had profound effects on the world:
        <ul>
          <li>Political: Collapse of empires and rise of new nations</li>
          <li>Social: Massive loss of life and societal changes</li>
          <li>Economic: Devastation and reconstruction</li>
        </ul>
      </p>
      <blockquote>"The war to end all wars." - Common saying</blockquote>
    `
  },
  {
    id: 13,
    title: "World War II",
    excerpt: "The global conflict that shaped the modern world",
    image: "images/worldwar.jpg",
    alt: "Soldiers storming Normandy beaches during World War II",
    content: `
      <h5>Causes</h5>
      <p>World War II began in 1939 due to unresolved issues from World War I and aggressive expansion by Axis powers. Key causes include:
        <ul>
          <li>Treaty of Versailles and economic instability</li>
          <li>Rise of fascism and militarism</li>
          <li>Expansionist policies of Germany, Italy, and Japan</li>
        </ul>
      </p>
      <h5>Major Battles</h5>
      <p>Significant battles that defined the war:
        <ul>
          <li>Battle of Stalingrad</li>
          <li>Battle of Midway</li>
          <li>D-Day (Normandy Invasion)</li>
        </ul>
      </p>
      <h5>Consequences</h5>
      <table>
  <tr><th>Event</th><th>Details</th></tr>
  <tr><td>Start Date</td><td>September 1, 1939</td></tr>
  <tr><td>Trigger</td><td>Germany invades Poland</td></tr>
  <tr><td>Major Powers</td><td>Allies vs Axis</td></tr>
  <tr><td>Key Battle</td><td>D-Day (June 6, 1944)</td></tr>
  <tr><td>Holocaust</td><td>~6 million Jews killed</td></tr>
  <tr><td>End Date</td><td>September 2, 1945</td></tr>
  <tr><td>Casualties</td><td>~70-85 million dead</td></tr>
  <tr><td>Legacy</td><td>United Nations formed</td></tr>
</table>
      <p>The war had profound effects on the world:
        <ul>
          <li>Political: Formation of the United Nations and Cold War</li>
          <li>Social: Holocaust and human rights movements</li>
          <li>Economic: Reconstruction and economic boom</li>
        </ul>
      </p>
      <blockquote>"The war to end all wars." - Common saying</blockquote>
    `
  },
  {
    id: 14,
    title: "The History of Finland",
    excerpt: "From ancient tribes to modern nationhood",
    image: "images/helsinki.jpg",
    alt: "Finnish landscape with historical landmarks",
    content: `
      <h5>Early History</h5>
      <p>Finland's history dates back to ancient tribes and early settlements. Key periods include:
        <ul>
          <li>Prehistoric times: Hunter-gatherer societies</li>
          <li>Medieval era: Swedish rule and Christianization</li>
          <li>18th century: Russian influence and autonomy</li>
        </ul>
      </p>
      <h5>Independence</h5>
      <p>Finland declared independence from Russia in 1917. Key events include:
        <ul>
          <li>Declaration of independence on December 6, 1917</li>
          <li>Civil War in 1918</li>
          <li>Formation of a democratic republic</li>
        </ul>
      </p>
      <h5>Modern Era</h5>
      <table>
  <tr><th>Period</th><th>Key Event</th></tr>
  <tr><td>Pre-1200s</td><td>Finnish tribes and Viking contacts</td></tr>
  <tr><td>1323</td><td>Becomes part of Sweden (Treaty of Nöteborg)</td></tr>
  <tr><td>1809</td><td>Becomes Russian Grand Duchy</td></tr>
  <tr><td>1917</td><td>Independence declared (December 6)</td></tr>
  <tr><td>1939-40</td><td>Winter War against USSR</td></tr>
  <tr><td>1995</td><td>Joins European Union</td></tr>
  <tr><td>2000s</td><td>Technology leader (Nokia, Linux, education)</td></tr>
</table>
      <p>Finland has developed into a modern, prosperous nation. Key aspects include:
        <ul>
          <li>Economic growth and technological advancements</li>
          <li>Social welfare and education systems</li>
          <li>Environmental sustainability and innovation</li>
        </ul>
      </p>
      <blockquote>"Sisu - the Finnish spirit of resilience and determination." - Finnish saying</blockquote>
    `
  },
  {
    id: 15,
    title: "The 47 Ronin: Japan's Ultimate Revenge Story",
    excerpt: "The true samurai tale of loyalty that became a national legend...",
    image: "images/japan.jpg",
    alt: "Woodblock print of the 47 ronin attacking Kira's mansion",
    content: `
      <h5>The Fateful Insult (1701)</h5>
      <p>When Lord Asano Naganori drew his sword in Edo Castle and wounded protocol master Kira Yoshinaka, he violated strict shogunate laws. Forced to commit seppuku (ritual suicide), his 300 samurai became masterless ronin. After two years of planning, 47 loyal retainers swore vengeance.</p>
  
      <h5>The Night of Attack (1703)</h5>
      <p>On January 30th, during a snowstorm, the ronin struck Kira's heavily guarded Edo mansion:
        <ul>
          <li>Split into two assault teams (front and rear gates)</li>
          <li>Used wooden ladders to scale walls</li>
          <li>Captured Kira alive (identified by his scar)</li>
        </ul>
      They beheaded him with the same dagger Asano used for seppuku.</p>
  
      <blockquote>
        "We have seen the great loyalty of the 47 men... they should be allowed to die as true samurai." - Shogun Tokugawa Tsunayoshi's verdict
      </blockquote>
  
      <h5>Historical Aftermath</h5>
      <p>After surrendering Kira's head at Sengakuji Temple:
        <table>
          <tr><th>Date</th><th>Event</th></tr>
          <tr><td>Feb 4, 1703</td><td>Ordered to commit seppuku</td></tr>
          <tr><td>Feb 20, 1703</td><td>Buried beside Lord Asano</td></tr>
          <tr><td>1710</td><td>First kabuki adaptation staged</td></tr>
        </table>
      </p>
  
      <h5>Archaeological Evidence</h5>
      <p>At Sengakuji Temple today:
        <ul>
          <li>Original well where Kira's head was washed</li>
          <li>47 stone memorials with incense burners</li>
          <li>Asano's bloodstained floorboards (preserved)</li>
        </ul>
      </p>
  
      <h5>Why This Story Resonates</h5>
      <p>The tale embodies:
        <ul>
          <li><strong>Giri</strong> (duty) vs <strong>Ninjo</strong> (human feeling)</li>
          <li>The Bushido code's paradox - breaking law to fulfill honor</li>
          <li>Modern salaryman culture's loyalty ideals</li>
        </ul>
      Annual ceremonies still draw thousands to the graves.
      </p>
  
      <h5>Hollywood vs History</h5>
      <table>
        <tr><th>Movie Myths</th><th>Truth</th></tr>
        <tr><td>Magic and monsters (2013 film)</td><td>No supernatural elements</td></tr>
        <tr><td>Love story subplot</td><td>No romantic involvement</td></tr>
        <tr><td>Single heroic leader</td><td>Oishi was first among equals</td></tr>
      </table>
    `
  },
  {
    id: 16,
    title: "The Green Children of Woolpit",
    excerpt: "12th-century England's mysterious alien encounter?",
    image: "images/green.jpg",
    alt: "Medieval manuscript showing green-skinned children",
    content: `
      <h5>The 1173 Account</h5>
      <p>Chronicler William of Newbury recorded that villagers in Suffolk found brother and sister with green skin speaking an unknown language. Key details:
        <ul>
          <li>Only ate raw beans initially</li>
          <li>Girl learned English and said they came from "St Martin's Land"</li>
          <li>Their skin faded to normal color over time</li>
        </ul>
      </p>
      <h5>Modern Explanations</h5>
      <table>
        <tr><th>Theory</th><th>Evidence</th></tr>
        <tr><td>Flemish immigrants</td><td>Persecuted under Henry II</td></tr>
        <tr><td>Arsenic poisoning</td><td>From copper mining</td></tr>
        <tr><td>Folktale motif</td><td>Similar stories exist in Europe</td></tr>
      </table>
      <blockquote>"They described a twilight world where the sun never rose." - Ralph of Coggeshall's version</blockquote>
    `
  },
  {
    id: 17,
    title: "The Pied Piper: Child Snatcher or Plague Metaphor?",
    excerpt: "Germany's haunting legend of vanished children that may hide a dark truth...",
    image: "images/piedpiper.jpg",
    alt: "Medieval fresco of the Pied Piper leading children",
    content: `
      <h5>The Original 1284 Event</h5>
      <p>In the Saxon town of Hamelin (now Hameln), records show 130 children disappeared on June 26. The earliest account (1384) states simply: "It is 100 years since our children left."</p>
  
      <h5>The Rat Connection</h5>
      <p>The familiar rat-catcher version first appeared in 1559. Historians note:
        <ul>
          <li>Hamelin had no rat infestations in the 13th century</li>
          <li>The town's 1300s stained glass (destroyed in 1660) showed colorful piper</li>
          <li>"Pied" refers to his multicolored clothing, not rats</li>
        </ul>
      </p>
  
      <blockquote>
        "A wondrous man in rainbow garb stole our future with his flute's curse." - Hamelin town chronicle (1440)
      </blockquote>
  
      <h5>Modern Theories</h5>
      <table>
        <tr><th>Theory</th><th>Evidence</th></tr>
        <tr><td>Children's Crusade</td><td>1212 mass migration fits timeline</td></tr>
        <tr><td>Dancing Plague</td><td>Ergot poisoning causes convulsions</td></tr>
        <tr><td>Mass emigration</td><td>Eastern European settlement records</td></tr>
      </table>
  
      <h5>Lasting Legacy</h5>
      <p>Today Hameln:
        <ul>
          <li>Bans music on the Bungelosenstrasse (street where children were last seen)</li>
          <li>Uses rat motifs on manhole covers and bakeries</li>
          <li>Hosts annual open-air plays since 1955</li>
        </ul>
      </p>
    `
  },
  {
    id: 18,
    title: "The Dancing Death: When a Town Danced Itself to Exhaustion",
    excerpt: "The bizarre 16th-century epidemic of uncontrollable dancing...",
    image: "images/dancing-plague.jpg",
    alt: "Historic woodcut of people dancing wildly in streets",
    content: `
      <h5>The Outbreak Begins</h5>
      <p>In July 1518, Frau Troffea began dancing violently in Strasbourg. Within weeks, 400 citizens joined, dancing until bones broke or hearts failed. Contemporary doctor Paracelsus recorded deaths from "dancing mania."</p>
  
      <h5>Failed Cures</h5>
      <p>The town council's responses:
        <ul>
          <li>Built wooden stages with professional dancers</li>
          <li>Hired musicians to "dance it out" of them</li>
          <li>Processions to St. Vitus's shrine (patron saint of dancers)</li>
        </ul>
      </p>
  
      <blockquote>
        "Their feet were bloody pulps yet still they twitched, possessed by some invisible piper." - Chronicler Jakob von Königshofen
      </blockquote>
  
      <h5>Scientific Explanations</h5>
      <table>
        <tr><th>Theory</th><th>Probability</th></tr>
        <tr><td>Ergot poisoning</td><td>LSD-like mold on rye bread</td></tr>
        <tr><td>Mass psychogenic illness</td><td>Stress-induced hysteria</td></tr>
        <tr><td>Tarantism</td><td>Spider bite folklore from Italy</td></tr>
      </table>
    `
  },
  {
    id: 19,
    title: "Elizabeth Báthory: History's Most Prolific Female Serial Killer",
    excerpt: "The noblewoman who allegedly bathed in virgin blood...",
    image: "images/elizabeth.jpg",
    alt: "Portrait of Countess Elizabeth Báthory in 17th century dress",
    content: `
      <h5>The Crimes (1585-1609)</h5>
      <p>Accused of torturing/killing 650 girls at Čachtice Castle (Slovakia), trial records describe:
        <ul>
          <li>Iron maiden with inward spikes</li>
          <li>Winter "ice baths" until death</li>
          <li>Needle fingers for skin piercing</li>
        </ul>
      </p>
  
      <h5>Political Context</h5>
      <p>Recent scholarship suggests:
        <ul>
          <li>King Matthias II owed her massive debts</li>
          <li>Witnesses were tortured into confessions</li>
          <li>No blood-bathing in original documents</li>
        </ul>
      </p>
  
      <blockquote>
        "The girls' bodies were drained like wine casks, stacked in the cellar like firewood." - Servant testimony (1610)
      </blockquote>
  
      <h5>Vampire Connection</h5>
      <p>Báthory influenced vampire lore through:
        <table>
          <tr><th>Element</th><th>First Appearance</th></tr>
          <tr><td>Blood baths</td><td>1720s German pamphlets</td></tr>
          <tr><td>Eternal youth</td><td>1890s gothic novels</td></tr>
          <tr><td>Female vampire</td><td>Carmilla (1872)</td></tr>
        </table>
      </p>
    `
  },

  {
    id: 20,
    title: "Ossuaries: Where Death Becomes Art",
    excerpt: "The sacred spaces decorated with thousands of human skeletons...",
    image: "images/osaries.jpg",
    alt: "Chandelier made of human bones in Sedlec Ossuary",
    content: `
      <h5>Sedlec Ossuary (Czech Republic)</h5>
      <p>Contains bones of 40,000+ plague victims arranged as:
        <ul>
          <li>A chandelier with every human bone</li>
          <li>Pyramids of skulls</li>
          <li>Coat of arms of the Schwarzenberg family</li>
        </ul>
      Created by woodcarver František Rint in 1870.</p>
  
      <h5>Paris Catacombs</h5>
      <p>6 million skeletons moved from cemeteries (1786-1814) form:
        <ul>
          <li>Skull-and-femur walls</li>
          <li>Heart-shaped bone displays</li>
          <li>Poetic plaques about mortality</li>
        </ul>
      </p>
  
      <blockquote>
        "Remember, stranger, as you pass by, as you are now so once was I." - Capuchin Crypt inscription
      </blockquote>
  
      <h5>Cultural Significance</h5>
      <table>
        <tr><th>Site</th><th>Message</th></tr>
        <tr><td>Capuchin Crypt (Rome)</td><td>Memento mori for monks</td></tr>
        <tr><td>Evora Chapel (Portugal)</td><td>Franciscan meditation on decay</td></tr>
        <tr><td>Hallstatt Beinhaus (Austria)</td><td>Family skull painting tradition</td></tr>
      </table>
    `
  },
];