const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

/**
 * Apply the theme to the body and update the UI
 * @param {string} theme - 'dark' or 'light'
 */
function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
  }
}

// Initial load: check localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  applyTheme('light');
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  const isLight = body.classList.toggle('light-mode');
  const newTheme = isLight ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
});

// Sync theme across multiple tabs
window.addEventListener('storage', (e) => {
  if (e.key === 'theme') {
    applyTheme(e.newValue);
  }
});

/* ── Project Modal Interactivity ── */
const droneProject = document.getElementById('drone-project');
const projectModal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');
const modalBackdrop = document.getElementById('modal-backdrop');

if (droneProject && projectModal) {
  const openModal = () => {
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeBtnAction = () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  droneProject.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeBtnAction);
  modalBackdrop.addEventListener('click', closeBtnAction);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeBtnAction();
    }
  });
}

/* ── Education Modal Interactivity ── */
const educationCard = document.getElementById('education-card');
const educationModal = document.getElementById('education-modal');
const closeEduModal = document.getElementById('close-edu-modal');
const eduModalBackdrop = document.getElementById('edu-modal-backdrop');

if (educationCard && educationModal) {
  const openEduModal = () => {
    educationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeEduBtnAction = () => {
    educationModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  educationCard.addEventListener('click', openEduModal);
  closeEduModal.addEventListener('click', closeEduBtnAction);
  eduModalBackdrop.addEventListener('click', closeEduBtnAction);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && educationModal.classList.contains('active')) {
      closeEduBtnAction();
    }
  });
}

/* ── Project Filtering ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        // Force a reflow for animation
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});


