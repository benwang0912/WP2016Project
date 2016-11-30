$(document).ready(function(){
  $("#bg1").hide();
  $("#bg2").hide();
  $("#bg3").hide();
  $("#bg4").hide();
  $("#topic1").hide();
  $("#topic3").hide();
  
  $("#title").on("click",function(){
    var title = $("#ADpreview").find("#title").val();

    $.ajax({
      type:"POST",
      url:"./Http/adpreview.njs",
      data:{"title":title},
    
    })
  });

  $("#background").on("click",function(){
    $("#background").hide();
    $("#bg1").show();
    $("#bg2").show();
    $("#bg3").show();
    $("#bg4").show();
  });
  $("#allbg img ").on("click",function(){
    var N = $(this).attr("src");
    var t =$(this).attr("id").substr(2);
    $("#preview").attr("src",N);
    if(t == 1)
    {
      $("#topic1").show();
     /* $("#topic2").hide();
      $("#topic3").hide();
      $("#topic4").hide();*/
      
    }
    else if(t == 2)
    {
      $("#topic1").hide();
     // $("#topic2").show();
      $("#topic3").hide();
     // $("#topic4").hide();
    }
    else if(t == 3)
    {
      $("#topic1").hide();
     // $("#topic2").hide();
      $("#topic3").show();
     // $("#topic4").hide();
    }
    else if(t == 4)
    {
      $("#topic1").hide();
     // $("#topic2").hide();
      $("#topic3").hide();
     // $("#topic4").show();
    }
  
  });
});
