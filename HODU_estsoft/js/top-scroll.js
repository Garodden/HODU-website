const scrollTopBtn= document.querySelector(".scroll-top-btn")
scrollTopBtn.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤 효과
  });
});
