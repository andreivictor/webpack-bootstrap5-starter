// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';

// or, specify which plugins you need:
// eslint-disable-next-line no-unused-vars
// import { Tooltip, Toast, Popover } from 'bootstrap'

const demo = () =>
  'Webpack Bootstrap5 Starter - A starter frontend boilerplate using Webpack 5, Bootstrap 5, SASS, PostCSS, Babel, ESLint, Stylelint, Prettier and more.';

const sayHello = () => `Hello World and ${process.env.HELLO}!`;

console.log(demo());
console.log(sayHello());

// --------
// Tooltips
// --------
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

// --------
// Popovers
// --------
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
popoverTriggerList.forEach((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

// --------
// Toasts
// --------
const toastTriggerList = document.querySelectorAll('[data-bs-toggle="toast"]');
toastTriggerList.forEach((toastTriggerEl) => {
  // Define the target property
  const toastTargetEl = SelectorEngine.getElementFromSelector(toastTriggerEl);

  if (!toastTargetEl) {
    return;
  }

  // Initialize toast
  const toast = new bootstrap.Toast(toastTargetEl);

  // Add click even to trigger
  toastTriggerEl.addEventListener('click', function (event) {
    event.preventDefault();
    toast.show();
  });
});

// --------
// Toggle theme
// --------
document.querySelector('.js-bs-theme-toggle').addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }
});
