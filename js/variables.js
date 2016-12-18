// Variables


var spotify = 'https://api.spotify.com/v1/albums/';
var spotifyUrls = {
  hybridTheory : "6hPkbAV3ZXpGZBGUvL6jVM",
  meteora : "4Gfnly5CzMJQqkUFfoHaP3",
  recharged : "2FUsvD1bw53HGOjAg56vRD",
  minutesToMidnight : "2tlTBLz2w52rpGCLBGyGw6",
  livingThings : "4XHIjbhjRmqWlosjj5rqSI",
  theHuntingParty : "3XB2yloP7l00tEUmaODtVi",
  aThousandSuns :"4fy0SXW5G8evBCo2A3kn02"
};
var omdb = 'https://www.omdbapi.com/?i=';
var omdbUrls = {
  wrongTurn : "tt0295700",
  transformers : "tt0418279",
  iKnowWhatYouDidLastSummer : "tt0119345",
  houseOfWax : "tt0397065",
  warcraft : "tt0803096",
  twoAndAHalfMan : "tt0369179",
  stepByStep : "tt0101205"
};
var albums = [];
var movies = [];
var sortP = $('.sort-p');
var sortListAsc = $('.a-to-z');
var sortListDesc = $('.z-to-a');
var orderTypeAlbums = $('.sort-type-albums');
var orderTypeMovies = $('.sort-type-movies');
var current;
