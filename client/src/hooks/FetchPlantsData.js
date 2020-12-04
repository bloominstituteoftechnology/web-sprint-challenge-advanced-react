import axios from 'axios';

const fetchPlantData = () => {
        return axios.get(`http://localhost:3333/plants`)
            .then((res) => {
                // console.log(res.data.plantsData)
                return (res.data.plantsData);
            })
            .catch((err) => {
                console.log(err);
            })
}

export default fetchPlantData;