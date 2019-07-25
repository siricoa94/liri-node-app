require("dotenv").config();
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
    
    // console.log(JSON.stringify(data.tracks.items.length, null, 2)); 
    for(var i = 0; i < data.tracks.items.length; i++){
        // console.log(JSON.stringify(data.tracks.items[0].artists[0].name));
        console.log(JSON.stringify(data.tracks.items[i].name));
        // console.log(JSON.stringify(data.tracks.items[0].album.name));
        // console.log(JSON.stringify(data.tracks.items.preview_url));
        }
    
    
    });
}