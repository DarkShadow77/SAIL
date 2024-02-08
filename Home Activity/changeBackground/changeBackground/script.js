let btn = document.getElementById("mainButton");
function changeBg(e) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("nbody").style.backgroundColor = '#' + randomColor;
    var myArray = ["#97009F", "#094DB5", "#00A300", "#DA532C", "#AF1A3F", "#613CBC", "#008AD2"];
    var quoteArray = [
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#97009F", 
        }, 
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#094DB5" 
        }, 
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#00A300" 
        }, 
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#DA532C" 
        }, 
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#AF1A3F" 
        }, 
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#613CBC" 
        }, 
        { 
            quote: "hfienjfefojefiefiunjoi",
            quotor: "gryufrkp",
            image: "jfeijfeokfpkprf",
            color: "#008AD2" 
        },
    ];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    var quote = quoteArray[Math.floor(Math.random() * myArray.length)].quote;
    var color = quoteArray[Math.floor(Math.random() * myArray.length)].color;
    var image = quoteArray[Math.floor(Math.random() * myArray.length)].image;
    var quotor = quoteArray[Math.floor(Math.random() * myArray.length)].quotor;
    document.getElementById("mainButton").style.backgroundColor = rand;
    document.getElementById("quote").style.backgroundColor = quote;
    document.getElementById("color").style.backgroundColor = color;
    document.getElementById("image").style.backgroundColor = image;
    document.getElementById("quotor").style.backgroundColor = quotor;
}
btn.addEventListener("click", changeBg);
window.onload = changeBg();