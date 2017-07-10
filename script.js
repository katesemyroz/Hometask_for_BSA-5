$( "#cross_button" ).hide();
$( "#hamburger_menu" ).hide();
$( "#hamburger_button" ).click(function() {
$( "#hamburger_menu" ).slideToggle( "slow", function() {
$( "#hamburger_button" ).hide();
$( "#cross_button" ).show();
});
});


$( "#cross_button" ).click(function() {
$( "#hamburger_menu" ).slideToggle( "slow", function() {
$( "#cross_button" ).hide();
$( "#hamburger_button" ).show();
});
});