/*menu*/
let menuBtn = document.querySelector('.nav__btn');
let menu = document.querySelector('.header__nav');
let menuItem = document.querySelectorAll('.list__item');
let body = document.querySelector('body');
let box = document.querySelector('.welcome__box');
let img = document.querySelector('.nav__image');
let footer = document.querySelector('.footer__socials');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('active');
  box.classList.toggle('active');
  img.classList.toggle('active');
  footer.classList.toggle('active');
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener('click', function () {
		  menu.classList.remove('active');
		  menuBtn.classList.remove('active');
		  body.classList.remove('active');
      box.classList.remove('active');
      img.classList.remove('active');
      footer.classList.remove('active');
	   })
	})
};

/*explore slider*/
const exploreSlider = document.querySelector('.explore__slider');

document.querySelector('.box__slider').addEventListener('input', (e) => {
  exploreSlider.style.setProperty('--position', `${e.target.value}%`);
})



/*booking tickets*/
let buyBtn = document.querySelector('.form__btn');
let closeBtn = document.querySelector('.booking__close-btn');
let form = document.querySelector('.booking__container');
let overlay = document.querySelector('.booking__overlay')
const toggleForm = function () {
  form.classList.toggle('active');
  overlay.classList.toggle('active');
}
buyBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleForm();
});
/*чтобы при клике на оверлей и другое место форма закрывалась*/
document.addEventListener('click', function (e) {
  const target = e.target;
  const its_form = target == form || form.contains(target);
  const its_buyBtn = target == buyBtn;
  const form_is_active = form.classList.contains('active');

  if (!its_form && !its_buyBtn && form_is_active) {
    toggleForm();
  }
});
closeBtn.addEventListener('click', function() {
  form.classList.remove('active');
  overlay.classList.remove('active');
});

/*чтобы после использования прятался плейсхолдер Date Time*/
/*date input*/
let date = document.querySelector('.date');
let time = document.querySelector('.time');
let dateEdit = document.querySelector('.date::-webkit-datetime-edit')
let timeEdit = document.querySelector('.time::-webkit-datetime-edit')
date.addEventListener('click', () => {
  date.classList.toggle('active');
  dateEdit.classList.toggle('active');
});
time.addEventListener('click', () => {
  time.classList.toggle('active');
  timeEdit.classList.toggle('active');
});

/*welcome slider*/
let slider = document.querySelector(".welcome__slider").offsetWidth;
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let sliderTrack = document.querySelector(".slider__track");
let sliderIcon = document.querySelectorAll(".slider__icon");
let viewSlide = 0;

sliderIcon[0].style.backgroundColor = "#d2b183";

btnNext.addEventListener("click", function () {
  sliderIcon[viewSlide].style.backgroundColor = "#fff";
  if (viewSlide < 4) { 
      viewSlide++;
  } else { 
      viewSlide = 0;
  }
  sliderIcon[viewSlide].style.backgroundColor = "#d2b183";
  sliderTrack.style.left = -viewSlide * slider + "px";
});

btnPrev.addEventListener("click", function () {
  sliderIcon[viewSlide].style.backgroundColor = "#fff";
  if (viewSlide > 0) { 
      viewSlide--; 
  } else { 
      viewSlide = 4; 
  }
  sliderIcon[viewSlide].style.backgroundColor = "#d2b183";
  sliderTrack.style.left = -viewSlide * slider + "px";
});

var x = window.matchMedia("(max-width: 1240px)")
function sliderSize(x) {
  if (x.matches) {
    btnNext.addEventListener("click", function () {
      sliderIcon[viewSlide].style.backgroundColor = "#fff";
      if (viewSlide < 5) { 
          viewSlide;
      } else { 
          viewSlide = 0;
      }
      sliderIcon[viewSlide].style.backgroundColor = "#d2b183";
      sliderTrack.style.left = -viewSlide * slider + "px";
    });
    btnPrev.addEventListener("click", function () {
      sliderIcon[viewSlide].style.backgroundColor = "#fff";
      if (viewSlide > 0) { 
          viewSlide; 
      } else { 
          viewSlide = 0;
      }
      sliderIcon[viewSlide].style.backgroundColor = "#d2b183";
      sliderTrack.style.left = -viewSlide * slider + "px";
    });
  }
};
sliderSize(x);

var y = window.matchMedia("(max-width: 1024px)")
function sliderSize(y) {
  if (y.matches) {
    btnNext.addEventListener("click", function () {
      sliderIcon[viewSlide].style.backgroundColor = "#fff";
      if (viewSlide < 5) { 
          viewSlide;
      } else { 
          viewSlide = 0;
      }
      sliderIcon[viewSlide].style.backgroundColor = "#d2b183";
      sliderTrack.style.left = -viewSlide * slider + "px";
    });
    btnPrev.addEventListener("click", function () {
      sliderIcon[viewSlide].style.backgroundColor = "#fff";
      if (viewSlide > 0) { 
          viewSlide; 
      } else { 
          viewSlide = 0;
      }
      sliderIcon[viewSlide].style.backgroundColor = "#d2b183";
      sliderTrack.style.left = -viewSlide * slider + "px";
    });
  }
};

sliderSize(y);

/*video slider*/
var left=1;
var right=3;

function show() {
  for(i=left; i<=right;i++) {
    document.querySelector(".c"+i).style.display="block";
  }
}

function moveRight() {
  if (left<=3 && right<=3) { 
  document.querySelector(".c"+left).style.display="none";
  left+=1;
  right+=1;
  
  for(i=left; i<=right;i++) {
    document.querySelector(".c"+i).style.display="block";
  }
 }
  else 
    return;
}

function moveLeft() {
  if (left>=2 && right>=2) { 
  document.querySelector(".c"+right).style.display="none";
  left-=1;
  right-=1;
  
  for(i=left; i<=right;i++) {
    document.querySelector(".c"+i).style.display="block";
  }
 }
  else 
    return;
}