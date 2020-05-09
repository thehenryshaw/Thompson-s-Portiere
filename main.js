'use strict';

const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const faqSection = document.querySelector('.faq');
const subscribeSection = document.querySelector('.subscribe');
const subscribe = document.querySelector('.subscribe-form');
const subscribeBtn = document.querySelector('.btn-subscribe');
const subscribeInput = document.querySelector('.subscribe-row');
const tabsSection = document.querySelector('.tabs');
const btnVideo = document.querySelector('.btn-video');
const modalVideo = document.querySelector('.modal');
const player = document.querySelector('.modal iframe');
const overlay = document.querySelector('.overlay');
const testimonaialsSection = document.querySelector('.testimonials');
const followSection = document.querySelector('.social');
const gallerySection = document.querySelector('.gallery');
const contactsSection = document.querySelector('.contacts');
const faqList = Array.from(document.querySelectorAll('.faq-item'));
const faqDescription = Array.from(document.querySelectorAll('.faq-item__description'));
const tabs = document.querySelector('.tabs');
const tabsList = Array.from(document.querySelectorAll('.tabs-item'));
const tabsContent = Array.from(document.querySelectorAll('.tabs-content'));

/* CHANGING WIDTH OF WRAPPER WHEN MENU OPEN*/
const body = document.body;
const btn = document.querySelector('input#menu');
const wrapper = document.querySelector('.wrapper');
btn.addEventListener('change', () => {
  if (window.innerWidth <= 600) {
    return;
  }
  if (btn.checked) {
    wrapper.style.width = '80%';
  } else {
    wrapper.style.width = '100%';
  }
})

/* MODAL FOR VIDEO-BANNER */
btnVideo.addEventListener('click', () => {
  modalVideo.classList.add('visible');
  player.src = 'https://www.youtube.com/embed/1wtjyv1lmKc';
})

overlay.addEventListener('click', () => {
  modalVideo.classList.remove('visible');
  player.src = '';
})

/* TABS */
const currentTab = tabs.querySelector('.tabs-content:not(.hide-tab)');
const tabsTitleContainer = tabs.querySelector('.tabs-list');
tabs.style.height = currentTab.getBoundingClientRect().height + tabsTitleContainer.getBoundingClientRect().height + 'px';

tabsList.forEach((el, i) => {
  el.addEventListener('click', e => {
    tabsContent.forEach(el => {
      el.classList.add('hide-tab');
    })
    tabsList.forEach(el => {
      el.classList.remove('active-tab');
    }) 
    tabsContent[i].classList.remove('hide-tab');
    el.classList.add('active-tab');
    tabs.style.height = tabsContent[i].getBoundingClientRect().height + tabsTitleContainer.getBoundingClientRect().height + 'px';
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
    output.classList.remove('error');
    output.classList.add('success');
    output.textContent = 'Thank you! You have been successfully subscribed.';
    subscribeInput.value = '';
  }
});
