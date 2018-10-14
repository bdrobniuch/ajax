$(function () {

    let loading = false;

    function load(n =3) {
        
        if (!loading) {
            loading = true;
            n--;
            let index = $(".single-post").length + 1;

            $.getJSON("https://jsonplaceholder.typicode.com/photos/" + index, function (data) {
                console.log(data);
                let fig = document.createElement("figure");
                $("#posts-list").append(fig);
                $(fig).addClass("single-post");
                $(fig).append('<img src="' + data.thumbnailUrl + '">');
                $(fig).append('<figcaption>' + data.id + " " + data.title + '</figcaption>');
                loading = false;
                if (n>0) {load(n);};
                    
            });
            // window.addEventListener("scroll", needload);
        }
    }

    $("button").click(load);

    function needload() {
        if (window.pageYOffset + window.innerHeight + 100 > document.body.scrollHeight) {
            load(3);
        }
        // window.removeEventListener("scroll", needload);
    }
    
    load(10);

    window.addEventListener("scroll", needload);
})
