const comments = {
  "still-no-signal": [
    { author: "PallasG", date: "April 13, 2006", text: "Stay strong, Penelope. The sea has a way of delaying even the most determined travelers. He will return." },
    { author: "T_Odysseus", date: "April 13, 2006", text: "mom is this you?? you said you weren't going to start a blog lol" },
  ],
  "running-the-house": [
    { author: "EurymachosXO", date: "April 26, 2006", text: "Hey Pen, if you ever need help around the house just say the word ;)" },
    { author: "PallasG", date: "April 27, 2006", text: "You are carrying more than your fair share. Do not let anyone tell you otherwise." },
  ],
  "neighbors-keep-knocking": [
    { author: "AntinousReal", date: "May 12, 2006", text: "We're just being neighborly Penelope, no need to make it weird lol" },
    { author: "T_Odysseus", date: "May 13, 2006", text: "mom these guys are SO weird. just tell them to leave" },
  ],
  "arguments-with-dad": [
    { author: "IcariumDad", date: "June 2, 2006", text: "I only want what's best for you, sweetheart. Call me back." },
    { author: "AntinousReal", date: "June 3, 2006", text: "Your father makes some good points just saying" },
    { author: "PallasG", date: "June 3, 2006", text: "Your instincts are sound. Trust them." },
  ],
  "endless-kitchen-renos": [
    { author: "EurymachosXO", date: "June 20, 2006", text: "Penelope I literally have a contractor friend who could finish this in a weekend, just say the word" },
    { author: "AntinousReal", date: "June 22, 2006", text: "Starting to feel like these renovations are never going to end tbh" },
    { author: "PallasG", date: "June 23, 2006", text: "A woman who knows her own timeline. Admirable." },
  ],
  "exaggerated-stories": [
    { author: "AntinousReal", date: "September 25, 2006", text: "Yeah those 'adventures' sound totally made up lol. Very convenient there's no footage" },
    { author: "UlyssesNotHere", date: "April 5, 2007", text: "now that I'm back home I can confidently say that those stories are 100% true. mostly." },
    { author: "T_Odysseus", date: "April 5, 2007", text: "wait dad you can comment on here???" },
  ],
  "telemachus-troubles": [
    { author: "T_Odysseus", date: "March 28, 2007", text: "mom i told you not to post about me. oh my god" },
    { author: "PallasG", date: "March 29, 2007", text: "The boy has more strength in him than he knows. As does his mother." },
  ],
  "been-found-out": [
    { author: "AntinousReal", date: "March 31, 2007", text: "Penelope we all kind of knew what was going on. Time to make a decision." },
    { author: "EurymachosXO", date: "March 31, 2007", text: "Just saying, I would have done those renovations for you :)" },
    { author: "T_Odysseus", date: "April 1, 2007", text: "these guys are actually the worst" },
  ],
  "prank-show": [
    { author: "AntinousReal", date: "April 1, 2007", text: "lmaooo who even was this old guy. April Fools I guess" },
    { author: "UlyssesNotHere", date: "April 1, 2007", text: "haha yeah totally just an executive producer. nothing weird going on here" },
    { author: "PallasG", date: "April 1, 2007", text: "..." },
  ],
};

