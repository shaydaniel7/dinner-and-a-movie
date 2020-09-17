
  
var zomatoAPI = "651bed713996897e2dfbc5d97c66b3e6";
var locationInput = "beaumont";
var cuisineInput = "Chinese";


var cityId = "1171";


var cuisinesURL = "https://developers.zomato.com/api/v2.1/cuisines?city_id=" + cityId;
var locationURL = "https://developers.zomato.com/api/v2.1/locations?query=" + locationInput;
var searchURL = "https://developers.zomato.com/api/v2.1/search?entity_id=298&entity_type=city&count=5&cuisines=Chinese";



//get city id from response
$.ajax({
    url: locationURL,
    method: "GET", 
    headers: {
       "user-key": zomatoAPI
    }
  }).then(function(response) { 
    console.log(response);  
    console.log(response.location_suggestions[0].city_id);
  });


//grab all cuisines in city
$.ajax({
  url: cuisinesURL,
  method: "GET",
  headers: {
    "user-key": zomatoAPI
  }
}).then(function(response){
    var cuisineID = -1;
    console.log(response.cuisines[0].cuisine.cuisine_name);
    console.log(response);
    for (i = 0; i < response.cuisines.length; i++){
      if (response.cuisines[i].cuisine.cuisine_name.toLowerCase() == cuisineInput.toLowerCase()){
        cuisineID = response.cuisines[i].cuisine.cuisine_id;
      }
    }
    if (cuisineID != -1){
      //cuisine ID found
      restaurantSearch(cuisineID);
    }
    else {
      //cuisine not found
      alert("Cuisine type not found in your city!");
    }

});


//restaurant search api
function restaurantSearch(){
  $.ajax({
    url: searchURL,
    method: "GET",
    headers: {
      "user-key": zomatoAPI
    }
  }).then(function(response){
    console.log(response);
  })
};


//add alert for if text boxes are empty




  