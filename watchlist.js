$(document).ready(function(){

    var watchList = localStorage.getItem('watchlist');

    var yourWatchList = JSON.parse(watchList);
    

    function renderWatchList(watchList){
        const movieHTML = watchList.map(currentMovie => {
            console.log(currentMovie)
            $(".movie").append(`<div class="card" style="width: 18rem;"><a href = "https://www.imdb.com/title/${currentMovie.data.imdbID}" target = "_blank"><img class="card-img-top" src="${currentMovie.data.Poster}" alt="Card image cap"></a> <div class="card-body"> <h5 class="card-title">${currentMovie.data.Title}
             <span class = "year">${currentMovie.data.Year}</h5><button type = "button"  class="btn btn-primary">Remove</button> `)
            
        });
    }

     renderWatchList(yourWatchList);

    
    
});