// hide and open text function
const showbtn_el = document.getElementById("showLink");
const hidebtn_el = document.getElementById("hideLink");
const paragrap_el = document.getElementById("AboutMe");

showbtn_el.addEventListener("click", () => {
  paragrap_el.classList.remove("hidden");
  paragrap_el.classList.add("flex");
  showbtn_el.classList.add("hidden");
});
hidebtn_el.addEventListener("click", () => {
  paragrap_el.classList.add("hidden");
  showbtn_el.classList.remove("hidden");
});

// live time function
function UpdatedTime() {
  const time_el = document.getElementById("livetime");
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const formattedTime = `${hour}:${minutes}:${seconds}`;

  time_el.innerText = formattedTime;
}
UpdatedTime();

setInterval(UpdatedTime, 1000);
