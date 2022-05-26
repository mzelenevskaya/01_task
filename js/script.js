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
const toggleSwitch = document.querySelector('.header__theme input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
