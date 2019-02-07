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


$('#saved-toggle').click(function () {
    $('#saved-articles').slideToggle();
})

$('#show-toggle').click(function () {
    $('#articles').slideToggle();
})