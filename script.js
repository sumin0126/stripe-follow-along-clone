const ANIMATION_DELAY = 150;

const menu = document.querySelector('.main-menu');
const menuItems = document.querySelectorAll('.menu-list > li');
const dropdownBackground = document.querySelector('.dropdownBackground');

const handleMenuHover = (e) => {
  const menuItem = e.currentTarget;
  menuItem.classList.add('trigger-enter');

  setTimeout(() => {
    if (menuItem.classList.contains('trigger-enter')) {
      menuItem.classList.add('trigger-enter-active');
    }
  }, ANIMATION_DELAY);

  dropdownBackground.classList.add('open');

  const dropdown = menuItem.querySelector('.dropdown');

  const dropdownCoords = dropdown.getBoundingClientRect();

  const navCoords = menu.getBoundingClientRect();

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
