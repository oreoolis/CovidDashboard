import React, { Component } from "react";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import LocationService from './services/LocationService';
import {Link} from 'react-router-dom'

class CovidLocations extends Component{
    constructor(props){
        super(props)

        this.state = {
            locations: []
        }
        this.addLocation = this.addLocation.bind(this);
        this.editLocation = this.editLocation.bind(this);
        this.deleteLocations = this.deleteLocations.bind(this);
    }

    deleteLocations(id){
        LocationService.deleteLocations(id).then(res => {
            this.setState({locations: this.state.locations.filter(locations => locations.id !== id)})
        });
    }

    editLocation(id){
        this.props.history.push(`/add-location/${id}`);
    }

    componentDidMount(){
        LocationService.getLocations().then((res) => {
            this.setState({locations: res.data})
        })
    }

    addLocation(){
        this.props.history.push('/add-location/_add');
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
                     
                    <button className="btn btn-primary" onClick={this.addLocation}> <b>Add Location</b></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Locations</th>
                                    <th> Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.locations.map(
                                        locations => 
                                        <tr key = {locations.id}>
                                             <td> {locations.location} </td>   
                                             <td>{locations.date}</td>
                                             <td>
                                                 <button onClick={ () => this.editLocation(locations.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteLocations(locations.id)} className="btn btn-danger">Delete </button>
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

export default withAuthenticationRequired(CovidLocations);


       
            
    
    
