// function to create thumbnails for albums array
var albumsThumbnails = function(array) {
  // iterate over albums array
  $.each(array, function(x, y) {

    //variable to hold thumbnail div
    var thumbnail = $('<div class="thumbnail albums-thumb" id="' + array[x].id + '"></div>');

    // append current thumbnail to '#albums-container'
    $('#albums-container').append(thumbnail);

    //variable to hold thumbnail data
    var thumbnailData = '<h3 class="heading-3">' + array[x].artists[0].name.toLowerCase() + ' - ' + array[x].name.toLowerCase();
    thumbnailData += '</h3>';
    thumbnailData += '<img src="' + array[x].images[0].url + '" class="' + array[x].id + '" alt="' + array[x].name + ' album cover image.">';

    // insert thumbnail data to thumbnail
    thumbnail.html(thumbnailData);

    // on click thumbnail set variable current to clicked index and call lightboxUI function to create lightbox for albums
    thumbnail.click(function() {
      current = $(this).index();
      console.log(current);
      lightboxUI.createLightboxAlbums(albums[current]);
    });
  });
};

// function to create thumbnails for movies array
var moviesThumbnails = function(array) {
  // iterate over movies array
  $.each(array, function(x, y) {

    //variable to hold thumbnail div
    var thumbnail = $('<div class="thumbnail movies-thumb" id="' + array[x].imdbID + '"></div>');

    // append current thumbnail to '#movies-container'
    $('#movies-container').append(thumbnail);

    //variable to hold thumbnail data
    var thumbnailData = '<h3 class="heading-3">' + array[x].Title.toLowerCase();
    thumbnailData += '</h3>';
    thumbnailData += '<img src="' + array[x].Poster + '" class="' + array[x].imdbID + '" alt="' + array[x].Title + ' poster image.">';

    // insert thumbnail data to thumbnail
    thumbnail.html(thumbnailData);

    // on click thumbnail set variable current to clicked index and call lightboxUI function to create lightbox for albums
    thumbnail.click(function() {
      current = $(this).index();
      console.log(current);
      lightboxUI.createLightboxMovies(movies[current]);
    });
  });
};


$(document).ready(function() {
  dataRequest(spotifyUrls, albums, spotify);
//   dataRequest(omdbUrls, movies, omdb);
  lightboxUI.prepareLightbox();
  lightboxUI.close.click(function() {
    lightboxUI.remove();
  });
  lightboxUI.prevItem.click(function() {
    lightboxUI.remove();
    setTimeout(function() {
      current--;
      if(lightboxUI.lightbox.hasClass('lightbox-albums')) {
        lightboxUI.createLightboxAlbums(albums[current]);
      } else if (lightboxUI.lightbox.hasClass('lightbox-movies')) {
        lightboxUI.createLightboxMovies(movies[current]);
      }
    }, 500);
  });
  lightboxUI.nextItem.click(function() {
    lightboxUI.remove();
    setTimeout(function() {
      current++;
      if(lightboxUI.lightbox.hasClass('lightbox-albums')) {
        lightboxUI.createLightboxAlbums(albums[current]);
      } else if (lightboxUI.lightbox.hasClass('lightbox-movies')) {
        lightboxUI.createLightboxMovies(movies[current]);
      }
    }, 500);
  });
});
