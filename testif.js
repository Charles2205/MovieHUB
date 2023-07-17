// let api_key ='726fa854';
// let title = 'akdssk'
// async function generateMovieSearch(title) {
//     // Make an HTTP request to the API link.
//     const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${api_key}`);
  
//     // Check if the request was successful.
//     if (response.status === 200) {
//       // Get the JSON response from the API.
//       const json = await response.json();
//         // console.log(response.status);
//         // console.log(response);
//         if(json.Response =='False'){
//             console.log(json);
//         }

//       // Return the JSON response.
//       return json;
//     } else {
//       // Return an error message.
//       return `Error: ${response.status}`;
//     }
//   }
// generateMovieSearch(title)




// from afresh js
x


// function to generate the information selected
// const card1=document.querySelector('.title1');
// // card1.addEventListener('click', getAltText)
// // function getAltText(){
// //     console.log(card1)
// // }

// console.log(card1)

// Getting the alt text from each card
async function getTag() {
  moviesTitle.forEach(async (title) => {
    const movie = await generateMovie(title);
    const moviesContainer = document.querySelector('.moviesContainer');
    const imgElement = document.createElement('img');
    // imgElement.src = movie.Poster;
    // imgElement.alt = movie.Title;
    // imgElement.classList.add('img-fluid', 'rounded-start');

    imgElement.addEventListener('click', () => {
      // Action to perform when the image is clicked
      alert(movie.Poster)
    });

    moviesContainer.appendChild(imgElement);
  });
}

getTag();





// async function cards(){
//     moviesTitle.forEach(async(title)=>{
//     const movie = await generateMovie(title);
//     cardDesign.innerHTML += `
//     <div class="container border ">
//     <div class="row">
//     <div class="col" id="cardDesign">
//     <img src="${movie.Poster}" id="title1" class="img-fluid rounded-start" alt=
//     "<span class = 'green'>Title </span>: ${movie.Title}<br><br>
//     <span class = 'green'>Year </span>: ${movie.Year} <br><br>
//     <span class = 'green'>Plot </span>: ${movie.Plot} <br><br>
//     <span class = 'green'>Country </span>: ${movie.Country} <br><br>
//     <span class = 'green'>Language </span>: ${movie.Language} <br><br>
//     <span class = 'green'>Genre </span>: ${movie.Genre} <br><br>
//     <span class = 'green'>Actors </span>: ${movie.Actors} <br><br>
//     <span class = 'green'>Relased </span>: ${movie.Released} <br><br>
//     <span class = 'green'>Runtime </span>: ${movie.Runtime} <br><br>
//     "   
//     </div>
// </div> 
// `
// });
// }


// cards()
// // Search 
// btnSearch.addEventListener('click',function(){ 
// let Value=search.value

// async function generateMovieSearch(movie){
//      movie=Value
//     const res= await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${api_key}`).then(res=>res.json())
//     if(res.Response =='True'){
//       console.log(res);
//     }else{
//       Snackbar.show({
//         pos: 'top-right',
//            text: 'Movie or TV Show not Found',
//            width: '475px',
//         actionTextColor: 'orange',
//            onActionClick: function(element) {
//                //Set opacity of element to 0 to close Snackbar
//                $(element).css('opacity', 0);
//                alert('Clicked Called!');
            
//            }
//         });
      
//     }
// }
// generateMovieSearch()

// });
// search end


// async function setUser(){
//      let users= await generateRandomUser()
//      card1.setAttribute('src',users.Poster)
// }



// Click Listener to display the movie full details
// card1.addEventListener('click',infoMovie);
// function infoMovie(){
//     cardDesign.innerHTML = `
//     <div class="position-absolute top-50 start-50 translate-middle" id="formbox">
//         <div class="card mb-2" style="max-width: 940px;">
//           <a type="button" class="btn btn-primary position-absolute top-0 end-0" href="./index.html">close</a>

//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img id="movie-poster" src="./public/imgs/Jack.jpg" class="img-fluid rounded-start" alt="...">
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//      condition             <h5 class="card-title" id="movie-title">Card title</h5>
//                   <p class="card-text" id="movie-plot">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <p class="card-text" id="movie-country"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
//                   <p class="card-text" id="movie-language">London</p>
//                   <p class="card-text" id="movie-genre">Drama</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//     `    
// }


// cardDesign.addEventListener('click',addClick);
// // Full details about the movie
// function addClick(event) {
//     // Get the element that was clicked on.
//     let clickedElement = event.target.alt;
//     let clickedImg =event.target.src


//     cardDesign.innerHTML = `
//     <div class="position-absolute top-50 start-50 translate-middle" id="formbox">
//         <div class="card mb-2" style="max-width: 940px;">
//           <a type="button" class="btn btn-primary position-absolute top-0 end-0" href="">close</a>

//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img id="movie-poster" src="${clickedImg}" class="img-fluid rounded-start" alt="...">
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                 <h5 class="card-title" id="movie-title">${clickedElement}</h5>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//     `
// }


