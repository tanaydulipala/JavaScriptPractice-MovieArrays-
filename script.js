let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title,rating, haveWatched)
    {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }    
}
//add a movie OBJECT to the allMovies array
let addMovie = (Movie) => {
    console.log("A new movie is added");
    allMovies.push(Movie);

}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    var count = 0; 
    console.log("Printing all movies....")
    for(const Movie of allMovies)
    { 
            console.log(Movie.title + ", rating of "+ Movie.rating + ", havewatched:" + Movie.haveWatched);
            count++;   
    }
    console.log("\nYou have " + count + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    var totalmatch = 0;
    console.log("printing movie that has a rating higher than 3.5");
    for(const Movie of allMovies)
    {
        if(Movie.rating > rating)
        {
            console.log(Movie.title + " has a rating of "+ Movie.rating);
            totalmatch++;
        }
    }
    console.log("\nIn total, there are " + totalmatch + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    for(const Movie of allMovies)
    {
        if(Movie.title == title)
        {
            if(Movie.haveWatched)
            {
                Movie.haveWatched = false;
            }
            else
            {
                Movie.haveWatched = true;
            }
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);