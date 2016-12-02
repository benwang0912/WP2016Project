$(document).ready(function(){
  //show welcome title if user has logged in
  if(sessionStorage.user != undefined){
    var header = $("#header");
    header.load(function(){
      header.contents().find("#username").text(sessionStorage.user);
      header.contents().find("#userinfo").css("display", "block");
    });
    $("#signInButton").parent().hide();
    $("#logoutButton").parent().show();
    $("#message").hide();
    $("#AD").show();
    $("#ADpreview").show();
  }else{
    $("#message").show();
    $("#AD").hide();
    $("#ADpreview").hide();
  }
  //for sign in button
  $("#signInButton").on("click", function(){
    div_show("#loginForm");
  });

  //called when logout button is clicked
  $("#logoutButton").on("click", function(){
    $("#header").contents().find("#userinfo").css("display", "none");
    $("#signInButton").parent().show();
    $("#logoutButton").parent().hide();
    $("#message").show();
    $("#AD").hide();
    $("#ADpreview").hide();
    sessionStorage.removeItem("user");
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
      url:"./Http/login.njs",
      data:{"account":account, "password":password},
      error: function(){
        alert("Something Wrong with login!!!!!");
      },
      success:function(res){
        alert("Login success!!!");
        $("#header").contents().find("#username").text(res);
        $("#header").contents().find("#userinfo").css("display", "block");
        //store it in local
        //localStorage.setItem("user", res);
        sessionStorage.user = res;
        $("#signInButton").parent().hide();
        $("#logoutButton").parent().show();
        $("#AD").show();
        $("#ADpreview").show();
        $("#message").hide();
        container.fadeOut();
      }
    }); 
  });

  //called when register button is clicked
  $("#register").on("click", function(){
    var container = $("#registerForm");
    var account = $(this).parent().find("#account").val();
    var password = $(this).parent().find("#password").val();
    var username = $(this).parent().find("#username").val();
    var confirmPassword = $(this).parent().find("#confirmPassword").val();
    if(account == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    if(password == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    if(username == ""){
      alert("Fill All Blanks!!!!!");
      return;
    }
    
    if(password != confirmPassword){
      alert("Difference between password and confirm password!!!!!"+password+confirmPassword);
      return;
    }

    $.ajax({
      type:"POST",
      url:"./Http/register.njs",
      data:{"account":account, "password":password, "username":username},
      error: function(){
        alert("Something Wrong with register!!!!!");
      },
      success:function(res){
        alert("Register Success");
        container.fadeOut();
      }
    });
    });
    $("#SaveAD").on("click",function(){
      var title = $(this).parent().find("#title").val();
      var searchKey = $(this).parent().find("#searchKey").val();
      var ADContent = $(this).parent().find("#ADContent").val();
      var account = sessionStorage.user;

      $.ajax({
        type:"POST",
        url:"./Http/save.njs",
        data:{"account":account,"ad":title,"searchKey":searchKey,"content":ADContent},
        error:function(){
          alert("Saving to database error");
        },
        success:function(){
          alert("Saving to database success");
        }
    });
    });
});
