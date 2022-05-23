// console.log();
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