const origins = [
  {
    origin: "Mansa Kingdom",
    language: "Keitan",
    faith: "The Prophet",
    lore:
      "The Keita kingdom of Mansa lies in the west abutted at its eastern border by the gold rich Bure mountains. Mansas are peerless horse breeders, gifted riders and sagacious financial advisors.",
    attributeBonus: "agility",
    abilityBonus: "Ride",
  },
  {
    origin: "Tumbutu City State",
    language: "Keitan",
    faith: "The Prophet",
    lore:
      "The Scions of the Prophet carved the new Keita city state of Tumbutu from the Mansa Kingdom’s northern tip. Even the most gruff citizen is literate as Tumbutu arose around hallowed Korsan University.",
    attributeBonus: "wisdom",
    abilityBonus: "Decipher",
  },
  {
    origin: "Tsugoab Plains",
    language: "Khoi",
    faith: "Cagn",
    lore:
      "In the south Tsugoab Plains, beneath the Coti Hills, Khoi nomads hunt for survival. The relentless nomads of the Tsugoab dip their arrows in a paralyzing agent used in hunting and warfare.",
    attributeBonus: "awareness",
    abilityBonus: "Endurance",
  },
  {
    origin: "Kermo City",
    language: "Khastan",
    faith: "Menhit",
    lore:
      "To the south of Mero is Kermo, crown of the Khastan kingdom of North East Aonae. Kermo’s craftsmen and architects rival those of the fallen kingdom, Atum.",
    attributeBonus: "wisdom",
    abilityBonus: "Craft",
  },
  {
    origin: "Mero City",
    language: "Khastan",
    faith: "Horu",
    lore:
      "The Khastan city of Mero lies south of the remnants of Fallen Atum in North East Aonae. Being so close to the fallen kingdom Mero citizens are ever wary of monsters, ghosts and demons.",
    attributeBonus: "awareness",
    abilityBonus: "Alert",
  },
  {
    origin: "Turkhana Plains",
    language: "Unku",
    faith: "Shaka",
    lore:
      "In the South west the Turkhana plains and forest are ruled by the Unku, a tribe of nubian warriors. Turkhana Unku are fearsome silent stalkers and are renowned for their short and lethal Turkhana Spear.",
    attributeBonus: "strength",
    abilityBonus: "Sneak",
  },
  {
    origin: "Mbuti Village",
    language: "Bayaka",
    faith: "Mbuti Forest",
    lore:
      "The Mbuti Bayaka suspend their houses in trees high above the floor of the L’Ongo Rainforest. Mbuti Bayaka are the only culture that knows how to safely harvest and process L’Ongo Devil Fly Honey.",
    attributeBonus: "agility",
    abilityBonus: "Survival",
  },
  {
    origin: "Ounsi Forest",
    language: "Oduduwa",
    faith: "Olodu",
    lore:
      "Deep in the south east Oduduwa people called the Ounsi worship ancestors and spirits. Their refined medicines are potent but Ounsi are renowned for brewing poison antidotes and spiritual cleansing.",
    attributeBonus: "soul",
    abilityBonus: "Survival",
  },
  {
    origin: "Olodumare Plains",
    language: "Oduduwa",
    faith: "Olodu",
    lore:
      "In the west Oduduwa of the Olodumare Plains live in mud brick clan houses built around farms and kilns. In an age of bronze the Olodumare prosper from tools and weapons crafted of iron.",
    attributeBonus: "strength",
    abilityBonus: "Craft Metal",
  },
  {
    origin: "Qertassi Temple",
    language: "Khastan",
    faith: "Apademak",
    lore:
      "Khastan priests of Apademak built Qertassi Temple where the Wassa encroaches south west of Mero. The Wassa ensures that only the strongest most determined may study their hallowed martial arts.",
    attributeBonus: "awareness",
    abilityBonus: "Focus",
  },
  {
    origin: "Napoto City",
    language: "Khastan",
    faith: "Piye",
    lore:
      "In the dry lands west of the River Aur, Khasta built the City of Napoto to mine gold. Napoto is populated by impoverished and debt ridden Khastans and disgraced nobles.",
    attributeBonus: "strength",
    abilityBonus: "Endurance",
  },
  {
    origin: "Sebiumeker",
    language: "Khastan",
    faith: "Alara",
    lore:
      "Far to the south of Khasta just northwest of the Aur Woods is the small river town Sebiumeker. Sebiumeker is nearest to the Visage of Alara and home to the Order of Ma’at, a guild of monster hunters.",
    attributeBonus: "soul",
    abilityBonus: "Swim",
  },
];

