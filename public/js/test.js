let col = document.querySelector('.col');
let api_key ='726fa854';
moviesTitle = ['ALien','Mission Impossible','Merlin','Cars',]
async function generateRandomUser(title){
    return await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${api_key}`).then(res=>res.json())
}

async function cards(){
    moviesTitle.forEach(async(title)=>{
    const movie = await generateRandomUser(title);
    col.innerHTML += `
    <div class="row">
    <div class="col">
        <h1>hello</h1>
    </div>
 </div> 
`
    })}

cards()
