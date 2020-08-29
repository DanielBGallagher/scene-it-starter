$(document).ready(function(){

    function renderMovies(movieArray){
        
        const movieHTML = movieArray.map(currentMovie => {
            
            $(".movie").append(`<div class="card" style="width: 18rem;"><a href = "https://www.imdb.com/title/${currentMovie.imdbID}" target = "_blank"><img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap"></a> <div class="card-body"> <h5 class="card-title">${currentMovie.Title}
            <span class = "year">${currentMovie.Year}</h5><button type = "button" id = "${currentMovie.imdbID}"onclick = "saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary">Add</button> `)
            
        });
    }

    document.getElementById('search-form').addEventListener('submit', function(e){
        $("#movie").empty();
        e.preventDefault();
        let searchString = $(".search-bar")[0].value;
        
        let urlEncodedSearchString = encodeURIComponent(searchString);
        
        axios.get(`http://www.omdbapi.com/?apikey=8534d2a7&s=${urlEncodedSearchString}`).then(response =>{
            renderMovies(response.data.Search);
        });
    })

    



});

function saveToWatchList(imdbID){
    console.log("saveToWatchList called")

    axios.get(`http://www.omdbapi.com/?apikey=8534d2a7&i=${imdbID}`).then(movie => {
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);

        if(watchlist == null){
            watchlist = [];
        }

     
        watchlist.push(movie);

        watchlistJSON = JSON.stringify(watchlist);

        localStorage.setItem('watchlist', watchlistJSON);
        $(`#${imdbID}`).attr("disabled", true);
    })
    





    
 }