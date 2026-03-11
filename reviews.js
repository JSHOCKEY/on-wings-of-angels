(function () {
  const wrapper = document.getElementById("reviews-wrapper");
  if (!wrapper) return;

  const reviewsData = {
    "reviews": [
      {
        "title": "Touching, Moving and Inspiring through Hope, Faith and Love",
        "author": "H.S.W.",
        "date": "December 22, 2025",
        "rating": 5,
        "content": "On the Wings of Angels is an unforgettable, soul-stirring journey that left me deeply moved and grateful to have found it. It’s a testament to the power of a mother’s love and a story filled with faith, hope, and resilience."
      },
      {
        "title": "Faith in God in our lives",
        "author": "Lisa A. Gentry",
        "date": "January 3, 2026",
        "rating": 5,
        "content": "An emotional and insightful account of Mr. Sytnyk’s early life during World War II. Through faith in God and the goodness of people, he survived incredible hardship. A deeply inspirational story."
      },
      {
        "title": "A must read. An amazing story of courage and faith and perseverance.",
        "author": "Amazon Customer",
        "date": "February 12, 2026",
        "rating": 5,
        "content": "A powerful and moving story of courage, faith, and perseverance. Mr. Sytnyk shares his personal journey with honesty and vulnerability, leaving a lasting message of resilience and hope."
      },
      {
        "title": "Faith",
        "author": "robin n greenberger",
        "date": "February 16, 2026",
        "rating": 5,
        "content": "The drama of Alex’s life makes for a compelling story, but it is his faith and how it carries him through hardship that truly sets this book apart."
      },
      {
        "title": "An amazing story of hope, love, resilience, and faith",
        "author": "WBB",
        "date": "January 18, 2026",
        "rating": 5,
        "content": "An incredible story of someone who endured tremendous hardship from a young age yet maintained faith and positivity throughout life."
      },
      {
        "title": "Truth & Faith",
        "author": "Steven J. Sternberg",
        "date": "December 30, 2025",
        "rating": 5,
        "content": "An amazing true story that inspires faith and reminds readers of humanity’s capacity for both horror and goodness."
      },
      {
        "title": "What a Powerful Story",
        "author": "Debra",
        "date": "February 25, 2026",
        "rating": 5,
        "content": "A powerful and inspiring story of survival and faith. The emotional depth and honesty make it both heart-wrenching and uplifting."
      },
      {
        "title": "A must read! From reality to the heart.",
        "author": "J Girardi",
        "date": "January 29, 2026",
        "rating": 5,
        "content": "A moving story from a period of history that should never be forgotten. The bravery of this young boy’s journey during WWII is unforgettable."
      },
      {
        "title": "Tremendous story! Very well written!",
        "author": "Tim",
        "date": "February 8, 2026",
        "rating": 5,
        "content": "An incredible journey from Ukraine through wartime Europe to Canada and California. Well written, engaging, and hard to put down."
      },
      {
        "title": "Spectacular",
        "author": "Danny Geoffrion",
        "date": "February 24, 2026",
        "rating": 5,
        "content": "An excellent read and a page-turner from beginning to end."
      },
      {
        "title": "Inspiring",
        "author": "Mike K",
        "date": "February 16, 2026",
        "rating": 5,
        "content": "A life-affirming story of resilience, faith, and kindness, filled with incredible moments of survival and compassion."
      },
      {
        "title": "Faith, Resilience, and Perspective",
        "author": "Dylan",
        "date": "February 14, 2026",
        "rating": 5,
        "content": "A perspective-shifting story reminding readers not to take their blessings for granted. Inspiring and uplifting."
      },
      {
        "title": "Amazing Story",
        "author": "Karie",
        "date": "February 22, 2026",
        "rating": 5,
        "content": "A great story about Alex that is easy to read and hard to put down."
      },
      {
        "title": "An Inspirational Work",
        "author": "Carl Grant",
        "date": "January 8, 2026",
        "rating": 5,
        "content": "A powerful story about how faith helped one man overcome a life filled with extraordinary hardship."
      },
      {
        "title": "A Real Page Turner",
        "author": "Linda Ohlsen",
        "date": "January 3, 2026",
        "rating": 5,
        "content": "An inspiring story of a young boy overcoming incredible wartime challenges with faith and the love of his mother."
      },
      {
        "title": "One of the most extraordinary stories of WWII",
        "author": "Lynda Lawrence Salinger",
        "date": "January 2, 2026",
        "rating": 5,
        "content": "A powerful story of persistence and optimism through incredibly difficult times."
      },
      {
        "title": "An Amazing Story",
        "author": "H.B.",
        "date": "February 19, 2026",
        "rating": 4,
        "content": "A moving memoir and testament to God’s faithfulness through extraordinary challenges."
      },
      {
        "title": "A must read for all",
        "author": "BER",
        "date": "December 22, 2025",
        "rating": 5,
        "content": "A gripping true story that reads like fiction. The faith and courage in this story make it impossible to put down."
      },
      {
        "title": "Highly recommended",
        "author": "Anastasia W.",
        "date": "January 1, 2026",
        "rating": 5,
        "content": "A touching and encouraging true story that highlights the power of a mother’s love."
      },
      {
        "title": "Incredible life story!",
        "author": "Anne",
        "date": "December 11, 2025",
        "rating": 5,
        "content": "A beautiful story that begins with heartbreak but grows into a powerful journey of faith, resilience, and kindness."
      }
    ]
  }

  // Fisher-Yates shuffle
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // select 5 random reviews
  const selected = shuffle([...reviewsData.reviews]).slice(0, 5);

  selected.forEach(review => {

    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
    <div class="review">
      <div class="review-header">
        <h3>${review.title}</h3>
        <p>— ${review.author} on ${review.date}</p>
      </div>
      <p>${review.content}</p>
    </div>
  `;

    wrapper.appendChild(slide);

  });

})();