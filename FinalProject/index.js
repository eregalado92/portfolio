const projects = [
  { name: 'SQL-Challenge-Employee_Tracker', description: 'Manage departments, roles, and employees.', url: 'https://github.com/eregalado92/SQL-Challenge-Employee_Tracker', image: 'https://placehold.co/800x400?text=SQL+Tracker' },
  { name: 'todo-list', description: 'An interactive to-do app for managing tasks.', url: 'https://github.com/johnfitz3/project-3', image: 'https://placehold.co/800x400?text=To-Do+List' },
  { name: 'hobby-box', description: 'A full-stack e-commerce application.', url: 'https://github.com/Qaizen/hobby-box', image: 'https://placehold.co/800x400?text=Hobby+Box' }
];

document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const toggleSwitch = document.createElement('input'); toggleSwitch.type = 'checkbox'; toggleSwitch.id = 'theme-switch';
  const label = document.createElement('label'); label.htmlFor = 'theme-switch'; label.innerText = 'Dark Mode';
  document.querySelector('.navbar .container').appendChild(label); label.insertBefore(toggleSwitch, label.firstChild);
  toggleSwitch.addEventListener('change', e => document.body.classList.toggle('dark-mode', e.target.checked));

  // IntersectionObserver for fade‑ins
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const grid = document.getElementById('project-grid-inner');

  projects.forEach((prj, i) => {
    const col = document.createElement('div'); col.className = 'col-md-4 animate project-card';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${prj.image}" class="card-img-top" alt="${prj.name}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${prj.name}</h5>
          <p class="card-text flex-grow-1">${prj.description}</p>
          <a href="${prj.url}" class="btn btn-primary mt-3" target="_blank">View Project</a>
        </div>
      </div>
    `;
    grid.appendChild(col);
    observer.observe(col);
  });
});
