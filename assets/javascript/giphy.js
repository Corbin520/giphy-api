

var topics = ["motocross", "utah jazz", "conor mcgregor", "donovan mitchell", "supercross",
            "golf", "cody garbrandt", "tesla", "apple", "nike", "ufc", "ricky rubio", "bahamas"];



// function that will take our topics array and create a button for each
function topicButtons() {

    $("#topic-buttons").empty();

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
                                                                                                        // add limit
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userClick + "&api_key=a5ddXmi4hflpwdykgf8ozFMiM45YCFb1&limit=10";
    console.log(queryURL); 
 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        // loop that will loop through the response image and display 10 on button click
        for (var i = 0; i < response.data.length; i++) {
            var img = $("<img src="+response.data[i].images.fixed_width.url+">");
            $("#gif-view").append(img);
        }
    });
});
