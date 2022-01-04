$('.btn-search').on('click', function () {
  

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=1ba6711e&s=' + $('.input-keyword').val(),
    success : result =>{
      const movies = result.Search;
      let cards ='';
      movies.forEach(m => {
        cards += showCard(m);
      });
      $('.movie-container').html(cards);
  
      // while button clicked
      $('.modal-detail-button').on('click', function () {
        $.ajax({
          url:'http://www.omdbapi.com/?apikey=1ba6711e&i=' + $(this).data('imdbid'),
          success : m => {
          const movieDetail = showDetail(m)
           $('.modal-body').html(movieDetail);
          },
          error: (e)=>{
            console.log(e.responseText);
          }
        })
      })
    },
    error: (e)=>{
      console.log(e.responseText);
    }
  });
})





function showCard(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Details</a>
              </div>
            </div>
          </div>`
}

function showDetail(m) {
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" class="img-fluid">
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${m.Title}</h4></li>
        <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
        <li class="list-group-item"><strong>Actor :</strong>${m.Actors}</li>
        <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
        <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
      </ul>
    </div>
  </div>
</div>`;
}






// $.ajax({
//   url: 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021',
//   success : result =>{
//     const movies = result.data.standings;
//     let cards ='';
//     movies.forEach(m => {
//       cards += `<div class="col-md-4 my-3">
//                   <div class="card">
//                     <img src="${m.team.logos}" class="card-img-top">
//                     <div class="card-body">
//                       <h5 class="card-title">${m.team.name}</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">${m.note}</h6>
//                       <a href="#" class="btn btn-primary">Details</a>
//                     </div>
//                   </div>
//                 </div>`;
//     });
//     $('.movie-container').html(cards);
//     console.log(movies);
//   },
//   error: (e)=>{
//     console.log(e.responseText);
//   }
// });