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

      let images_html = ''
      images.forEach(img => {
        images_html+=`<img src='${img}' alt=''>`
      });

      trip_advisor = arrayElement.links.trip_advisor;
      wiki = arrayElement.links.wiki;
      location_text = arrayElement.location;
      name_text = arrayElement.name;
      summary = arrayElement.summary;
      time_period = arrayElement.time_period;
      cardContainer.innerHTML += ` 
        <div class="images-details">${images_html}</div>
        <div class="name-txt-details">Name:<br>${name_text}</div>
        <div class="location-txt-details">Location:<br>${location_text}</div>
        <div class="summary-details">Summary:<br>${summary}</div>
        <div class="wiki-details"><a href="${wiki}" target="_blank">Wiki</a></div>
        <div class="google-maps-details"><br><a href="${google_maps}" target="_blank">Google Maps</a></div>
        <div class="trip-advisor-details"><a href="${trip_advisor}" target="_blank">Trip Advisor</a></div>
        <div class="britinicca-details"><a href="${britannica}" target="_blank">Britannica</a></div>
        <div class="categories-details">Categories: <br>${categories}</div>
        <div class="build-year-details">Build year:<br>${build_year}</div>
        <div class="time-period">Time period:<br>${time_period}</div>

          `;
      
    });