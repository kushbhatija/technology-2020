

let setTheme = (mode) => {

	// Remove both modes
	document.body.classList.remove('light')
	document.body.classList.remove('dark')

	// Add the mode requested
	document.body.classList.add(mode)

	// Store it in the browser for next time
	window.localStorage.setItem('mode', mode)
}

// Swap the theme from light to dark, or dark to light, based on what you have set now
let flipTheme = (event) => {

	// If light, go dark, if dark, go light
	if (defaultMode == 'light') {
		defaultMode = 'dark'
	} else {
		defaultMode = 'light'
	}

	// Apply it
	setTheme(defaultMode)
}


// ***** CODE STARTS RUNNING HERE:

// Check if there's a "mode" variable in local storage, or if not, default to 'light'
let defaultMode = window.localStorage.getItem('mode') || 'light'

// Apply the theme determined above
setTheme(defaultMode)

// If you click the button, flip the theme
document.querySelector('#theme').addEventListener('click', flipTheme)



// ***** MORE:

// If you wanted to check which theme the user prefers (based on operating system settings)
// either of these will return true (if its the theme) or false if it's not
// You could use this to replace "light" as the theme (above)
let dark = window.matchMedia('(prefers-color-scheme: dark)').matches
let light = window.matchMedia('(prefers-color-scheme: light)').matches

if (dark) {
	console.log(`Looks like you're into dark mode`)
} else if (light) {
	console.log(`Plain ol' light mode, huh?`)
}





let $savedboxfixed =document.querySelector(".boxleft-side")
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


if((window.pageYOffset) >=1040){
  $savedboxfixed.classList.add("boxleft-sideFixed")
}
else{
  $savedboxfixed.classList.remove("boxleft-sideFixed")
}

if((window.pageYOffset) >=12300){
  $savedboxfixed.style.display="none"
}
else{
  $savedboxfixed.style.display="block"
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







let loadContentFromHtmlFile = (event) => {



	// Put up the loading screen
	document.querySelector('.loading').classList.add('show')

	fetch('loadthis.html')
		.then((response) => {
			return response.text() // Convert it something readable
		})
		.then((html) => {

			let parser = new DOMParser()
			let newDocument = parser.parseFromString(html, 'text/html')

			// The loadthis.html page has been loaded!
			// Append the content from the new page into the old page
			document.querySelector('#content').innerHTML += newDocument.querySelector('#contentt').innerHTML
			
			// Take down the loading screen, we're done
			document.querySelector('.loading').classList.remove('show')
		})

}

document.querySelector('#load').addEventListener('click', loadContentFromHtmlFile)






let loadContentFromHtmlFile2 = (event) => {
  let winH = document.documentElement.clientHeight
  let docH = document.documentElement.scrollHeight
  let winY = window.scrollY
  let maxY = docH - winH
  // Put up the loading screen
  
  if (winY >= maxY) {
    

	fetch('loadthis2.html')
		.then((response) => {
			return response.text() // Convert it something readable
		})
		.then((html) => {

			let parser = new DOMParser()
			let newDocument = parser.parseFromString(html, 'text/html')

			// The loadthis.html page has been loaded!
			// Append the content from the new page into the old page
			document.querySelector('#content').innerHTML += newDocument.querySelector('#contenttt').innerHTML
			
			
			// Take down the loading screen, we're done
		
		})

}
}

window.addEventListener('scroll',loadContentFromHtmlFile2 )





let signBtn=document.querySelector(".signin");
let closeBtn=document.querySelector(".close");
let submitBtn=document.querySelector(".submit");
let inputfield= document.querySelectorAll(".field");
let username=document.getElementById("user");
let password=document.getElementById("pass");
let form= document.querySelector(".getstarted");
let $modal=document.querySelector(".modal")
let $commentbtn= document.querySelector(".comment")
let $commentshow= document.querySelector(".commentshow")
let $closecomment= document.querySelector(".closecomment")


function modalshow(){
  let openmodal=document.querySelector(".modal");
  openmodal.style.display="block";
}

function modalclose(){
  let closemodal=document.querySelector(".modal");
  closemodal.style.display="none";
}


function commentshowbox(){
  $commentshow.style.display="block";
}

function commenthidebox(){
  $commentshow.style.display="none";
}



function formsubmit(event){
  form.event.preventdefault();
}




submitBtn.addEventListener("click",(event)=>{
  inputfield.classList.add("error");
})

username.addEventListener("focus",(event)=>{
  username.classList.remove("error");
})

password.addEventListener("focus",(event)=>{
  password.classList.remove("error");
})

closeBtn.addEventListener('click',modalclose);
signBtn.addEventListener('click',modalshow);


$commentbtn.addEventListener('click',commentshowbox);
$closecomment.addEventListener('click',commenthidebox);



form.addEventListener('submit',formsubmit);
