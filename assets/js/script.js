// console.log();

// tab
function openCity(evt, target) {
    var i, tabs__card, tabs__item;

    tabs__card = document.getElementsByClassName("tabs__card");
    for (i = 0; i < tabs__card.length; i++) {
        tabs__card[i].style.display = "none";
    }

    tabs__item = document.getElementsByClassName("tabs__item");
    for (i = 0; i < tabs__item.length; i++) {
        tabs__item[i].className = tabs__item[i].className.replace("active", "");
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


// modal window
const myBtn = document.querySelector('#myButton');
const closeBtn = document.querySelector('.modal-form__close');
const modal = document.querySelector('.modal');

function toggleModal(){
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }    
}

myBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);


// modal window
// var modal = document.getElementById('myModal');
// var button = document.getElementById("myButton");
// var span = document.getElementsByClassName("promo-content__modal-close")[0];

// button.onclick = function () {
//     modal.style.display = "block";    
// }

// span.onclick = function () {
//     modal.style.display = "none";    
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }