myActList();


function myActList(){
  var root = './feed/myActivity.do';
  $.ajax(root,
      {
       method: 'POST',
       dataType: 'json',
       data: {
         mno : sessionStorage.getItem('mno')
       },
      success: function(result){
        console.log(result.activity);
        var source   = $("#masonry-template").html();
        var template = Handlebars.compile(source);
        var actfeeds = template(result);
        $('#grid').append(actfeeds);
        
        
      }
   });
}


