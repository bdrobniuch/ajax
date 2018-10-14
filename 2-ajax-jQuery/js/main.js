//{userId: "108", userName: "Akademia108", userURL: "akademia108.pl"}userId: "108"userName: "Akademia108"userURL: "akademia108.pl"__proto__: Object

$(function () {
    console.log("tsts");

    function getData() {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
                console.log(data);
                var body = $("body");
                body.append("<p>User id " + data.userId + "</p>");
                body.append("<p>User name " + data.userName + "</p>");
                body.append("<p>User URL " + data.userURL + "</p>");

            

        });

    }
    
    $("button").click(getData);
})
