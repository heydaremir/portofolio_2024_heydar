function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const subtitle = document.querySelector('.section__text__p2');
  const cursor = document.getElementById('typing-cursor');
  
  // Your existing subtitle animation code
  anime.timeline({
    targets: subtitle,
  })
  .add({
    opacity: [0, 1],
    translateX: [50, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  })
  .add({
    targets: subtitle.children,
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(100),
    complete: function() {
      // Start typing animation when subtitle animation is complete
      typeText(subtitle.textContent);
    }
  });

  function typeText(text) {
    const characters = text.split('');
    subtitle.textContent = ''; // Clear the text

    characters.forEach((char, index) => {
      const charElement = document.createElement('span');
      charElement.textContent = char;
      charElement.style.opacity = 0;
      subtitle.appendChild(charElement);

      anime({
        targets: charElement,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 300,
        delay: index * 50,
        complete: function() {
          if (index === characters.length - 1) {
            // Typing animation complete, hide the cursor
            cursor.style.display = 'none';
          }
        }
      });
    });
  }
});

function typeText(selector, text, delay = 100) {
  let element = document.querySelector(selector);
  element.textContent = ''; // Clear the existing text
  let textArray = text.split('');
  let index = 0;

  function type() {
      if (index < textArray.length) {
          element.textContent += textArray[index];
          index++;
          setTimeout(type, delay);
      }
  }

  type();
}

// Usage
window.onload = function() {
  typeText('.title', 'Heydar Emir Alvaro');
  typeText('.section__text__p2', 'Data Science & data Analyst enthusiast', 50);
}