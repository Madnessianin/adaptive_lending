
/* Active menu */
const menuBtn = document.getElementById("menu_toggle"),
      navLink = document.querySelectorAll('.nav_link'),
      menu = document.querySelector('.menu'),
      sidebar = document.querySelector('.sidebar'),
      logoName = document.querySelector('.logo_name'),
      logoImg = document.querySelector('.logo_img'),
      headerTitle = document.querySelector('.header_title'),
      header = document.querySelector('.header'),
      main = document.querySelector('.main');


const indent = window.getComputedStyle(main, null).getPropertyValue("padding-left").toString();


menuBtn.onclick = () => {
    if (menuBtn.classList.contains("active")) {
        menuBtn.classList.remove("active")
        navLink.forEach(item => {
            item.removeAttribute("style");
        })
        logoName.removeAttribute("style")
        menu.removeAttribute("style")
        sidebar.removeAttribute("style")
        
    } else {
        menuBtn.classList.add("active")
        navLink.forEach(item => {
            item.style.display = "block";
        })
        logoName.style.display = "block";
        if (indent == '12px') {
            menu.style.left = '192px';
            sidebar.style.width = '192px';
            navLink.forEach(item => {
                item.style.marginLeft = "-1px";
            })
            logoImg.style.display = "block";
            logoImg.style.marginLeft = "-24px";
            logoName.style.marginLeft = "10px";
        } else {
            menu.style.left = '246px';
            sidebar.style.width = '246px';
        }
    }
};

/* Scroll effect */

window.addEventListener('scroll', () => {
    let scrollPage = pageYOffset;
    if (scrollPage > 0) {
        headerTitle.style.display = "none";
        header.style.paddingTop = "27px";
        header.style.paddingLeft = "60px";
        header.style.paddingBotom = "27px";
        header.style.height = "106px";
    } else {
        headerTitle.removeAttribute("style");
        header.removeAttribute("style");
        header.removeAttribute("style");
    }
})