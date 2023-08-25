// JavaScript to toggle overlay and reveal video
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
var attempts = 0;

function checkPassword() {
  var passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === "280323") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.body.classList.remove("no-scroll"); // Enable scrolling
    alert("Congratulation! You nailed it.");
  } else {
    alert("Incorrect password. Please try again.");
  }
}







