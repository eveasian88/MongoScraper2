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


// grab the articles as a json
$.getJSON("/api/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<textarea bodyInput='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</textarea>");
    }
  });
  

  // when you click the savenote button
  $(document).on("click", "#saveNote", function() {
    // grab the id associated with the article from the submit button

    var thisId = $(this).attr("articleId");
    console.log(event.target);

    console.error('thisId :: ', thisId );
  
    // run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "PUT",
      url: "/api/articles/" + thisId + "/update_note",
      data: {
        // value taken from title input
        // title: $("#titleinput").val(),
        // value taken from note textarea
        noteBody: $("#bodyInput").val()
      }
    })
      // with that done
      .then(function(data) {
        // Log the response
        console.log(data);
        $("#bodyInput").val() = "";
        // empty the notes section
        // $("#notes").empty();
      });

  });


  
  
$(".open-modal").on("click", function(event) {
    console.log('OPEN Modal !!');
    console.log(event.target.dataset.id);
    const { id, note } = event.target.dataset
    $("#bodyInput").val(note);
    //$("#saveNote").data('articleId', id)
    $("#saveNote").attr("articleId" , event.target.dataset.id);


    $.ajax({
        method: "GET",
        url: "/api/articles/"
      })
        .then(function(data) {
          console.log(data);
          let newData = data.filter( item =>{
           return item._id == event.target.dataset.id
          })
          console.log(newData[0].note);
          $("#bodyInput").val(newData[0].note)
        });
    
});
  

$('#saved-toggle').click(function () {
    $('#saved-articles').slideToggle();
})

$('#show-toggle').click(function () {
    $('#articles').slideToggle();
})