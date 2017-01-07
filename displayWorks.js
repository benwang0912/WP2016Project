$(document).ready(function(){
  var worksGallery = $("#works");
  $.ajax({
    type:"POST",
    url:"./Http/getWorks.njs",
    error: function(){
      alert("Something wrong with returning works");
    },
    success: function(res){
      var paths = res.split("\n");
      paths.forEach(path => {
        //$("#works").append("<p>" + path + "</p>"); 
      });
    }
  });
});
