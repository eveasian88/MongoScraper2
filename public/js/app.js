$.getJSON("/api/articles", function(data) {
    // For each one
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      $("#articles").append("<div class='col-lg-4 col-md-6 mb-4'><div class='card' data-id="+data[i]._id+"><img class='card-img-top' src='"+data[i].image+"' alt=''><div class='card-body'><a href='"+data[i].link+"'><h4 class='card-title'>"+data[i].title+"</h4></a><p class='card-text'></p></div><div class='card-footer'><a data-id="+data[i]._id+" class='save-btn btn btn-secondary'>Save Article</a></div></div></div>");
    }
  });

  // currently throwing 404 error here
  // GET http://localhost:3000/api/saved
  // GET http://localhost:3000/undefined
  $.getJSON("/api/articles/delete", function(data) {
    // For each one
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      $("#saved-articles").append("<div class='col-lg-4 col-md-6 mb-4'><div class='card' data-id="+data[i]._id+"><img class='card-img-top' src='"+data[i].image+"' alt=''><div class='card-body'><a href='"+data[i].link+"'><h4 class='card-title'>"+data[i].title+"</h4></a><p class='card-text'></p></div><div class='card-footer'><a data-id="+data[i]._id+" class='unsave-btn btn btn-secondary'>Unsave Article</a></div></div></div>");
    }
  });


$('#scrape-btn').on('click', function () {
    $.ajax({
        method: "GET",
        url: "api/scrape"
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });
})

$('#articles').on("click", '.save-btn', function () {
    var thisId = this.dataset.id.trim();
    var thisCard = $(this).closest('div.card');
    console.log(thisId);

    $.ajax({
        method: "PUT",
        url: "/api/articles/" + thisId + "/save",
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });

});

$('#saved-articles').on("click", '.unsave-btn', function () {
    console.log('unsave btn working');
    
    var thisId = this.dataset.id.trim();
    console.log(thisId)

    $.ajax({
        method: "PUT",
        url: "/api/articles/" + thisId + "/unsave",
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });

});

// add save notes here and add CRUD in controllers
$('#notes').on("click", '.save-btn', function () {
    var thisId = this.dataset.id.trim();
    var thisCard = $(this).closest('div.card');
    console.log(thisId);

    $.ajax({
        method: "POST",
        url: "/api/notes/" + thisId + "/save",
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });

});

$('#saved-notes').on("click", '.unsave-btn', function () {
    console.log('unsave notes working');
    
    var thisId = this.dataset.id.trim();
    console.log(thisId)

    $.ajax({
        method: "PUT",
        url: "/api/notes/" + thisId + "/unsave",
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });

});

// // class solved solution
// // Grab the articles as a json
// $.getJSON("/api/articles", function(data) {
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//       // Display the apropos information on the page
//       $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
//     }
//   });
  
  
//   // Whenever someone clicks a p tag
//   $(document).on("click", "p", function() {
//     // Empty the notes from the note section
//     $("#notes").empty();
//     // Save the id from the p tag
//     var thisId = $(this).attr("data-id");
  
//     // Now make an ajax call for the Article
//     $.ajax({
//       method: "GET",
//       url: "/articles/" + thisId
//     })
//       // With that done, add the note information to the page
//       .then(function(data) {
//         console.log(data);
//         // The title of the article
//         $("#notes").append("<h2>" + data.title + "</h2>");
//         // An input to enter a new title
//         $("#notes").append("<input id='titleinput' name='title' >");
//         // A textarea to add a new note body
//         $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//         // A button to submit a new note, with the id of the article saved to it
//         $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
//         // If there's a note in the article
//         if (data.note) {
//           // Place the title of the note in the title input
//           $("#titleinput").val(data.note.title);
//           // Place the body of the note in the body textarea
//           $("#bodyinput").val(data.note.body);
//         }
//       });
//   });
  
//   // When you click the savenote button
//   $(document).on("click", "#savenote", function() {
//     // Grab the id associated with the article from the submit button
//     var thisId = $(this).attr("data-id");
  
//     // Run a POST request to change the note, using what's entered in the inputs
//     $.ajax({
//       method: "POST",
//       url: "/articles/" + thisId,
//       data: {
//         // Value taken from title input
//         title: $("#titleinput").val(),
//         // Value taken from note textarea
//         body: $("#bodyinput").val()
//       }
//     })
//       // With that done
//       .then(function(data) {
//         // Log the response
//         console.log(data);
//         // Empty the notes section
//         $("#notes").empty();
//       });
  
//     // Also, remove the values entered in the input and textarea for note entry
//     $("#titleinput").val("");
//     $("#bodyinput").val("");
//   });
  


$('#saved-toggle').click(function () {
    $('#saved-articles').slideToggle();
})

$('#show-toggle').click(function () {
    $('#articles').slideToggle();
})