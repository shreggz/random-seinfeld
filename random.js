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
    { season: 6, episode: 1, title: "The Chaperone", description: "Jerry dates a Miss America contestant with Kramer as a self-appointed chaperone. George proposes new Yankees uniforms. Elaine gets a new job." },
    { season: 6, episode: 2, title: "The Big Salad", description: "George seeks credit for buying a salad. Elaine searches for a rare pencil. Jerry dates a woman who dated Newman. Kramer's golf game leads to trouble." },
    { season: 6, episode: 3, title: "The Pledge Drive", description: "Jerry volunteers for a PBS pledge drive. A 'high talker' confounds Elaine. Jerry cashes old checks from his Nana. Mr. Pitt eats a candy bar strangely." },
    { season: 6, episode: 4, title: "The Chinese Woman", description: "Jerry dates a woman with a confusing last name who offers advice to Estelle. Kramer switches to boxer shorts. Frank's lawyer wears a cape." },
    { season: 6, episode: 5, title: "The Couch", description: "George cuts corners on a book club assignment. Kramer and Poppie start a pizza business. Jerry's couch gets defiled. Elaine's personal views are tested." },
    { season: 6, episode: 6, title: "The Gymnast", description: "Jerry dates a gymnast. Mr. Pitt becomes obsessed with a 3D image. George eats 'trash' and reveals an odd bathroom habit. Kramer gets a kidney stone." },
    { season: 6, episode: 7, title: "The Soup", description: "Jerry bickers with Bania over what constitutes a 'meal.' Elaine's English visitor overstays his welcome. George has an awkward date with a waitress." },
    { season: 6, episode: 8, title: "The Mom & Pop Store", description: "Kramer takes all of Jerry's shoes to get cleaned. George brags about buying Jon Voight's car. The gang goes to Tim Whaley's Thanksgiving party." },
    { season: 6, episode: 9, title: "The Secretary", description: "George gets too close to his new assistant. Jerry uses unethical dry cleaners. Elaine and Kramer have an adventure at Barneys." },
    { season: 6, episode: 10, title: "The Race", description: "An old rival accuses Jerry of cheating in a race years ago. Elaine dates a communist and gets banned by a restaurant. Kramer becomes a mall Santa." },
    { season: 6, episode: 11, title: "The Switch", description: "Jerry wants to break up with a woman to date her roommate. George thinks his girlfriend has an eating disorder. Kramer's first name is revealed." },
    { season: 6, episode: 12, title: "The Label Maker", description: "Whatley 'regifts' a label maker to thank Jerry for Super Bowl tickets. Kramer and Newman play Risk. George's girlfriend's roommate looks just like him." },
    { season: 6, episode: 13, title: "The Scofflaw", description: "A friend lies to Jerry and George about having cancer. Elaine tries to get back at an ex-boyfriend. Kramer helps track down a parking 'scofflaw.'" },
    { season: 6, episode: 14, title: "The Highlights of 100, Part I", description: "This highlight show looks back at the funniest moments from the first 99 episodes of the series. NOTE: This is a double header, so you should really watch Season 6, Episode 15: 'The Highlights of 100, Part II' next." },
    { season: 6, episode: 15, title: "The Highlights of 100, Part II", description: "This highlight show looks back at the funniest moments from the first 99 episodes of the series. NOTE: This is a double header, so you should really watch Season 6, Episode 14: 'The Highlights of 100, Part I' first." },
    { season: 6, episode: 16, title: "The Beard", description: "Elaine falls for a gay man. Jerry tries to prove that he doesn't watch 'Melrose Place.' George dates a bald woman. Kramer gets paid to be in police lineups." },
    { season: 6, episode: 17, title: "The Kiss Hello", description: "George is angered by a cancellation policy. Kramer's idea to make their building more friendly irks Jerry. Morty and Uncle Leo fight over $50." },
    { season: 6, episode: 18, title: "The Doorman", description: "Jerry and Elaine have run-ins with the doorman at Mr. Pitt's building. Frank and Kramer develop a new undergarment for men." },
    { season: 6, episode: 19, title: "The Jimmy", description: "A mutual acquaintance refers to himself strangely. Jerry get suspicious of Whatley. George eats spicy food. Kramer's dental visit leads to a mix-up." },
    { season: 6, episode: 20, title: "The Doodle", description: "Jerry gets fleas in his apartment. George drapes himself in velvet. Kramer craves specific peaches. Jerry's family indulges themselves at the Plaza Hotel." },
    { season: 6, episode: 21, title: "The Fusilli Jerry", description: "Kramer crafts a pasta statue of Jerry. Puddy uses Jerry's 'move' on Elaine. Kramer is issued the wrong vanity license plate. Estelle gets plastic surgery." },
    { season: 6, episode: 22, title: "The Diplomat's Club", description: "Mr. Pitt thinks Elaine's trying to kill him. Jerry's act gets sidetracked by an airline pilot. Kramer wagers with a Texan at the airport." },
    { season: 6, episode: 23, title: "The Face Painter", description: "Puddy's hockey fandom unnerves Elaine and an unsuspecting priest. George tries to tell his girlfriend he loves her. Kramer feuds with a chimpanzee." },
    { season: 6, episode: 24, title: "The Understudy", description: "George runs over Bette Midler in a softball game. Jerry's girlfriend cries easily. Elaine thinks her manicurists are making fun of her." },
    { season: 7, episode: 1, title: "The Engagement", description: "George and Jerry lament their lack of direction in life, leading George to propose to ex-girlfriend Susan. Elaine turns to Newman to help kidnap a dog." },
    { season: 7, episode: 2, title: "The Postponement", description: "George gets stressed out about his engagement. Elaine's rabbi has loose lips. Kramer spills hot coffee on himself at a movie with Jerry." },
    { season: 7, episode: 3, title: "The Maestro", description: "Elaine's boyfriend insists on being called 'Maestro.' George gets a chair for a security guard. Kramer hires a lawyer. Jerry looks for houses in Tuscany." },
    { season: 7, episode: 4, title: "The Wink", description: "A grapefruit causes problems for George. Jerry hides his disdain for meat. Elaine dates a wake-up service caller. Kramer needs a favor from Paul O'Neill." },
    { season: 7, episode: 5, title: "The Hot Tub", description: "Jerry helps marathon runner Jean-Paul, who overslept for his last big race. George does business with Texans who swear a lot. Kramer gets a hot tub." },
    { season: 7, episode: 6, title: "The Soup Nazi", description: "A soup stand owner's strict ordering rules cause chaos for the gang. Jerry and his girlfriend call each other 'Schmoopie.' Elaine's armoire gets stolen." },
    { season: 7, episode: 7, title: "The Secret Code", description: "George refuses to reveal his ATM code. Jerry's foot keeps falling asleep. Elaine dates a man who doesn't remember meeting her. Kramer assists the FDNY." },
    { season: 7, episode: 8, title: "The Pool Guy", description: "Jerry's pool guy tries to befriend him. Elaine starts hanging out with Susan, enraging George. Kramer's phone number gets confused with Moviefone." },
    { season: 7, episode: 9, title: "The Sponge", description: "Elaine's favorite contraceptive is going off the market. Kramer joins an AIDS walk, but won't wear a ribbon. George tells Susan a secret about Jerry." },
    { season: 7, episode: 10, title: "The Gum", description: "Kramer works with Lloyd Braun to renovate a movie theater. Jerry spends too much money on Chinese gum. An old friend thinks George has a mental illness." },
    { season: 7, episode: 11, title: "The Rye", description: "Frank and Estelle meet Susan's parents for the first time. Kramer feeds a horse the wrong food. Jerry shops for a marble rye. Elaine dates a saxophonist." },
    { season: 7, episode: 12, title: "The Caddy", description: "Steinbrenner thinks George is dead. Elaine's friend Sue Ellen Mischke distracts Jerry, leading to a lawsuit. Kramer seeks advice from a golf caddy." },
    { season: 7, episode: 13, title: "The Seven", description: "George wants to name a child 'Seven.' Elaine and Kramer enlist Newman's help to settle a dispute. Jerry dates a woman who always wears the same dress." },
    { season: 7, episode: 14, title: "The Cadillac, Part I", description: "Jerry buys his parents a Cadillac, causing trouble in their retirement community. Kramer fights with a cable guy. George wants to date Marisa Tomei. NOTE: This is a double header, so you should really watch Season 7, Episode 15: 'The Cadillac, Part II' next." },
    { season: 7, episode: 15, title: "The Cadillac, Part II", description: "Jerry buys his parents a Cadillac, causing trouble in their retirement community. Kramer fights with a cable guy. George wants to date Marisa Tomei. NOTE: This is a double header, so you should really watch Season 7, Episode 14: 'The Cadillac, Part I' first." },
    { season: 7, episode: 16, title: "The Shower Head", description: "Jerry and George push their parents to move to Florida. Jerry's building gets annoying, new low-flow showerheads. Elaine tests positive for opium." },
    { season: 7, episode: 17, title: "The Doll", description: "George finds one of Susan's dolls disturbing. Elaine wants to reconcile with the Maestro. Jerry meets Sally Weaver. Frank builds a billiards room." },
    { season: 7, episode: 18, title: "The Friars Club", description: "Jerry loses a Friars Club jacket. George wants Jerry to date Susan's best friend. Elaine suspects a co-worker. Kramer sleeps 20 minutes at a time." },
    { season: 7, episode: 19, title: "The Wig Master", description: "George and Kramer have issues with a sketchy parking lot. Jerry returns a jacket out of spite. A wig master stays with George and Susan." },
    { season: 7, episode: 20, title: "The Calzone", description: "Steinbrenner asks George to bring him a calzone every day. Elaine dates a man who never asked her out. Kramer warms up his clothes in an oven." },
    { season: 7, episode: 21, title: "The Bottle Depost, Part I", description: "Kramer and Newman hatch a bottle deposit scheme. Elaine buys famous golf clubs. A mechanic steals Jerry's car. George is befuddled by a work assignment. NOTE: This is a double header, so you should really watch Season 7, Episode 22: 'The Bottle Deposit, Part II' next." },
    { season: 7, episode: 22, title: "The Bottle Depost, Part II", description: "Kramer and Newman hatch a bottle deposit scheme. Elaine buys famous golf clubs. A mechanic steals Jerry's car. George is befuddled by a work assignment. NOTE: This is a double header, so you should really watch Season 7, Episode 21: 'The Bottle Deposit, Part I' first." },
    { season: 7, episode: 23, title: "The Wait Out", description: "Jerry and Elaine date two people who broke up over a comment by George. Kramer wears jeans that are too tight. Mickey auditions for the Actors Studio." },
    { season: 7, episode: 24, title: "The Invitations", description: "George takes a final shot at ending his engagement. Jerry falls in love with someone just like him. Kramer fights with a bank over the word 'hello.'" },
    { season: 8, episode: 1, title: "The Foundation", description: "George is asked to run a foundation in Susan's memory. Elaine takes charge of the Peterman catalog. Jerry comes to a realization about his engagement." },
    { season: 8, episode: 2, title: "The Soulmate", description: "George spies on a foundation board meeting with his briefcase. Kramer falls for Jerry's girlfriend. Elaine dates a man who doesn't want children." },
    { season: 8, episode: 3, title: "The Bizarro Jerry", description: "Elaine hangs out with 'bizarro' versions of Jerry, George and Kramer. Kramer pretends to have a job. Jerry's girlfriend has 'man hands.'" },
    { season: 8, episode: 4, title: "The Little Kicks", description: "Elaine displays her embarrassing dancing skills. Jerry gets involved in bootleg filmmaking. George acts like a 'bad boy' to woo Elaine's employee." },
    { season: 8, episode: 5, title: "The Package", description: "Kramer hatches a plan to get Jerry a refund on a stereo. Doctors won't let Elaine see her medical chart. A photo store employee flirts with George." },
    { season: 8, episode: 6, title: "The Fatigues", description: "Jerry becomes Bania's mentor. Elaine struggles with an intimidating employee. Kramer hosts a Jewish singles night. George is bothered by an audiobook." },
    { season: 8, episode: 7, title: "The Checks", description: "Jerry gets checks for 12 cents. Kramer hosts Japanese businessmen. Elaine's boyfriend thinks Jerry is poor. George encounters a carpet cleaning cult." },
    { season: 8, episode: 8, title: "The Chicken Roaster", description: "A Kenny Rogers Roasters restaurant opens in the area. Elaine gets audited by Peterman for excessive spending. George tries to retrieve a Russian hat." },
    { season: 8, episode: 9, title: "The Abstinence", description: "Abstaining from sex has opposite effects on Elaine and George. Jerry gets bumped from career day at his high school. Kramer opens a smoking lounge." },
    { season: 8, episode: 10, title: "The Andrea Doria", description: "George competes for an apartment with a shipwreck survivor. Kramer seeks medical care from a veterinarian. Jerry helps Newman get a transfer to Hawaii." },
    { season: 8, episode: 11, title: "The Little Jerry", description: "George dates a prison inmate. A bodega owner displays Jerry's bounced check. Kramer buys a rooster. Elaine wants her boyfriend to grow his hair out." },
    { season: 8, episode: 12, title: "The Money", description: "Jerry's parents sell the Cadillac to Jack Klompus. George's parents resolve to spend their life savings. Elaine hires Morty to work at J. Peterman." },
    { season: 8, episode: 13, title: "The Comeback", description: "George goes to great lengths to respond to a co-worker's joke. Jerry learns his tennis pro is terrible. Elaine falls for a sensitive video store clerk." },
    { season: 8, episode: 14, title: "The Van Buren Boys", description: "Kramer runs afoul of a street gang. George awards a scholarship. Elaine writes Peterman's autobiography. Jerry's girlfriend seems too perfect." },
    { season: 8, episode: 15, title: "The Susie", description: "A co-worker thinks Elaine's name is 'Susie,' leading to various misunderstandings. Kramer's bookie friend can't pay up when Jerry wins bets." },
    { season: 8, episode: 16, title: "The Pothole", description: "George loses his keys in a pothole. Jerry drops his girlfriend's toothbrush in a toilet. Elaine gets food delivered to a closet. Kramer adopts a highway." },
    { season: 8, episode: 17, title: "The English Patient", description: "Elaine hates 'The English Patient.' A beautiful woman mistakes George for her boyfriend. An older man challenges Jerry to a weightlifting contest." },
    { season: 8, episode: 18, title: "The Nap", description: "Jerry gets a kitchen remodel. George takes naps under his desk. Kramer swims in the East River. Elaine has a misunderstanding about a mattress." },
    { season: 8, episode: 19, title: "The Yada Yada", description: "Tim Whatley converts to Judaism. Kramer and Mickey double date. George's girlfriend says, 'yada yada' a lot. Jerry's accused of being an 'anti-dentite.'" },
    { season: 8, episode: 20, title: "The Millennium", description: "George tries to get fired. Elaine gets bad customer service. Kramer and Newman plan competing parties. Jerry's girlfriend moves him down her speed dial." },
    { season: 8, episode: 21, title: "The Muffin Tops", description: "George pretends to be a tourist from Arkansas. Kramer starts a 'Peterman Reality Tour.' Elaine helps Lippman with his muffin shop. Jerry shaves his chest." },
    { season: 8, episode: 22, title: "The Summer of George", description: "During a summer out of work, George acts as Jerry's dating intern. Elaine's co-worker won't swing her arms. Kramer's a seat filler at the Tony Awards." },
    { season: 9, episode: 1, title: "The Butter Shave", description: "George's co-workers think he has a physical disability. Kramer butters his body. Elaine and Puddy break up on a flight. Bania rides Jerry's coattails." },
    { season: 9, episode: 2, title: "The Voice", description: "Jerry gives his girlfriend's stomach a funny voice. Kramer hires an intern. Elaine reunites with Puddy. George refuses to leave his job." },
    { season: 9, episode: 3, title: "The Serenity Now", description: "Frank employs a new anger management strategy. George and Lloyd Braun sell computers. Elaine attends a bar mitzvah. Jerry expresses his feelings." },
    { season: 9, episode: 4, title: "The Blood", description: "Jerry trains with Izzy Mandelbaum. Elaine becomes a babysitter. George adds food to his sex life. Kramer stores blood at his apartment." },
    { season: 9, episode: 5, title: "The Junk Mail", description: "Kramer asks to stop getting mail. Elaine unwittingly falls for a TV pitchman. An old friend gives Jerry a van. George's parents want to see him less." },
    { season: 9, episode: 6, title: "The Merv Griffin Show", description: "Kramer starts a talk show in his apartment. George must care for a squirrel. Jerry dates a woman for her toy collection. Elaine works with a 'sidler.'" },
    { season: 9, episode: 7, title: "The Slicer", description: "George tries to edit an incriminating photo in his boss' office. Kramer buys a meat slicer. An alarm keeps Elaine awake. Jerry dates a dermatologist." },
    { season: 9, episode: 8, title: "The Betrayal", description: "Elaine, George, and Jerry go to India for Sue Ellen Mischke's wedding. Kramer's friend, FDR, makes an ominous birthday wish." },
    { season: 9, episode: 9, title: "The Apology", description: "Jerry's girlfriend is naked all day. George clashes with a friend who's in recovery. Kramer changes his shower habits. Elaine's co-worker hates germs." },
    { season: 9, episode: 10, title: "The Strike", description: "Frank brings back his holiday, 'Festivus.' George invents a charity. Kramer's 12-year strike at a bagel shop ends. Elaine pursues a free sandwich." },
    { season: 9, episode: 11, title: "The Dealership", description: "Jerry negotiates buying a car from Puddy. George can't get a Twix out of a vending machine. Kramer takes a salesman on a thrilling test drive." },
    { season: 9, episode: 12, title: "The Reverse Peephole", description: "Jerry gets a bag that looks like a purse. Puddy wears a fur coat. George's wallet is stuffed too full. Newman has an affair with the super's wife." },
    { season: 9, episode: 13, title: "The Cartoon", description: "Sally Weaver's one-woman show about Jerry is a hit. George's girlfriend resembles Jerry. A 'New Yorker' cartoon confuses Elaine. Kramer stops talking." },
    { season: 9, episode: 14, title: "The Strongbox", description: "George dates two women at once. Elaine dates a poor man. Jerry fails to recognize a man who lives next door. Kramer buys a strongbox for his valuables." },
    { season: 9, episode: 15, title: "The Wizard", description: "Kramer 'retires' in Florida. Jerry buys Morty a gadget. George lies about a house in the Hamptons. Elaine wonders if her boyfriend is Black." },
    { season: 9, episode: 16, title: "The Burning", description: "Kramer and Mickey act out medical scenes. Puddy tells Elaine he's religious. Jerry's girlfriend says, 'It's me.' George tries to 'go out on a high note.'" },
    { season: 9, episode: 17, title: "The Bookstore", description: "George takes a book into a store's bathroom. Kramer and Newman start a rickshaw service. Uncle Leo shoplifts. Elaine drunkenly makes out with a co-worker." },
    { season: 9, episode: 18, title: "The Frogger", description: "George wants to preserve his high score on 'Frogger.' Elaine eats a vintage cake. Jerry's fear of a killer prevents him from ending a relationship." },
    { season: 9, episode: 19, title: "The Maid", description: "Jerry starts sleeping with his maid. George's boss gives him an unwanted nickname. Elaine hates her new '646' phone number. Kramer gets lost downtown." },
    { season: 9, episode: 20, title: "The Puerto Rican Day", description: "The gang gets stuck in traffic due to the Puerto Rican Day Parade. George has a laser pointed at him. George, Jerry, and Kramer crash an open house." },
    { season: 9, episode: 21, title: "The Chronicle, Part I", description: "Look back at the funniest clips, most memorable quotes and unseen footage in this retrospective of the landmark series' entire run. NOTE: This is a double header, so you should really watch Season 9, Episode 22: 'The Chronicle, Part II' next." },
    { season: 9, episode: 22, title: "The Chronicle, Part II", description: "Look back at the funniest clips, most memorable quotes and unseen footage in this retrospective of the landmark series' entire run. NOTE: This is a double header, so you should really watch Season 9, Episode 21: 'The Chronicle, Part I' first." },
    { season: 9, episode: 23, title: "The Finale, Part I", description: "Jerry, George, Elaine, and Kramer are arrested for violating a 'good Samaritan' law, leading to a trial featuring characters from the show's past. NOTE: This is a double header, so you should really watch Season 9, Episode 24: 'The Finale, Part II' next." },
    { season: 9, episode: 24, title: "The Finale, Part II", description: "Jerry, George, Elaine, and Kramer are arrested for violating a 'good Samaritan' law, leading to a trial featuring characters from the show's past. NOTE: This is a double header, so you should really watch Season 9, Episode 23: 'The Finale, Part I' first." },
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

