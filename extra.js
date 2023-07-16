function addClick(event) {
    // Get the element that was clicked on.
    let clickedElement = event.target.alt;
    async function getMovieInformation(){
        const movie = await generateMovie(title);
    }
    console.log(clickedElement);

    cardDesign.innerHTML = `
    <div class="position-absolute top-50 start-50 translate-middle" id="formbox">
        <div class="card mb-2" style="max-width: 940px;">
          <a type="button" class="btn btn-primary position-absolute top-0 end-0" href="./index.html">close</a>

            <div class="row g-0">
              <div class="col-md-4">
                <img id="movie-poster" src="./public/imgs/Jack.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title" id="movie-title">${clickedElement}</h5>
                  <p class="card-text" id="movie-plot">a</p>
                  <p class="card-text" id="movie-country"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  <p class="card-text" id="movie-language">London</p>
                  <p class="card-text" id="movie-genre">Drama</p>
                </div>
              </div>
            </div>
          </div>
    </div>
    `
    
}