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


// // class= circle 
// const loveMe = document.getElementsByClassName('.loveMe')

// loveMe.addEventListener('click', (e) => {
//     console.log(123)
// })
// const createHeart = (e) => {
//     const heart = document.createElement("i");
//     heart.classList.add("fa");
//     heart.classList.add("fa-heart");
//     const x = e.clientX;
//     const y = e.clientY;
//     const leftOffset = e.target.offsetLeft;
//     const topOffset = e.target.offsetTop;
//     const xInside = x - leftOffset;
//     const yInside = y - topOffset;
//     heart.style.top = `${yInside}px`;
//     heart.style.left = `${xInside}px`;
//     loveMe.appendChild(heart);
//     times.innerHTML = ++timesClicked;
//     setTimeout(() => heart.remove(), 1000);
//   };

// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//         const x = e.clientX
//         const y = e.clientY

//         const buttonTop = e.target.offsetTop
//         const buttonLeft = e.target.offsetLeft

//         const xInside = x - buttonLeft;
//         const yInside = y - buttonTop;
        
//         const circle = document.createElement('span')
//         circle.classList.add('circle')
//         circle.style.top = yInside + 'px'
//         circle.style.left = xInside + 'px'

//         this.appendChild(circle)

//         setTimeout(() => circle.remove(), 500)
//     })
// 