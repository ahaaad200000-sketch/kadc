// إظهار القائمة على الهاتف
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
// تحديث السنة تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();
// إعادة تشغيل أنيميشن الشريط المتحرك على الموبايل
const announcement = document.querySelector('.announcement-bar p');
announcement.addEventListener('animationiteration', () => {
  announcement.style.animation = 'none';
  requestAnimationFrame(() => {
    announcement.style.animation = '';
  });
});

// قائمة الموبايل
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// سنة التذييل ديناميكية
document.getElementById('year').textContent = new Date().getFullYear();
