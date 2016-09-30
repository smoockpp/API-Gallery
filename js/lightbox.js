// Object to keep all lightboxUI in one place

var lightboxUI = {
  //  variables
  body : $('body'),
  lightboxContainer : $('.lightbox-container'),
  lightbox : $('.lightbox'),
  controls : $('.controls'),
  prevItem : $('<p class="prev"><span class="prev-icon"></span> PREV</p>'),
  close : $('<p class="close">CLOSE <span class="x"></span></p>'),
  nextItem : $('<p class="next">NEXT <span class="next-icon"></span></p>'),
  lightboxData : $('<div class="lightbox-data"></div>'),
  // function to append controls and the container for all data
  prepareLightbox : function() {
    this.controls.append(this.prevItem);
    this.controls.append(this.close);
    this.controls.append(this.nextItem);
    this.lightbox.append(this.lightboxData);
  },
  // Function to create lightbox for albums
  createLightboxAlbums : function(data) {
    this.lightbox.addClass('lightbox-albums');
    this.lightbox.removeClass('lightbox-movies');
    $('body').children('header, .wrapper').fadeTo('fast', 0.1);
    if (current === 0) {
      lightboxUI.prevItem.hide();

    } else {
      lightboxUI.prevItem.show();

    }
    if (current == albums.length - 1) {
      lightboxUI.nextItem.hide();
    } else {
      lightboxUI.nextItem.show();
    }
    var lightboxHTML = '<img class="lightbox-img" src="' + data.images[0].url + '" alt="' + data.name +' album cover image.">';
    lightboxHTML += '<p class="lightbox-p">Artist: ';
    lightboxHTML += data.artists[0].name + '</p>';
    lightboxHTML += '<p class="heading-4">Album: ' + data.name.toLowerCase();
    lightboxHTML += '</p>';
    lightboxHTML += '<p class="lightbox-p">Release date: ' + data.release_date;
    lightboxHTML += '</p>';
    lightboxHTML += '<ul class="lightbox-list"> Tracks: ';
    $.each(data.tracks.items, function(a, b) {
      lightboxHTML += '<li class="lightbox-list-item"><p class="lightbox-list-p">' + data.tracks.items[a].track_number + ' . ' + data.tracks.items[a].name.toLowerCase() + '</p>';
      lightboxHTML += '</li>';
    });
    lightboxHTML += '</ul>';
    lightboxHTML += '<p class="items-count">Album ' + (current+1) + ' from ' + albums.length + '</p>';
    lightboxUI.lightboxData.html(lightboxHTML);
    lightboxUI.lightbox.toggle("fast");
    lightboxUI.lightbox.css('display', 'flex');

  },
  // Function to create lightbox for movies
  createLightboxMovies : function(data) {
    this.lightbox.addClass('lightbox-movies');
    this.lightbox.removeClass('lightbox-albums');
    $('body').children('header, .wrapper').fadeTo('fast', 0.1);
    if (current === 0) {
      lightboxUI.prevItem.hide();
    } else  {
      lightboxUI.prevItem.show();
    }
    if (current == movies.length - 1) {
      lightboxUI.nextItem.hide();
    } else {
      lightboxUI.nextItem.show();
    }

    // variable to hold current lightbox html
    var lightboxHTML = '<img class="lightbox-img" src="' + data.Poster + '" alt="' + data.Title + ' poster image.">';
    lightboxHTML += '<p class="lightbox-p">Title: ';
    lightboxHTML += data.Title + '</p>';
    lightboxHTML += '<p class="lightbox-p">Genre: ';
    lightboxHTML += data.Genre + '</p>';
    lightboxHTML += '<p class="lightbox-p">Year: ';
    lightboxHTML += data.Year + '</p>';
    lightboxHTML += '<p class="lightbox-p">Release Date: ';
    lightboxHTML += data.Released + '</p>';
    lightboxHTML += '<p class="lightbox-p">Actors: ';
    lightboxHTML += data.Actors + '</p>';
    lightboxHTML += '<p class="lightbox-p">Awards: ';
    lightboxHTML += data.Awards +  '</p>';
    lightboxHTML += '<p class="items-count">Movie ' + (current+1) + ' from ' + movies.length + '</p>';

    // Insert lightbox html into '.lightbox-data' div
    lightboxUI.lightboxData.html(lightboxHTML);
    lightboxUI.lightbox.show("slide", 250);

  },
  // function to clear all lightbox data
  remove : function() {
    this.lightbox.toggle("fast");
    this.lightboxData.html('');
    $('body').children('header, .wrapper').fadeTo('fast', 1);
  }

};
