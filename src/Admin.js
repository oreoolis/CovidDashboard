import React, { Component } from "react";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import DateService from './services/DateService';
import {Link} from 'react-router-dom'



class Admin extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            dates: []
        }
        this.addDate = this.addDate.bind(this);
        this.editDate = this.editDate.bind(this);
        this.deleteDate = this.deleteDate.bind(this);

        
    }

    deleteDate(id){
        DateService.deleteDate(id).then(res => {
            this.setState({dates: this.state.dates.filter(date => date.id !== id)})
        });
    }

    editDate(id){
        this.props.history.push(`/add-date/${id}`);
    }

    componentDidMount(){
        DateService.getDates().then((res) => {
            this.setState({dates: res.data})
        })
    }

    addDate(){
        this.props.history.push('/add-date/_add');
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
                     
                    <button className="btn btn-primary" onClick={this.addDate}> <b>Add Date</b></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Dates</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.dates.map(
                                        date => 
                                        <tr key = {date.id}>
                                             <td> {date.date} </td>   
                                             <td>
                                                 <button onClick={ () => this.editDate(date.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDate(date.id)} className="btn btn-danger">Delete </button>
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

export default withAuthenticationRequired(Admin);


       
            
    
    
