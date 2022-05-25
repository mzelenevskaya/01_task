// console.log();
// tab
function openCity(evt, target) {
    var i, history__content, tabs__item;

    history__content = document.getElementsByClassName("history__content");
    for (i = 0; i < history__content.length; i++) {
        history__content[i].style.display = "none";
    }

    tabs__item = document.getElementsByClassName("tabs__item");
    for (i = 0; i < tabs__item.length; i++) {
        tabs__item[i].className = tabs__item[i].className.replace(" active", "");
    }

    document.getElementById(target).style.display = "block";
    evt.currentTarget.className += " active";
}

// theme
let changeThemeButtons = document.querySelectorAll('.header__theme-changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `assets/css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); 

if(activeTheme === null || activeTheme === 'light') {
    applyTheme('light');
} else if (activeTheme === 'dark') {
    applyTheme('dark');
}