chrome.runtime.onStartup.addListener(() => {
  showQuote();
});

chrome.runtime.onInstalled.addListener(() => {
  showQuote();
});

function showQuote() {
 
  const hours = new Date().getHours();
  let greeting;

  
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning! Pallavi";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon! Pallavi";
  } else {
    greeting = "Good Evening! Pallavi";
  }

 
  const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones.",
    "Don’t stop when you’re tired. Stop when you’re done."
  ];

  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.jpg",
    title: greeting,
    message: randomQuote,
    priority: 2
  });
}
