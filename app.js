"use strict";

const MY_API_KEY = "0WDk1nj3LdHxgRiwXHtWt1Ts5DTJ5Fh9";

console.log("Hello World!\n==========\n");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchBtnElement = document.querySelector("#submitSearch");
const inputSearchElement = document.querySelector("#searchWord");
const resultImageElement = document.querySelector("#imageContainer > img");
const feedbackParagraphElement = document.querySelector("#feedbackParagrapgh");

console.log(searchBtnElement, inputSearchElement, resultImageElement, feedbackParagraphElement);

// Exercise 2
searchBtnElement.addEventListener("click", ()=>{
    console.log(inputSearchElement.value);
    let searchTerm = inputSearchElement.value;

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${MY_API_KEY}&s=${searchTerm}`)
    .then((resolvedValue) => {
        return resolvedValue.json()
    })
    .then((res) => {
        //console.log(res);
        resultImageElement.src = res.data.images.original.url;
        inputSearchElement.value = "";
    })
    .catch((failState) =>{
        console.log(failState);
        feedbackParagraphElement.textContent = failState.message;
    })
});
