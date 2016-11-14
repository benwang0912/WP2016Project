$(document).ready(function(){
  //for sign in button
  $("#signInButton").on("click", function(){
    div_show("#loginForm");
  });

  //called when logout button is clicked
  $("#logoutButton").on("click", function(){
    $("#header").contents().find("#userinfo").css("display", "none");
    $("#signInButton").parent().show();
    $("#logoutButton").parent().hide();
    alert("Log out success");
  });

  //for showing register form
  $("#popRegisterForm").on("click", function(){
    div_show("#registerForm");
  });

  //function to show Popup
  function div_show(ID){ 
    $(ID).fadeIn();
  }
  //function to hide Popup
  $(".closePopUpForm").on("click",function div_hide(){ 
      $(this).parent().parent().parent().fadeOut();
  });
  
  //called when login button is clicked
  $("#login").on("click", function(){
    var container = $("#loginForm");
    var account = $(this).parent().find("#account").val();
    var password = $(this).parent().find("#password").val();
    if(account == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    if(password == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }

    $.ajax({
      type:"POST",
      url:"./Http/postExample.njs",
      data:{"account":account, "password":password},
      error: function(){
        alert("Something Wrong!!!!!");
      },
      success:function(res){
        alert("Login success!!!");
        $("#header").contents().find("#username").text(res);
        $("#header").contents().find("#userinfo").css("display", "block");
        $("#signInButton").parent().hide();
        $("#logoutButton").parent().show();
        container.fadeOut();
      }
    }); 
  });

  //called when register button is clicked
  $("#register").on("click", function(){
    var container = $("#registerForm");
    var account = $(this).parent().find("#account").val();
    var password = $(this).parent().find("#password").val();
    var confirmPassword = $(this).parent().find("#confirmPassword").val();
    if(account == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    if(password == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    
    if(password != confirmPassword){
      alert("Difference between password and confirm password!!!!!"+password+confirmPassword);
      return;
    }

    $.ajax({
      type:"POST",
      url:"./Http/postExample.njs",
      data:{"account":account, "password":password},
      error: function(){
        alert("Something Wrong!!!!!");
      },
      success:function(res){
        alert("Register Success");
        container.fadeOut();
      }
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



