const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const questionBank = [
  {
    question: "What is the name of Luffy's ship after the Going Merry?",
    answers: [
      { text: "Red Force", correct: false },
      { text: "Thousand Sunny", correct: true },
      { text: "Oro Jackson", correct: false },
      { text: "Victoria Punk", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Pirate Hunter'?",
    answers: [
      { text: "Vinsmoke Sanji", correct: false },
      { text: "Roronoa Zoro", correct: true },
      { text: "Portgas D. Ace", correct: false },
      { text: "Eustass Kid", correct: false },
    ],
  },
  {
    question: "What fruit did Luffy eat to gain his rubber powers?",
    answers: [
      { text: "Mera Mera no Mi", correct: false },
      { text: "Gomu Gomu no Mi", correct: true },
      { text: "Hito Hito no Mi", correct: false },
      { text: "Bara Bara no Mi", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a member of the Straw Hat crew?",
    answers: [
      { text: "Brook", correct: false },
      { text: "Franky", correct: false },
      { text: "Smoker", correct: true },
      { text: "Robin", correct: false },
    ],
  },
  {
    question: "What is the name of Zoro’s signature three-sword style?",
    answers: [
      { text: "Santoryu", correct: true },
      { text: "Nitoryu", correct: false },
      { text: "Ittoryu", correct: false },
      { text: "Yontoryu", correct: false },
    ],
  },
  {
    question: "Who is the navigator of the Straw Hat Pirates?",
    answers: [
      { text: "Robin", correct: false },
      { text: "Nami", correct: true },
      { text: "Carrot", correct: false },
      { text: "Hiyori", correct: false },
    ],
  },
  {
    question: "What is Sanji's dream?",
    answers: [
      { text: "To become the Pirate King", correct: false },
      { text: "To find All Blue", correct: true },
      { text: "To defeat Mihawk", correct: false },
      { text: "To discover Laugh Tale", correct: false },
    ],
  },
  {
    question: "Who was the first member to join Luffy’s crew?",
    answers: [
      { text: "Nami", correct: false },
      { text: "Zoro", correct: true },
      { text: "Usopp", correct: false },
      { text: "Sanji", correct: false },
    ],
  },
  {
    question:
      "What is the highest known bounty among the Straw Hat Pirates as of Wano arc?",
    answers: [
      { text: "Monkey D. Luffy", correct: true },
      { text: "Jinbe", correct: false },
      { text: "Zoro", correct: false },
      { text: "Sanji", correct: false },
    ],
  },
  {
    question: "What is Gol D. Roger’s epithet?",
    answers: [
      { text: "Dark King", correct: false },
      { text: "Pirate King", correct: true },
      { text: "Strongest Creature", correct: false },
      { text: "Surgeon of Death", correct: false },
    ],
  },
  {
    question: "What is the name of Luffy’s first ship?",
    answers: [
      { text: "Thousand Sunny", correct: false },
      { text: "Red Force", correct: false },
      { text: "Oro Jackson", correct: false },
      { text: "Going Merry", correct: true },
    ],
  },
  {
    question: "Who gave Luffy his straw hat?",
    answers: [
      { text: "Rayleigh", correct: false },
      { text: "Garp", correct: false },
      { text: "Shanks", correct: true },
      { text: "Ace", correct: false },
    ],
  },
  {
    question: "What is Nico Robin’s dream?",
    answers: [
      { text: "Find All Blue", correct: false },
      { text: "Read the Rio Poneglyph", correct: true },
      { text: "Draw a world map", correct: false },
      { text: "Become Pirate King", correct: false },
    ],
  },
  {
    question: "Which Admiral is known as the 'Yellow Monkey'?",
    answers: [
      { text: "Kizaru", correct: true },
      { text: "Aokiji", correct: false },
      { text: "Akainu", correct: false },
      { text: "Fujitora", correct: false },
    ],
  },
  {
    question: "What was Luffy’s bounty after the Enies Lobby incident?",
    answers: [
      { text: "100 million", correct: false },
      { text: "500 million", correct: false },
      { text: "150 million", correct: false },
      { text: "300 million", correct: true },
    ],
  },
  {
    question: "Who killed Portgas D. Ace?",
    answers: [
      { text: "Blackbeard", correct: false },
      { text: "Kizaru", correct: false },
      { text: "Akainu", correct: true },
      { text: "Whitebeard", correct: false },
    ],
  },
  {
    question: "Who is the strongest swordsman in the world?",
    answers: [
      { text: "Roronoa Zoro", correct: false },
      { text: "Dracule Mihawk", correct: true },
      { text: "Shanks", correct: false },
      { text: "Vista", correct: false },
    ],
  },
  {
    question: "Who is the shipwright of the Straw Hats?",
    answers: [
      { text: "Franky", correct: true },
      { text: "Brook", correct: false },
      { text: "Usopp", correct: false },
      { text: "Jinbe", correct: false },
    ],
  },
  {
    question: "What is the name of Chopper’s monster form?",
    answers: [
      { text: "Heavy Point", correct: false },
      { text: "Kung-Fu Point", correct: false },
      { text: "Giant Point", correct: false },
      { text: "Monster Point", correct: true },
    ],
  },
  {
    question: "What is Trafalgar Law’s Devil Fruit?",
    answers: [
      { text: "Gura Gura no Mi", correct: false },
      { text: "Ito Ito no Mi", correct: false },
      { text: "Ope Ope no Mi", correct: true },
      { text: "Yami Yami no Mi", correct: false },
    ],
  },
  {
    question: "Who was the ruler of Dressrosa before Doflamingo?",
    answers: [
      { text: "Kyros", correct: false },
      { text: "King Riku", correct: true },
      { text: "Scarlet", correct: false },
      { text: "Viola", correct: false },
    ],
  },
  {
    question: "What type of animal is Bepo?",
    answers: [
      { text: "Polar Bear", correct: true },
      { text: "Dog", correct: false },
      { text: "Lion", correct: false },
      { text: "Wolf", correct: false },
    ],
  },
  {
    question: "What is the name of Kaido’s crew?",
    answers: [
      { text: "Big Mom Pirates", correct: false },
      { text: "Blackbeard Pirates", correct: false },
      { text: "Donquixote Pirates", correct: false },
      { text: "Beast Pirates", correct: true },
    ],
  },
  {
    question: "What is the name of the scientist who created the Pacifistas?",
    answers: [
      { text: "Caesar Clown", correct: false },
      { text: "Judge Vinsmoke", correct: false },
      { text: "Vegapunk", correct: true },
      { text: "Franky", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Knight of the Sea'?",
    answers: [
      { text: "Fisher Tiger", correct: false },
      { text: "Jinbe", correct: true },
      { text: "Arlong", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "What is the name of Big Mom’s sword-hat?",
    answers: [
      { text: "Napoleon", correct: true },
      { text: "Zeus", correct: false },
      { text: "Prometheus", correct: false },
      { text: "Pandora", correct: false },
    ],
  },
  {
    question: "What is Enel’s Devil Fruit?",
    answers: [
      { text: "Mera Mera no Mi", correct: false },
      { text: "Suna Suna no Mi", correct: false },
      { text: "Noro Noro no Mi", correct: false },
      { text: "Goro Goro no Mi", correct: true },
    ],
  },
  {
    question: "What was Luffy’s bounty after defeating Doflamingo?",
    answers: [
      { text: "300 million", correct: false },
      { text: "1.5 billion", correct: false },
      { text: "500 million", correct: true },
      { text: "1 billion", correct: false },
    ],
  },
  {
    question: "What island did the Straw Hats reunite on after the time skip?",
    answers: [
      { text: "Dressrosa", correct: false },
      { text: "Sabaody Archipelago", correct: true },
      { text: "Zou", correct: false },
      { text: "Fishman Island", correct: false },
    ],
  },
  {
    question: "Who is the captain of the Blackbeard Pirates?",
    answers: [
      { text: "Marshall D. Teach", correct: true },
      { text: "Shanks", correct: false },
      { text: "Kaido", correct: false },
      { text: "Buggy", correct: false },
    ],
  },
  {
    question:
      "What is the name of Sanji’s mentor and head chef of the Baratie?",
    answers: [
      { text: "Patty", correct: false },
      { text: "Carne", correct: false },
      { text: "Gin", correct: false },
      { text: "Zeff", correct: true },
    ],
  },
  {
    question: "Which island is known for producing dials?",
    answers: [
      { text: "Wano", correct: false },
      { text: "Dressrosa", correct: false },
      { text: "Skypiea", correct: true },
      { text: "Alabasta", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Desert King'?",
    answers: [
      { text: "Portgas D. Ace", correct: false },
      { text: "Sir Crocodile", correct: true },
      { text: "Rob Lucci", correct: false },
      { text: "Enel", correct: false },
    ],
  },
  {
    question: "Which Yonko is known as the 'Strongest Creature in the World'?",
    answers: [
      { text: "Kaido", correct: true },
      { text: "Big Mom", correct: false },
      { text: "Shanks", correct: false },
      { text: "Whitebeard", correct: false },
    ],
  },
  {
    question:
      "What is the name of the underwater prison under the World Government's control?",
    answers: [
      { text: "Enies Lobby", correct: false },
      { text: "Marineford", correct: false },
      { text: "Punk Hazard", correct: false },
      { text: "Impel Down", correct: true },
    ],
  },
  {
    question: "Which Straw Hat fought Mr. 2 Bon Clay in Alabasta?",
    answers: [
      { text: "Zoro", correct: false },
      { text: "Usopp", correct: false },
      { text: "Sanji", correct: true },
      { text: "Luffy", correct: false },
    ],
  },
  {
    question: "What was the name of Whitebeard’s ship?",
    answers: [
      { text: "Thousand Sunny", correct: false },
      { text: "Moby Dick", correct: true },
      { text: "Red Force", correct: false },
      { text: "Oro Jackson", correct: false },
    ],
  },
  {
    question: "What is the name of Nami’s adoptive sister?",
    answers: [
      { text: "Nojiko", correct: true },
      { text: "Conis", correct: false },
      { text: "Vivi", correct: false },
      { text: "Shirahoshi", correct: false },
    ],
  },
  {
    question: "Which island is home to the Revolutionary Army’s headquarters?",
    answers: [
      { text: "Ohara", correct: false },
      { text: "Raftel", correct: false },
      { text: "Drum Island", correct: false },
      { text: "Baltigo", correct: true },
    ],
  },
  {
    question: "Who was the Warlord of the Sea that used the Love-Love Fruit?",
    answers: [
      { text: "Crocodile", correct: false },
      { text: "Buggy", correct: false },
      { text: "Boa Hancock", correct: true },
      { text: "Gecko Moria", correct: false },
    ],
  },
  {
    question: "Which Straw Hat fought Enel on Skypiea?",
    answers: [
      { text: "Roronoa Zoro", correct: false },
      { text: "Monkey D. Luffy", correct: true },
      { text: "Sanji", correct: false },
      { text: "Nami", correct: false },
    ],
  },
  {
    question: "What was the name of the Sea Train in Water 7?",
    answers: [
      { text: "Puffing Tom", correct: true },
      { text: "Rocketman", correct: false },
      { text: "Going Merry", correct: false },
      { text: "Blue Train", correct: false },
    ],
  },
  {
    question: "Who is the leader of the Heart Pirates?",
    answers: [
      { text: "Killer", correct: false },
      { text: "Capone Bege", correct: false },
      { text: "Urouge", correct: false },
      { text: "Trafalgar Law", correct: true },
    ],
  },
  {
    question:
      "What is the name of the calm sea area between the Blues and the Grand Line?",
    answers: [
      { text: "North Sea", correct: false },
      { text: "East Blue", correct: false },
      { text: "Calm Belt", correct: true },
      { text: "All Blue", correct: false },
    ],
  },
  {
    question: "What is the name of the Straw Hats’ musician?",
    answers: [
      { text: "Franky", correct: false },
      { text: "Brook", correct: true },
      { text: "Usopp", correct: false },
      { text: "Jinbe", correct: false },
    ],
  },
  {
    question: "Which character is known as the 'Surgeon of Death'?",
    answers: [
      { text: "Trafalgar Law", correct: true },
      { text: "Chopper", correct: false },
      { text: "Crocodile", correct: false },
      { text: "Hawkins", correct: false },
    ],
  },
  {
    question:
      "What is the name of Zoro’s childhood friend who inspired him to become the world’s greatest swordsman?",
    answers: [
      { text: "Tashigi", correct: false },
      { text: "Hiyori", correct: false },
      { text: "Perona", correct: false },
      { text: "Kuina", correct: true },
    ],
  },
  {
    question: "Who is the captain of the Red-Haired Pirates?",
    answers: [
      { text: "Rayleigh", correct: false },
      { text: "Benn Beckman", correct: false },
      { text: "Shanks", correct: true },
      { text: "Lucky Roo", correct: false },
    ],
  },
  {
    question: "What is Nico Robin’s dream?",
    answers: [
      { text: "To find All Blue", correct: false },
      { text: "To discover the true history", correct: true },
      { text: "To defeat Kaido", correct: false },
      { text: "To be Pirate King", correct: false },
    ],
  },
  {
    question: "Who ate the Flame-Flame Fruit after Ace?",
    answers: [
      { text: "Sabo", correct: true },
      { text: "Luffy", correct: false },
      { text: "Akainu", correct: false },
      { text: "Marco", correct: false },
    ],
  },
  {
    question: "What is the name of the World Government’s elite assassins?",
    answers: [
      { text: "Baroque Works", correct: false },
      { text: "Germa 66", correct: false },
      { text: "Black Cat Pirates", correct: false },
      { text: "CP9", correct: true },
    ],
  },
  {
    question: "Who is the 'Dark King'?",
    answers: [
      { text: "Garp", correct: false },
      { text: "Sengoku", correct: false },
      { text: "Silvers Rayleigh", correct: true },
      { text: "Mihawk", correct: false },
    ],
  },
  {
    question: "Which island is known as the Land of Wano?",
    answers: [
      { text: "Dressrosa", correct: false },
      { text: "Wano Country", correct: true },
      { text: "Elbaf", correct: false },
      { text: "Skypiea", correct: false },
    ],
  },
  {
    question: "Who is the captain of the Big Mom Pirates?",
    answers: [
      { text: "Charlotte Linlin", correct: true },
      { text: "Kaido", correct: false },
      { text: "Shanks", correct: false },
      { text: "Whitebeard", correct: false },
    ],
  },
  {
    question: "What is the real name of Kaido’s daughter?",
    answers: [
      { text: "Hiyori", correct: false },
      { text: "Tama", correct: false },
      { text: "Toki", correct: false },
      { text: "Yamato", correct: true },
    ],
  },
  {
    question:
      "What type of Devil Fruit is the Gum-Gum Fruit revealed to truly be?",
    answers: [
      { text: "Paramecia", correct: false },
      { text: "Logia", correct: false },
      { text: "Mythical Zoan", correct: true },
      { text: "Ancient Zoan", correct: false },
    ],
  },
  {
    question: "Which Straw Hat can communicate with animals?",
    answers: [
      { text: "Nami", correct: false },
      { text: "Chopper", correct: true },
      { text: "Usopp", correct: false },
      { text: "Robin", correct: false },
    ],
  },
  {
    question: "Who is the Yonko that Luffy defeats in Wano?",
    answers: [
      { text: "Kaido", correct: true },
      { text: "Big Mom", correct: false },
      { text: "Blackbeard", correct: false },
      { text: "Shanks", correct: false },
    ],
  },
  {
    question: "What is the name of Luffy’s father?",
    answers: [
      { text: "Monkey D. Garp", correct: false },
      { text: "Gol D. Roger", correct: false },
      { text: "Portgas D. Rouge", correct: false },
      { text: "Monkey D. Dragon", correct: true },
    ],
  },
  {
    question: "Who is the tallest member of the Straw Hats?",
    answers: [
      { text: "Franky", correct: false },
      { text: "Jinbe", correct: false },
      { text: "Brook", correct: true },
      { text: "Zoro", correct: false },
    ],
  },
  {
    question: "What is the name of the Sea King that bit Shanks’ arm?",
    answers: [
      { text: "Megalo", correct: false },
      { text: "Lord of the Coast", correct: true },
      { text: "Neptune", correct: false },
      { text: "Laboon", correct: false },
    ],
  },
  {
    question: "Who was the first Yonko introduced in the series?",
    answers: [
      { text: "Shanks", correct: true },
      { text: "Kaido", correct: false },
      { text: "Big Mom", correct: false },
      { text: "Whitebeard", correct: false },
    ],
  },
  {
    question:
      "What is the name of the giant elephant that carries an island on its back?",
    answers: [
      { text: "Momoo", correct: false },
      { text: "Surume", correct: false },
      { text: "Zunesha", correct: true },
      { text: "Laboon", correct: false },
    ],
  },
  {
    question:
      "Which Straw Hat has a bounty poster with a sketch instead of a photo?",
    answers: [
      { text: "Usopp", correct: false },
      { text: "Chopper", correct: false },
      { text: "Sanji", correct: true },
      { text: "Franky", correct: false },
    ],
  },
  {
    question: "What is the name of the island where Luffy grew up?",
    answers: [
      { text: "Shells Town", correct: false },
      { text: "Loguetown", correct: false },
      { text: "Orange Town", correct: false },
      { text: "Foosha Village", correct: true },
    ],
  },
  {
    question: "Which Marine is nicknamed 'Hero of the Marines'?",
    answers: [
      { text: "Sengoku", correct: false },
      { text: "Kizaru", correct: false },
      { text: "Monkey D. Garp", correct: true },
      { text: "Akainu", correct: false },
    ],
  },
  {
    question: "Who was the first member to officially join Luffy’s crew?",
    answers: [
      { text: "Nami", correct: false },
      { text: "Roronoa Zoro", correct: true },
      { text: "Usopp", correct: false },
      { text: "Sanji", correct: false },
    ],
  },
  {
    question: "What is the name of the legendary treasure everyone seeks?",
    answers: [
      { text: "One Piece", correct: true },
      { text: "All Blue", correct: false },
      { text: "Poseidon", correct: false },
      { text: "Eternal Pose", correct: false },
    ],
  },
  {
    question: "Which Straw Hat used to be a member of Baroque Works?",
    answers: [
      { text: "Franky", correct: false },
      { text: "Brook", correct: false },
      { text: "Jinbe", correct: false },
      { text: "Nico Robin", correct: true },
    ],
  },
  {
    question: "Who is the captain of the Kid Pirates?",
    answers: [
      { text: "Killer", correct: false },
      { text: "Apoo", correct: false },
      { text: "Eustass Kid", correct: true },
      { text: "Drake", correct: false },
    ],
  },
  {
    question:
      "Which island is famous for producing high-quality steel and weapons?",
    answers: [
      { text: "Skypiea", correct: false },
      { text: "Wano", correct: true },
      { text: "Alabasta", correct: false },
      { text: "Fish-Man Island", correct: false },
    ],
  },
  {
    question: "What is the name of the sniper of the Straw Hat crew?",
    answers: [
      { text: "Usopp", correct: true },
      { text: "Franky", correct: false },
      { text: "Brook", correct: false },
      { text: "Chopper", correct: false },
    ],
  },
  {
    question: "Who is the Fleet Admiral of the Marines after the time skip?",
    answers: [
      { text: "Aokiji", correct: false },
      { text: "Kizaru", correct: false },
      { text: "Sengoku", correct: false },
      { text: "Akainu", correct: true },
    ],
  },
  {
    question:
      "Which sea is the home of the Straw Hats before entering the Grand Line?",
    answers: [
      { text: "North Blue", correct: false },
      { text: "South Blue", correct: false },
      { text: "East Blue", correct: true },
      { text: "West Blue", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Strongest Swordsman in the World'?",
    answers: [
      { text: "Roronoa Zoro", correct: false },
      { text: "Dracule Mihawk", correct: true },
      { text: "Shanks", correct: false },
      { text: "Vista", correct: false },
    ],
  },
  {
    question:
      "What is the name of the ancient weapon said to control the Sea Kings?",
    answers: [
      { text: "Poseidon", correct: true },
      { text: "Pluton", correct: false },
      { text: "Uranus", correct: false },
      { text: "Seastone", correct: false },
    ],
  },
  {
    question: "Which Straw Hat member dreams of finding the All Blue?",
    answers: [
      { text: "Nami", correct: false },
      { text: "Chopper", correct: false },
      { text: "Robin", correct: false },
      { text: "Sanji", correct: true },
    ],
  },
  {
    question: "Who was the first Warlord of the Sea Luffy defeated?",
    answers: [
      { text: "Donquixote Doflamingo", correct: false },
      { text: "Gecko Moria", correct: false },
      { text: "Crocodile", correct: true },
      { text: "Kuma", correct: false },
    ],
  },
  {
    question: "What is the name of Franky’s signature shipbuilding creation?",
    answers: [
      { text: "Going Merry", correct: false },
      { text: "Thousand Sunny", correct: true },
      { text: "Big Emperor", correct: false },
      { text: "Mini Merry II", correct: false },
    ],
  },
  {
    question:
      "Who is the ruler of Fish-Man Island during the Straw Hats’ visit?",
    answers: [
      { text: "Hody Jones", correct: false },
      { text: "Shirahoshi", correct: false },
      { text: "Fisher Tiger", correct: false },
      { text: "King Neptune", correct: true },
    ],
  },
  {
    question: "Which Straw Hat is originally from Drum Island?",
    answers: [
      { text: "Tony Tony Chopper", correct: true },
      { text: "Brook", correct: false },
      { text: "Nami", correct: false },
      { text: "Franky", correct: false },
    ],
  },
  {
    question: "What is the name of Whitebeard’s real self?",
    answers: [
      { text: "Marshall D. Teach", correct: false },
      { text: "Rocks D. Xebec", correct: false },
      { text: "Edward Weevil", correct: false },
      { text: "Edward Newgate", correct: true },
    ],
  },
  {
    question:
      "Which island did Luffy and the crew visit after escaping from Enies Lobby?",
    answers: [
      { text: "Sabaody Archipelago", correct: false },
      { text: "Alabasta", correct: false },
      { text: "Water 7", correct: true },
      { text: "Punk Hazard", correct: false },
    ],
  },
  {
    question: "Who is the scientist responsible for creating the Pacifistas?",
    answers: [
      { text: "Caesar Clown", correct: false },
      { text: "Dr. Vegapunk", correct: true },
      { text: "Judge Vinsmoke", correct: false },
      { text: "Franky", correct: false },
    ],
  },
  {
    question:
      "What is the name of the prison located in the middle of the sea?",
    answers: [
      { text: "Impel Down", correct: true },
      { text: "Enies Lobby", correct: false },
      { text: "Marineford", correct: false },
      { text: "Sabaody", correct: false },
    ],
  },
  {
    question: "Who killed Portgas D. Ace?",
    answers: [
      { text: "Blackbeard", correct: false },
      { text: "Kizaru", correct: false },
      { text: "Aokiji", correct: false },
      { text: "Akainu", correct: true },
    ],
  },
  {
    question: "What is Nico Robin’s Devil Fruit power?",
    answers: [
      { text: "Mero Mero no Mi", correct: false },
      { text: "Ope Ope no Mi", correct: false },
      { text: "Hana Hana no Mi", correct: true },
      { text: "Yami Yami no Mi", correct: false },
    ],
  },
  {
    question: "Which crew is Trafalgar Law the captain of?",
    answers: [
      { text: "Kid Pirates", correct: false },
      { text: "Heart Pirates", correct: true },
      { text: "On Air Pirates", correct: false },
      { text: "Beast Pirates", correct: false },
    ],
  },
  {
    question:
      "What was the first island the Straw Hats visited in the New World?",
    answers: [
      { text: "Punk Hazard", correct: true },
      { text: "Dressrosa", correct: false },
      { text: "Zou", correct: false },
      { text: "Whole Cake Island", correct: false },
    ],
  },
  {
    question: "What is the name of Luffy’s father?",
    answers: [
      { text: "Gol D. Roger", correct: false },
      { text: "Silvers Rayleigh", correct: false },
      { text: "Monkey D. Garp", correct: false },
      { text: "Monkey D. Dragon", correct: true },
    ],
  },
  {
    question: "Who is the 'Surgeon of Death'?",
    answers: [
      { text: "Eustass Kid", correct: false },
      { text: "Basil Hawkins", correct: false },
      { text: "Trafalgar Law", correct: true },
      { text: "X Drake", correct: false },
    ],
  },
  {
    question: "Which Yonko is also called 'The King of the Beasts'?",
    answers: [
      { text: "Big Mom", correct: false },
      { text: "Kaido", correct: true },
      { text: "Blackbeard", correct: false },
      { text: "Shanks", correct: false },
    ],
  },
  {
    question:
      "What is the name of the sea train connecting Water 7 and Enies Lobby?",
    answers: [
      { text: "Puffing Tom", correct: true },
      { text: "Rocketman", correct: false },
      { text: "Sea Express", correct: false },
      { text: "Ocean Liner", correct: false },
    ],
  },
  {
    question: "Who ate the Gura Gura no Mi?",
    answers: [
      { text: "Blackbeard", correct: false },
      { text: "Big Mom", correct: false },
      { text: "Kaido", correct: false },
      { text: "Whitebeard", correct: true },
    ],
  },
  {
    question:
      "What is the name of Zoro’s childhood friend who dreamed of becoming the world’s greatest swordsman?",
    answers: [
      { text: "Tashigi", correct: false },
      { text: "Hiyori", correct: false },
      { text: "Kuina", correct: true },
      { text: "Nojiko", correct: false },
    ],
  },
  {
    question: "Which island is known as the Land of Love and Passion?",
    answers: [
      { text: "Dressrosa", correct: false },
      { text: "Amazon Lily", correct: true },
      { text: "Wano", correct: false },
      { text: "Water 7", correct: false },
    ],
  },
  {
    question: "What is the name of the swordsman in the Red-Haired Pirates?",
    answers: [
      { text: "Benn Beckman", correct: false },
      { text: "Lucky Roux", correct: false },
      { text: "Yasopp", correct: false },
      { text: "None — Shanks himself is the main swordsman", correct: true },
    ],
  },
  {
    question: "Who was the first person to give Luffy his iconic straw hat?",
    answers: [
      { text: "Rayleigh", correct: false },
      { text: "Garp", correct: false },
      { text: "Shanks", correct: true },
      { text: "Roger", correct: false },
    ],
  },
  {
    question: "Which One Piece arc features the Davy Back Fight?",
    answers: [
      { text: "Water 7", correct: false },
      { text: "Long Ring Long Land", correct: true },
      { text: "Thriller Bark", correct: false },
      { text: "Sabaody Archipelago", correct: false },
    ],
  },
  {
    question: "What is the name of Sanji’s biological father?",
    answers: [
      { text: "Vinsmoke Judge", correct: true },
      { text: "Zeff", correct: false },
      { text: "Capone Bege", correct: false },
      { text: "Donquixote Doflamingo", correct: false },
    ],
  },
  {
    question: "Which animal serves as Dr. Kureha’s companion?",
    answers: [
      { text: "Lapahn", correct: false },
      { text: "Laplume", correct: false },
      { text: "Chopper", correct: false },
      { text: "Tony Tony Chopper (a reindeer)", correct: true },
    ],
  },
  {
    question: "Who was the Warlord known for controlling shadows?",
    answers: [
      { text: "Crocodile", correct: false },
      { text: "Kuma", correct: false },
      { text: "Gecko Moria", correct: true },
      { text: "Doflamingo", correct: false },
    ],
  },
  {
    question:
      "What is the name of the fish-man who was once a member of the Sun Pirates and later joined the Straw Hats?",
    answers: [
      { text: "Hody Jones", correct: false },
      { text: "Jinbe", correct: true },
      { text: "Arlong", correct: false },
      { text: "Fisher Tiger", correct: false },
    ],
  },
  {
    question: "Which island floats in the sky?",
    answers: [
      { text: "Skypiea", correct: true },
      { text: "Raftel", correct: false },
      { text: "Zou", correct: false },
      { text: "Whole Cake Island", correct: false },
    ],
  },
  {
    question: "Who was the first member to join Luffy’s crew?",
    answers: [
      { text: "Nami", correct: false },
      { text: "Usopp", correct: false },
      { text: "Sanji", correct: false },
      { text: "Roronoa Zoro", correct: true },
    ],
  },
  {
    question:
      "What is the name of the World Government’s assassination organization?",
    answers: [
      { text: "Baroque Works", correct: false },
      { text: "Revolutionary Army", correct: false },
      { text: "CP9", correct: true },
      { text: "Cipher Pol 0", correct: false },
    ],
  },
  {
    question: "Who is the captain of the Kid Pirates?",
    answers: [
      { text: "Killer", correct: false },
      { text: "Eustass Kid", correct: true },
      { text: "Basil Hawkins", correct: false },
      { text: "Scratchmen Apoo", correct: false },
    ],
  },
  {
    question: "What is the real name of Gold Roger?",
    answers: [
      { text: "Gol D. Roger", correct: true },
      { text: "Gold D. Roger", correct: false },
      { text: "Gor D. Roger", correct: false },
      { text: "Goru D. Roger", correct: false },
    ],
  },
  {
    question: "Who is the Warden of Impel Down during Luffy’s infiltration?",
    answers: [
      { text: "Hannyabal", correct: false },
      { text: "Shiryu", correct: false },
      { text: "Sadi-chan", correct: false },
      { text: "Magellan", correct: true },
    ],
  },
  {
    question: "Which of these characters can transform into a dinosaur?",
    answers: [
      { text: "Franky", correct: false },
      { text: "Brook", correct: false },
      { text: "X Drake", correct: true },
      { text: "Usopp", correct: false },
    ],
  },
  {
    question:
      "What is the name of the card-based ability used by Basil Hawkins?",
    answers: [
      { text: "Bara Bara no Mi", correct: false },
      { text: "Wara Wara no Mi", correct: true },
      { text: "Ope Ope no Mi", correct: false },
      { text: "Ito Ito no Mi", correct: false },
    ],
  },
  {
    question: "Which Straw Hat member was once part of Baroque Works?",
    answers: [
      { text: "Nico Robin", correct: true },
      { text: "Sanji", correct: false },
      { text: "Nami", correct: false },
      { text: "Zoro", correct: false },
    ],
  },
  {
    question:
      "What is the name of the island where Brook was stranded for decades?",
    answers: [
      { text: "Jaya", correct: false },
      { text: "Drum Island", correct: false },
      { text: "Ohara", correct: false },
      { text: "Florian Triangle", correct: true },
    ],
  },
  {
    question: "Who is the Fleet Admiral of the Marines after the time skip?",
    answers: [
      { text: "Sengoku", correct: false },
      { text: "Aokiji", correct: false },
      { text: "Akainu", correct: true },
      { text: "Kizaru", correct: false },
    ],
  },
];

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

function generateQuizSet() {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  quizQuestions = shuffled.slice(0, 10);
  totalQuestionsSpan.textContent = quizQuestions.length;
  maxScoreSpan.textContent = quizQuestions.length;
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  generateQuizSet();
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent =
      "🏴‍☠️ Perfect score! You’re the true Pirate King of One Piece knowledge, nakama!";
  } else if (percentage >= 80) {
    resultMessage.textContent =
      "⚓ Impressive! Your bounty just skyrocketed—you're a legendary One Piece fan!";
  } else if (percentage >= 60) {
    resultMessage.textContent =
      "🍖 Solid work! You’ve got the spirit of a Straw Hat—keep sailing for more knowledge!";
  } else if (percentage >= 40) {
    resultMessage.textContent =
      "🌊 Not bad, nakama! The seas of One Piece are vast—study the Log Pose and try again!";
  } else {
    resultMessage.textContent =
      "💀 Shipwrecked! Even Buggy knows more... time to rewatch the anime and set sail again!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
