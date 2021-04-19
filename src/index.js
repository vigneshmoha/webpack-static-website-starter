import 'bootstrap';
require('./scss/style.scss');

const LOCAL_STORAGE_KEY_THEME = "theme-type";
const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_THEME));

let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;

setThemeValue();

document.getElementById("toggleSwitchLabel").addEventListener("click", toggleTheme, false);

function toggleTheme() {
    const darkTheme = document.getElementById("toggleSwitch").checked;
    isDark = darkTheme;
    setThemeValue();
}

function setThemeValue() {
    if(isDark) {
        document.documentElement.className = 'dark';
        document.getElementById("toggleSwitch").checked = true;
    } else {
        document.documentElement.className = '';
        document.getElementById("toggleSwitch").checked = false;
    }

    const META = { isDark };
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, JSON.stringify(META));
}