$(document).ready(function() {
    
    
    $('#email').keyup(function() {
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
            $("#resemail").text("please enter valid email");
            $("#resemail").addClass("red");
        }
        if (validateEmail(sEmail)) {
            $("#resemail").removeClass("red");
            $("#resemail").text("valid email address");
        }
        else {
            $("#resemail").text("please enter valid email");
            $("#resemail").addClass("red");
        }
    });
    
    
    
    $( "#wrapper" ).sortable();
    $( "#wrapper" ).disableSelection();
    
    
    $("#lname").keyup(function(){
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        $("#fullname").val(fname+" "+lname);
    });
    
    
    
    $("#conpass").keyup(function(){
        var pass = $("#pass").val();
        var conpass = $("#conpass").val();
        
        if(pass==conpass){
            $("#result").removeClass("red");
            $("#result").text("your password is matched");
        }
        
        else{
            $("#result").text("your password don't matched");
            $("#result").addClass("red");
        }
    });
    
    
    $("#male").draggable();
    $("#female").draggable();
    $("#droppable").droppable({
      drop: function(event, ui) {
        $(this)
          .addClass("lime")
          .html( "Dropped!" );
      }
    });
    
    
    
    
    
});




function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}