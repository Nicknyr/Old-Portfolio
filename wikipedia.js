$(document).ready(function(){
  $('#search').click(function(){

    // Gets search input
    var searchTerm = $('#searchTerm').val();
    // API url with searchTerm input
    var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        // Gets heading  console.log(data[1][0]);
        // Gets description  console.log(data[2][0]);
        // Gets link  console.log(data[3][0]);
        $('#output').html('');
        
        for(var i = 0; i < data[1].length; i++){
        $('#output').prepend("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
        };
      },
      error: function(errorMessage){
          alert("Error");
      }
    })


  })

});
