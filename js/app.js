/* Responsive navbar */

function navbar() {
    const btn =  document.querySelectorAll(".nav-toggle");
const navbar = document.querySelector(".responsive-navbar");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        navbar.classList.toggle('hide');
    })
}
}

navbar();


/* Dropdown */

function dropdown() {
 const dropBtn1 = document.querySelector('.drop-link1');
const dropBtn2 = document.querySelector('.drop-link2');
const dropBtn3 = document.querySelector('.drop-link3');
const dropBtn4 = document.querySelector('.drop-link4');

const navDrop1 = document.querySelector('.drop1');
const navDrop2 = document.querySelector('.drop2');
const navDrop3 = document.querySelector('.drop3');
const navDrop4 = document.querySelector('.drop4');



dropBtn1.addEventListener('click', function (){ 
    if (navDrop1.classList[2] === 'hide') {
        navDrop1.classList.remove(navDrop1.classList[2]);
        if (navDrop2.classList[2] != 'hide') {
            navDrop2.classList.add('hide');
        }
    }else{
        navDrop1.classList.add('hide');
    }
})

dropBtn2.addEventListener('click', function (){ 
    if (navDrop2.classList[2] === 'hide') {
        navDrop2.classList.remove(navDrop2.classList[2]);
        if (navDrop1.classList[2] != 'hide') {
            navDrop1.classList.add('hide');
        }
    }else{
        navDrop2.classList.add('hide');
    }
})

 
dropBtn4.addEventListener('click', function (){ 
    if (navDrop4.classList[2] === 'hide') {
        navDrop4.classList.remove(navDrop4.classList[2]);
        if (navDrop3.classList[2] != 'hide') {
            navDrop3.classList.add('hide');
        }
    }else{
        navDrop4.classList.add('hide');
    }
})



dropBtn3.addEventListener('click', function (){ 
    if (navDrop3.classList[2] === 'hide') {
        navDrop3.classList.remove(navDrop3.classList[2]);
        if (navDrop4.classList[2] != 'hide') {
            navDrop4.classList.add('hide');
        }
    }else{
        navDrop3.classList.add('hide');
    }
})


let Drop  = document.querySelectorAll('.nav-drop');
for (let i = 0; i < Drop.length; i++) {
     let removeDrop = Drop[i].getElementsByTagName('li');
    for (let e = 0; e < removeDrop.length; e++) {
        removeDrop[e].addEventListener('click', function() {
           Drop[i].classList.add('hide');
        }) 
    } 
}
}
dropdown();




/*Loader */

function loader() {
    let loader = document.querySelector('.loader');
    
}
loader();

