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

    let cardElement = document.createElement("div")
    cardElement.id = "card"
    cardElement.className = "card flex column offwhite-bg"
    cardElement.textContent = `
    ${images[0]}
    `
    // document.getElementById("cards-container").appendChild(cardElement)
    
})


