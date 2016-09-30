// ajax request function
var dataRequest = function(urls, array, urlVar) {
  // variable to keep track of loop
  var count = 0;

  //function to iterate over urls object
  $.each(urls, function(x, y) {

    // function to create AJAX request and set options for success and error
    $.ajax({

      // setting url for the request
      url: urlVar + urls[x],

      // if error occur, failMessage will be displayed in '.wrapper' div
      error: function() {
        var failMessage = $('<p class="fail-msg">We are experiencing problems with your request. Please try again after few moments.</p>');
        $('.wrapper').html(failMessage);
      },
      success: function(data) {

        // on success push the data to array
        array.push(data);
        console.log(array);
        // adding 1 to count
        count++;

        // statement to check if the loop iterated over all urls
        if (count === Object.keys(urls).length) {
          console.log(array);
          // statement to check if array argument is var albums
          if (array == albums) {

            // sort albums
            array.sort(sortAscName);
          } // statement to check if array argument is var movies
            else if (array == movies) {
            //sort movies
            array.sort(sortAscTitle);
          }

          if (array == albums) {

            // call function to create albums thumbs
            albumsThumbnails(array);
          } else if (array == movies) {
            // call function to create movies thumbs
            moviesThumbnails(array);
          }
        }
      },
      type: 'GET'
    });
  });
};
