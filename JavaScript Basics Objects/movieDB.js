var movies = [
    {
        title:"Titanic",
        wasWatched: "True",
        rating: 5 
        
    },
    {
        title:"Fast and Furious",
        wasWatched: "False",
        rating:4
        
    }
]
//console.log("You have watched " + movies[0].title + " - " + movies[0].rating + " stars");

movies.forEach(function (movie) {
    var result = "You have ";
    if (movie.wasWatched === "True") {
        result += "watched ";
    } else {
        result += "not seen ";
    }
        result +="\"" + movie.title + "\" - ";
        result += movie.rating + " stars";
        console.log(result)
});