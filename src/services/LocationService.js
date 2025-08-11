import axios from 'axios';

const api = "https://localhost:44328/gateway/covidlocations";

class LocationsService{

    getLocations(){
        return axios.get(api);
    }

    createLocations(locations, date){
        return axios.post(api, locations, date);
    }

    getLocationsById(id){
        return axios.get(api + "/" + id)
    }

    updateLocations(id, locations, date){
        return axios.put(api + '/' + id, locations, date);
    }

    deleteLocations(id){
        return axios.delete(api +'/' + id)
    }
}

export default new LocationsService();