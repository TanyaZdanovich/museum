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