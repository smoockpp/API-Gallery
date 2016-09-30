var albumsThumbnails = function(data) {
  $.each(data, function(x, y) {
    thumbnail = $('<div class="thumbnail albums-thumb" id="' + data[x].id + '"></div>');
    $('#albums-container').append(thumbnail);
    var thumbnailData = '<h3 class="heading-3">' + data[x].artists[0].name.toLowerCase() + ' - ' + data[x].name.toLowerCase();
    thumbnailData += '</h3>';
    thumbnailData += '<img src="' + data[x].images[0].url + '" class="' + data[x].id + '" alt="' + data[x].name + ' album cover image.">';
    thumbnail.html(thumbnailData);
    thumbnail.click(function() {
      current = $(this).index();
      console.log(current);

      lightboxUI.createLightboxAlbums(albums[current]);
    });
  });
}

var moviesThumbnails = function(data) {
  $.each(data, function(x, y) {
    thumbnail = $('<div class="thumbnail movies-thumb" id="' + data[x].imdbID + '"></div>');
    $('#movies-container').append(thumbnail);
    var thumbnailData = '<h3 class="heading-3">' + data[x].Title.toLowerCase();
    thumbnailData += '</h3>';
    thumbnailData += '<img src="' + data[x].Poster + '" class="' + data[x].imdbID + '" alt="' + data[x].Title + ' poster image.">';
    thumbnail.html(thumbnailData);
    thumbnail.click(function() {
      current = $(this).index();
      console.log(current);

      lightboxUI.createLightboxMovies(movies[current]);

    });

  });
}
