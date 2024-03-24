document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll('.collapsible-sidebar:not(:has(button))').forEach((el) => {
    const btn = document.createElement('button');
    const aside = el.querySelector('aside');
    btn.textContent = '➡️';
    btn.addEventListener('click', () => {
      el.classList.add('collapsible-sidebar--collapsed');
      aside.hidden = true;
    })
    aside.appendChild(btn);
  })
});
