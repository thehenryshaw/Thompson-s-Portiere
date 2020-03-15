'use strict';

const menuList = document.querySelector('.nav-list');
const aboutSection = document.querySelector('.about');
const faqList = Array.from(document.querySelectorAll('.faq-item'));
const faqDescription = Array.from(document.querySelectorAll('.faq-item__description'));
const tabsList = Array.from(document.querySelectorAll('.tabs-item'));
const tabsContent = Array.from(document.querySelectorAll('.tabs-content'));

/* MENU */
menuList.addEventListener('click', event => {
  if (event.target.classList.contains('nav-list')) {
    return;
  }
  event.preventDefault();
  let top;

  switch(event.target.dataset.id) {
    case 'About':

  }
})

/* TABS */
tabsList.forEach((el, i) => {
  el.addEventListener('click', e => {
    tabsContent.forEach(el => {
      el.classList.add('hide-tab');
    })
    tabsList.forEach(el => {
      el.classList.remove('active-tab');
    }) 
    el.classList.add('active-tab');
    tabsContent[i].classList.remove('hide-tab');
  })
});

/* FAQ */
faqList.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    faqDescription.forEach(el => {
      el.classList.remove('active-faq');
    })
    faqDescription[i].classList.toggle('active-faq');
  })
});

/* GALLERY */
const slider = document.querySelector('ul');
const slides = slider.querySelectorAll('li');

console.log(slides);
document.addEventListener('DOMContentLoaded', () => {
$('.gallery-container').flipster({
    itemContainer: 'ul',
    // [string|object]
    // Selector for the container of the flippin' items.

    itemSelector: 'li',
    // [string|object]
    // Selector for children of `itemContainer` to flip

    start: 'center',
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle

    fadeIn: 400,
    // [milliseconds]
    // Speed of the fade in animation after items have been setup

    loop:true,
    // [true|false]
    // Loop around when the start or end is reached

    autoplay: false,
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds

    pauseOnHover: true,
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered

    style: 'carousel',
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class

    spacing: -0.6,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap

    click: true,
    // [true|false]
    // Clicking an item switches to that item

    keyboard: true,
    // [true|false]
    // Enable left/right arrow navigation

    scrollwheel: true,
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

    touch: true,
    // [true|false]
    // Enable swipe navigation for touch devices

    nav: false,
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

    buttons: false,
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

    buttonPrev: 'Previous',
    // [text|html]
    // Changes the text for the Previous button

    buttonNext: 'Next',
    // [text|html]
    // Changes the text for the Next button

    onItemSwitch: onSwitch
    // [function]
    // Callback function when items are switched
    // Arguments received: [currentItem, previousItem]
});

function onSwitch(cur, prev) {
  if (+cur.dataset.id === slides.length) {
    //$('.gallery-container').flipster('play', 5000);
  } 
}

});
