const questions = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "According to the BBPA, what is the most common pub name in the UK?",
        "correct_answer": "Red Lion",
        "incorrect_answers": [
            "Royal Oak",
            "White Hart",
            "King&#039;s Head"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
        "correct_answer": "Economics",
        "incorrect_answers": [
            "Philosophy",
            "Politics",
            "Physics"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which river flows through the Scottish city of Glasgow?",
        "correct_answer": "Clyde",
        "incorrect_answers": [
            "Tay",
            "Dee",
            "Tweed"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When was the Declaration of Independence approved by the Second Continental Congress?",
        "correct_answer": "July 4, 1776",
        "incorrect_answers": [
            "May 4, 1776",
            "June 4, 1776",
            "July 2, 1776"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the defining characteristic of someone who is described as hirsute?",
        "correct_answer": "Hairy",
        "incorrect_answers": [
            "Rude",
            "Funny",
            "Tall"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What does a funambulist walk on?",
        "correct_answer": "A Tight Rope",
        "incorrect_answers": [
            "Broken Glass",
            "Balls",
            "The Moon"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which American president appears on a one dollar bill?",
        "correct_answer": "George Washington",
        "incorrect_answers": [
            "Thomas Jefferson",
            "Abraham Lincoln",
            "Benjamin Franklin"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?",
        "correct_answer": "India",
        "incorrect_answers": [
            "Papua New Guinea",
            "Ethiopia",
            "China"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of the Jewish New Year?",
        "correct_answer": "Rosh Hashanah",
        "incorrect_answers": [
            "Elul",
            "New Year",
            "Succoss"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "medium",
        "question": "Furby was released in 1998.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "medium",
        "question": "There are 86400 seconds in a day.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The word &quot;news&quot; originates from the first letters of the 4 main directions on a compass (North, East, West, South).",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the unit of currency in Laos?",
        "correct_answer": "Kip",
        "incorrect_answers": [
            "Ruble",
            "Konra",
            "Dollar"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the nickname of the US state of California?",
        "correct_answer": "Golden State",
        "incorrect_answers": [
            "Sunshine State",
            "Bay State",
            "Treasure State"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
        "correct_answer": "Spruce Goose",
        "incorrect_answers": [
            "Noah&#039;s Ark",
            "Fat Man",
            "Trojan Horse"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of these colours is NOT featured in the logo for Google?",
        "correct_answer": "Pink",
        "incorrect_answers": [
            "Yellow",
            "Blue",
            "Green"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "hard",
        "question": "&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the last letter of the Greek alphabet?",
        "correct_answer": "Omega",
        "incorrect_answers": [
            "Mu",
            "Epsilon",
            "Kappa"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is depicted on the US hundred dollar bill?",
        "correct_answer": "Benjamin Franklin",
        "incorrect_answers": [
            "George Washington",
            "Abraham Lincoln",
            "Thomas Jefferson"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Pluto is a planet.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When was Nintendo founded?",
        "correct_answer": "September 23rd, 1889",
        "incorrect_answers": [
            "October 19th, 1891",
            "March 4th, 1887",
            "December 27th, 1894"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "When you cry in space, your tears stick to your face.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The French word for &quot;glass&quot; is &quot;glace&quot;.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which American-owned brewery led the country in sales by volume in 2015?",
        "correct_answer": "D. G. Yuengling and Son, Inc",
        "incorrect_answers": [
            "Anheuser Busch",
            "Boston Beer Company",
            "Miller Coors"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following carbonated soft drinks were introduced first?",
        "correct_answer": "Dr. Pepper",
        "incorrect_answers": [
            "Coca-Cola",
            "Sprite",
            "Mountain Dew"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
        "correct_answer": "Center Parcs",
        "incorrect_answers": [
            "Yelloh Village",
            "Keycamp",
            "Villa Plus"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When was Hubba Bubba first introduced?",
        "correct_answer": "1979",
        "incorrect_answers": [
            "1984",
            "1972",
            "1980"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was Mountain Dew&#039;s original slogan?",
        "correct_answer": "Yahoo! Mountain Dew... It&#039;ll tickle your innards!",
        "incorrect_answers": [
            "Give Me A Dew",
            "Do The Dew",
            "Get&#039; that barefoot feelin&#039; drinkin&#039; Mountain Dew"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a &quot;Guardians of the Galaxy&quot; themed ride?",
        "correct_answer": "Twilight Zone Tower of Terror",
        "incorrect_answers": [
            "The Haunted Mansion",
            "Pirates of the Caribbean",
            "Peter Pan&#039;s Flight"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "How tall is the Burj Khalifa?",
        "correct_answer": "2,722 ft",
        "incorrect_answers": [
            "2,717 ft",
            "2,546 ft",
            "3,024 ft"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who invented Pastafarianism?",
        "correct_answer": "Bobby Henderson",
        "incorrect_answers": [
            "Eric Tignor",
            "Bill Nye",
            "Zach Soldi"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is real haggis made of?",
        "correct_answer": "Sheep&#039;s Heart, Liver and Lungs",
        "incorrect_answers": [
            "Sheep&#039;s Heart, Kidneys and Lungs",
            "Sheep&#039;s Liver, Kidneys and Eyes",
            "Whole Sheep"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Who founded the Khan Academy?",
        "correct_answer": "Sal Khan",
        "incorrect_answers": [
            "Ben Khan",
            "Kitt Khan",
            "Adel Khan"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The website &quot;Shut Up &amp; Sit Down&quot; reviews which form of media?",
        "correct_answer": "Board Games",
        "incorrect_answers": [
            "Television Shows",
            "Video Games",
            "Films"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Originally another word for poppy, coquelicot is a shade of what?",
        "correct_answer": "Red",
        "incorrect_answers": [
            "Green",
            "Blue",
            "Pink"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which country drives on the left side of the road?",
        "correct_answer": "Japan",
        "incorrect_answers": [
            "Germany",
            "Russia",
            "China"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Nephelococcygia is the practice of doing what?",
        "correct_answer": "Finding shapes in clouds",
        "incorrect_answers": [
            "Sleeping with your eyes open",
            "Breaking glass with your voice",
            "Swimming in freezing water"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of the following is the IATA code for Manchester Airport?",
        "correct_answer": "MAN",
        "incorrect_answers": [
            "EGLL",
            "LHR",
            "EGCC"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The likeness of which president is featured on the rare $2 bill of USA currency?",
        "correct_answer": "Thomas Jefferson",
        "incorrect_answers": [
            "Martin Van Buren",
            "Ulysses Grant",
            "John Quincy Adams"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Terry Gilliam was an animator that worked with which British comedy group?",
        "correct_answer": "Monty Python",
        "incorrect_answers": [
            "The Goodies&lrm;",
            "The League of Gentlemen&lrm;",
            "The Penny Dreadfuls"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which church&#039;s interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?",
        "correct_answer": "St. Peter&#039;s Basilica",
        "incorrect_answers": [
            "Catania Cathedral",
            "St. Mark&rsquo;s Basilica",
            "The Duomo of Florence"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "medium",
        "question": "The British organisation CAMRA stands for The Campaign for Real Ale.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "If you planted the seeds of Quercus robur, what would grow?",
        "correct_answer": "Trees",
        "incorrect_answers": [
            "Grains",
            "Vegetables",
            "Flowers"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When one is &quot;envious&quot;, they are said to be what color?",
        "correct_answer": "Green",
        "incorrect_answers": [
            "Red",
            "Blue",
            "Yellow"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of NASA&rsquo;s most famous space telescope?",
        "correct_answer": "Hubble Space Telescope",
        "incorrect_answers": [
            "Big Eye",
            "Death Star",
            "Millenium Falcon"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In &quot;Battle Cats&quot;, what is Moneko / MISS Moneko&#039;s critical percentage rate?",
        "correct_answer": "15%",
        "incorrect_answers": [
            "20%",
            "10%",
            "25%"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The word &quot;abulia&quot; means which of the following?",
        "correct_answer": "The inability to make decisions",
        "incorrect_answers": [
            "The inability to stand up",
            "The inability to concentrate on anything",
            "A feverish desire to rip one&#039;s clothes off"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Foie gras is a French delicacy typically made from what part of a duck or goose?",
        "correct_answer": "Liver",
        "incorrect_answers": [
            "Heart",
            "Stomach",
            "Intestines"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Frank Lloyd Wright was the architect behind what famous building?",
        "correct_answer": "The Guggenheim",
        "incorrect_answers": [
            "Villa Savoye",
            "Sydney Opera House",
            "The Space Needle"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In &quot;Resident Evil 3&quot;, how many inventory slots does Jill have at the start of the game?",
        "correct_answer": "10",
        "incorrect_answers": [
            "6",
            "8",
            "12"
        ]
    }
]

export default questions