const posts = [
  {
    id: "prank-show",
    title: "Prank Show?",
    date: "April 1, 2007",
    author: "Pen<3",
    excerpt:
      "A weird old man showed up at the door today. I tried to turn him away but he knew oddly specific details. Is this just a coincidence?",
    content: [
      "I got a knock on the door around 2pm today. Uly isn't supposed to be back for another 3 days, and the neighbors haven't gotten off of work yet, so I was surprised to see an old man hunched over at the door. I thought he was someone in need, so I was planning to offer him something to eat so he could get on his way but he wasn't there for that. He claimed that he was Uly's 'executive producer' and wanted my help with surprising Uly when he arrived home. But the way that he was talking, it felt like he knew things slightly too personal. Like don't get me wrong, I'm sure he was a great friend of Uly on his little adventures, but some of the things that he was talking about were things that only Uly and I would know about. I got the feeling that this was all some elaborate prank, it is April Fools after all, but I couldn't discern what was going on. He said that he'd be back around 6pm, right around when the neighbors usually come, to talk about further planning and I'm excited to have some company other than the neighbors for a change.",
    ],
  },
  {
    id: "been-found-out",
    title: "I've Been Found Out",
    date: "March 31, 2007",
    author: "Pen<3",
    excerpt:
      "The neighbors finally found out my kitchen DIY ruse. Even though Uly will be back in less than a week, they keep pressing me to make a decision.",
    content: [
      "Honestly it's my mistake. I forgot to undo the progress from the night before, call it laziness if you want, but one of the more bold neighbors came in and noticed that I was basically done. He called the rest of the neighbors and what do you know, now everyone knows that I've been avoiding them. They're not laughing anymore and have stopped listening to the fact that Uly will be home by the end of the week. No matter what I say or what I do, they just keep calling him a bum and trying to guilt me into leaving him. Ugh, I hate them and Telemachus also hates them, but they've become too big a part of our daily lives to just kick them out completely. I hope that Uly comes back soon and can do it for us :(",
    ],
  },
  {
    id: "telemachus-troubles",
    title: "Telemachus' Troubles",
    date: "March 28, 2007",
    author: "Pen<3",
    excerpt:
      "Good news: Uly is on his way back home! Bad news: Telemachus' classmates have seen his dad's videos.",
    content: [
      "It's been a little while, but man I just remembered how big of jerks kids are. Telemachus came home furious today, saying that he was bullied for what his dad posted online. I tried comforting him, but he just went back to his room and closed his door. I guess he just needs some space. I know Uly didn't have this in mind when he first started making his content, but I hope for Telemachus' sake he ends up stopping soon. I hate to see my baby boy cry like this, and I don't know if it'll stop any time soon unless Uly stops. I'll have to talk to him as soon as he gets home about this job of his.",
    ],
  },
  {
    id: "exaggerated-stories",
    title: "Exaggerated Stories",
    date: "September 23, 2006",
    author: "Pen<3",
    excerpt:
      "I looked through Uly's blog and the stories he's telling aren't what he's told me.",
    content: [
      "I don't know if it's just him not being fully accurate with what he reports back to me, but Uly's tales seem to be much more far-fetched than what he tells me. I mean seriously, who's even buying this stuff? Randomly waking up on the beach with amnesia? Getting into an eating competition with a giant, one-eyed man? Or a bar that doesn't let patrons leave until they hear every last song from the live band? Maybe I would've been more inclined to believe it if he hadn't told me the truth over email, but I feel like it's a bit obvious that he's making up stories or paying people to act in his skits. I'm just glad that it seems like he's doing better now. He's been sending over more money recently (not that that's the only important thing) and says that the visa situation is fixed and should be heading back soon. I don't know what he'll do for work when he comes back. I hope that he doesn't go away on another journey again...",
    ],
  },
  {
    id: "endless-kitchen-renos",
    title: "Endless Kitchen Renos",
    date: "June 19, 2006",
    author: "Pen<3",
    excerpt:
      "Was able to find a way to push off the neighbors for now. Not sure how long I can keep it up though.",
    content: [
      "Honestly I'm pretty shocked that this excuse even worked in the first place. It was Telemachus' idea, but basically I said that I'm not going to make a decision until everything is stable in my life. So, that means that I have to finish my kitchen renovations first. Every time I think I'm almost done, I realize something has to be redone. But I don't thinks I can keep this an unfinished product for much longer; the neighbors are pressing me a bit more to see when the renovations will be complete. Not only has it bought me some time, but it's also shown me how incompetent they are. Uly would've offered to do it himself if he was here. But now these so called 'men' are twiddling their thumbs instead of actually helping me. I would never settle for one of them.",
    ],
  },
  {
    id: "arguments-with-dad",
    title: "Arguments with Dad",
    date: "June 2, 2006",
    author: "Pen<3",
    excerpt:
      "Just got off the phone with my dad. He's trying to pressure me to divorce Uly and choose one of my neighbors instead.",
    content: [
      "Not feeling good after the argument with my dad. I get where he's coming from, wanting me to leave Uly and get some actual stability in my life. But I just don't feel a connection with any of these neighbors. They all seem like snakes, only wanting to use me, not loving me for who I am. No one can replace Uly. No one. He's the father of my son for heavens sake! But how do I tell him that? My husband has been gone for over a year now and is providing nothing for me or Telemachus. I'm stressed out of my mind, but worst of all I feel so alone. My heart yearns for Uly and for him to come back home, but his return trip got delayed by visa issues. Now he's stuck on some island with no clue of when he'll finally be able to leave and come back home.",
    ],
  },
  {
    id: "neighbors-keep-knocking",
    title: "Neighbors Keep Knocking",
    date: "May 12, 2006",
    author: "Pen<3",
    excerpt:
      "Our neighbors keep knocking on the door, trying to chat. It's starting to get flirty though, and I don't know how to feel.",
    content: [
      "Like the little preview says, I don't really know how to feel about the neighbors that keep knocking. It first started with little gifts to 'keep the house going without Uly there', but over the past couple of weeks it's been more than that. I'm starting to feel uncomfortable, and I know that Telemachus doesn't like these guys either. But what do I do? I can't just ignore them but I still love Uly so much. Even though he's been gone for so long, I know that our hearts belong together. I've been pushing off the neighbors as much as I can, but I don't know how much longer I can keep it up — the gifts they bring have started to become necessary to keep the house afloat. They know that Uly is gone, and they know how long he's been gone for. I'm just so conflicted right now...",
    ],
  },
  {
    id: "running-the-house",
    title: "Running the House",
    date: "April 25, 2006",
    author: "Pen<3",
    excerpt:
      "He finally responded! But looks like he's going to be gone for longer than I thought...",
    content: [
      "Uly finally responded a couple of days ago! Something about this volcanic rock blocking all of the internet signals. He sent me some photos of the island and I'm kind of jealous. He's halfway across the world, making these little videos and blogs of his while I'm here back home, making sure that our lives don't implode. He's barely sent any money back, so now I'm taking care of the bills, cleaning, taking Telemachus to school, and doing everything else. I've tried telling him that I hope he comes home soon, but he keeps pushing it off, saying that he's only staying for a 'little while longer'. Enough is enough. Telemachus and I miss him so much. Our house feels empty without him.",
    ],
  },
  {
    id: "still-no-signal",
    title: "Still No Signal",
    date: "April 13, 2006",
    author: "Pen<3",
    excerpt:
      "First post on my blog. Sad because Uly hasn't responded in a while.",
    content: [
      "Still waiting for Uly to respond to my last message. It's been over a week already and no word from him. I hope he's okay. I miss him a lot. I mean, ever since he started his career as a 'travel blogger' and went across the sea last spring, he's just been very distant. I don't even know what he's really doing either! Something about how this is a life changing opportunity for us, but I hate to say it I don't think it's taken off as much as he thought. Like right now he's on some remote island and lost signal. I keep trying to reach him but nothing works. I check my phone, mail, email, heck even my MySpace so often and they're all empty. I just hope he responds soon.",
    ],
  },
];

