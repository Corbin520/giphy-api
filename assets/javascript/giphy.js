
// 
var topics = ["motocross", "utah jazz", "conor mcgregor", "donovan mitchell", "supercross",
            "golf", "cody garbrandt", "ken roczen", "dean wilson", "tesla", "apple", "nike",
            "ufc", "ricky rubio", "bahamas"];



// function that will take our topics and create a button for each
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
