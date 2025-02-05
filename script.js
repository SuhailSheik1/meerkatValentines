const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Array of messages for the "No" button
const noMessages = [
    "If you click this you think I should be your master?",
    "Wow You think I am you master <3",
    "Buch Enough",
    "Ok Stop.",
    "I hope you did not lose your dignity to get this far"
  ];
  

let clickCount = 0;

// Handle "No" button clicks
noBtn.addEventListener('click', () => {
  // Cycle the text messages
  noBtn.textContent = noMessages[clickCount % noMessages.length];
  
  // Increase the size of the "Yes" button gradually
  const scaleFactor = 1 + 0.1 * (clickCount + 1);
  yesBtn.style.transform = `scale(${scaleFactor})`;

  clickCount++;
});

// Handle "Yes" button click: trigger confetti and then redirect
yesBtn.addEventListener('click', () => {
  // Trigger an abundant confetti explosion with circle shapes (bubbles)
  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 },
    shapes: ['circle'],
    colors: ['#8A2BE2', '#D8BFD8', '#4B0082']
  });
  
  // Wait for the confetti effect before redirecting (1.5 seconds)
  setTimeout(() => {
    window.location.href = 'yes_page.html';
  }, 1500);
});
