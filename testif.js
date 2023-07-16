let api_key ='726fa854';
let title = 'akdssk'
async function generateMovieSearch(title) {
    // Make an HTTP request to the API link.
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${api_key}`);
  
    // Check if the request was successful.
    if (response.status === 200) {
      // Get the JSON response from the API.
      const json = await response.json();
        // console.log(response.status);
        // console.log(response);
        if(json.Response =='False'){
            console.log(json);
        }

      // Return the JSON response.
      return json;
    } else {
      // Return an error message.
      return `Error: ${response.status}`;
    }
  }
generateMovieSearch(title)