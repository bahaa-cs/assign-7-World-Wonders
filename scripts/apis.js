const instance = axios.create({baseURL: "https://www.world-wonders-api.org/v0/wonders"});

const fetchData = async () =>{
    const response = await instance.get();
    const data = response.data
    return data;
} 

const getData = fetchData().then( (data) =>{
    const firstElement = data[0]
    console.log(firstElement.name)
})


