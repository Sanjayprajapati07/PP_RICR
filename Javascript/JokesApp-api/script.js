// const URL = "https://api.chucknorris.io/jokes/random";

// async function getjokes() {
//     const response = await fetch(URL);
//     const data = await response.json(); // Changed 'Data' to 'data'

//     document.getElementById("icon").src = data.icon_url; // Corrected case
//     document.getElementById("joke").innerHTML = data.value; // Corrected case
// }


const URL = "https://api.chucknorris.io/jokes/random";

async function getJokes() {
        document.getElementById("joke").innerHTML = "Fetching a new joke... 🤔";
        
        const response = await fetch(URL);
        const data = await response.json();
        
        document.getElementById("icon").src = data.icon_url;
        document.getElementById("joke").innerHTML = data.value;  
}



