const episodes = [
    { season: 1, episode: 1, title: "The Seinfeld Chronicles", description: "A woman Jerry met in Michigan flies into New York and asks to stay with him, but he's unsure if it's intended to be a romantic situation." },
    { season: 1, episode: 2, title: "The Stakeout", description: "After recently breaking up with Elaine, Jerry meets a woman at a party but only learns where she works, leading him to stake out her office." },
    { season: 1, episode: 3, title: "The Robbery", description: "Jerry's apartment gets robbed, leading him to want to move to a different place and give his current apartment to Elaine." },
    { season: 1, episode: 4, title: "Male Unbonding", description: "Jerry attempts to 'break up' with an old childhood friend who annoys him. George worries his girlfriend will leave him over dental floss." },
    { season: 1, episode: 5, title: "The Stock Tip", description: "George convinces Jerry to invest in a stock. Jerry's weekend in Vermont with a woman doesn't go as planned. Elaine is allergic to her boyfriend's cats." },
    { season: 2, episode: 1, title: "The Ex-Girlfriend", description: "After George breaks up with a woman he finds annoying, Jerry dates her and also finds her grating, yet he can't bring himself to end the relationship." },
    { season: 2, episode: 2, title: "The Pony Remark", description: "When Jerry's parents visit New York, Jerry upsets a family member with a remark about ponies. Kramer wants to build 'levels' in his apartment." },
    { season: 2, episode: 3, title: "The Jacket", description: "Jerry buys an expensive suede jacket with an odd lining. Jerry and George get stuck alone with Elaine's intimidating father." },
    { season: 2, episode: 4, title: "The Phone Message", description: "George goes to great lengths to prevent a woman he's dating from hearing an answering machine message. Jerry's date likes a commercial he hates." },
    { season: 2, episode: 5, title: "The Apartment", description: "Jerry tells Elaine about an open apartment in his building, but soon regrets it. George wears a wedding ring to attract women." },
    { season: 2, episode: 6, title: "The Statue", description: "Jerry is convinced that a house cleaner stole a statue from his apartment, threatening Elaine's deal with a client." },
    { season: 2, episode: 7, title: "The Revenge", description: "George seeks revenge on his boss after he quits and then tries to get his job back. Jerry and Kramer think a laundromat owner stole money from Jerry." },
    { season: 2, episode: 8, title: "The Heart Attack", description: "Jerry tries to decipher an unintelligible note he wrote in the middle of the night. George visits a holistic healer to deal with a medical issue." },
    { season: 2, episode: 9, title: "The Deal", description: "Jerry and Elaine attempt to resume a sexual relationship with strict rules. But Elaine's birthday might ruin the arrangement." },
    { season: 2, episode: 10, title: "The Baby Shower", description: "Elaine hosts a friend's baby shower at Jerry's apartment, where George hopes to confront a former date. Kramer convinces Jerry to get illegal cable." },
    { season: 2, episode: 11, title: "The Chinese Restaurant", description: "Jerry, Elaine, and George wait for a table at a Chinese restaurant." },
    { season: 2, episode: 12, title: "The Busboy", description: "Elaine and George fear they inadvertently got a busboy fired. Elaine realizes she can't stand a boyfriend who came from out of town to stay with her." },
    { season: 3, episode: 1, title: "The Note", description: "Jerry scares a massage therapist, while George questions his sexuality after a massage. Kramer insists he saw Joe DiMaggio at a donut shop." },
    { season: 3, episode: 2, title: "The Truth", description: "George breaks up with his girlfriend, who happens to be in the middle of helping Jerry with a tax audit. Kramer dates Elaine's roommate." },
    { season: 3, episode: 3, title: "The Pen", description: "Jerry and Elaine visit Florida for a ceremony honoring Jerry's dad. Jack Klompus gives Jerry a pen. Elaine hurts her back on an uncomfortable bed." },
    { season: 3, episode: 4, title: "The Dog", description: "A drunk airplane passenger asks Jerry to look after his dog. George and Elaine find it awkward to hang out alone without Jerry." },
    { season: 3, episode: 5, title: "The Library", description: "A stern library investigator goes after Jerry for an overdue book. George thinks a homeless man is a former teacher who tortured him in high school." },
    { season: 3, episode: 6, title: "The Parking Garage", description: "The four lose their car in a parking garage, imperiling Elaine's new goldfish, George's night out with his parents, and Jerry's painfully full bladder." },
    { season: 3, episode: 7, title: "The Café", description: "Jerry befriends the owner of a Pakistani café and convinces him to make some changes. George's girlfriend asks him to take an IQ test." },
    { season: 3, episode: 8, title: "The Tape", description: "Elaine anonymously records a racy voiceover for Jerry as a joke, causing George to become attracted to her. George orders baldness cream from China." },
    { season: 3, episode: 9, title: "The Nose Job", description: "George's girlfriend gets plastic surgery. Jerry dates a woman he finds sexy but dislikes spending time with. Kramer wants a very specific jacket." },
    { season: 3, episode: 10, title: "The Stranded", description: "George, Elaine, and Jerry get stranded at a party on Long Island. The host later shows up unannounced at Jerry's apartment." },
    { season: 3, episode: 11, title: "The Alternate Side", description: "George gets a gig parking cars. Kramer lands a role in a Woody Allen movie. Jerry has an unpleasant rental car experience. Elaine dates a much older man." },
    { season: 3, episode: 12, title: "The Red Dot", description: "George buys a cashmere sweater with a small flaw - for Elaine. George has a sexual encounter at work. Elaine's boyfriend falls off the wagon." },
    { season: 3, episode: 13, title: "The Subway", description: "During separate subway rides, Jerry befriends a nude man, George meets a woman, Kramer gets a horse-racing tip, and Elaine tries to get to a wedding." },
    { season: 3, episode: 14, title: "The Pez Dispenser", description: "A Pez dispenser causes George's girlfriend to flub a piano recital. Kramer creates a cologne that smells like the beach. Jerry hosts an intervention." },
    { season: 3, episode: 15, title: "The Suicide", description: "Jerry gets close to a woman whose boyfriend tried to kill himself. George gets a mysterious warning from a psychic. Elaine fasts for a medical procedure." },
    { season: 3, episode: 16, title: "The Fix-Up", description: "Jerry and Elaine fix George up with Elaine's friend, Cynthia, and soon after their first date, George learns that Cynthia may be pregnant." },
    { season: 3, episode: 17, title: "The Boyfriend, Part I", description: "Jerry befriends baseball star Keith Hernandez, who takes an interest in Elaine. George concocts an unemployment scheme involving 'Vandelay Industries.' NOTE: This is a double header, so you should really watch Season 3, Episode 18: 'The Boyfriend, Part II' next." },
    { season: 3, episode: 18, title: "The Boyfriend, Part II", description: "Jerry befriends baseball star Keith Hernandez, who takes an interest in Elaine. George concocts an unemployment scheme involving 'Vandelay Industries.' NOTE: This is a double header, so you should really watch Season 3, Episode 17: 'The Boyfriend, Part I' first." },
    { season: 3, episode: 19, title: "The Limo", description: "Stranded at the airport, Jerry and George decide George should impersonate a man named O'Brien to get a ride in a limo back to the city." },
    { season: 3, episode: 20, title: "The Good Samaritan", description: "Jerry dates a hit-and-run driver. George is offended by people who don't say 'God bless you' after a sneeze. Mary Hart's voice causes issues for Kramer." },
    { season: 3, episode: 21, title: "The Letter", description: "Jerry dates an artist who a paints a portrait of Kramer. George feels obligated to buy art. Elaine wears a Baltimore cap to a Yankees game." },
    { season: 3, episode: 22, title: "The Parking Space", description: "Kramer's friend, Mike, calls Jerry 'phony.' George and Mike fight over a parallel parking spot. Jerry inadvertently breaks some bad news to a child." },
    { season: 3, episode: 23, title: "The Keys", description: "Jerry asks for his spare keys back from Kramer, who then moves to California. George and Jerry discover Elaine wrote a script for 'Murphy Brown.'" },
    { season: 4, episode: 1, title: "The Trip, Part I", description: "George and Jerry go to LA for Jerry to appear on the Tonight Show. Kramer struggles to land acting roles. George annoys George Wendt and Corbin Bernsen. NOTE: This is a double header, so you should really watch Season 4, Episode 2: 'The Trip, Part II' next." },
    { season: 4, episode: 2, title: "The Trip, Part II", description: "After Kramer is detained in LA as a suspect in a string of murders, George and Jerry try to clear Kramer's name and reunite with their friend. NOTE: This is a double header, so you should really watch Season 4, Episode 1: 'The Trip, Part I' first." },
    { season: 4, episode: 3, title: "The Pitch", description: "Jerry and George develop a sitcom pitch for NBC, and George dates a network executive. Kramer is kicked in the head. Newman gets a speeding ticket. NOTE: This is a double header, so you should really watch Season 4, Episode 4: 'The Ticket' next." },
    { season: 4, episode: 4, title: "The Ticket", description: "Jerry and George develop a sitcom pitch for NBC, and George dates a network executive. Kramer is kicked in the head. Newman gets a speeding ticket. NOTE: This is a double header, so you should really watch Season 4, Episode 3: 'The Pitch' first." },
    { season: 4, episode: 5, title: "The Wallet", description: "Morty claims a doctor stole his wallet. Elaine attempts to break up with her psychiatrist boyfriend. George negotiates the pilot deal with NBC. NOTE: This is a double header, so you should really watch Season 4, Episode 6: 'The Watch' next." },
    { season: 4, episode: 6, title: "The Watch", description: "Jerry tries to buy his old watch back from Uncle Leo. George makes a desperate plea to Russell Dalrymple. Kramer poses as Elaine's boyfriend. NOTE: This is a double header, so you should really watch Season 4, Episode 5: 'The Wallet' first." },
    { season: 4, episode: 7, title: "The Bubble Boy", description: "Jerry, George, Elaine, and Susan visit a boy who lives in a plastic bubble. George and the boy argue over Trivial Pursuit. Jerry regrets an autograph." },
    { season: 4, episode: 8, title: "The Cheever Letters", description: "Susan learns an uncomfortable truth about her father after telling him about the cabin. Jerry's dirty talk offends his date. Kramer seeks Cuban cigars." },
    { season: 4, episode: 9, title: "The Opera", description: "George and Kramer try to sell extra tickets to 'Pagliacci' on the street. Elaine and Jerry discover their separate connections to Joe Davola." },
    { season: 4, episode: 10, title: "The Virgin", description: "Jerry's new girlfriend is a virgin. Jerry pitches George's off-the-cuff 'butler' storyline to NBC. Elaine causes Ping to have an accident." },
    { season: 4, episode: 11, title: "The Contest", description: "George's mother catches him in a compromising position, leading the four to wager over who can be 'master of their domain' for the longest." },
    { season: 4, episode: 12, title: "The Airport", description: "Jerry takes a first-class seat on a flight, leaving Elaine to suffer in coach. George and Kramer rush from JFK to LaGuardia to pick them up." },
    { season: 4, episode: 13, title: "The Pick", description: "Elaine mails out a revealing Christmas card. Jerry's date thinks she sees him picking his nose. George visits a therapist. Kramer confronts Calvin Klein." },
    { season: 4, episode: 14, title: "The Movie", description: "The gang agrees to meet for a movie. Jerry gets stuck in a taxi with a comic he doesn't like. George battles with a theater usher." },
    { season: 4, episode: 15, title: "The Visa", description: "George dates a lawyer who's representing Ping in a lawsuit against Elaine. Babu gets detained by INS due to a mail mixup. Kramer punches Mickey Mantle." },
    { season: 4, episode: 16, title: "The Shoes", description: "Elaine battles with a chef over a pair of shoes. Jerry and George visit an ill Russell and get caught leering at his daughter." },
    { season: 4, episode: 17, title: "The Outing", description: "A student newspaper reporter mistakenly portrays George and Jerry as a couple, leading them to conflicted emotions about being perceived as gay." },
    { season: 4, episode: 18, title: "The Old Man", description: "Elaine, Jerry, and George volunteer with senior citizens. Kramer and Newman try to sell an older man's record collection. A woman's goiter shocks Elaine." },
    { season: 4, episode: 19, title: "The Implant", description: "Elaine thinks Jerry's girlfriend has breast implants. George tries to get a bereavement discount on airfare, and is accused of double-dipping a chip." },
    { season: 4, episode: 20, title: "The Junior Mint", description: "Jerry can't remember his girlfriend's name, only that it rhymes with a female body part. Kramer and Jerry observe a surgery. George buys expensive art." },
    { season: 4, episode: 21, title: "The Smelly Car", description: "An overwhelming odor takes hold in Jerry's car, and he can't get it out. George learns that Susan is dating a woman, who becomes attracted to Kramer." },
    { season: 4, episode: 22, title: "The Handicap Spot", description: "Kramer convinces George to make an unfortunate parking decision. Kramer dates a wheelchair user. The gang buys a TV for a couple that breaks up." },
    { season: 4, episode: 23, title: "The Pilot, Part I", description: "George and Jerry finally produce their sitcom pilot. George is bothered by a spot on his lip. Elaine thinks Monk's only hires large-breasted servers. NOTE: This is a double header, so you should really watch Season 4, Episode 24: 'The Pilot, Part II' next." },
    { season: 4, episode: 24, title: "The Pilot, Part II", description: "George and Jerry finally produce their sitcom pilot. George is bothered by a spot on his lip. Elaine thinks Monk's only hires large-breasted servers. NOTE: This is a double header, so you should really watch Season 4, Episode 23: 'The Pilot, Part I' first." },
    { season: 5, episode: 1, title: "The Mango", description: "George struggles to satisfy his new girlfriend. Elaine admits to faking it with Jerry in the past. Kramer gets banned from a fruit stand." },
    { season: 5, episode: 2, title: "The Puffy Shirt", description: "Kramer dates a 'low talker,' leading to an embarrassing fashion moment for Jerry on TV. George gets noticed for his 'exquisite hands.'" },
    { season: 5, episode: 3, title: "The Glasses", description: "George creates a fiasco involving a sugar-addicted optometrist, ladies' eyeglasses, and Jerry's girlfriend. Elaine thinks a dog bite gives her rabies." },
    { season: 5, episode: 4, title: "The Sniffing Accountant", description: "Jerry and Kramer think their accountant is on drugs. Elaine fights with her boyfriend about punctuation. George interviews to be a bra salesman." },
    { season: 5, episode: 5, title: "The Bris", description: "Jerry and Elaine arrange an ill-fated circumcision ceremony. George's good parking spot at a hospital gets ruined. Kramer sees a 'pig man.'" },
    { season: 5, episode: 6, title: "The Lip Reader", description: "George gets caught on TV eating a messy sundae. Jerry dates a deaf tennis official. Kramer auditions to be a 'ball man.' Elaine fakes hearing loss." },
    { season: 5, episode: 7, title: "The Non-Fat Yogurt", description: "The gang gets suspicious of a supposed 'non -fat' frozen yogurt shop. Elaine dates George's nemesis, Lloyd Braun. Jerry curses in front of a kid." },
    { season: 5, episode: 8, title: "The Barber", description: "George starts a new job he knows nothing about and may never have even been offered. Jerry tries to switch barbers. Elaine hosts a bachelor auction." },
    { season: 5, episode: 9, title: "The Masseuse", description: "Elaine dates a man who shares his name with a serial killer. George becomes oddly drawn to Jerry's masseuse girlfriend, who refuses to massage Jerry." },
    { season: 5, episode: 10, title: "The Cigar Store Indian", description: "Jerry gives Elaine an offensive gift. Frank gets mad at Elaine over a 'TV Guide.' Kramer pitches a book about coffee tables. George gets grounded." },
    { season: 5, episode: 11, title: "The Conversion", description: "George wants to convert to Latvian Orthodox. A sister at the church finds Kramer irresistible. Jerry discovers fungicide in his girlfriend's apartment." },
    { season: 5, episode: 12, title: "The Stall", description: "A woman withholds toilet paper from Elaine. George becomes enamored with Elaine's 'cool guy' boyfriend. Kramer keeps calling a phone sex line." },
    { season: 5, episode: 13, title: "The Dinner Party", description: "George and Kramer (and George's jacket) cause havoc at a wine shop. A babka and a black-and-white cookie spell trouble for Jerry and Elaine at a bakery." },
    { season: 5, episode: 14, title: "The Marine Biologist", description: "Jerry tells George's ex-crush that George is now a marine biologist. Elaine has a run-in with a Russian author. Kramer hits golf balls into the ocean." },
    { season: 5, episode: 15, title: "The Pie", description: "Jerry's girlfriend's father, Poppie, is 'a little sloppy.' Kramer notices a mannequin looks just like Elaine. George buys a suit that 'swooshes.'" },
    { season: 5, episode: 16, title: "The Stand-In", description: "Kramer gives questionable advice to his friend, Mickey. Jerry tries to cheer up his hospitalized friend. Elaine dates a man who 'took it out.'" },
    { season: 5, episode: 17, title: "The Wife", description: "Jerry's girlfriend poses as his wife for a dry cleaning discount. Elaine gets mixed signals from a guy at the gym. George pees in the shower." },
    { season: 5, episode: 18, title: "The Raincoats, Part I", description: "Elaine dates a 'close talker.' George sells Frank's old clothes. Kramer and Morty try to sell raincoats. Jerry and his girlfriend see 'Schindler's List.' NOTE: This is a double header, so you should really watch Season 5, Episode 19: 'The Raincoats, Part II' next." },
    { season: 5, episode: 19, title: "The Raincoats, Part II", description: "Elaine dates a 'close talker.' George sells Frank's old clothes. Kramer and Morty try to sell raincoats. Jerry and his girlfriend see 'Schindler's List.' NOTE: This is a double header, so you should really watch Season 5, Episode 18: 'The Raincoats, Part I' first." },
    { season: 5, episode: 20, title: "The Fire", description: "George struggles to keep his cool in a fire. Elaine's co-worker heckles Jerry's act, and Jerry's retaliation causes an accident." },
    { season: 5, episode: 21, title: "The Hamptons", description: "The a gang visits a friend's new baby in the Hamptons. George's girlfriend goes topless. A doctor's wording puzzles Elaine. George experiences 'shrinkage.'" },
    { season: 5, episode: 22, title: "The Opposite", description: "George does the opposite of everything his instincts say. Jerry is 'Even Steven.' Kramer promotes his coffee table book. Elaine falls on hard times." },

]

const seasonButtons = document.querySelectorAll(".season-button");
const button = document.getElementById("get-random-episode");
const container = document.getElementById("episode-container");
let excludedSeasons = [];

function updateExcludedSeasons() {
  excludedSeasons = [];
  seasonButtons.forEach(function(button) {
    if (button.classList.contains("excluded")) {
      excludedSeasons.push(parseInt(button.dataset.season));
    }
  });
}

function toggleSeasonExclusion(event) {
  const button = event.currentTarget;
  const season = parseInt(button.dataset.season);
  button.classList.toggle("excluded");
  updateExcludedSeasons();
}

seasonButtons.forEach(function(button) {
  button.addEventListener("click", toggleSeasonExclusion);
});

button.addEventListener("click", function() {
  const validEpisodes = episodes.filter(function(episode) {
    return !excludedSeasons.includes(episode.season);
  });
  if (validEpisodes.length === 0) {
    container.textContent = "No episodes found.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * validEpisodes.length);
  const randomEpisode = validEpisodes[randomIndex];
  const episodeInfo = `Season ${randomEpisode.season}, Episode ${randomEpisode.episode}: ${randomEpisode.title} - ${randomEpisode.description}`;
  container.textContent = episodeInfo;
});

updateExcludedSeasons();