const jobs = [
  {
    job: "Apothecary",
    lore: "Make and trade medicines, potions and salves.",
    firstAbility: "Craft Medicine",
    secondAbility: "Survival",
  },
  {
    job: "Artisan",
    lore: "Make and trade sculptures, textiles and useful goods.",
    firstAbility: "Craft Art",
    secondAbility: "Trade",
  },
  {
    job: "Bandit",
    lore: "You’ve survived by robbing others for goods and gold.",
    firstAbility: "Alert",
    secondAbility: "Intimidate",
  },
  {
    job: "Blacksmith",
    lore: "Work with metal and kiln to craft tools and weapons for trade.",
    firstAbility: "Craft Metal",
    secondAbility: "Trade",
  },
  {
    job: "Boxer",
    lore:
      "Gambling houses host boxing spectacles. Winners earn a larger share of the pot than the loser.",
    firstAbility: "Fight",
    secondAbility: "Endurance",
  },
  {
    job: "Chandler",
    lore: "Travel about trading handcrafted household goods.",
    firstAbility: "Craft Goods",
    secondAbility: "Trade",
  },
  {
    job: "Cobbler",
    lore: "Craft and trade footwear. A great commodity.",
    firstAbility: "Craft Shoes",
    secondAbility: "Trade",
  },
  {
    job: "Healer",
    lore: "Earn your keep sealing wounds and curing sickness.",
    firstAbility: "Craft Medicine",
    secondAbility: "Heal Others",
  },
  {
    job: "Hunter",
    lore: "Hunt beasts for meat and craftable materials to trade.",
    firstAbility: "Sneak",
    secondAbility: "Survival",
  },
  {
    job: "Mason",
    lore: "A difficult and hazardous way to make a living. But it pays well.",
    firstAbility: "Craft Stone",
    secondAbility: "Inspect",
  },
  {
    job: "Mercenary",
    lore:
      "Some soldiers hire themselves out because war pays well. And there’s always a war.",
    firstAbility: "Strike",
    secondAbility: "Language",
  },
  {
    job: "Merchant",
    lore:
      "Trade jewelry, accessories and weapons. When you can carry them and avoid bandits.",
    firstAbility: "Language",
    secondAbility: "Trade",
  },
  {
    job: "Miner",
    lore: "A difficult and hazardous way to make a living.",
    firstAbility: "Alert",
    secondAbility: "Navigate",
  },
  {
    job: "Pathfinder",
    lore:
      "Build a reputable business finding safe and reliable routes for travel and trade.",
    firstAbility: "Navigate",
    secondAbility: "Scribe",
  },
  {
    job: "Prophet",
    lore: "Live off the support of those you recruit and lead to your faith.",
    firstAbility: "Language",
    secondAbility: "Lore",
  },
  {
    job: "Sailor",
    lore:
      "Sail The Wassan sands wary of Gods, demons and time tears. In search of lost knowledge and powerful relics.",
    firstAbility: "Alert",
    secondAbility: "Navigate",
  },
  {
    job: "Scribe",
    lore:
      "Illiteracy is very common. And those who cannot read or write will compensate you to do so for them.",
    firstAbility: "Decipher",
    secondAbility: "Scribe",
  },
  {
    job: "Slayer",
    lore: "Collect bounties to hunt and slay beasts, undead and demons.",
    firstAbility: "Strike",
    secondAbility: "Lore",
  },
];

