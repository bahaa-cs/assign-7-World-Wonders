const instance = axios.create({
  baseURL: "https://www.world-wonders-api.org/v0/wonders",
});

const fetchData = async () => {
  const response = await instance.get();
  const data = response.data;
  return data;
};

let images = [];
let location_text = null;
let name_text = null;
let summary = null;

let arrayElement = [];

const cardContainer = document.getElementById("cards-container");

let cardElement = null
let cardID = null

fetchData().then((data) => {
  data.forEach((element, index) => {
    arrayElement = element;
    images = arrayElement.links.images;
    location_text = arrayElement.location;
    name_text = arrayElement.name;
    summary = arrayElement.summary;
    cardContainer.innerHTML += ` 
            <div class="card flex column offwhite-bg" cardID="${index}">
                <img class="card-image" src="${images[0]}" alt="">
                <div class="card-txt flex column">
                    <p class="location-txt black-txt">${location_text}</p>
                    <h2 class="name-txt black-txt">${name_text}</h2>
                    <p class="summary black-txt">${summary}</p> 
                </div> 
                <div class="view-details secondary-bg flex row center">
                    <img class="view-details-icon" src="./assets/images/view-details.png" alt=""> 
                    <p class="view-details-txt">View Details</p>
                </div> 
            </div> 
        `;
    
  });

    const cardElements = document.querySelectorAll(".card")
    cardElements.forEach((card) => {
        const cardID = card.getAttribute("cardID")
        card.querySelector(".view-details").addEventListener("click", () => {
        window.location.href = `cardDetails.html?id=${cardID}`
        });
    });

});





