// メニューの表示・非表示を切り替えるスクリプト
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
});
