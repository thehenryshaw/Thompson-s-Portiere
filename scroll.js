'use strict';

const navMenu = document.querySelector('.nav-menu');
const menuList = navMenu.querySelector('.nav-list');
const menuControl = navMenu.querySelector('input#menu');
const menuItemsArray = Array.from(navMenu.querySelectorAll('.nav-item'));
const learnMoreBtn = Array.from(document.querySelectorAll('.btn-href'));
const footerList = document.querySelector('.footer-container');

/* SMOOTH SCROLL (MENU) */
menuList.addEventListener('click', event => {
  if (event.target.classList.contains('nav-list')) {
    return;
  }
  event.preventDefault();
  let top;

  switch(event.target.dataset.id) {
    case 'Home':
      top = homeSection.offsetTop;
      break;
    case 'About':
      top = aboutSection.offsetTop;
      break;
    case 'FAQ':
      top = faqSection.offsetTop;
      break;
    case 'Testimonials':
      top = testimonaialsSection.offsetTop;
      break;
    case 'Gallery':
      top = gallerySection.offsetTop;
      break;
    case 'Contacts':
      top = contactsSection.offsetTop;
      break;
  }

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })

  // CLOSE MENU ON CLICK FOR MOBILE VIEW
  if (window.innerWidth <= 640) {
    setTimeout(() => {
      menuControl.checked = false;
    }, 500)
  }
})

/* LEARN MORE & ORDER BUTTONS */
learnMoreBtn.forEach(el => {
  el.addEventListener('click', event => {
    if (event.target.classList.contains('.btn-href')) {
      return;
    }
    event.preventDefault();
    let top;
  
    switch(event.target.dataset.id) {
      case 'About':
        top = aboutSection.offsetTop;
        break;
      case 'Contacts':
        top = contactsSection.offsetTop;
        break;
    }
  
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  })
})

/* ACTIVE ITEM */
menuItemsArray.forEach((el, i) => {
  el.addEventListener('click', e => {
    menuItemsArray.forEach(el => {
      el.classList.remove('active');
    })
    el.classList.add('active');
  })
})

/* SCROLL + ACTIVE ITEM */
document.addEventListener('DOMContentLoaded', () => {	
  var lastId,
  topMenu = $(document.querySelector('.nav-list')),
  topMenuHeight = topMenu.outerHeight()+15,
  menuItems = topMenu.find('a'),
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr('href'));
    if (item.length) { return item; }
  });

  $(window).scroll(function() {
  var fromTop = $(this).scrollTop()+topMenuHeight;

  var cur = scrollItems.map(function() {
  if ($(this).offset().top < fromTop)
    return this;
  });
 
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
      menuItems
        .parent().removeClass('active')
        .end().filter("[href='#"+id+"']").parent().addClass('active');
    }                   
  });
});
