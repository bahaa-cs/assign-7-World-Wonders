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
let name = null
let summary = null
let time_period = null

fetchData().then( (data) =>{
    let arrayElement = data[0]
    build_year = arrayElement.build_year
    console.log(build_year)
})


