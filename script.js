// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};

// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
        introText.classList.add('side-text-appear');
    }
    if (imagePosition < screenPosition) {
        sideImage.classList.add('sideImage-appear');
    }
}

window.addEventListener('scroll', scrollAppear);

// For switching between navigation menus in mobile mode
let toggleCount = 0;
function switchTAB() {
    var listSwitch = document.getElementById("list-switch");
    var searchSwitch = document.getElementById("search-switch");

    if (toggleCount % 2 === 0) {
        listSwitch.style.display = "grid";
        listSwitch.style.height = "50vh";
        listSwitch.style.marginLeft = "5%";
        searchSwitch.style.display = "block";
        searchSwitch.style.marginLeft = "5%";
    } else {
        listSwitch.style.display = "none";
        searchSwitch.style.display = "none";
    }
    toggleCount++;
}

// For LOGIN
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var button = document.getElementById("btn");
var loginButton = document.getElementById("log");
var registerButton = document.getElementById("reg");
var otherSection = document.getElementById("other");

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    button.style.left = "110px";
    otherSection.style.visibility = "hidden";
    registerButton.style.color = "#fff";
    loginButton.style.color = "#000";
}

function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    button.style.left = "0px";
    otherSection.style.visibility = "visible";
    loginButton.style.color = "#fff";
    registerButton.style.color = "#000";
}

// CheckBox Function
function goFurther() {
    var btnSubmit = document.getElementById('btnSubmit');
    if (document.getElementById("chkAgree").checked) {
        btnSubmit.style.background = 'linear-gradient(to right, #FA4B37, #DF2771)';
    } else {
        btnSubmit.style.background = 'lightgray';
    }
}

function google() {
    window.open("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

// QUIZ Page
function quizt(frame) {
    for (let i = 1; i <= 11; i++) {
        document.getElementById('f' + i).style.display = 'none';
    }
    document.getElementById('f' + frame).style.display = 'block' || alert('error');
}

function startquiz() {
    document.getElementById('title').style.display = 'none';

    document.getElementById('panel').style.display = 'inline-flex';
    document.getElementById('left').style.display = 'block';
    document.getElementById('right').style.display = 'block';
}

function searchdisplay() {
    document.getElementById('searchpanel').style.display = "block";
}

function display(n) {
    const images = [document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3'), document.getElementById('img4')];
    const styles = [document.getElementById('s1'), document.getElementById('s2'), document.getElementById('s3'), document.getElementById('s4')];

    images.forEach((img, index) => {
        img.style.display = 'none';
        styles[index].style.background = '#DF2771';
        styles[index].style.color = '#FFF';
    });

    if (n >= 1 && n <= 4) {
        images[n - 1].style.display = 'block';
        styles[n - 1].style.background = '#E5E8EF';
        styles[n - 1].style.color = '#DF2771';
    }
}

function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    menu.style.transform = side === 0 ? 'translateX(0vh)' : 'translateX(-100%)';
}
