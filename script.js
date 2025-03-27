$(document).ready(function () {
   $("button").on("click", function(){
    const randomNumber = Math.ceil(Math.random()* 88)
    $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`, 
        function(data){
            
            $("h2.name").text(data['name'])
            $("#character-image").attr("src", data['image'])
            $("p.gender").text(data['gender'])

        })
   }) 
})