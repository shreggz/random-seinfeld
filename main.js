const episodes = [
    { season: 1, episode: 1, title: "The Seinfeld Chronicles", description: "Jerry is excited that a woman he met on the road is coming to visit him in New York. However, he has a tough time discerning whether her intentions are romantic or platonic." },
    { season: 1, episode: 2, title: "The Stakeout", description: "When Jerry goes to a birthday party with Elaine, he meets a woman he'd like to ask out, but doesn't get the chance to. When she leaves before he finds out her name, he and George stakeout her office building." },
    { season: 1, episode: 3, title: "The Robbery", description: "When Jerry's apartment gets robbed, he decides to move out. George shows him a great apartment, which he plans to take...that is, until George expresses his own desire for the apartment." },
    { season: 1, episode: 4, title: "Male Unbonding", description: "Jerry ponders a few courses of action when he sees that he no longer has anything in common with a clingy and obnoxious childhood friend. George has trouble with his latest relationship. Kramer has the idea to open a chain of pizza parlors where you make your own pizza pie." },
    { season: 1, episode: 5, title: "The Stock Tip", description: "Jerry and George invest based on an insider stock tip, but then lose touch with their inside source. A nervous Jerry lets the declining stock ruin his weekend away with Vanessa, while George decides he's all in." },
    { season: 2, episode: 1, title: "The Ex-Girlfriend", description: "Jerry begins to date George's ex-girlfriend before he discovers how clingy she is. Meanwhile George refuses to pay a physical therapist, convinced he did nothing, and Elaine has a run-in with a friend who has stopped saying hello to her." },
    { season: 2, episode: 2, title: "The Pony Remark", description: "Jerry worries that he may have killed an old relative after he offends her with an off-the-cuff comment about hating kids who had ponies growing up." },
    { season: 2, episode: 3, title: "The Jacket", description: "Jerry splurges on an expensive new suede jacket, but the colorful inner lining leaves something to be desired. When Elaine does Kramer a favor, Jerry and George get stuck alone with Elaine's intimidating, curmudgeonly father." },
    { season: 2, episode: 4, title: "The Phone Message", description: "George regrets not going upstairs for 'coffee' after a date, and proceeds to leave his girlfriend a series of increasingly embarrassing phone messages. Meanwhile, Jerry and his girlfriend argue over the comedic value of a TV commercial." },
    { season: 2, episode: 5, title: "The Apartment", description: "Jerry helps Elaine get the apartment above his, but later regrets doing so. George's experiment of wearing a wedding band to attract women goes horribly awry." },
    { season: 2, episode: 6, title: "The Statue", description: "Jerry finds a statue in a box of his grandfather's old things. George wants it to replace a similar one he broke as a child. When Jerry hires the boyfriend of an author Elaine is working with to clean his apartment, the statue goes missing." },
    { season: 2, episode: 7, title: "The Revenge", description: "George quits his job in a huff, but comes to regret the decision. Jerry believes that the man at the laundromat has stolen a large sum of money from his laundry bag. With Elaine's and Kramer's help, respectively, they both plan revenge." },
    { season: 2, episode: 8, title: "The Heart Attack", description: "George thinks he is having a heart attack but actually needs a tonsillectomy, leading Kramer to recommend a holistic healer as a cheaper alternative." },
    { season: 2, episode: 9, title: "The Deal", description: "Jerry and Elaine try to be friends-with-benefits after coming across a softcore flick. George is highly skeptical that their deal will work out." },
    { season: 2, episode: 10, title: "The Deal", description: "When Elaine hosts a baby shower at Jerry's apartment, the mother-to-be turns out not only to be an ex-date of George's, but his worst ever. Meanwhile, Kramer convinces Jerry to get an illegal cable hook-up." },
    { season: 2, episode: 11, title: "The Chinese Restaurant", description: "Jerry, Elaine, and George wait for a table at a Chinese restaurant." },
    { season: 2, episode: 12, title: "The Busboy", description: "George feels guilty for inadvertently getting a busboy fired from his job and then tries to make it up to him. Meanwhile, Elaine spends the week with an old boyfriend who is visiting her from out of town." },
]

const button = document.getElementById("get-random-episode");
const container = document.getElementById("episode-container");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * episodes.length);
  const randomEpisode = episodes[randomIndex];
  const episodeInfo = `Season ${randomEpisode.season}, Episode ${randomEpisode.episode}: ${randomEpisode.title} - ${randomEpisode.description}`;
  container.textContent = episodeInfo;
});