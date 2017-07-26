
$(document).ready(function(){
    for(var i = 1; i <= 151; i++){
        $('.pokemon').append(
            "<img src='http://pokeapi.co/media/img/" + i + ".png' pok_id='" + i  +"'>"
        );
    }

    $(document).on("click", '.pokemon img', function(){
        var id = $(this).attr("pok_id");
        var src = $(this).attr("src");
        $.get("http://pokeapi.co/api/v1/pokemon/"+ id +"/", function(res) {
            var type_list = "<ul>";
            for(var i = 0; i < res.types.length; i++){
                type_list += "<li>" + res.types[i].name + "</li>";
            }
            type_list += "</ul>";

            $('.info').html( 
                "<h1>" + res.name + "</h1>" +
                "<img src='" + src + "'>" +
                "<h3>Types</h3>" +
                type_list +
                "<h3>Height</h3>" +
                "<p>" + res.height + "</p>" +
                "<h3>Weight</h3>" +
                "<p>" + res.weight + "</p>"
            );
        }, "json");
    });
});

$(this).attr('src', $(this).attr('alt-src'));