
let hero = document.querySelector(".hero");
let loader = document.querySelector(".loader");

hero.style.display = "none"

async function quote() {
  let url = `https://api.seriesquotes.10cyrilc.me/quote/`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json();
  console.log(data);
  return data;
}

let btn = document.querySelector("button");

async function changeBg() {
    let countdown = 3;
    const quoteData = await quote();

    if (quoteData[0] != undefined) {
      setInterval(function () {

        countdown -= 1
        if (countdown <= 0) {
          clearInterval()

          loader.style.display = "none"
          hero.style.display = "flex"
        }
      }, 1000)
    }

    document.getElementById("quote").textContent = quoteData[0].quote;
    document.getElementById("quoter").textContent = `- ${quoteData[0].author}`;
}
let imgBtn =  document.getElementById("reload")
btn.addEventListener("click", () => {
  imgBtn.classList.add("reload")
  // document.getElementById("reload").style.animation = ""
  // document.getElementById("reload").style.animation = "rotate 1s ease-in-out";
});

btn.addEventListener("click", changeBg);

window.onload = changeBg();