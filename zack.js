var typed = new Typed(".multiple-text",{
    strings:["Developer","Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

winfow.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offest = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    /*==================== sticky navbar ====================*/
    let header =document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};