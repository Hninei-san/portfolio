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

const aiDebuggerProject = document.getElementById('ai-debugger-project');
const aiDebuggerModal = document.getElementById('ai-debugger-modal');
const closeAiDebuggerModal = document.getElementById('close-ai-debugger-modal');
const aiDebuggerBackdrop = document.getElementById('ai-debugger-backdrop');

if (aiDebuggerProject && aiDebuggerModal) {
  const openAiModal = () => {
    aiDebuggerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeAiBtnAction = () => {
    aiDebuggerModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  aiDebuggerProject.addEventListener('click', openAiModal);
  closeAiDebuggerModal.addEventListener('click', closeAiBtnAction);
  aiDebuggerBackdrop.addEventListener('click', closeAiBtnAction);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiDebuggerModal.classList.contains('active')) {
      closeAiBtnAction();
    }
  });
}

const roboticsProject = document.getElementById('robotics-system-project');
const roboticsModal = document.getElementById('robotics-system-modal');
const closeRoboticsModal = document.getElementById('close-robotics-system-modal');
const roboticsBackdrop = document.getElementById('robotics-system-backdrop');

if (roboticsProject && roboticsModal) {
  const openRoboticsModal = () => {
    roboticsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeRoboticsBtnAction = () => {
    roboticsModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  roboticsProject.addEventListener('click', openRoboticsModal);
  closeRoboticsModal.addEventListener('click', closeRoboticsBtnAction);
  roboticsBackdrop.addEventListener('click', closeRoboticsBtnAction);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && roboticsModal.classList.contains('active')) {
      closeRoboticsBtnAction();
    }
  });
}

const phProject = document.getElementById('ph-estimation-project');
const phModal = document.getElementById('ph-estimation-modal');
const closePhModal = document.getElementById('close-ph-estimation-modal');
const phBackdrop = document.getElementById('ph-estimation-backdrop');

if (phProject && phModal) {
  const openPhModal = () => {
    phModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closePhBtnAction = () => {
    phModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  phProject.addEventListener('click', openPhModal);
  closePhModal.addEventListener('click', closePhBtnAction);
  phBackdrop.addEventListener('click', closePhBtnAction);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && phModal.classList.contains('active')) {
      closePhBtnAction();
    }
  });
}

const heightProject = document.getElementById('height-measurement-project');
const heightModal = document.getElementById('height-measurement-modal');
const closeHeightModal = document.getElementById('close-height-modal');
const heightBackdrop = document.getElementById('height-measurement-backdrop');

if (heightProject && heightModal) {
  const openHeightModal = () => {
    heightModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeHeightBtnAction = () => {
    heightModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  heightProject.addEventListener('click', openHeightModal);
  closeHeightModal.addEventListener('click', closeHeightBtnAction);
  heightBackdrop.addEventListener('click', closeHeightBtnAction);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && heightModal.classList.contains('active')) {
      closeHeightBtnAction();
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


