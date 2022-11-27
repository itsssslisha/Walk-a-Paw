// for prices
const body = document.body
const priceSlides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > priceSlides.length -1) activeSlide=0

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) activeSlide=priceSlides.length-1

    setBgToBody()
    setActiveSlide()
})


function setBgToBody() {
    body.style.backgroundImage = priceSlides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    priceSlides.forEach(priceSlides => priceSlides.classList.remove('active'))

    priceSlides[activeSlide].classList.add('active')
}

//  for home
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}