$(document).ready(function(){

    var watchList = localStorage.getItem('watchlist');

    var yourWatchList = JSON.parse(watchList);

     renderWatchList(yourWatchList);
});


function renderWatchList(watchList){
    $("#movie").empty();
    const movieHTML = watchList.map(currentMovie => {
        
        $(".movie").append(`<div class="card" style="width: 18rem;"><a href = "https://www.imdb.com/title/${currentMovie.data.imdbID}" target = "_blank"><img class="card-img-top" src="${currentMovie.data.Poster}" alt="Card image cap"></a> <div class="card-body"> <h5 class="card-title">${currentMovie.data.Title}
        <span class = "year">${currentMovie.data.Year}</h5><button type = "button"  class="btn btn-primary" onclick = "removeFromWatchList('${currentMovie.data.imdbID}')">Remove</button> `)
        
    });
}


function removeFromWatchList(imdbID){
    let yourWatchList = JSON.parse(localStorage.getItem("watchlist"));

    
    yourWatchList = $.grep(yourWatchList, movie => {
        return movie.data.imdbID != imdbID;
    })
    //clears local storage and creates new watchlist without removed movie
    localStorage.clear();
    localStorage.setItem("watchlist", JSON.stringify(yourWatchList));

    yourWatchList = JSON.parse(localStorage.getItem("watchlist"));
    
    renderWatchList(yourWatchList);
};