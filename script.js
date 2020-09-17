$(document).ready(function () {
    console.log("ready!");

        var zomatoAPIKey = "e3874d501346c00372223d1b508ea97e";
        var zomatoURL = "https://developers.zomato.com/api/v2.1"
        var cuisineURL = "https://developers.zomato.com/api/v2.1/cuisines";
        var cityURL = "https://developers.zomato.com/api/v2.1/cities";
    })

    enables a user to just hit enter to submit city search
    $(".form-control").keypress(function (event) {
        if (event.keyCode === 13) {
            $(".btn-secondary").click();
            console.log("enter key works")
        }
    })

    // button event listener -----------------
    $(".btn-secondary").on("click", function () {
        var cityInput = $("#city-input").val()
        var cuisineInput = $("#cuisine-input").val()
        var cuisineURL = "https://developers.zomato.com/api/v2.1/cities";
        console.log("button works")
    })

        // call to get city 
        var cityURL = "https://developers.zomato.com/api/v2.1/cities";
        var zomatoURL = "https://developers.zomato.com/api/v2.1/"
        var zomatoAPIKey = "e3874d501346c00372223d1b508ea97e";
                  
        $.ajax({  
            url: zomatoURL,
            dataType: 'json',
            async: true,
            beforeSend: function(xhr){xhr.setRequestHeader('user-key', 
            zomatoAPIKey);},  // This inserts the api key into the HTTP header
            success: function(response) {console.log(response) } });
            

       
            //  // call to get cuisine 
            //  var cuisineURL = "https://developers.zomato.com/api/v2.1/cuisines";

            //  $.ajax({  
            //     url: cuisineURL,
            //     dataType: 'json',
            //     async: true,
            //     beforeSend: function(xhr){xhr.setRequestHeader('user-key', 
            //     zomatoAPIKey);},  // This inserts the api key into the HTTP header
            //     success: function(response) { console.log(response) } 
        
                
            // });