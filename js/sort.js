//Function to sort albums array by name in asc order
function sortAscName(a, b) {
  orderTypeAlbums.html('A to Z');
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

//Function to sort movies array by name in asc order
function sortAscTitle(a, b) {
  orderTypeMovies.html('A to Z');
  if (a.Title < b.Title)
    return -1;
  if (a.Title > b.Title)
    return 1;
  return 0;
}

//Function to sort albums array by name in desc order
function sortDescName(a, b) {
  orderTypeAlbums.html('Z to A');
  if (a.name > b.name)
    return -1;
  if (a.name < b.name)
    return 1;
  return 0;
}

//Function to sort movies array by name in desc order
function sortDescTitle(a, b) {
  orderTypeMovies.html('Z to A');
  if (a.Title > b.Title)
    return -1;
  if (a.Title < b.Title)
    return 1;
  return 0;
}


// Function to toggle drop down and rotate arrow icon in proper direction
sortP.one('click', function() {
  $(this).addClass('opened');
  $(this).children('.arrow').css('transform', 'rotate(180deg)');
  $(this).next().slideToggle('fast');
  $(this).click(function() {
    if ($(this).hasClass('opened')) {
      $(this).removeClass('opened');
      $(this).children('.arrow').css('transform', 'rotate(0deg)');
      $(this).next().slideToggle('fast');
    } else {
      $(this).addClass('opened');
      $(this).children('.arrow').css('transform', 'rotate(180deg)');
      $(this).next().slideToggle('fast');
    }
  });
});

// on click ascending order call a function to check which sort-order is targeted( for albums or movies ),
// add and remove classes from his childrens to open and close drop-down,
// remove all thumbnails, sort the array and call function to create new thumbnails
sortListAsc.click(function() {

  if ($(this).hasClass('sort-movies') && $(this).parent('.sort-drop-down').prev().hasClass('opened')) {
    $(this).parent('.sort-drop-down').prev().removeClass('opened');
    $(this).parent('.sort-drop-down').slideToggle('fast');
    $(this).parent('.sort-drop-down').prev().children('.arrow').css('transform', 'rotate(0deg)');
    $('.movies-thumb').remove();
    movies.sort(sortAscTitle);
    moviesThumbnails(movies);
  } else if ($(this).hasClass('sort-albums') && $(this).parent('.sort-drop-down').prev().hasClass('opened')) {
    $(this).parent('.sort-drop-down').prev().removeClass('opened');
    $(this).parent('.sort-drop-down').slideToggle('fast');
    $(this).parent('.sort-drop-down').prev().children('.arrow').css('transform', 'rotate(0deg)');
    $('.albums-thumb').remove();
    albums.sort(sortAscName);
    albumsThumbnails(albums);
  }
});

// on click descending order call a function to check which sort-order is targeted( for albums or movies ), 
// add and remove classes from his childrens to open and close drop-down,
// remove all thumbnails, sort the array and call function to create new thumbnails
sortListDesc.click(function() {
  if ($(this).hasClass('sort-movies') && $(this).parent('.sort-drop-down').prev().hasClass('opened')) {
    $(this).parent('.sort-drop-down').prev().removeClass('opened');
    $(this).parent('.sort-drop-down').slideToggle('fast');
    $(this).parent('.sort-drop-down').prev().children('.arrow').css('transform', 'rotate(0deg)');
    $('.movies-thumb').remove();
    movies.sort(sortDescTitle);
    moviesThumbnails(movies);
  } else if ($(this).hasClass('sort-albums') && $(this).parent('.sort-drop-down').prev().hasClass('opened')) {
    $(this).parent('.sort-drop-down').prev().removeClass('opened');
    $(this).parent('.sort-drop-down').slideToggle('fast');
    $(this).parent('.sort-drop-down').prev().children('.arrow').css('transform', 'rotate(0deg)');
    $('.albums-thumb').remove();
    albums.sort(sortDescName);
    albumsThumbnails(albums);
  }
});
