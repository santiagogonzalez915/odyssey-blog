const posts = [
  {
    id: "welcome-maple-static",
    title: "Welcome to Maple & Static",
    date: "May 5, 2026",
    author: "Santi",
    excerpt:
      "First post from this little corner of the web. I wanted a blog that feels like old bookmark folders and late-night forum browsing.",
    content: [
      "I wanted this site to feel like the blogs I used to find through random links and blogrolls late at night.",
      "The goal is simple: write often, keep things lightweight, and keep the design warm and readable.",
      "No build process. No complexity. Just HTML, CSS, and JavaScript living in one little corner of the web.",
    ],
  },
  {
    id: "why-love-simple-websites",
    title: "Why I Still Love Simple Websites",
    date: "May 2, 2026",
    author: "Santi",
    excerpt:
      "Static pages load fast, are easy to host, and make writing feel less like publishing and more like journaling.",
    content: [
      "Simple sites remove friction. I can open one file, edit text, save, refresh, and I am done.",
      "They are also durable. Years from now, these files should still work with barely any maintenance.",
      "There is something calming about that kind of permanence.",
    ],
  },
  {
    id: "small-web-design-time-capsule",
    title: "A Small Web Design Time Capsule",
    date: "April 28, 2026",
    author: "Santi",
    excerpt:
      "Rounded boxes, earthy backgrounds, sidebar widgets, and feed links are all tiny design details that still feel warm and human.",
    content: [
      "Some design choices from the 2000s can feel dated, but others still communicate personality in a way many modern sites do not.",
      "I like tiny details: soft gradients, subtle borders, and a sidebar full of links that feel personal.",
      "This theme is my way of keeping that era alive while still making the layout responsive.",
    ],
  },
];

const postsList = document.getElementById("posts");
const singlePost = document.getElementById("single-post");
const archiveList = document.getElementById("archive-posts");
const recentPostWidgets = document.querySelectorAll(".recent-posts-widget");
const counterDigits = document.querySelector(".counter-digits");

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
    singlePost.innerHTML = `
      <article class="post-card">
        <header>
          <h2>${post.title}</h2>
          <p class="post-meta">${post.date} · Posted by ${post.author}</p>
        </header>
        <div class="post-body">${contentHtml}</div>
        <a class="read-more" href="index.html">Back to Home</a>
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

    counterDigits.textContent = String(count).padStart(6, "0");
  } catch (_error) {
    const currentLocal = Number.parseInt(localStorage.getItem(localFallbackKey) || "420", 10);
    const nextLocal = Number.isFinite(currentLocal) ? currentLocal + 1 : 421;
    localStorage.setItem(localFallbackKey, String(nextLocal));
    counterDigits.textContent = String(nextLocal).padStart(6, "0");
  }
}

updateVisitorCounter();
