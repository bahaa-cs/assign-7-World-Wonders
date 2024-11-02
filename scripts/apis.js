const instance = axios.create({baseURL: "https://www.world-wonders-api.org/v0/wonders"})

const fetchData = async () =>{
    const response = await instance.get()
    const data = response.data
    return data
} 

let build_year = null
let categories = []
let britannica = null
let google_maps = null
let images = []
let trip_advisor = null
let wiki = null
let location_text = null
let name_text = null
let summary = null
let time_period = null

let arrayElement = []

const cardContainer = document.getElementById("cards-container")


fetchData().then( (data) =>{
    arrayElement = data[0]
    console.log(arrayElement)
    build_year = arrayElement.build_year
    categories = arrayElement.categories
    britannica = arrayElement.links.britannica
    google_maps = arrayElement.links.google_maps
    images = arrayElement.links.images
    trip_advisor = arrayElement.links.trip_advisor
    wiki = arrayElement.links.wiki
    location_text = arrayElement.location
    name_text = arrayElement.name
    summary = arrayElement.summary
    time_period = arrayElement.time_period


    cardContainer.innerHTML+=
    `
        <div class="card flex column offwhite-bg">
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
    `


    
})


