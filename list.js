$(document).ready(function(){
   $('#submit').click(function(){
      addItem();
      return false;
});


function addItem(){
    var newItem = $('#newItem').val().trim();
     console.log(newItem);
    if (newItem === ""){
   alert("Please enter something");
   }
   else {
   $('.theList').append('<li class="items">' + newItem + '</li>');
    $('#newItem').val("");
   }
   return false;
   }


$('#clearAll').click(function(){
      $('.theList').empty();
      return false;
});

$('#removeComplete').click(function(){
      $('.completed').remove();
      return false;
});

$('.theList').on("click", "li", function() {
 $(this).toggleClass('completed');
});

$('#newItem').keypress(function(event){
    if(event.keyCode == 13) {
      $("#submit").click();
      return false;
    }
    });

});
