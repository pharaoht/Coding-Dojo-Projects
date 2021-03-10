var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

function display(title, img, desc, post_at){
  var modal = document.getElementById("myModal");
  console.log(title)

  modal.style.display = "block";
  document.getElementById('3').innerHTML = title;
  document.getElementById('4').src = img
  document.getElementById('5').innerHTML = desc;
  document.getElementById('6').innerHTML = post_at;
}




function displayMyAccountModal(id, username, email, password, created_at){
  var modal = document.getElementById('myAccoundModal')
  modal.style.display = 'block';
  document.getElementById('accmodh3').innerHTML = "Hello, " + username; 
  document.getElementById('accmodptag').innerHTML = created_at

}

function displayMyLikes(){
  var modal = document.getElementById('mylikesModal')
  modal.style.display = 'block';

}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById('myAccoundModal')
  var modal3 = document.getElementById('mylikesModal')

  if (event.target == modal) {
    modal.style.display = "none";
  }

   if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if(event.target == modal3){
    modal3.style.display = "none"
  }
}

window.addEventListener('scroll',function() {
    localStorage.setItem('scrollPosition',window.scrollY);
},false);

window.addEventListener('load',function() {
    if(localStorage.getItem('scrollPosition') !== null)
       window.scrollTo(0, localStorage.getItem('scrollPosition'));
},false);


function activeSocialTab(){
  var element = document.getElementById('nav-profile-tab')
  var welcomeTab = document.getElementById('nav-home-tab')
  var aboutTabElement = document.getElementById('nav-contact-tab')
  var headd = document.getElementById('mainheader')
  var postDiv = document.getElementById('post-div-1')
  var postDiv2 = document.getElementById('post-div-2')

  welcomeTab.style.backgroundColor = "white"
  welcomeTab.classList.remove('active')
  aboutTabElement.classList.remove('active')
  element.classList.add('active')
  element.style.backgroundColor = "LightSkyBlue"
    aboutTabElement.style.backgroundColor = "white"
  headd.style.backgroundImage = "linear-gradient(LightSkyBlue, white)"
  element.style.borderBottom = "none"
  postDiv.style.display = "none"
  postDiv2.style.display = "block"


}

function activeAboutTab(){
  var aboutTabElement = document.getElementById('nav-contact-tab')
  var socialTab = document.getElementById('nav-profile-tab')
  var welcomeTab = document.getElementById('nav-home-tab')
  var headd = document.getElementById('mainheader')

  aboutTabElement.classList.add('active')
  aboutTabElement.style.backgroundColor = "SkyBlue"
  aboutTabElement.style.borderBottom = "none"
  headd.style.backgroundImage = "linear-gradient(SkyBlue, white)"

   welcomeTab.style.backgroundColor = "white"
   socialTab.style.backgroundColor = "white"
   socialTab.classList.remove('active')
}

function activeWelcomeTab(){
  var postDiv = document.getElementById('post-div-1')
  var postDiv2 = document.getElementById('post-div-2')
  postDiv.style.display = "block"
  postDiv2.style.display = "none"
}