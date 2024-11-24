const blockquote = document.querySelector(".quote-box blockquote");
const autherSpan = document.querySelector(".quote-box span");
const quoteBtn = document.querySelector(".quote");
const twitterBtn = document.querySelector(".twitter");
let currentIndex = 0;

async function getData(){
    let myRequest= await fetch('https://dummyjson.com/quotes');
    let data = await myRequest.json();
    let quotes = data.quotes[currentIndex]
    quoteBtn.addEventListener("click", ()=>{
        currentIndex++
        let quotes = data.quotes[currentIndex]
        quoteExtract(quotes)
        if(currentIndex === 29){
            currentIndex = 0
        };
    });
    twitterBtn.addEventListener("click",()=>{
        tweet()
    })
    quoteExtract(quotes)
};

getData();
function quoteExtract(myQte){
    let myQuote= myQte.quote;
    blockquote.innerHTML = `"${myQuote}"`;
    let theauthor = myQte.author;
    autherSpan.innerHTML = `"${theauthor}"`;
};
function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${blockquote.innerHTML} ---by ${autherSpan.innerHTML} `,
    "Tweet Window","width=600, height=300")
}

