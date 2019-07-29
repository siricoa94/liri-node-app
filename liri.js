require("dotenv").config();
var fs = require('file-system');
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (!search){
    search = "concert-this";
}
if (!term) {
    term = "King Gizzard and The Lizard Wizard";
}
if(search === "concert-this"){
   var bandsInTown = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
   axios.get(bandsInTown)
   .then(function (response){
    //    console.log(response);
       for(var i = 0; i < response.data.length; i++){
           console.log(response.data[i].venue.name);
           console.log(response.data[i].venue.country);
           console.log(response.data[i].venue.city);
            console.log(response.data[i].datetime);
            console.log();    
       }
   })
    console.log("searching for concert" + bandsInTown);
    console.log(spotify);
}
if(search === "spotify-this-song"){
    spotify.search({ type: 'track', query: term}, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    
    console.log(JSON.stringify(data.tracks.items, null, 2)); 
    for(var i = 0; i < data.tracks.items.length; i++){
        console.log();
        console.log(data.tracks.items[i].artists[0].name);
        console.log(data.tracks.items[i].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[i].preview_url);
        console.log();
        }
    
    
    });
}
if(search === "movie-this"){
    var ombd = "https://www.omdbapi.com/?t=" + term + "&plot=full&apikey=trilogy";
    axios.get(ombd)
    .then(function (response){
        console.log(response.data.Title);
        console.log(response.data.Year); 
        console.log(response.data.imdbRating);
        console.log(response.data.Ratings[0].Value); 
        console.log(response.data.Country); 
        console.log(response.data.Language); 
        console.log(response.data.Plot);
        console.log(response.data.Actors);  
    });
     console.log("searching for movie" + ombd);
 }
 if(search === "do-what-it-says"){
    fs.readFile('random.txt', "utf8", function(err, data) {
        var dataArry = data.split(",")
        spotify.search({ type: 'track', query: dataArry[1]}, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        
        console.log(JSON.stringify(data.tracks.items, null, 2)); 
        for(var i = 0; i < data.tracks.items.length; i++){
            console.log();
            console.log(data.tracks.items[i].artists[0].name);
            console.log(data.tracks.items[i].name);
            console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[i].preview_url);
            console.log();
            }
        
        
        });
        // var bandsInTown = "https://rest.bandsintown.com/artists/" + dataArry[3] + "/events?app_id=codingbootcamp";
        // axios.get(bandsInTown)
        // .then(function (response){
        //  //    console.log(response);
        //     for(var i = 0; i < response.data.length; i++){
        //         console.log(response.data[i].venue.name);
        //         console.log(response.data[i].venue.country);
        //         console.log(response.data[i].venue.city);
        //          console.log(response.data[i].datetime);
        //          console.log();    
        //     }
        // })
        // console.log("searching for concert" + bandsInTown);
        // console.log(spotify);
 })
}
