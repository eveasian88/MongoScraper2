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
    console.log('unsave-btn working', unsave);
    
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

// add save notes here and add CRUD
$('#saved-notes').on("click", '.save-note-btn',
function() {
    console.log('save notes working')

    var thisID = this.dataset.id.trim();
    console.log(thisId)

    $.ajax({
        method: "PUT",
        url: "api/notes" + thisId + "/save",
    })
        .then(function(data) {
            console.log(data);
            location.reload();
        })
})


$('#saved-toggle').click(function () {
    $('#saved-articles').slideToggle();
})

$('#show-toggle').click(function () {
    $('#articles').slideToggle();
})