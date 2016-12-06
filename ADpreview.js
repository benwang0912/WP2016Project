$(document).ready(function(){
  $("#bg1").hide();
  $("#bg2").hide();
  $("#bg3").hide();
  $("#bg4").hide();
  $("#bg5").hide();
  $("#topic5s").hide();
  $("#topic5s1").hide();
  $("#fontForm").hide();

  $("#title").on("keyup",function(){
    var title = $("#ADForm").find("#title").val();
    $("#word").text(title);
  });
  
  $("#ADContent").on("keyup",function(){
    var content = $("#ADForm").find("#ADContent").val();
    $("#content").text(content);
  });

  $("#background").on("click",function(){
    $("#bg1").show();
    $("#bg2").show();
    $("#bg3").show();
    $("#bg4").show();
    $("#bg5").show();
    $("#fontForm").hide();    
  });
  $("#font").on("click",function(){
    $("#fontForm").show();    
    $("#bg1").hide();
    $("#bg2").hide();
    $("#bg3").hide();
    $("#bg4").hide();
    $("#bg5").hide();
  });
  
  $("#allbg img ").on("click",function(){
    var N = $(this).attr("src");
    var t = $(this).attr("id").substr(2);
    $("#preview").attr("src",N);
    if(t == 1)
    {
      $("#topic").removeClass();
      $("#word").removeClass();
      $("#content").removeClass();
      $("#topic").addClass("topic1");
      $("#word").addClass("word1");
      $("#content").addClass("content1");
      $("#topic5s").hide();
      $("#topic5s1").hide();
    }
    else if(t == 2)
    { 
      $("#topic").removeClass();
      $("#word").removeClass();
      $("#content").removeClass();
      $("#topic").addClass("topic2");
      $("#word").addClass("word2");
      $("#content").addClass("content2");
      $("#topic5s").hide();
      $("#topic5s1").hide();
    }
    else if(t == 3)
    {
      $("#topic").removeClass();
      $("#word").removeClass();
      $("#content").removeClass();
      $("#topic").addClass("topic3");
      $("#word").addClass("word3");
      $("#content").addClass("content3");
      $("#topic5s").hide();
      $("#topic5s1").hide();
    }
    else if(t == 4)
    {
      $("#topic").removeClass();
      $("#word").removeClass();
      $("#content").removeClass();
      $("#topic").addClass("topic4");
      $("#word").addClass("word4");
      $("#content").addClass("content4");
      $("#topic5s").hide();
      $("#topic5s1").hide();
    }
    else if(t == 5)
    {
      $("#topic").removeClass();
      $("#word").removeClass();
      $("#content").removeClass();
      $("#topic").addClass("topic5");
      $("#word").addClass("word5");
      $("#content").addClass("content5");
      $("#topic5s").show();
      $("#topic5s1").show();
    }
  }); 
 }); 
