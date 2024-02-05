// get the color mode
var mode = document.getElementById('color_mode');
mode.onclick = function () {
    if (mode.innerText == "light_mode") {
        mode.innerText = "dark_mode";
        $(":root").css('--main-bgcoloralph', "rgb(204, 198, 255)")
        $(":root").css('--main-bgcolor', "rgb(0, 0, 0)")
        $(":root").css("--main-color", "rgb(255, 255, 255)")
        $(":root").css("--main-url", "url(./assite/backgroundark.jpg)")
    } else if (mode.innerText == "dark_mode") {
        mode.innerText = "light_mode";
        $(":root").css('--main-bgcoloralph', "rgb(204, 198, 255)")
        $(":root").css('--main-bgcolor', "rgb(255, 255, 255)")
        $(":root").css("--main-color", "rgb(0, 0, 0)")
        $(":root").css("--main-url", "url(./assite/backgroundark5.jpg)")
    }
}
// 
var string = `
Welcome to my developer portfolio. I'm Ilias Aitouchen, a passionate full-stack developer
with a strong background in web development. I'm committed to delivering efficient and
maintainable code, and I thrive on problem-solving. My goal is to create innovative
solutions
and make ideas come to life.
               `; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 50); /* change 70 for speed */

}
frameLooper();
var names = ["i'm a full - stack developer", "i'm a forntend developer", "i'm a backend developer"]
var i = 0;
function frametitle() {
    if (i >= names.length) {
        i = 0
    }
    document.getElementById("title").innerHTML = names[i];
    i++
    setTimeout('frametitle()', 2000); /* change 70 for speed */
}
frametitle()
// ---------download
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button element
    const downloadButton = document.getElementById("downloadButton");

    // Add a click event listener to the button
    downloadButton.addEventListener("click", function () {
        // Define the file URL you want to download
        const fileUrl = "./assite/aitouchenIlias.pdf"; // Replace with the actual file URL

        // Create an invisible anchor element to trigger the download
        const link = document.createElement("a");
        link.href = fileUrl;

        // Specify the filename for the downloaded file
        link.download = "aitouchenIlias.pdf"; // Replace with your desired file name

        // Trigger a click event on the anchor element to initiate the download
        link.click();
    });
});
