import axios from 'axios';

const api = "https://localhost:44348/gateway/coviddates";

class DateService{

    getDates(){
        return axios.get(api);
    }

    createDate(date){
        return axios.post(api, date);
    }

    getDateById(id){
        return axios.get(api + "/" + id)
    }

    updateDate(id, date){
        return axios.put(api + "/" + id, date);
    }

    deleteDate(id){
        return axios.delete(api +'/' + id)
    }
}

export default new DateService();