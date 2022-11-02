//funções relacionadas ao relogio
 
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
}

let CURRENT_TIME = ""

let TimeComponent =  document.getElementById("current-datetime");
TimeComponent.textContent = new Date().toLocaleString();
function initCurrentTime()
{
    CURRENT_TIME = new Date().toLocaleString() ;
    TimeComponent.innerHTML = new Date().toLocaleString();
}
setInterval(initCurrentTime, 1000);

let BtnSwapWallpaper = document.getElementById("btn-swap-wallpaper");
let wallpapers_names = ["wa01.jpg", "wa02.jpg", "wa03.jpg", "wa04.jpg", "wa05.jpg", "wa06.jpg"]
let selected_wallpaper = 0;

BtnSwapWallpaper.addEventListener("click", ()=>{
  
  if(selected_wallpaper == wallpapers_names.length)
    selected_wallpaper = 0;

  document.getElementById("desktop").style.backgroundImage = `url("../images/wallpapers/${wallpapers_names[selected_wallpaper]}")`
  selected_wallpaper+=1;
  
})

let BtnSwapAudio = document.getElementById("btn-swap-audio");
let BtnSwapWifi = document.getElementById("btn-swap-wifi");
let BtnSwapTheme = document.getElementById("btn-swap-theme");
let BtnShowAllApps = document.getElementById("btn-show-all-apps");
let SearchBar = document.getElementById("search_input");

let theme_text = "light_mode";

BtnSwapTheme.addEventListener("click", ()=>{

  let theme_mode = document.getElementById("theme-mode");

  if (theme_text === "light_mode")
  {
    theme_mode.innerText = "dark_mode";
    document.getElementById("task_bar").setAttribute("class", "task-bar-dark-mode");
    BtnShowAllApps.style.color = BtnSwapWifi.style.color =  BtnSwapAudio.style.color = BtnSwapWallpaper.style.color = BtnSwapTheme.style.color = "white";
    SearchBar.style.backgroundColor = "gray";
  }
  else
  {
    theme_mode.innerText = "light_mode";
    document.getElementById("task_bar").setAttribute("class", "task-bar-light-mode");
    BtnShowAllApps.style.color = BtnSwapWifi.style.color =  BtnSwapAudio.style.color =  BtnSwapWallpaper.style.color = BtnSwapTheme.style.color = "black";
    SearchBar.style.backgroundColor = "white";
  }

  theme_text = theme_mode.innerText;


})

