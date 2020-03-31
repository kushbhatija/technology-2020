let $techmenu= document.querySelector(".tech-menu")
let $progressbar= document.querySelector(".progress-bar")


let $savedbox= document.querySelector(".saved-box")
let savebutton= document.getElementById("save-button")
let thumbsup= document.querySelectorAll(".fa-thumbs-up")
let bookmark= document.querySelectorAll(".fa-bookmark-o")

let $saveAI= document.querySelector(".saveAI")
let $saveML= document.querySelector(".saveML")
let $saveIOT= document.querySelector(".saveIOT")
let $saveRPA= document.querySelector(".saveRPA")
let $saveVR= document.querySelector(".saveVR")
let $saveAR= document.querySelector(".saveAR")




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





for(let i=0; i<thumbsup.length; i++){
  thumbsup[i].addEventListener('click',event=>{
    thumbsup[i].classList.toggle("fa-thumbs-down");
    thumbsup[i].style.color="red";
    
})
}



for(let i=0; i<bookmark.length; i++){
  bookmark[0].addEventListener('click',event=>{
    if(bookmark[0].style.color="red"){
      bookmark[0].classList.toggle("fa-bookmark");
      $saveAI.style.display="block";
  
      console.log("saveaiaiai");
    }
    else{
      $saveAI.style.display="none";
      bookmark[0].style.color="black";
    }
})
}
for(let i=0; i<bookmark.length; i++){
  bookmark[1].addEventListener('click',event=>{
    bookmark[i].classList.toggle("fa-bookmark");
    $saveML.style.display="block";
})
}
for(let i=0; i<bookmark.length; i++){
  bookmark[2].addEventListener('click',event=>{
    bookmark[i].classList.toggle("fa-bookmark");
    $saveIOT.style.display="block";
})
}
for(let i=0; i<bookmark.length; i++){
  bookmark[3].addEventListener('click',event=>{
    bookmark[i].classList.toggle("fa-bookmark");
    $saveRPA.style.display="block";
})
}
for(let i=0; i<bookmark.length; i++){
  bookmark[4].addEventListener('click',event=>{
    bookmark[i].classList.toggle("fa-bookmark");
    $saveVR.style.display="block";
})
}
for(let i=0; i<bookmark.length; i++){
  bookmark[5].addEventListener('click',event=>{
    bookmark[i].classList.toggle("fa-bookmark");
    $saveAR.style.display="block";
})
}


savebutton.addEventListener('click',event=>{
  $savedbox.classList.toggle("saved-box-hide")
})

