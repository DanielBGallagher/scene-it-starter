$(document).ready(function(){

    var watchList = localStorage.getItem('watchlist');

    var yourWatchList = JSON.parse(watchList);
    //console.log(yourWatchList);

    function renderWatchList(watchList){
        const movieHTML = watchList.map(currentMovie => {
            //console.log(currentMovie)
            $(".movie").append(`<div class="card" style="width: 18rem;"><img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">${currentMovie.Title}
            // <span class = "year">${currentMovie.Year}</h5><button type = "button"  class="btn btn-primary">Remove</button> `)
            
        });
    }

     renderWatchList(yourWatchList);

    
    
});