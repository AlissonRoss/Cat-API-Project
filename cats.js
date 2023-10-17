let containerSelector = document.querySelector(".cat-container");
let switchButton = document.querySelector(".switch-button");

async function getCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        let catImg = document.createElement("img"); //create image element to later append to container
        catImg.src = data[0].url; // Set the image source
        containerSelector.innerHTML = ''; // Clear previous image before appending a new one
        containerSelector.append(catImg); // Append the image to the container
    } catch (error) {
        console.log(error);
    }
}
switchButton.addEventListener('click', getCat);
getCat();