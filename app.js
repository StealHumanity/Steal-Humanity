// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle=document.getElementById('navToggle');
const navList=document.getElementById('nav-list');
navToggle?.addEventListener('click',()=>navList.classList.toggle('is-open'));

// Carousel
const carousel=document.querySelector('[data-role="carousel"]');
if(carousel){
  const items=[...carousel.querySelectorAll('.carousel__item')];
  const prev=carousel.querySelector('.prev');
  const next=carousel.querySelector('.next');
  let i=0;
  const show=(idx)=>items.forEach((el,n)=>el.classList.toggle('is-active',n===idx));
  prev?.addEventListener('click',()=>{i=(i-1+items.length)%items.length;show(i)});
  next?.addEventListener('click',()=>{i=(i+1)%items.length;show(i)});
}