const abilities = [
  {
    ability: "Aim",
    lore:
      "Add the aim ability when attempting to hit with a ranged attack such as a thrown stone, bow or throwing knife, etc.",
    attribute: "agility",
    modifier: 1,
  },
  {
    ability: "Alert",
    lore:
      "Catch warning signs of ambushes and traps. Lighting or weather could affect difficulty.",
    attribute: "awareness",
    modifier: 1,
  },
  {
    ability: "Charm",
    lore: "Gain the attention, trust and affection of others.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Constitution",
    lore: "Resist the effects of disease, illness and poison.",
    attribute: "strength",
    modifier: 1,
  },
  {
    ability: "Craft",
    lore: "Make, repair and identify items.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Art",
    lore: "Make and communicate through art. Trade your work for profit.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Goods",
    lore: "Make and trade domestic items for home, hunting and agriculture.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Medicine",
    lore: "Make medicine from ingredients that were hunted and gathered.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Metal",
    lore: "Make, repair and identify metallic items.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Shoes",
    lore: "Make and repair footwear.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Stone",
    lore: "Make and repair stonework and masonry.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Decipher",
    lore: "Read and translate Atum or Wassan glyphs.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Deftness",
    lore: "Perform feats of manual dexterity and precision.",
    attribute: "agility",
    modifier: 1,
  },
  {
    ability: "Endurance",
    lore: "Resist exhausted, exposed, starving or dehydrated.",
    attribute: "strength",
    modifier: 1,
  },
  {
    ability: "Evade",
    lore:
      "Avoid falling, being crushed, impaled and other such instant perils with an evade roll. In combat sacrifice an action to concentrate on defense. The Narrator sets the difficulty. Success increases your Reflex until your next action. Good +1 Reflex, Excellent +3 Reflex.",
    attribute: "agility",
    modifier: 1,
  },
  {
    ability: "Fight",
    lore:
      "Add the fight ability if your stunt is an unarmed attack such as a punch, kick, grapple or throw, etc. On a hit add your strength mod to the OC.",
    attribute: "strength",
    modifier: 1,
  },
  {
    ability: "Focus",
    lore:
      "Sacrifice an action to concentrate on success. The Narrator sets the difficulty. The outcome is the amount of Ase you regain. Good +1 Ase, Excellent +3 Ase.",
    attribute: "soul",
    modifier: 1,
  },
  {
    ability: "Heal Others",
    lore:
      "Clean and bind wounds and ease discomfort. Ok + 1HP, Good +2HP, Excellent +3HP.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Intimidate",
    lore:
      "Intimidate others through action or word. Success places disadvantage on your target. Good on next action, Excellent on next 2 actions.",
    attribute: "soul",
    modifier: 1,
  },
  {
    ability: "Inspect",
    lore: "Scan a scene to pick up hidden unobvious clues.",
    attribute: "awareness",
    modifier: 1,
  },
  {
    ability: "Inspire",
    lore:
      "Encourage others through action or word. Success places an advantage on your target. Good on next action, Excellent on next 2 actions.",
    attribute: "soul",
    modifier: 1,
  },
  {
    ability: "Language",
    lore:
      "Speak or understand a non native language. Distance between home and where a language is spoken could increase difficulty.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Lore",
    lore:
      "Knowledge of local tales, beliefs and customs. Talent at impressing an audience. Jali’s use lore to perform Jeliya (lore magic).",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Magic",
    lore: "Add the magic ability to cast a spell or perform rituals.",
    attribute: "soul",
    modifier: 1,
  },
  {
    ability: "Navigate",
    lore:
      "Find direction with stars, wind or other clues. Lighting or weather could affect difficulty.",
    attribute: "awareness",
    modifier: 1,
  },
  {
    ability: "Reason",
    lore: "Understand or express concepts through logic.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Resolve",
    lore: "Resist temptation, fear and stress.",
    attribute: "soul",
    modifier: 1,
  },
  {
    ability: "Ride",
    lore: "Ride a mount through challenging conditions.",
    attribute: "agility",
    modifier: 1,
  },
  {
    ability: "Scribe",
    lore: "Read and write Khastan glyphs.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Sneak",
    lore: "Move unseen and unheard.",
    attribute: "agility",
    modifier: 1,
  },
  {
    ability: "Spiritualism",
    lore:
      "Knowledge of spirits, monsters and demons. The Narrator may increase difficulty if the creature is more commonly encountered far from home.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Strike",
    lore:
      "Add the strike ability if you’re trying to strike with a melee weapon such as a spear, sword or club, etc.",
    attribute: "strength",
    modifier: 1,
  },
  {
    ability: "Survival",
    lore: "Find safe water, food and shelter in the wild.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Swim",
    lore: "Hold your breath and swim long distances.",
    attribute: "strength",
    modifier: 1,
  },
  {
    ability: "Trade",
    lore: "Barter for goods and currency.",
    attribute: "wisdom",
    modifier: 1,
  },
  {
    ability: "Ward",
    lore: "Resist spells and curses.",
    attribute: "soul",
    modifier: 1,
  },
];

