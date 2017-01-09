
$(document).ready(function(){
  $('#searchBtn').click(function(){
    var searchTerm = $('#searchTerm').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data){
        $('#output').html('');
        for (i=0; i<data[1].length; i++){
       $('#output').append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert('Error');
      }

           });
  });
});
// MINIFIED JS 
//$(document).ready(function(){$("#searchBtn").click(function(){var a=$("#searchTerm").val(),b="https://en.wikipedia.org/w/api.php?action=opensearch&search="+a+"&format=json&callback=?";$.ajax({type:"GET",url:b,async:!1,dataType:"json",success:function(a){for($("#output").html(""),i=0;i<a[1].length;i++)$("#output").append("<li><a href="+a[3][i]+" target='_blank'>"+a[1][i]+"</a><p>"+a[2][i]+"</p></li>")},error:function(a){alert("Error")}})})});
