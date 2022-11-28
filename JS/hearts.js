
const loveMe = document.querySelectorAll('.loveMe')

for (const luv of loveMe) {
  luv.addEventListener('dblclick', (e) => {
    createHeart(e, luv)
  })
}

function createHeart(e, luv) {
  const heart = document.createElement('i');
  heart.classList.add('fa');
  heart.classList.add('fa-heart');
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  luv.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
};