const postsList = document.getElementById("posts");
const singlePost = document.getElementById("single-post");
const archiveList = document.getElementById("archive-posts");
const recentPostWidgets = document.querySelectorAll(".recent-posts-widget");
const counterDigits = document.querySelector(".counter-digits");

function renderCounterDigits(value) {
  if (!counterDigits) {
    return;
  }

  const padded = String(value).padStart(6, "0");
  counterDigits.innerHTML = "";
  padded.split("").forEach((digit) => {
    const digitBox = document.createElement("span");
    digitBox.className = "counter-digit-box";
    digitBox.textContent = digit;
    counterDigits.appendChild(digitBox);
  });
}

if (postsList) {
  posts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.innerHTML = `
      <header>
        <h2>${post.title}</h2>
        <p class="post-meta">${post.date} · Posted by ${post.author}</p>
      </header>
      <p>${post.excerpt}</p>
      <a class="read-more" href="post.html?id=${encodeURIComponent(post.id)}">Read More</a>
    `;
    postsList.appendChild(card);
  });
}

if (singlePost) {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const post = posts.find((item) => item.id === postId);

  if (!post) {
    singlePost.innerHTML = `
      <article class="post-card">
        <header>
          <h2>Post Not Found</h2>
          <p class="post-meta">The post link may be outdated.</p>
        </header>
        <p>Try returning to the homepage to pick another entry.</p>
        <a class="read-more" href="index.html">Back to Home</a>
      </article>
    `;
  } else {
    const contentHtml = post.content.map((paragraph) => `<p>${paragraph}</p>`).join("");
    const postComments = comments[post.id] || [];
    const commentsHtml = postComments.map((c) => `
      <div class="comment">
        <p class="comment-meta"><span class="comment-author">${c.author}</span> · ${c.date}</p>
        <p class="comment-text">${c.text}</p>
      </div>
    `).join("");
    const commentsSection = `
      <div class="comments-section">
        <h3 class="comments-title">Comments (${postComments.length})</h3>
        ${postComments.length > 0 ? commentsHtml : "<p class='post-meta'>No comments yet.</p>"}
      </div>
    `;
    singlePost.innerHTML = `
      <article class="post-card">
        <header>
          <h2>${post.title}</h2>
          <p class="post-meta">${post.date} · Posted by ${post.author}</p>
        </header>
        <div class="post-body">${contentHtml}</div>
        <a class="read-more" href="index.html">Back to Home</a>
        ${commentsSection}
      </article>
    `;
  }
}

if (archiveList) {
  posts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.innerHTML = `
      <header>
        <h2>${post.title}</h2>
        <p class="post-meta">${post.date} · Posted by ${post.author}</p>
      </header>
      <p>${post.excerpt}</p>
      <a class="read-more" href="post.html?id=${encodeURIComponent(post.id)}">Read Post</a>
    `;
    archiveList.appendChild(card);
  });
}

if (recentPostWidgets.length > 0) {
  recentPostWidgets.forEach((widget) => {
    const limit = Number.parseInt(widget.dataset.limit || "5", 10);
    posts.slice(0, limit).forEach((post) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `post.html?id=${encodeURIComponent(post.id)}`;
      link.textContent = post.title;
      item.appendChild(link);
      widget.appendChild(item);
    });
  });
}

async function updateVisitorCounter() {
  if (!counterDigits) {
    return;
  }

  const namespace = "maple-and-static-blog";
  const key = "home-visits";
  const localFallbackKey = "maple-static-local-visits";

  try {
    const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
    if (!response.ok) {
      throw new Error("Counter request failed");
    }

    const data = await response.json();
    const count = Number(data.value);
    if (!Number.isFinite(count)) {
      throw new Error("Invalid counter value");
    }

    renderCounterDigits(count);
  } catch (_error) {
    const currentLocal = Number.parseInt(localStorage.getItem(localFallbackKey) || "420", 10);
    const nextLocal = Number.isFinite(currentLocal) ? currentLocal + 1 : 421;
    localStorage.setItem(localFallbackKey, String(nextLocal));
    renderCounterDigits(nextLocal);
  }
}

updateVisitorCounter();
