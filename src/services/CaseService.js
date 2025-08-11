import axios from 'axios';

const api = "https://localhost:44329/gateway/covidcases";

class CaseService{

    getCases(){
        return axios.get(api);
    }

    createCases(covid_imported, covid_community, covid_dorm, covid_deaths, covid_discharged, date){
        return axios.post(api, covid_imported, covid_community, covid_dorm, covid_deaths, covid_discharged, date);
    }

    getCaseById(id){
        return axios.get(api + "/" + id)
    }

    updateCase(id, covid_imported, covid_community, covid_dorm, covid_deaths, covid_discharged, date){
        return axios.put(api + '/' + id, covid_imported, covid_community, covid_dorm, covid_deaths, covid_discharged, date);
    }

    deleteCase(id){
        return axios.delete(api +'/' + id)
    }
}

export default new CaseService();