
const firstP= document.querySelector('p')
console.log(firstP)
firstP.textContent="Hello"

//if you already have the element, can be more efficient with nav.querySelector vs. document.querySelector (starts at top of document and searches vs. starts in nav)

const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'


//id or class are a better way to select, ids need to be unique
//can also do getElementById('contact') to select the id- don't need #, less utilized, older
const contactA = nav.querySelector('#contact')
contactA.style.backgroundColor= "#3388FF"

//class in JS is a keyword for creating a class
//background-color becomes backgroundColor


//const active = document.querySelectorAll('.active')
//console.log(active)
//active.style.textDecoration = 'underline'

//has to be an h2 with class active h2.active

//section. active- anything with class active within section tag
//section h1.active- h1 and active inside of section
//section#main h1.active
//section#main>h1.active
//section h1- h1 inside section
//section>h1- has to be directly inside of it, must be parent/child

//querySelector all selects all, but returns an array (may be empty)
//arrays don't have styles, the elements within can have styles


document.body.style.backgroundColor = 'yellow'
document.title = 'Kayla\'s webpage' 

document.addEventListener('click', (e) =>{
    //e.target.parentElement.style.border = '2px solid red'
    const section = e.target.closest('section')
    section.style.border = '2px solid red'
})

//e is an object with the event listener
//closest looks outward and grabs the closest section

