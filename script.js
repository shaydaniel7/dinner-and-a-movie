var zomatoAPI = "651bed713996897e2dfbc5d97c66b3e6";

//get city id from response
function citySearch(){
  var locationInput = $("#search-city").val(); // may not work
  var locationURL = "https://developers.zomato.com/api/v2.1/locations?query=" + locationInput;
  $.ajax({
      url: locationURL,
      method: "GET", 
      headers: {
        "user-key": zomatoAPI
      }
    }).then(function(response) { 
      var cityId = response.location_suggestions[0].city_id;
      console.log(response);  
      console.log(cityId);
      cuisineSearch(cityId);
    });
}

//grab all cuisines in city
function cuisineSearch(cityId){
  var cuisinesURL = "https://developers.zomato.com/api/v2.1/cuisines?city_id=" + cityId;
  var cuisineInput = $("#search-cuisine").val();
  $.ajax({
    url: cuisinesURL,
    method: "GET",
    headers: {
      "user-key": zomatoAPI
    }
  }).then(function(response){
      var cuisineID = -1;
      console.log(response);
      for (i = 0; i < response.cuisines.length; i++){
        if (response.cuisines[i].cuisine.cuisine_name.toLowerCase() == cuisineInput.toLowerCase()){
          cuisineID = response.cuisines[i].cuisine.cuisine_id;
          break;
        }
      }
      if (cuisineID != -1){
        //cuisine ID found
        restaurantSearch(cuisineID, cityId);
      }
      else {
        //cuisine not found
        alert("Cuisine type not found in your city!");
      }
  });
}

//restaurant search api
function restaurantSearch(cuisineID, cityId){
  $(".food-results").empty();
  var searchURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityId + "&entity_type=city&count=5&cuisines=" + cuisineID;
  $.ajax({
    url: searchURL,
    method: "GET",
    headers: {
      "user-key": zomatoAPI
    }
  }).then(function(response){
    console.log(response);
    for (i = 0; i < 5; i++){
    var restaurantResultsDiv = $("<div>");
    var restaurantName = $(`<h3>${response.restaurants[i].restaurant.name}</h3>`);
    var restaurantCuisines = $(`<p>Cuisine: ${response.restaurants[i].restaurant.cuisines}</p>`);
    var restaurantAddress = $(`<p>Address: ${response.restaurants[i].restaurant.location.address}</p>`)
    var restaurantURL = $(`<a href="${response.restaurants[i].restaurant.url}">Website</a>`);
    var restaurantPhone = $(`<p>Phone Number: ${response.restaurants[i].restaurant.phone_numbers}</p>`);
    restaurantResultsDiv.append(restaurantName, restaurantCuisines, restaurantAddress, restaurantURL, restaurantPhone);
    $(".food-results").append(restaurantResultsDiv);
    }
  })
};

//add alert for if text boxes are empty

  function movieSearch() {
    $(".movie-results").empty();
    var input = $("#genreSelection").val();
    console.log("this is the input", input)
    var apiKey = "7c9375461ebff6693c682744da424385";
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + input + "&with_original_language=en";
    // call to get movies to fit genre 
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        $("#genreSelection").val();
        for (i = 0; i < 5; i++){
          var movieResultsDiv = $("<div>");
          console.log("results are", data)
          var movieTitle = $(`<h3>${data.results[i].title}</h3>`);
          var moviePlot = $(`<p>Plot: ${data.results[i].overview}</p>`);
          var releaseDate = $(`<p>Release Date: ${data.results[i].release_date}</p>`);
          var moviePoster = $(`<img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}">`);
          movieResultsDiv.append(movieTitle, moviePlot, releaseDate, moviePoster);
          $(".movie-results").append(movieResultsDiv);
        }
    })
};


