$(document).ready(function(){
   $('#submit').click(function(){
      addItem();
  
});

  
function addItem(){
    var newItem = $('#newItem').val().trim();
     console.log(newItem);
    if (newItem === ""){
   $('#alert').slideDown("slow");
 
   }
   else {
     $('#alert').hide("slow");
     $('.theList').append('<li class="items">' + newItem + '</li>');
    $('#newItem').val("");
   }
   $('#newItem')[0].focus();
   }


$('#clearAll').click(function(){
      $('.theList').empty();
      
});

$('#removeComplete').click(function(){
      $('.completed').remove();
      
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
