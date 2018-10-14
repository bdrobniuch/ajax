//{userId: "108", userName: "Akademia108", userURL: "akademia108.pl"}userId: "108"userName: "Akademia108"userURL: "akademia108.pl"__proto__: Object
//https://jsonplaceholder.typicode.com/
$(function () {
    console.log("tsts");

    function getData() {
        $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
                console.log(data);
                var body = $("body");
                data.forEach(function(elem) {
                   console.log(elem);
                    
                    var userDiv = document.createElement("div");
                    $(userDiv).addClass("user");
                    $(userDiv).append("<p>"+elem.id+"</p");
                    $(userDiv).append("<p>"+elem.name+"</p");
                    $(userDiv).append("<p>"+elem.company.name+"</p");
                    $("#user-list").append(userDiv);
                    
                });

        });

    }
    
    getData();
})
