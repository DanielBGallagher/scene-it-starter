$(document).ready(function(){

    function renderMovies(movieArray){
        
        
        const movieHTML = movieArray.map(currentMovie => {
            $('.movie-container').remove();
            $(".movie").append(`<div class="card" style="width: 18rem;"><img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">${currentMovie.Title}<span class = "year">${currentMovie.Year}</h5><button type = "button" onclick = "saveToWatchList(${currentMovie.imdbID})" class="btn btn-primary">Add</button> `)
            
        });
        
        
    }

    document.getElementById('search-form').addEventListener('submit', function(e){
        
        e.preventDefault();
        console.log(e);
        renderMovies(movieData);
        
        
    })

    



});