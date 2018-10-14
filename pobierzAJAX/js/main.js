document.getElementById("req").addEventListener("click", function(){
    console.log( "Hello World");
    ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );
});