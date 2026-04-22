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
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeBtnAction = () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  };

  droneProject.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeBtnAction);
  modalBackdrop.addEventListener('click', closeBtnAction);

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeBtnAction();
    }
  });
}