const charClasses = [
  {
    type: "Archer",
    path: "strong",
    lore:
      "Archers have toppled kingdoms and raised empires. The Khastan army produced special forces known as Apedemak, archers who mastered ASE powered Skills.",
    plusTwoAtt: "agility",
    plusOneAtt: "awareness",
    plusTwoAbi: "Aim",
    plusOneAbi: "Evade",
  },
  {
    type: "Jali",
    path: "wise",
    lore:
      "Jalis pass on the history of their people and Aonae through tales, poems and songs known as Jeliya. Through ASE channeling the Jali transforms Jeliya into powerful spells.",
    plusTwoAtt: "soul",
    plusOneAtt: "awareness",
    plusTwoAbi: "Lore",
    plusOneAbi: "Inspire",
  },
  {
    type: "Marabout",
    path: "wise",
    lore:
      "Marabout are holy teachers possessing great knowledge of esoteric prayers called Lessons. These Lessons evoke great miracles that can cleanse, protect, strengthen or heal. ",
    plusTwoAtt: "soul",
    plusOneAtt: "wisdom",
    plusTwoAbi: "Magic",
    plusOneAbi: "Decipher",
  },
  {
    type: "Martial Artist",
    path: "strong",
    lore:
      "Martial Artists master unarmed fighting arts. But a rare few can channel ASE into superhuman punches, kicks, sweeps and other moves are known as Forms.",
    plusTwoAtt: "strength",
    plusOneAtt: "soul",
    plusTwoAbi: "Fight",
    plusOneAbi: "Evade",
  },
  {
    type: "Nok",
    path: "wise",
    lore:
      "The Nok Artificer wields an ASE infused Idol bearing Adinka Sigils. The Adinka Sigils are talisman that function when installed in a Nok Idol. Adinka Sigils are derived from Wassan craft.",
    plusTwoAtt: "wisdom",
    plusOneAtt: "strength",
    plusTwoAbi: "Craft",
    plusOneAbi: "Aim",
  },
  {
    type: "Shaman",
    path: "wise",
    lore:
      "Shaman casts spells called nri, they are ancient, enigmatic and sometimes dark in nature. Shamanism is one of the most ancient forms of ASE manipulation.",
    plusTwoAtt: "soul",
    plusOneAtt: "awareness",
    plusTwoAbi: "Magic",
    plusOneAbi: "Spiritualism",
  },
  {
    type: "Soldier",
    path: "strong",
    lore:
      "Soldiers are skilled in the use of weapons and armor. Both Atum and Khasta trained special forces to wield amazing ASE infused Tactics.",
    plusTwoAtt: "strength",
    plusOneAtt: "agility",
    plusTwoAbi: "Strike",
    plusOneAbi: "Fight",
  },
  {
    type: "Thief",
    path: "strong",
    lore:
      "Some soldiers particularly skilled in observation, larceny and stealth are further enhanced to develop ASE Talents. After the war many turned to thievery, spying and assassination.",
    plusTwoAtt: "agility",
    plusOneAtt: "awareness",
    plusTwoAbi: "Sneak",
    plusOneAbi: "Deftness",
  },
];
