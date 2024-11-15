//toggle menu-icon
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

//scroll nav bar
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top < offset+height){
            //active navbar
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });
        }

    });
    //scroll header
    let header= document.querySelector('header');
    header.classList.toggle('scroll',window.scrollY >100);

    //remove navbar toggle icon and navbar when click navbarlinks scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "alihassanazam3@gmail.com",
//         Password : "396EDEFF7EEFC670688D172B1BFD88CF2A82",
//         To : 'alihassanazam3@gamil.com',
//         From :  document.getElementById("Email").value,
//         Subject : document.getElementById("Subject").value,
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
// action="https://formspree.io/f/moqoqpee"