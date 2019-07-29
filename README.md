# liri-node-app

# Motivation
The motivation for this assignment was to create a prompt that would ask for two arguments from the user and return specific data based off those arguments. For example, when the user enters in "spotify-this-song" along with a song name of their choosing, the terminal will return the artist(s),  the song's name, a preview link of the song from Spotify, and the album that the song is from. 

#Technologies used and why

The technologies used here are Bandsintown, Spotify, and Ombd.

- [Bandsintown](https://www.programmableweb.com/api/bandsintown)
Bandsintown is used to retrieve relevant concert information based off the argument the user puts into the search.
For example. If the user is to enter in the band "Blink 182", Bandsintown will be used to retrieve the band name, country, city, and datetime of all future shows relevant to the search.

- [Spotify](https://developer.spotify.com/documentation/web-api/quick-start/)
Spotify is used to retrieve song information based off a user argument. When entering in "spotify-this-song" followed by a song name like "Polly" results in the return of information. The return information is of the artist(s), the name of the song, the album it was from, and a link to a sample of the song on spotify. Not only does it return one song named Polly, but it will return all songs named Polly(including remix's).

- [Ombd](http://www.omdbapi.com/)
Ombd is used to retrieve relevant movie information based off a user's input. For example if you are to search for the movie "Terminator" after entering in "movie-this", it will return what country, year, and language the movie was made in. The search will also return the ImBd rating as well as the rotten tomatoes rating, a list of Actors, and the plot of the movie.

#Screenshots

Here will be some basic screenshots displaying how my program functions with comments. Some Images are exclusively the search or result, but some images are both search and result in one. The reason for this is that some of the data stretched past the limits of what I could capture in a screenshot.


![Alt text](/Screenshot(20).png "concert-this Search and Result")
The image above shows the search and result of a "concert-this" search with "Blink 182" as the band.


![Alt text](/Screenshot(21).png "Sotify-this-song Search")
This Image shows the "spotify-this-song search with "Polly" as the song.


![Alt text](/Screenshot(22).png "Sotify-this-song Search Results")
This image displays the information relevant to the search results for "Polly" mentioned above"


![Alt text](/Screenshot(23).png "movie-this Search")
This image displays the "movie-this" search with "Terminator" as the movie.


![Alt text](/Screenshot(24).png "movie-this Search and Result")
This shows both the "movie-this" search and result in one image.


![Alt text](/Screenshot(25).png "do-what-it-says Search")
This image shows the "do-what-it-says" search.


![Alt text](/Screenshot(26).png "do-what-it-says Results")
This image displays the "do-what-it-says" results.