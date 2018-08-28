console.log("%capp.js Loaded",
  "color: #b5f5bd; font-size: 12px; padding: 5px 15px; background: #404040; border-radius: 3px;"
);

/** 
 * Creates the grid of size*size
 * and appends to grid-wrapper div.
 * calls setupGridEvents to set the event
 * listeners on newly created grid boxes
 */
const createGrid = (size) => {
  if (size > 100) return errorHandler('Error! grid size limit is under 100');

  let allDivs = '';

  for (let i = 0; i < size * size; i++) {
    const div = `<div class="box"></div>`;
    allDivs += div;
  }

  const wrapper = document.querySelector('.grid-wrapper');
  wrapper.style.cssText = 'grid-template-columns: repeat(' + size + ', 1fr);'
  wrapper.innerHTML = allDivs;

  setupGridEvents();
}

/** 
 * Applies mouseover event listener
 * to all the grid boxes.
 */
const setupGridEvents = () => {
  const boxes = document.querySelectorAll('.grid-wrapper .box');
  boxes.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.background = getRandomColor();
    })
  });
}

/** 
 * Get user input on keyup
 * and updates duplicate value.
 * Returns the current value
 */
const getUserInput = () => {
  const dupField = document.querySelector('.duplicate-value--js');
  const inputField = document.querySelector('.input-field--js');

  dupField.style.opacity = 1;
  dupField.innerHTML = inputField.value;

  inputField.addEventListener('keyup', (e) => {
    dupField.innerHTML = e.target.value;
  });

  return inputField.value;
}

/** 
 * Create Gid Button Handler
 * Creates grid by calling createGrid()
 * and passing getUseInput as args.
 */
const createBtnHandler = () => {
  const btn = document.querySelector('.btn--js');
  btn.addEventListener('click', () => {
    createGrid(getUserInput());
  })
}

/** 
 * Error Output to console
 */
const errorHandler = (errMsg) => {
  console.log(`%c${errMsg}`,
    "color: #ffa8a8; font-size: 12px; padding: 5px 15px; background: #404040; border-radius: 3px; line-height: 2.5"
  );
  toastr["error"](errMsg);
}

/** 
 * Random color generator
 */
const getRandomColor = () => {
  const letters = 'ABCDEF0123456789';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

getUserInput();
createBtnHandler();

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}