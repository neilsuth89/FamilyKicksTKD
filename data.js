const GRADES = [
  {
    "id": "10th-kup",
    "name": "White Belt",
    "kup": "10th Kup",
    "accent": "white",
    "pattern": "Saju Jirugi",
    "movements": null,
    "overview": "White Belt grading theory and terminology.",
    "techniques": [
      "Saju Jirugi",
      "Walking stance (Gunnun Sogi)",
      "Low section outer forearm block (Najunde Bakat Palmok Makgi)",
      "Middle section straight punch (Kaunde Ap Jirugi)"
    ],
    "theory": [
      "Taekwon-Do means the art or way of the foot and hand.",
      "Saju Jirugi is a four-direction punching exercise.",
      "Stance: Sogi means stance or position; Gunnun Sogi is walking stance."
    ]
  },
  {
    "id": "9th-kup",
    "name": "Yellow Tag",
    "kup": "9th Kup",
    "accent": "yellow-tag",
    "pattern": "Chon-Ji Tul",
    "movements": 19,
    "overview": "Chon-Ji Tul consists of 19 movements.",
    "techniques": [
      "Chon-Ji Tul",
      "Low section outer forearm block",
      "Middle section straight punch",
      "Walking stance"
    ],
    "theory": [
      "Chon-Ji means literally 'Heaven and Earth'.",
      "A pattern is a series of fundamental movements representing attack and defence against imaginary opponents.",
      "Breathing should be controlled and coordinated with movement."
    ]
  },
  {
    "id": "8th-kup",
    "name": "Yellow Belt",
    "kup": "8th Kup",
    "accent": "yellow",
    "pattern": "Dan Gun Tul",
    "movements": 21,
    "overview": "Dan Gun Tul consists of 21 movements.",
    "techniques": [
      "Dan Gun Tul",
      "Three-step sparring",
      "Front snap kick",
      "Knifehand strike"
    ],
    "theory": [
      "Dan Gun is named after the holy Dan Gun, the legendary founder of Korea in 2333 BC.",
      "Yellow signifies the earth from which a plant sprouts and takes root."
    ]
  },
  {
    "id": "7th-kup",
    "name": "Green Tag",
    "kup": "7th Kup",
    "accent": "green-tag",
    "pattern": "Do-San Tul",
    "movements": 24,
    "overview": "Do-San Tul consists of 24 movements.",
    "techniques": [
      "Do-San Tul",
      "Consecutive motion",
      "Fast motion",
      "Obverse and reverse motion"
    ],
    "theory": [
      "Do-San is the pseudonym of the patriot Ahn Chang-Ho.",
      "Consecutive motion links techniques without a pause; fast motion is performed with increased speed."
    ]
  },
  {
    "id": "6th-kup",
    "name": "Green Belt",
    "kup": "6th Kup",
    "accent": "green",
    "pattern": "Won-Hyo Tul",
    "movements": 28,
    "overview": "Won-Hyo Tul consists of 28 movements.",
    "techniques": [
      "Won-Hyo Tul",
      "Side kick",
      "Turning kick",
      "Korean counting"
    ],
    "theory": [
      "Green signifies the plant's growth as Taekwon-Do skill develops.",
      "Won-Hyo was the noted monk who introduced Buddhism to the Silla Dynasty in 686 AD."
    ]
  },
  {
    "id": "5th-kup",
    "name": "Blue Tag",
    "kup": "5th Kup",
    "accent": "blue-tag",
    "pattern": "Yul-Gok Tul",
    "movements": 38,
    "overview": "Yul-Gok Tul consists of 38 movements.",
    "techniques": [
      "Yul-Gok Tul",
      "Two-step sparring",
      "Free sparring",
      "Connection motion"
    ],
    "theory": [
      "Yul-Gok is the pseudonym of the great philosopher and scholar Yi I, nicknamed the 'Confucius of Korea'.",
      "Blue signifies the sky and heaven, towards which the plant matures into a tree."
    ]
  },
  {
    "id": "4th-kup",
    "name": "Blue Belt",
    "kup": "4th Kup",
    "accent": "blue",
    "pattern": "Joong-Gun Tul",
    "movements": 32,
    "overview": "Joong-Gun Tul consists of 32 movements.",
    "techniques": [
      "Joong-Gun Tul",
      "Rear foot stance",
      "Low stance",
      "Slow motion"
    ],
    "theory": [
      "Joong-Gun is named after the patriot Ahn Joong-Gun who assassinated Hiro-Bumi Ito, the first Japanese governor-general of Korea.",
      "Slow motion requires controlled execution while maintaining technique and balance."
    ]
  },
  {
    "id": "3rd-kup",
    "name": "Red Tag",
    "kup": "3rd Kup",
    "accent": "red-tag",
    "pattern": "Toi-Gye Tul",
    "movements": 37,
    "overview": "Toi-Gye Tul consists of 37 movements.",
    "techniques": [
      "Toi-Gye Tul",
      "One-step sparring",
      "Focus shield",
      "Stamping motion",
      "Foot techniques"
    ],
    "theory": [
      "Toi-Gye is the pen name of the noted scholar Yi Hwang.",
      "Red signifies danger, cautioning the student to exercise control and warning the opponent to stay away."
    ]
  },
  {
    "id": "2nd-kup",
    "name": "Red Belt",
    "kup": "2nd Kup",
    "accent": "red",
    "pattern": "Hwa-Rang Tul",
    "movements": 29,
    "overview": "Hwa-Rang Tul consists of 29 movements.",
    "techniques": [
      "Hwa-Rang Tul",
      "Turning kick",
      "Back kick",
      "Hooking kick",
      "Attacking tools"
    ],
    "theory": [
      "Hwa-Rang is named after the Hwa-Rang youth group which originated in the Silla Dynasty.",
      "Red represents danger, encouraging control and caution."
    ]
  },
  {
    "id": "1st-kup",
    "name": "Black Tag",
    "kup": "1st Kup",
    "accent": "black",
    "pattern": "Choong-Moo Tul",
    "movements": 30,
    "overview": "Black Tag grading includes Choong-Moo Tul and extended terminology/theory.",
    "techniques": [
      "Choong-Moo Tul",
      "Flying and jumping techniques",
      "Turns",
      "Defensive foot techniques",
      "Blocking tools",
      "Hand techniques for attack",
      "Thrust terminology"
    ],
    "theory": [
      "Choong-Moo is the name given to the great admiral Yi Soon-Sin.",
      "Black signifies maturity and proficiency in Taekwon-Do.",
      "Theory of Power: reaction force, concentration, equilibrium, breath control, mass and speed."
    ]
  }
];