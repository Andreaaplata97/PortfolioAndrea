window.addEventListener('load', () => {
  const nameEl = document.querySelector('.text-section h1');
  if (nameEl) {
    const nameText = nameEl.innerText;
    nameEl.innerText = '';
    let i = 0;

    const typeEffect = () => {
      if (i < nameText.length) {
        nameEl.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
      }
    };

    typeEffect();
  }

  // Efecto 3D en tarjetas
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const { offsetX, offsetY } = e;
      const x = (offsetX / card.offsetWidth) - 0.5;
      const y = (offsetY / card.offsetHeight) - 0.5;
      card.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });

  // Scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .grid-card, .intro-text, .text-section, .cta').forEach(el => {
    observer.observe(el);
  });
});
// modal-viewer.js

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".compare-item img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const close = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});

