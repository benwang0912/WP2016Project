$(document).ready(function(){
  //for sign in button
  $("#signInButton").on("click", function(){
    div_show();
  });
  
  //function to show Popup
  function div_show(){ 
    document.getElementById('abc').style.display = "block";
  }

  //function to hide Popup
  $("#closePopUpForm").on("click",function div_hide(){ 
    document.getElementById('abc').style.display = "none";
  });
  
  //called when login button is clicked
  $("#login").on("click", function(){
    if($("#account").val() == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    if($("#password").val() == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }

    $.ajax({
      type:"POST",
      url:"Http/login.njs",
      data:{"account":$("#account").val(), "password":$("#password").val()},
      error: function(){
        alert("error");
      },
      success:function(res){alert(res)}
    }); 
  });

});
//for slider
$(function(){
  
  var width = 960;
  var animationSpeed = 1500;
  var interval = 5000;
  var currentSlide = 1;

  var $slider = $("#slider");
  var $slideContainer = $slider.find(".slides");
  var $slides = $slideContainer.find(".slide");
 
  var intervalID;

  function startSlider(){
    intervalID = setInterval(function(){
      $slideContainer.animate( {'margin-left':'-='+width}, animationSpeed, function(){
        ++currentSlide;
        if(currentSlide === $slides.length){
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }

        $("#bulletNavigator li:nth-child("+currentSlide+")").find("input").prop("checked", true);

      } );
    }, interval);
  }
  
  $("#bulletNavigator li").find("input").on("click",function(){
    currentSlide = $(this).val();
    $slideContainer.css('margin-left', -width*(currentSlide-1));
  });

  var running = false;
  $("#rightButton").on("click", function(){
      if(running == true)
        return;
      running = true;
      clearInterval(intervalID);
      $slideContainer.animate( {'margin-left':'-='+width}, animationSpeed, function(){
        ++currentSlide;
        if(currentSlide === $slides.length){
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }

        $("#bulletNavigator li:nth-child("+currentSlide+")").find("input").prop("checked", true);
        running = false;
      } );
      startSlider();
  });
 
  $("#leftButton").on("click", function(){
      if(!(currentSlide == 1)){
        if(running == true)
          return;
        running = true;
        clearInterval(intervalID);
        $slideContainer.animate( {'margin-left':'+='+width}, animationSpeed, function(){
          --currentSlide;
          if(currentSlide < 1){
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
            
          $("#bulletNavigator li:nth-child("+currentSlide+")").find("input").prop("checked", true);
          running = false;
        } );
        startSlider();
      }
  });
  startSlider();

});



