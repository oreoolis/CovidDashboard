import React, {Component} from 'react';
import CaseService from './services/CaseService';

class CreateCaseAdmin extends Component{

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            covid_imported: '',
            covid_community: '',
            covid_dorm: '',
            covid_deaths: '',
            covid_discharged:'',
            date: ''


        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeImportedHandler = this.changeImportedHandler.bind(this);
        this.changeCommunityHandler = this.changeCommunityHandler.bind(this);
        this.changeDormHandler = this.changeDormHandler.bind(this);
        this.changeDeathHandler = this.changeDeathHandler.bind(this);
        this.changeDischargedHandler = this.changeDischargedHandler.bind(this);
        this.saveOrUpdateCase = this.saveOrUpdateCase.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CaseService.getCaseById(this.state.id).then( (res) =>{
                let corona = res.data;
                this.setState({
                    id: corona.id,
                    covid_imported: corona.covid_imported,
                    covid_community: corona.covid_community,
                    covid_dorm: corona.covid_dorm,
                    covid_deaths: corona.covid_deaths,
                    covid_discharged: corona.covid_discharged,
                    date: corona.date,
                });
            });
        }        
    }

    saveOrUpdateCase = (e) => {
        e.preventDefault();
        let c = {covid_imported: this.state.covid_imported, covid_community: this.state.covid_community, covid_dorm: this.state.covid_dorm, covid_deaths: this.state.covid_deaths,
            covid_discharged: this.state.covid_discharged, date: this.state.date};
        let u = {covid_imported: this.state.covid_imported, covid_community: this.state.covid_community, covid_dorm: this.state.covid_dorm, covid_deaths: this.state.covid_deaths,
            covid_discharged: this.state.covid_discharged, date: this.state.date, id: this.state.id};
        console.log('location => ' + JSON.stringify(c));

        // step 5
        if(this.state.id === '_add'){

            console.log(c);
            CaseService.createCases(c).then(res =>{
                
                this.props.history.push('/covid-cases');
            })
            .catch(error => {
                console.log(error.response)
                console.log("Unable to post.")
            });
        }else{

            console.log(u);
            console.log(this.state.id);
            CaseService.updateCase(this.state.id, u).then( res => {
                this.props.history.push('/covid-cases');
            })
            .catch(error => {
                console.log(error.response)
                console.log("Unable to update.")
            });
        }
    }
    
    changeImportedHandler= (event) => {
        this.setState({covid_imported: event.target.value});
    }

    changeCommunityHandler= (event) => {
        this.setState({covid_community: event.target.value});
    }

    changeDormHandler= (event) => {
        this.setState({covid_dorm: event.target.value});
    }

    changeDeathHandler= (event) => {
        this.setState({covid_deaths: event.target.value});
    }

    changeDischargedHandler= (event) => {
        this.setState({covid_discharged: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }



    cancel(){
        this.props.history.push('/covid-cases');
    }

    getCases(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Cases</h3>
        }else{
            return <h3 className="text-center">Update Cases</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                                {
                                    this.getCases()
                                }
                                <h5 className = "text-center"><b><u>Date in this page must match in the dates page.</u></b></h5>
                                <div className = "card-body">
                                
                                    <form>
                                        <div className = "form-group">
                                            <label> Imported: </label>
                                            <input placeholder="Imported" name="date" className="form-control" 
                                                value={this.state.covid_imported} onChange={this.changeImportedHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>Community:</label>
                                            <input placeholder="Community" name = "date" className="form-control"
                                            value={this.state.covid_community} onChange={this.changeCommunityHandler}></input>
                                        </div>

                                         <div className= "form-group">
                                        <label> Dormitory: </label>
                                         <input placeholder="Dormitory" name="date" className="form-control" 
                                                value={this.state.covid_dorm} onChange={this.changeDormHandler}/>
                                        </div>
                                        <div className= "form-group">
                                        <label> Deaths: </label>
                                        <input placeholder="Deaths" name="date" className="form-control" 
                                                value={this.state.covid_deaths} onChange={this.changeDeathHandler}/>
                                        </div>
                                        <div className= "form-group">
                                        <label> Discharged: </label>
                                        <input placeholder="Discharged" name="date" className="form-control" 
                                            value={this.state.covid_discharged} onChange={this.changeDischargedHandler}/>
                                                
                                        </div>
                                        <div className= "form-group">
                                        <label> Date: </label>
                                        <input placeholder="Date" name="date" className="form-control" 
                                            value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateCase}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }


}

export default CreateCaseAdmin;