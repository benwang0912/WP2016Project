
//function to display Popup
$("#popup").on("click", function(){
  div_show();
});

function div_show(){ 
  document.getElementById('abc').style.display = "block";
}

//function to hide Popup
function div_hide(){ 
  document.getElementById('abc').style.display = "none";
}
