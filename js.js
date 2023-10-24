
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// get the color mode
var mode = document.getElementById('color_mode');
mode.onclick = function () {
    if (mode.innerText == "light_mode") {
        mode.innerText = "dark_mode";
        $(":root").css('--main-bgcoloralph', "hsla(229, 100%, 50%, 1)")
        $(":root").css('--main-bgcolor', "rgb(0, 0, 0)")
        $(":root").css("--main-color", "rgb(255, 255, 255)")
    } else if (mode.innerText == "dark_mode") {
        mode.innerText = "light_mode";
        $(":root").css('--main-bgcoloralph', "hsla(229, 100%, 50%, 1)")
        $(":root").css('--main-bgcolor', "rgb(255, 255, 255)")
        $(":root").css("--main-color", "rgb(0, 0, 0)")
    }
}
//fdsf
let form = document.getElementById('form');
let city = document.getElementById('city');
let when_date_in = document.getElementById('when_date_in');
let when_date_out = document.getElementById('when_date_out');
let number_adult = document.getElementById('number_adult');
let number_children = document.getElementById('number_children');
let list_id = ['city', 'when_date_in', 'when_date_out', 'number_adult', 'number_children'];

list_id.forEach(element => {
    document.getElementById(element);
});