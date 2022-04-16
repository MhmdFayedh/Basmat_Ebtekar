let toggler = document.querySelector(".toggle");
let close_btn = document.querySelector(".close");
let nav = document.querySelector("._navbar");
let lowerNav = document.querySelector(".lower-nav");
let scrollUp = document.querySelector('.scroll-up');
let changeLang = document.querySelector(".change-lang");
let navItems = document.querySelectorAll(".nav-item");

// let toggleColor = document.querySelectorAll(".line");



toggler.onclick = function () {
    lowerNav.classList.add("open");
    
};

close_btn.onclick = function () {
    lowerNav.classList.remove("open");
}




// function removeLowerNav(){
//     lowerNav.classList.remove("open")
// }
navItems.forEach(item => {
    item.onclick = () => {
        lowerNav.classList.remove("open")
    }
})

changeLang.onclick = function () {

    if(window.location.href == "https://basmatebtekar.com"){

        window.location.href = "https://basmatebtekar.com/indexrtl.html";

    }else{
        
        window.location.href = "https://basmatebtekar.com";
    }
    
    
};



document.onkeyup = function (e) {
    if (e.key === "Escape") {
        lowerNav.classList.remove("open");
    }
};



// Function Change Background When Scroll-Y Reach 150 otherwise reomve background 
function changeBG() {
    if (window.scrollY < 100) {
        nav.classList.remove("nav-backround-animetion")  
        toggler.style.color = "#eee"
    } else {
        nav.classList.add("nav-backround-animetion")
        toggler.style.color = "#000"

    }
}

window.addEventListener('scroll', changeBG);




// Function Show Scroll To Up Btutton And Scroll Up When Reach scroll UP 1000
function scrollToUp(){
    if(window.scrollY>=500){
        scrollUp.classList.add("show-scroll-up")
    }else{
        scrollUp.classList.remove("show-scroll-up")
    }

    scrollUp.onclick = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
}

window.addEventListener('scroll', scrollToUp);



