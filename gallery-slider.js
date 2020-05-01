
const slider = document.querySelector('.gallery-track');
const slides = Array.from(slider.querySelectorAll('.gallery-image'));

addClasses(slides);

let counter = 0; 
slider.addEventListener('click', onClick);

function addClasses(slides) {
  if (slides.length < 5) {
    slides[1].classList.add('current');
    slides.forEach((el, i) => {
      if (i > 1) {
        el.classList.add('future');
      } else if (i < 1) {
        el.classList.add('past');
      }
    });
    addPrevClasses(slides[1]);
    addNextClasses(slides[1]);
  } else {
    slides[2].classList.add('current');
    slides.forEach((el, i) => {
      if (i < 2) {
        el.classList.add('past');
      } else if (i > 3) {
        el.classList.add('future');
      }
    });
    addPrevClasses(slides[2]);
    addNextClasses(slides[2]);
  }
}

function addPrevClasses(current) {
  current.previousElementSibling.classList.add('past-1');
  if (current.previousElementSibling.previousElementSibling) {
    current.previousElementSibling.previousElementSibling.classList.add('past-2');
  }
}

function addNextClasses(current) {
  current.nextElementSibling.classList.add('future-1');
  if (current.nextElementSibling.nextElementSibling) {
    current.nextElementSibling.nextElementSibling.classList.add('future-2');
  }
}


function onClick (event) {
  const target = event.target.closest('li');
  if (!target) {
    return;
  }
  
  const currentSlide = slider.querySelector('.current');
  const currentIndex = slides.findIndex(el => el === currentSlide);
  
  const nextSlide = currentSlide.nextElementSibling;
  const previousSlide = currentSlide.previousElementSibling;
  
//move DOWN 
  if (target.classList.contains('past')) {
    
    currentSlide.classList.remove('current');
    currentSlide.classList.add('future');
    currentSlide.classList.add('future-1');
    previousSlide.classList.remove('past');
    previousSlide.classList.remove('past-1');
    previousSlide.classList.add('current');
     
    if (previousSlide.previousElementSibling) {
      previousSlide.previousElementSibling.classList.remove('past-2');
      previousSlide.previousElementSibling.classList.add('past-1');
      
      if (previousSlide.previousElementSibling.previousElementSibling) {
         previousSlide.previousElementSibling.previousElementSibling.classList.add('past-2');
      }
    }
    if (nextSlide) {
      nextSlide.classList.remove('future-1');
      nextSlide.classList.add('future-2');

      if (nextSlide.nextElementSibling) {
        nextSlide.nextElementSibling.classList.remove('future-2');
      }
    } 
    counter--;
  }
  
  //move UP
  if (target.classList.contains('future')) {
    currentSlide.classList.remove('current'); 
    currentSlide.classList.add('past');
    currentSlide.classList.add('past-1');
    
    if (previousSlide) {
      previousSlide.classList.remove('past-1'); 
      previousSlide.classList.add('past-2');

      if (previousSlide.previousElementSibling) {     
        previousSlide.previousElementSibling.classList.remove('past-2');
      }
    }

    if (nextSlide) {
      nextSlide.classList.remove('future');
      nextSlide.classList.remove('future-1');
      nextSlide.classList.add('current');

        if (nextSlide.nextElementSibling) {
           nextSlide.nextElementSibling.classList.remove('future-2');
           nextSlide.nextElementSibling.classList.add('future-1');

           if (nextSlide.nextElementSibling.nextElementSibling) {
               nextSlide.nextElementSibling.nextElementSibling.classList.add('future-2');
            }
        }  
    } 
  counter++;
  }
  const amountToMove = currentSlide.firstElementChild.getBoundingClientRect().height;
  // slider.style.transform = `translateY(${-amountToMove * counter}px)`;

}

//autoplay
// const next = slider.querySelector('.future-1');
// let autoplay = setInterval(() => {
//   const next = slider.querySelector('.future-1');
//   if (next) {
//     next.click();
//   } else {
//     startOver();
//   }
// },2000);

// slider.addEventListener('mouseover', event => {
//   clearInterval(autoplay);
// })
// slider.addEventListener('mouseout', event => {
//   autoplay = setInterval(() => {
//   const next = slider.querySelector('.future-1');
//   if (next) {
//     next.click();
//   } else {
//     startOver();
//   }
// },2000);
// });

// function startOver() {
//   console.log('start over');
//   slider.style.transform = `translateY(${280 * 2}px)`;
//   // slider.style.animation = 'reappear .2s linear'; 
//   slider.style.transition = 'all 0.3s ease-out';
//   counter = -2;
  
//   slides.forEach((slide, i) => {
//     if (i > 0) {
//     slide.classList.remove('future-1');
//     slide.classList.remove('future-2');
//     slide.classList.remove('past-1');
//     slide.classList.remove('past-2');
//     slide.classList.remove('past');
//     slide.classList.remove('current');
//     slide.classList.add('future');
//     } else {
//       slide.classList.remove('past');
//       slide.classList.add('current');
//     }
//   });

//   slides[1].classList.add('future-1');
//   slides[2].classList.add('future-2');
// }
