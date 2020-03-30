let $techmenu= document.querySelector(".tech-menu")
let $progressbar= document.querySelector(".progress-bar")
let bookmark= document.querySelector(".material-icons")
let $savedbox= document.querySelector(".saved-box")
let savebutton= document.getElementById("save-button")


let doc= document.documentElement
let winH= doc.clientHeight
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



function myFunction(thumb) {
  thumb.classList.toggle("fa-thumbs-down");
  thumb.style.color="red";
}

savebutton.addEventListener('click',event=>{
  $savedbox.classList.toggle("saved-box-hide")
})


bookmark.addEventListener('click', event=>{
  if(bookmark==="black"){
    bookmark.style.color="blue";
  }
})