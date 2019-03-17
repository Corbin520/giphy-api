var topics = ["motocross", "utah jazz", "conor mcgregor", "donovan mitchell", "supercross",
            "golf", "cody garbrandt", "nike", "ufc", "ricky rubio"];


// function that will take our topics array and create a button for each
function topicButtons() {
 
    $("#topic-buttons").empty()

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
    $("#click-to-animate").show()
    
    
    var userClick = $(this).attr("data-name")
    // console.log(this) // this is a button

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userClick + "&api_key=a5ddXmi4hflpwdykgf8ozFMiM45YCFb1&limit=10";
    // console.log(queryURL); 
 
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data
        
        // creating an image src to push our gifs up to the html page
        for (var i = 0; i < response.data.length; i++) {
            var img = $("<img src="+response.data[i].images.fixed_width_still.url+">");
            
            // this will hold our image and rating
            
            $("#gif-view").append(img);
            var p = $("<p>").text("Rating: " + results[i].rating);
            
            // taking the rating and displaing it next to the giphy
            $("#gif-view").append(results[i].rating)
            
            // giving attr for each type of giphy (animate or still)
            img.attr("data-still", response.data[i].images.fixed_width_still.url);
            img.attr("data-animate", response.data[i].images.fixed_width.url)
            img.attr("data-state", "still")
        }
        
    })
    // empty out the giphys from the topic when you click another topic
    $("#gif-view").empty();
    $("#gif-view").append(img, newSearch,)
})

// IF/ELSE saying if the giphy is clicked on, make it either animate or still
$("#gif-view").on("click", "img", function() {
    
    
    // (this) = "<div id="gif-view" data-state="still"
    // console.log(this)

    
    var state = $(this).attr("data-state");

    console.log("I worked")
    
    if (state === "still") {
        // (this) = <div id="gif-view" data-state="animate">..</div>
        // console.log(this)

        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate")

      } else {
        // (this) = <div id="gif-view" data-state="still">..</div>
        //console.log(this)

        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})

// add a giphy
$("#add-giphy").on("click", function(event) {

event.preventDefault();
// grab the value of input
var newSearch = $("#movie-input").val().trim()
// push value to array
topics.push(newSearch);

topicButtons();

});