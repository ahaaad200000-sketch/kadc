// إظهار القائمة على الهاتف
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
// تحديث السنة تلقائياً
document.getElementById('year').textContent = new Date().getFullYear();
