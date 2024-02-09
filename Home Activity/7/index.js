// let lat = 37.25432;
// let lon = -6.95083;
// let apikey = "0988e3b01454fbff0b7d20992fdb75dd";
// // let url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
// // let url2 = "https://restcountries.com/v3.1/all";
// let url2 = "http://localhost:8002/about-language";
let demo = document.getElementById("demo");

// async function displaylon() {
//   // const response = await fetch(url);
//   const response2 = await fetch(url2);
//   // const data = await response.json();
//   const data2 = await response2.json();
//   // console.log(data);
//   return data2;
// }
// // displaylon();

// async function renderCountries() {
//   const countries = await displaylon();
//   countries.forEach((country) => {
//     const countryDiv = document.createElement("div");
//     countryDiv.classList.add("card");
//     countryDiv.innerHTML = `
//     <h3><a href="${country.index.about}" target="_blank" rel="noopener noreferrer" class="language-link">${country.index.language}</a></h3>`;
//     demo.appendChild(countryDiv);
//   });
// }
// renderCountries();

// const wordsArray = [
//   "age",
//   "alone",
//   "amazing",
//   "anger",
//   "architecture",
//   "art",
//   "attitude",
//   "beauty",
//   "best",
//   "birthday",
//   "business",
//   "car",
//   "change",
//   "communication",
//   "computers",
//   "cool",
//   "courage",
//   "dad",
//   "dating",
//   "death",
//   "design",
//   "dreams",
//   "education",
//   "environmental",
//   "equality",
//   "experience",
//   "failure",
//   "faith",
//   "family",
//   "famous",
//   "fear",
//   "fitness",
//   "food",
//   "forgiveness",
//   "freedom",
//   "friendship",
//   "funny",
//   "future",
//   "god",
//   "good",
//   "government",
//   "graduation",
//   "great",
//   "happiness",
//   "health",
//   "history",
//   "home",
//   "hope",
//   "humor",
//   "imagination",
//   "inspirational",
//   "intelligence",
//   "jealousy",
//   "knowledge",
//   "leadership",
//   "learning",
//   "legal",
//   "life",
//   "love",
//   "marriage",
//   "medical",
//   "men",
//   "mom",
//   "money",
//   "morning",
//   "movies",
//   "success",
// ];

async function quote() {
  // const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  let url = `https://api.api-ninjas.com/v1/quotes`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "VT6Z7rKdInt3F8kOrNmuKA==dhTFCZac9OjS5d8Z",
    },
  });
  const data = await response.json();
  return data;
}

async function displayQuote() {
  let max_card = 3;
  for (let i = 0; i < max_card; i++) {
    const quoteData = await quote(); // Assuming quote() is an asynchronous function that fetches quotes
    if (quoteData && quoteData.length > 0) { // Check if quotes array exists and is not empty
      const quote = quoteData[0]; // Get the first quote from the array
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("card");
      countryDiv.innerHTML = `
        <h3 class="author">${quote.author}</h3>
        <h3 class="quote">${quote.quote}</h3>`;
      demo.appendChild(countryDiv); // Append each card to the demo element
    }
  }
}

displayQuote();

