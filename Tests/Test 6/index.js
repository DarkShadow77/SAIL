let lat = "6.5227"
let lon = "6.5227"
let apiKey = "d9b6a94d56c7b814c701a77d979b734c"

    let card = document.querySelector(".container")
const countries = async () => {
    try {
        let country = await fetch("https://restcountries.com/v2/all")
        console.log(country)
        return await country.json()
    } catch (error) {
        console.log(`rfefe ${error}`)
    }
};
countries();

const renderCOuntries = async () => {
    let country = await countries()
    let aCountry = ""
    

    country.slice(0,5).forEach(cty => {
        let ctyHtml = `
            <div class="card">
                <h3 class="name">${cty.name}</h3>
                <img src="${cty.flags.png}" >
                <span class="currency">${cty.currencies[0].name}</span>
            </div>
        `;
        
        aCountry += ctyHtml;
    })

     card.innerHTML = aCountry;
}
renderCOuntries()