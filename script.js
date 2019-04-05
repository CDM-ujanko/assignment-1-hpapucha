console.log('The new file!');

$( document ).ready(function() {
    console.log( "ready!" );
});

// source: https://learn.jquery.com/using-jquery-core/document-ready/

$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background-color", "yellow");
    });
});

//Yellow paragraph
