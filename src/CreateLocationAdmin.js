import React, {Component} from 'react';
import LocationService from './services/LocationService';

class CreateLocationAdmin extends Component{

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            location: '',
            date: '',

        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveOrUpdateLocation = this.saveOrUpdateLocation.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            LocationService.getLocationsById(this.state.id).then( (res) =>{
                let locations = res.data;
                this.setState({
                    id: locations.id,
                    location: locations.location,
                    date: locations.date,
                });
            });
        }        
    }

    saveOrUpdateLocation = (e) => {
        e.preventDefault();
        let location = {location: this.state.location, date: this.state.date};
        let updatelocation = {location: this.state.location, date: this.state.date, id: this.state.id}
        console.log('location => ' + JSON.stringify(location));

        // step 5
        if(this.state.id === '_add'){

            console.log(location);
            LocationService.createLocations(location).then(res =>{
                
                this.props.history.push('/covid-locations');
            });

        }else{

            console.log(updatelocation);
            console.log(this.state.id);
            LocationService.updateLocations(this.state.id, updatelocation).then( res => {
                this.props.history.push('/covid-locations');
            });
        }
    }
    
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    
    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }


    cancel(){
        this.props.history.push('/covid-locations');
    }

    getLocation(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Location</h3>
        }else{
            return <h3 className="text-center">Update Location</h3>
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
                                    this.getLocation()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateLocation}>Save</button>
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

export default CreateLocationAdmin;