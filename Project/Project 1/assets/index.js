async function quote() {
    let url = `https://api.seriesquotes.10cyrilc.me/quote/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
}

let btn = document.querySelector("button");

async function changeBg() {
    
    const quoteData = await quote();

    console.log(`Sheee ${quoteData[0].quote}`);
  
    document.getElementById("quote").textContent = quoteData[0].quote;
    document.getElementById("quoter").textContent = `- ${quoteData[0].author}`;
}
btn.addEventListener("click", changeBg);
window.onload = changeBg();