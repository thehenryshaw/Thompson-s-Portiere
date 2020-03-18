'use strict';

const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const faqSection = document.querySelector('.faq');
const subscribeSection = document.querySelector('.subscribe');
const subscribe = document.querySelector('.subscribe-form');
const subscribeBtn = document.querySelector('.btn-subscribe');
const subscribeInput = document.querySelector('.subscribe-row');
const tabsSection = document.querySelector('.tabs');
const testimonaialsSection = document.querySelector('.testimonials');
const followSection = document.querySelector('.social');
const gallerySection = document.querySelector('.gallery');
const contactsSection = document.querySelector('.contacts');
const faqList = Array.from(document.querySelectorAll('.faq-item'));
const faqDescription = Array.from(document.querySelectorAll('.faq-item__description'));
const tabsList = Array.from(document.querySelectorAll('.tabs-item'));
const tabsContent = Array.from(document.querySelectorAll('.tabs-content'));

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
    if (e.target.classList.contains('active-faq')) {
      e.target.classList.remove('active-faq');
    } else {
      faqList.forEach(item => {
        item.classList.remove('active-faq');
      });
      e.target.classList.add('active-faq');
    }
  })
});

/* SUBSCRIBE */
subscribe.addEventListener('submit', () => {
  event.preventDefault();
  let reg = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
  let address = subscribeInput.value;
  const output = document.querySelector('output');
  if (!reg.test(address)) {
    output.textContent = 'Please enter a correct email';
    output.classList.add('error');
    output.classList.remove('success');
  } else {
    /*сделать отправку на сервер*/ 
    output.classList.remove('error');
    output.classList.add('success');
    output.textContent = 'Thank you! You have been successfully subscribed.';
    subscribeInput.value = '';
  }
})

/* GALLERY */
const slider = document.querySelector('ul');
const slides = slider.querySelectorAll('li');
document.addEventListener('DOMContentLoaded', () => {
$('.gallery-container').flipster({
    itemContainer: 'ul',
    // [string|object]
    // Selector for the container of the flippin' items.

    itemSelector: 'li',
    // [string|object]
    // Selector for children of `itemContainer` to flip

    start: 0,
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

    scrollwheel: false,
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



/* TESTIMONIALS CAROUSEL */
const carouselNav = document.querySelector('.carousel-controls');
const carouselTrack = document.querySelector('.testimonials-carousel');
const dots = Array.from(carouselNav.children);
const testimonialsSlides = Array.from(carouselTrack.children);

carouselNav.addEventListener('click', event => {
  const target = event.target;
  if (!event.target.closest('button')) {
    return;
  }
  if (event.target.classList.contains('active')) {
    return;
  }
  const idx = dots.findIndex(dot => dot === target);
  const currentSlide = carouselTrack.querySelector('.current-slide');
  const targetSlide = testimonialsSlides[idx];
  
  //move
  carouselTrack.style.transform = `translateX(-${window.innerWidth * 0.7 * idx}px)`;
  
  //update classes
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  dots.forEach(dot => dot.classList.remove('current-slide'));
  target.classList.add('current-slide');
});