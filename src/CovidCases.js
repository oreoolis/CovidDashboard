import React, { Component } from "react";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import CaseService from './services/CaseService';
import {Link} from 'react-router-dom'


class CovidCases extends Component{
    constructor(props){
        super(props)

        this.state = {
            cases: []
        }
        this.addCase = this.addCase.bind(this);
        this.editCase = this.editCase.bind(this);
        this.deleteCase = this.deleteCase.bind(this);
    }

    deleteCase(id){
        CaseService.deleteCase(id).then(res => {
            this.setState({cases: this.state.cases.filter(cases => cases.id !== id)})
        });
    }

    editCase(id){
        this.props.history.push(`/add-Case/${id}`);
    }

    componentDidMount(){
        CaseService.getCases().then((res) => {
            this.setState({cases: res.data})
        })
    }

    addCase(){
        this.props.history.push('/add-case/_add');
    }

    covidCases(){
        this.props.history.push('/covid-cases');
    }

    covidLocations(){
        this.props.history.push('/covid-locations');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Edit COVID-19 Data</h2>
                 <br></br>
                 <div className ="text-center">
                    <button className="btn btn-light" ><Link to ="/admin"><b>Covid Dates</b></Link></button>
                    <button className="btn btn-light" ><Link to ="/covid-cases"><b>Covid Cases</b></Link></button>
                    <button className="btn btn-light" ><Link to ="/covid-locations"><b>Covid Locations</b></Link></button>
                 </div>

                 <br></br>
                 <div className = "row">
                     
                    <button className="btn btn-primary" onClick={this.addCase}> <b>Add Case</b></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Imported Cases</th>
                                    <th> Community Cases</th>
                                    <th> Dormitory Cases</th>
                                    <th> Deaths</th>
                                    <th> Discharged</th>
                                    <th> Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cases.map(
                                        cases => 
                                        <tr key = {cases.id}>
                                             <td> {cases.covid_imported} </td>
                                             <td> {cases.covid_community} </td>   
                                             <td> {cases.covid_dorm} </td>   
                                             <td> {cases.covid_deaths} </td>   
                                             <td> {cases.covid_discharged} </td>   
                                             <td> {cases.date} </td>      
                                             <td>
                                                 <button onClick={ () => this.editCase(cases.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCase(cases.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }

}

export default withAuthenticationRequired(CovidCases);


       
            
    
    
