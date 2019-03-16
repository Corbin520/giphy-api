

var topics = ["motocross", "utah jazz", "conor mcgregor", "donovan mitchell", "supercross",
            "golf", "cody garbrandt", "tesla", "apple", "nike", "ufc", "ricky rubio", "bahamas"];


// function that will take our topics array and create a button for each
function topicButtons() {
 
    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>");
        button.addClass("topics");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        
        $("#topic-buttons").append(button);
    }
}
topicButtons()

// create a button that gets giffs based on the button value
$("#topic-buttons").on("click", ".topics" ,function() {
    
    var userClick = $(this).attr("data-name")

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userClick + "&api_key=a5ddXmi4hflpwdykgf8ozFMiM45YCFb1&limit=10";
    console.log(queryURL); 
 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response.data[0].images.fixed_width_still)
        var results = response.data
        
        for (var i = 0; i < response.data.length; i++) {
            var img = $("<img src="+response.data[i].images.fixed_width_still.url+">");
            

            $("#gif-view").append(img);
            var p = $("<p>").text("Rating: " + results[i].rating);
            
            $("#gif-view").append(results[i].rating)

            img.attr("data-still", response.data[i].images.fixed_width_still.url);
            
            img.attr("data-animate", response.data[i].images.fixed_width.url)

            img.attr("data-state", "still")
            

            var state = $(this).attr("data-state");
            
            
            $("#gif-view").on("click", function() {

                if (state === "still") {
    
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
            
                  } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                  }
                console.log("I worked")
                
            })
        }
        
    });
});



// set it up so clicking on the image will make it go

// still image

// animated image