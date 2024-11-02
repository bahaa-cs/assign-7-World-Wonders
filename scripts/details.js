const urlParams = new URLSearchParams(window.location.search)
const ID = urlParams.get('id')
console.log(ID)

const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0/wonders",
  });
  
const fetchData = async () => {
    const response = await instance.get();
    const data = response.data;
    return data;
};

let build_year = null;
let categories = [];
let britannica = null;
let google_maps = null;
let images = [];
let trip_advisor = null;
let wiki = null;
let location_text = null;
let name_text = null;
let summary = null;
let time_period = null;

let arrayElement = [];

const cardContainer = document.getElementById("card-container-details");

fetchData().then((data) => {
    
      arrayElement = data[ID];
      build_year = arrayElement.build_year;
      categories = arrayElement.categories;
      britannica = arrayElement.links.britannica;
      google_maps = arrayElement.links.google_maps;
      images = arrayElement.links.images;
      trip_advisor = arrayElement.links.trip_advisor;
      wiki = arrayElement.links.wiki;
      location_text = arrayElement.location;
      name_text = arrayElement.name;
      summary = arrayElement.summary;
      time_period = arrayElement.time_period;
      cardContainer.innerHTML += ` 
        <div class="images-details"><b>Images:</b><br>${images}</div>
        <div class="location-txt-details"><b>Location:<b/><br>${location_text} </div>
        <div class="name-txt-details"><b>${name_text}</b></div>
        <div class="summary-details"><b>Summary:</b><br>${summary}</div>
        <div class="wiki-details"><b>Wiki</b>:<br>${wiki}</div>
        <div class="google-maps-details"><b>Google maps:</b><br>${google_maps}</div>
        <div class="trip-advisor-details"><b>Trip Advisor:</b><br>${trip_advisor}</div>
        <div class="britinicca-details"><b>Britinicca:</b><br>${britannica}</div>
        <div class="categories-details"><b>Categories:</b><br>${categories}</div>
        <div class="build-year-details"><b>Build year:</b><br>:${build_year}<br></div>
        <div class="time-period"><b>Time period:</b><br>${time_period}</div>

          `;
      
    });