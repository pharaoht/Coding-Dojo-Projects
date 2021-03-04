



// Get the modal


// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function display(title, img, desc, post_at){
  var modal = document.getElementById("myModal");
  console.log(title)

  modal.style.display = "block";
  document.getElementById('3').innerHTML = title;
  document.getElementById('4').src = img
  document.getElementById('5').innerHTML = desc;
  document.getElementById('6').innerHTML = post_at;
}

// When the user clicks on <span> (x), close the modal
function close() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}