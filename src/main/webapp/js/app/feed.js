(function() {
 
  $.getJSON('feed/list.do', function(result) {
    
    if (result) {
      console.log(result.data[0].content);
      $('#test').text(result.data[0].content);
    }
  });
  
  
})();