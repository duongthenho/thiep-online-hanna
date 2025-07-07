// Slider tự chạy
let idx = 0;
const slides = document.querySelectorAll('.slide');
function showSlide() {
  slides.forEach((s,i)=> s.style.transform = `translateX(-${idx*100}%)`);
  idx = (idx + 1) % slides.length;
}
setInterval(showSlide, 3000);

// Nút mở thiệp (ví dụ bật modal)
document.getElementById('openGifts').addEventListener('click', ()=>{
  alert('Cảm ơn bạn đã đến dự hôn lễ của chúng mình!');
});
