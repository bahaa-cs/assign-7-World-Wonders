const instance = axios.create({baseURL: "https://www.world-wonders-api.org/v0/wonders"});

const fetchData = async () =>{
    const response = await instance.get();
    const data = response.data
    console.log(data[0]);
} 

fetchData();

