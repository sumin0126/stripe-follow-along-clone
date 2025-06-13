let menu = document.querySelector('.main-menu');
let menuItems = document.querySelectorAll('.menu-list > li');
let dropdownBackground = document.querySelector('.dropdownBackground');

const handleMenuHover = (e) => {
  let menuItem = e.currentTarget;
  menuItem.classList.add('trigger-enter');

  setTimeout(() => {
    if (menuItem.classList.contains('trigger-enter')) {
      menuItem.classList.add('trigger-enter-active');
    }
  }, 150);

  dropdownBackground.classList.add('open');

  let dropdown = menuItem.querySelector('.dropdown');

  let dropdownCoords = dropdown.getBoundingClientRect();

  let navCoords = menu.getBoundingClientRect();

  dropdownBackground.style.setProperty('width', `${dropdownCoords.width}px`);
  dropdownBackground.style.setProperty('height', `${dropdownCoords.height}px`);
  dropdownBackground.style.setProperty(
    'top',
    `${dropdownCoords.top - navCoords.top}px`
  );
  dropdownBackground.style.setProperty('left', `${dropdownCoords.left}px`);
};

const handleMenuLeave = (e) => {
  e.currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
  dropdownBackground.classList.remove('open');
};

menuItems.forEach((menu) =>
  menu.addEventListener('mouseenter', handleMenuHover)
);
menuItems.forEach((menu) =>
  menu.addEventListener('mouseleave', handleMenuLeave)
);
