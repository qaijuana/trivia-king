const express = require("express");
const Trivia = require("../models/trivia_model");
const router = express.Router();
const User = require("../models/users_model");


router.get("/", async (req, res) => {
  const trivia = await Trivia.find({});
  res.json(trivia);
});

router.get("/seed", async (req, res) => {

  const trivia = await Trivia.create(
    {
      title: "Colors",
      description: "Colors of the world",
      category: "General Knowledge",
      images: "https://www.readersdigest.ca/wp-content/uploads/2020/03/color-quiz.jpg",
      tags: ["colors", "general knowledge", "rainbow"],
      trivia_questions: [
        {
          question: "What colors is the green grass?",
          choices: ["red", "blue", "green", "yellow"],
          correctAnswer: 2,
        },
        {
          question: "what color is the yellow ball?",
          choices: ["blue", "yellow", "red", "green"],
          correctAnswer: 1,
        },
        {
          question: "What color is the blue sky?",
          choices: ["yellow", "green", "red", "blue"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "The General K",
      description: "Everything and Anything",
      category: "General Knowledge",
      images: "",
      tags: ["colors", "general knowledge", "rainbow"],
      trivia_questions: [
        {
          question: "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?",
          choices: ["Bulldog", "Yorkshire Terrier", "Boxer", "Pug"],
          correctAnswer: 0,
        },
        {
          question: "What is the airspeed velocity of an unladen swallow?",
          choices: ["20 MPH", "24 MPH", "15 MPH", "200 MPH"],
          correctAnswer: 1,
        },
        {
          question: "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
          choices: ["Standard Chartered", "Bank of China", "HSBC", "OCBC"],
          correctAnswer: 3,
        },
        {
          question: "If you planted the seeds of Quercus robur, what would grow?",
          choices: ["Vegetables", "Grains", "Trees", "Flowers"],
          correctAnswer: 2,
        },
        {
          question: "The word &quot;astasia&quot; means which of the following?",
          choices: ["A feverish desire to rip one&#039;s clothes off", "The inability to concentrate on anything", "The inability to make decisions", "The inability to stand up"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Music, Music, Music",
      description: "Sounds Of Life",
      category: "Music",
      images: "",
      tags: ["sound", "music", "artist"],
      trivia_questions: [
        {
          question: "Who wrote the Sinead O`Connor hit &#039;Nothing Compares 2 U&#039;?",
          choices: ["Prince", "Cameo", "Michael Jackson", "Rick James"],
          correctAnswer: 0,
        },
        {
          question: "Which member of the Foo Fighters was previously the drummer for Nirvana?",
          choices: ["Chris Shiflett", "Dave Grohl", "Nate Mendel", "Taylor Hawkins"],
          correctAnswer: 1,
        },
        {
          question: "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
          choices: ["25", "21", "19", "12"],
          correctAnswer: 3,
        },
        {
          question: "Which classical composer wrote the &quot;Moonlight Sonata&quot;?",
          choices: ["Chief Keef", "Wolfgang Amadeus Mozart", "Ludvig Van Beethoven", "Johannes Brahms"],
          correctAnswer: 2,
        },
        {
          question: "How many strings are there on a cello?",
          choices: ["5", "6", "8", "4"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Matheletes!",
      description: "Math problems that'll boggle your mind!",
      category: "Science and Math",
      images: "",
      tags: ["Math", "Is", "Fun"],
      trivia_questions: [
        {
          question: "What&#039;s the square root of 49?",
          choices: ["7", "12", "4", "9"],
          correctAnswer: 0,
        },
        {
          question: "What prime number comes next after 19?",
          choices: ["21", "23", "25", "27"],
          correctAnswer: 1,
        },
        {
          question: "What is the symbol for Displacement?",
          choices: ["r", "Dp", "dr", "&Delta;r"],
          correctAnswer: 3,
        },
        {
          question: "The metric prefix &quot;atto-&quot; makes a measurement how much smaller than the base unit?",
          choices: ["One Billionth", "One Quadrillionth", "One Quintillionth", "One Septillionth"],
          correctAnswer: 2,
        },
        {
          question: "How many sides does a trapezium have?",
          choices: ["6", "3", "5", "4"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Geo, dudes!",
      description: "Because Geography rocks!",
      category: "Geography",
      images: "",
      tags: ["Geography", "Rivers", "Hydrological Cycle"],
      trivia_questions: [
        {
          question: "Which is the largest city in Morocco?",
          choices: ["Casablanca", "Fes", "Sale", "Rabat"],
          correctAnswer: 0,
        },
        {
          question: "The prefix Sino- (As in Sino-American) is used to refer to what nationality?",
          choices: ["Japanese", "Chinese", "Russian", "Indian"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following language families is the most controversial amongst modern linguists?",
          choices: ["Sino-Tibetan", "Dravidian", "Indo-European", "Altaic"],
          correctAnswer: 3,
        },
        {
          question: "What is the capital of the US state Nevada?",
          choices: ["Las Vegas", "Henderson", "Carson City", "Reno"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Bhutan?",
          choices: ["Ladakhi", "Groma", "Karen", "Dzongkha"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Spot the Sports",
      description: "Who's your favourite team?",
      category: "Sports",
      images: "",
      tags: ["Football", "Golf", "Sports"],
      trivia_questions: [
        {
          question: "Which of the following sports is not part of the triathlon?",
          choices: ["Horse-Riding", "Swimming", "Cycling", "Running"],
          correctAnswer: 0,
        },
        {
          question: "Which of these teams isn&#039;t a member of the NHL&#039;s &quot;Original Six&quot; era?",
          choices: ["Toronto Maple Leafs", "Philadelphia Flyers", "New York Rangers", "Boston Bruins"],
          correctAnswer: 1,
        },
        {
          question: "How many soccer players should be on the field at the same time?",
          choices: ["20", "24", "26", "22"],
          correctAnswer: 3,
        },
        {
          question: "In baseball, how many fouls are an out?",
          choices: ["5", "3", "0", "2"],
          correctAnswer: 2,
        },
        {
          question: "The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?",
          choices: ["August 23", "August 19", "August 17", "August 21"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Quit Playing Games with my Heart",
      description: "E-Sports is the new wave!",
      category: "Games",
      images: "",
      tags: ["Video Games", "Counter Strike", "E-Sports"],
      trivia_questions: [
        {
          question: "When Halo 3: ODST was unveiled in 2008, it had a different title. What was the game formally called?",
          choices: ["Halo 3: Recon", "Halo 3: Phantom", "Halo 3: Helljumpers", "Halo 3: Guerilla"],
          correctAnswer: 0,
        },
        {
          question: "The most graphically violent game to precede the creation of the ESRB (Entertainment Software Rating Board) was...",
          choices: ["Duke Nukem", "Mortal Kombat", "Doom", "Resident Evil"],
          correctAnswer: 1,
        },
        {
          question: "Which of these is NOT a terrorist faction in Counter-Strike (2000)?",
          choices: ["Guerrilla Warfare", "Phoenix Connection", "Elite Crew", "Midwest Militia"],
          correctAnswer: 3,
        },
        {
          question: "In Forza Motorsport 6, which of these track-exclusive cars was NOT featured in the game, either originally with the game or added as DLC?",
          choices: ["Ferrari FXX-K", "Lotus E23", "Aston Martin Vulcan", "McLaren P1 GTR"],
          correctAnswer: 2,
        },
        {
          question: "When was Steam first released?",
          choices: ["2007", "2011", "2004", "2003"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Hers and His Story",
      description: "Dont you dare snooze this time!!",
      category: "History",
      images: "",
      tags: ["History", "Herstory", "Knowledge"],
      trivia_questions: [
        {
          question: "With which Greek philosopher would you associate the phrase, &quot;I know that I know nothing&quot;?",
          choices: ["Socrates", "Plato", "Plato", "Pythagoras"],
          correctAnswer: 0,
        },
        {
          question: "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
          choices: ["Joseph and Catherine", "John and Mary", "William and Elizabeth", "George and Anne"],
          correctAnswer: 1,
        },
        {
          question: "What number does the Roman numeral &quot;D&quot; stand for?",
          choices: ["50", "100", "1000", "500"],
          correctAnswer: 3,
        },
        {
          question: "In what year did the Wall Street Crash take place?",
          choices: ["1932", "1930", "1929", "1925"],
          correctAnswer: 2,
        },
        {
          question: "When did Norway become free from Sweden?",
          choices: ["1834", "1925", "1814", "1905"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Hers and His Story",
      description: "Dont you dare snooze this time!!",
      category: "History",
      images: "",
      tags: ["History", "Herstory", "Knowledge"],
      trivia_questions: [
        {
          question: "With which Greek philosopher would you associate the phrase, &quot;I know that I know nothing&quot;?",
          choices: ["Socrates", "Plato", "Plato", "Pythagoras"],
          correctAnswer: 0,
        },
        {
          question: "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
          choices: ["Joseph and Catherine", "John and Mary", "William and Elizabeth", "George and Anne"],
          correctAnswer: 1,
        },
        {
          question: "What number does the Roman numeral &quot;D&quot; stand for?",
          choices: ["50", "100", "1000", "500"],
          correctAnswer: 3,
        },
        {
          question: "In what year did the Wall Street Crash take place?",
          choices: ["1932", "1930", "1929", "1925"],
          correctAnswer: 2,
        },
        {
          question: "When did Norway become free from Sweden?",
          choices: ["1834", "1925", "1814", "1905"],
          correctAnswer: 3,
        },
      ],
    },




  );
  res.redirect("/api/trivia");
});

router.post("/", async (req, res) => {
  console.log("backend reqbody POST:", req.body);
  const trivia = await Trivia.create(req.body);
  res.json(trivia);
});

router.get("/new", (req, res) => {
  res.render("trivia/new.ejs");
});

router.get("/:id/like", async (req, res) => {
  await User.findByIdAndUpdate("617f8755039827ace01e9b4e", {
    $push: { liked_trivia: req.params },
  });
  await Trivia.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } })
  //   await Trivia.findByIdAndUpdate(req.params.id, {likes: 1})
  res.send("like")
});

router.get("/:id/unlike", async (req, res) => {
  await User.findByIdAndUpdate("617f8755039827ace01e9b4e", {
    $pull: { liked_trivia: req.params },
  });
  await Trivia.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } })
  //   await Trivia.findByIdAndUpdate(req.params.id, {likes: 1})
  res.send("unlike")
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const trivia = await Trivia.findById(id);
  res.json(trivia);
});

router.put("/:id", async (req, res) => {

  console.log("reqbody PUT:", req.body)
  const { id } = req.params;
  const trivia = await Trivia.findByIdAndUpdate(id, req.body);
  console.log("back end PUT trivia:", trivia)
  res.json(trivia);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Trivia.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
