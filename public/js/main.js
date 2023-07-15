
// let btnSearch = document.querySelector('#btnSearch')
// btnSearch.addEventListener('click', function(){
//     Snackbar.show({
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
// })
const card1=document.querySelector('#title1');
let cardDesign=document.querySelector('#body')
// card1.addEventListener('click',cards);
let api_key ='726fa854';
moviesTitle = ['ALien','Mission Impossible','Merlin']
async function generateRandomUser(title){
    return await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${api_key}`).then(res=>res.json())
}

// async function cards(){
//     moviesTitle.forEach(async(title)=>{
//     const movie = await generateRandomUser(title);
//     cardDesign.innerHTML += `
//     <div class="container border ">
//     <div class="row">
//     <div class="col" id="cardDesign">
//     <img src="${movie.Poster}" id="title1" class="img-fluid rounded-start" alt="...">    
//     </div>
// </div>
//             `   
    
// });
// }


// cards()


// async function setUser(){
//      let users= await generateRandomUser()
//      card1.setAttribute('src',users.Poster)
// }
card1.addEventListener('click',infoMovie);
function infoMovie(){
    cardDesign.innerHTML = `
    <div id="stack">
      <h2 id="build-txt">Ready To Build Your Community?</h2>
        <a href="" id="start-btn">Get Started For Free</a>
    </div>
    `
    
    
    
}