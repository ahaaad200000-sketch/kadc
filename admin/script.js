document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "admin" && pass === "1234") {
      alert("✅ تم تسجيل الدخول بنجاح");
      // استخدم المسار الكامل هنا 👇
      window.location.href = "file:///C:/Users/Administrator/Downloads/kadc/admin/dashboard.html";
    } else {
      alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("تم تسجيل الخروج");
      window.location.href = "login.html";
    });
  }
});
localStorage.setItem(page, textarea.value);
