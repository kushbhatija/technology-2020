let $techmenu= document.querySelector(".tech-menu")
let $progressbar= document.querySelector(".progress-bar")
let bookmark= document.querySelector(".material-icons")



let doc= document.documentElement
let winH= window.pageYOffset
let docH= doc.scrollHeight


window.addEventListener('scroll',event=>{


if((window.pageYOffset) >=595){
  $techmenu.classList.add('sticky')
}
else{
  $techmenu.classList.remove('sticky')
}


if((window.pageYOffset)>=590){
  console.log(`scrollbar appears`)
  $progressbar.style.display='block'
}
else{
  console.log(`scrollbar disappears`)
  $progressbar.style.display='none'
}
let canbescrolled= docH-winH

let hasbeenscrolled=window.scrollY

let percentScrolled=hasbeenscrolled/canbescrolled

$progressbar.style.width= `${percentScrolled * 100}%`
});



function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
  x.style.color="red";
}